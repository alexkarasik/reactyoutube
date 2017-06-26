import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyAT4oXalnapl5GFdbdrqYRaDe5zOsDiLD4';

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector('.container'));
