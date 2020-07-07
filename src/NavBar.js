import React from 'react';
import memes from './memeifylogo.png'


const NavBar = (props) =>  {
    return (
        <div> 
            
            <div className="meme-header">
            
                <img src={memes} width="200" alt="toy-header" />           
            </div>

            <div >
             
             <div id="outer">
                 {/* Search for meme */}
                <input
                    type="text" name="search" placeholder="search for memes" size="100"
                    className="search-input-text"                    
                    onChange={(e) => props.changeSearchTerm(e.target.value)} />
                    <div class="inner"><button type="submit" className="msgBtn" onClick={props.handleSearch} >Find Meme</button></div>

                {/* Add new meme */}
                
                <div class="inner"><p style={{color: "red"}}> Have a favorite meme? </p><button type="submit" class="" onClick={props.displayToyForm}>Add New Meme</button></div>

                {/* Sort Meme Name */}
                <div class="inner"><button class="msgBtnBack" onClick={props.sortByName} value={null} >Sort By Name</button></div>

                {/* Sort Sub-reddit */}
                <div class="inner"><button class="msgBtnBack" onClick={props.randomSubreddit} value={null} >Sort By Random Subreddit</button></div>
             </div>
                     
            </div>
        
        </div>
        
    );
}
 
export default NavBar;