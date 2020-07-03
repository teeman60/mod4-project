import React from 'react';
import Meme from './Meme';

const MemeList = (props) => {
    return ( 
        <div>
            Meme List
           {props.memes.map((meme, i) =><Meme key={i} meme={meme} addToCollection={props.addToCollection}/>)} 
        </div>
    );
}
 
export default MemeList;