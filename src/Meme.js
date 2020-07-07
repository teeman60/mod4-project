import React, { Component } from 'react';

class Meme extends Component {
    // state = {  }
    render() { 
        return ( 

            <div className="card"onClick={() => this.props.addToCollection(this.props.meme)}>
                <h5>{this.props.meme.name}</h5>
                <img src={this.props.meme.url} alt="" height="200" width="200" class="meme-avatar"/>
            </div>
         );
    }
}
 
export default Meme;