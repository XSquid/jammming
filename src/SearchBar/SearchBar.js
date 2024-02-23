import React, {useState, useCallback} from "react";
import './SearchBar.css'

function SearchBar(props){

    const [searchTerm, setSearchTerm] = useState('');

    const changeHandler = useCallback((event) => {
        setSearchTerm(event.target.value);
      }, []);


      function search(event) {
        event.preventDefault();
        props.onSearch(searchTerm);
      }


    return (
        <div className='searchbar'>
            <form onSubmit={props.submitHandler}>
            <input type='text' value={searchTerm} placeholder='Search Songs' onChange={changeHandler} className='searchInput' /><br /><br />
            <button type='submit' className='searchBtn' onClick={search} >Search</button>
            </form>
        </div>
    )
}

export default SearchBar;