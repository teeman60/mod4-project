import React from 'react';

const NavBar = (props) =>  {
    return ( 
        <div>
            <div className="App-header"> 
                <input
                    type="text" 
                    name="search" 
                    placeholder="search for memes" 
                    onChange={(e) => {props.changeSearchTerm(e.target.value)}}
                />
                <button type="submit" onClick={props.handleSearch}>Find Meme</button> 
                
                <button onClick={props.sortByTitle} value={null}>Sort By Name</button>
            </div>
        </div>
    );
}
 
export default NavBar;