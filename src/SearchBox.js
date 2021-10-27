import React from 'react';

export const SearchBox = ({searchField, searchChange}) => {
    return (
        <div>
          <input 
          className = 'pa3 ba b--gray bg-lightest-blue'
          type = 'search' 
          placeholder = 'search robots' 
          onChange = {searchChange}
          />
          
        </div>
       
    )
}
