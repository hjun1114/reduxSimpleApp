import React, { Component } from 'react';
import CharacterList from '../containers/character-list';
import CharacterDetail from '../containers/character-detail';

class App extends Component {
  render() {
    return (
      <div>
        <CharacterList />
        <CharacterDetail />
      </div>
    );
  }
}

export default App;
