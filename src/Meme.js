import React, { Component } from 'react';

class Meme extends Component {
    // state = {  }
    render() { 
        return ( 

            <div onClick={() => this.props.addToCollection(this.props.meme)}>
                <h3>{this.props.meme.title}</h3>
                <img src={this.props.meme.url} alt="" height="300" width="300"/>
            </div>
         );
    }
}
 
export default Meme;