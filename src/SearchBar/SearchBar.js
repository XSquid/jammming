import React, {useState} from "react";
import './SearchBar.css'

function SearchBar(props){

    const [searchTerm, setSearchTerm] = useState('');

    const changeHandler = (e) => {
        setSearchTerm(e.target.value)
    }

    return (
        <div className='searchbar'>
            <form onSubmit={props.submitHandler}>
            <input type='text' value={searchTerm} placeholder='Search Songs' onChange={changeHandler} /><br /><br />
            <button type='submit'>Search</button>
            </form>
            <p>{searchTerm}</p>
        </div>
    )
}

export default SearchBar;