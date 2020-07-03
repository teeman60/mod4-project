import React from 'react';

const NavBar = (props) =>  {
    return ( 
        <div>
            <div class="App-header"> 
                <input
                    type="text" 
                    name="search" 
                    placeholder="search" 
                    onChange={(e) => {props.changeSearchTerm(e.target.value)}}
                />
                <i className="circular search link icon"></i> 
                
                <button onClick={props.sortByTitle} value={null}>Sort By Name</button>
            </div>
        </div>
    );
}
 
export default NavBar;