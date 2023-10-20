import React from 'react';

function SearchField() {
  return (
    <div className='searchField'>
        <img src='./icon_search.png' alt='search icon' />
        <input type='text' placeholder='Search' aria-label='search for articles'></input>
    </div>
  );
}

export default SearchField;