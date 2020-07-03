import React, { Component } from 'react';

class Meme extends Component {
    // state = {  }
    render() { 
        return ( 

            <div>
                <h1>{this.props.meme.title}</h1>
                <img src={this.props.meme.url} alt="" height="300" width="300"/>
            </div>
         );
    }
}
 
export default Meme;