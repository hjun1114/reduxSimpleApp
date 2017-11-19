import React from 'react';
import { connect } from 'react-redux';
import { selectCharacter } from '../actions/index';
import { bindActionCreators } from 'redux'; //importing this bindActionCreator function.

class CharacterList extends React.Component {

  renderList(){
    const mappedList = this.props.characters.map((character)=> {
      // this.props.characters is from mapStateToProps characters which is from state.characters comming from combineReducers
      return(
        <li
          key={character.title}
          className="list-group-item"
          onClick={()=>this.props.selectCharacter(character)}
          >
          {character.title}
        </li>
      );
    });
    return mappedList;
  }

  render () {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps (state) {
  // whatever is returned here will show up as props inside of the container.
  // once this function returns an object, we can use it as this.props
  return {characters: state.characters};

  // this function is a glue between the redux and react.
}

function mapDispatchToProps (dispatch) {
  // similarly in mapStateToProps to function, mapDispatchToProps will also
  // return something and can be used as props inside of the container.
  return bindActionCreators ({selectCharacter: selectCharacter}, dispatch);
  // bindActionCreator function gets the function from an action and store it in the key: selectCharacter
  // whenever selectCharacter is called, the result is passed to all of our reducers.
}

export default connect(mapStateToProps, mapDispatchToProps)(CharacterList); // connect the two

// container is a "smart" component that has direct access to redux state.
// so choosing which component to be container is totally up to you. => need to know structure of the app
// React and Redux are two separate libraries that can only be connected through thrid party library called react-redux.
