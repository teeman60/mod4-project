import React, { Component } from 'react';

class NewMemeForm extends Component {
    constructor(){
        super()
        this.state = {
            nsfw: false,
            postLink: "",
            spoiler: false,
            subreddit: "",
            title: "",
            url: ""
        }
    }

    handleTitle = event => {
        this.setState({
            title: event.target.value
        })
    }

    render() { 
        return ( 

            <div>
                <h3>New Meme Form</h3>
            
                <form>        
                <input type='text' placeholder='Meme Name'/>
                <input type='text' placeholder='Meme URL'/>  

                <input type='submit' value='Add Meme'/>
                </form>
            </div>
         );
    }
}
 
export default NewMemeForm;