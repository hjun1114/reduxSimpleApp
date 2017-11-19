import React from 'react';
import {connect} from 'react-redux';

class CharacterDetail extends React.Component {
  render(){

    if(!this.props.character){
      return (
        <div>Choose a character</div>
      )
    }
    return (
      <div className="text-center">
        <div><h3>{this.props.character.title}</h3></div>
        <div><img src={this.props.character.image} height="500" width="500"/></div>
        <div><h2>{this.props.character.quote}</h2></div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    character: state.activeCharacter
  }
}
export default connect(mapStateToProps)(CharacterDetail);
