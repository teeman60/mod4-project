import React from 'react';
import Meme from './Meme';


const MemeList = (props) => {
    return ( 
        <div class="split left"> 

            <h2 style={{color: "black", textAlign: 'center'}}>Memes in Database</h2>                     
            
           {props.memes.map((meme, i) =><Meme key={i} meme={meme} addToCollection={props.addToCollection} deleteMeme={props.deleteMeme}/>)} 
            
        </div>

    );
}
 
export default MemeList;