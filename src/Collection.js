import React, { Component } from 'react';
import Meme from './Meme'

class Collection extends Component {
    // state = {  }
    render() { 
        return ( 

            <div>
                User Meme Collection
                {this.props.collections.map((collection, i) => <Meme key={i} meme={collection} />)}
            </div>
         );
    }
}
 
export default Collection;