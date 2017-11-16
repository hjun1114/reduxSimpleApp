import React from 'react';
import { connect } from 'react-redux';

class CharacterList extends React.Component {

  renderList(){
    const mappedList = this.props.characters.map((character)=> {
      return(
        <li key={character.title} className="list-group-item">{character.title}</li>
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
  //whatever is returned here will show up as props inside of the component.
  return {characters: state.characters};

  // this function is a glue between the redux and react.
  // once this function returns an object, we can use it as this.props
}

export default connect(mapStateToProps)(CharacterList); // connect the two

// container is a "smart" component that has direct access to redux state.
// so choosing which component to be container is totally up to you. => need to know structure of the app
// React and Redux are two separate libraries that can only be connected through thrid party library called react-redux.
