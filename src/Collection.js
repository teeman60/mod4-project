import React, { Component } from 'react';
import Meme from './Meme'
import Login from './Login'

class Collection extends Component {
    // state = {  }
    render() { 
        return ( 

            <div class="split right">
                
                {<h2 style={{color: "black", textAlign: 'center'}}>User's Meme Collection</h2>}
                
                {this.props.collections.map((collection, i) => <Meme key={i} meme={collection} onClick={this.props.deleteMeme()}/>)}
                <Login/>
            </div>
         );
    }
}
 
export default Collection;