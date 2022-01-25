import React from 'react';

const SearchField = () => {

  return(
   <div>
<div className="boxx">
  <input type="checkbox" id='check'/>
  <div className="search-box">
    <input type="text"  placeholder='Text Here...'/>
    <label htmlFor="check" className='iconn'>
      <i className='fas fa-search'></i>
    </label>
  </div>
</div>

  </div>
  )
};

export default SearchField;

