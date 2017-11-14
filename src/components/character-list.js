import React from 'react';

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

export default CharacterList;
