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

    handleSubreddit = event => {
        this.setState({
            subreddit: event.target.value
        })
    }

    handleURL = event => {
        this.setState({
            url: event.target.value
        })
    }

    handlePostLink = event => {
        this.setState({
            postLink: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.makeNewMeme(this.state)
    }

    render() { 
        return ( 

            <div>
                <h3>New Meme Form</h3>
            
                <form onSubmit={event => this.handleSubmit(event)}>        
                <input type='text' placeholder='Meme Title' onChange={event => this.handleTitle(event)} value={this.state.title}/>
                <input type='text' placeholder='Meme Subreddit' onChange={event => this.handleSubreddit(event)} value={this.state.subreddit}/>
                <input type='text' placeholder='Meme Post Link' onChange={event => this.handlePostLink(event)} value={this.state.postLink}/> 
                <input type='text' placeholder='Meme URL' onChange={event => this.handleURL(event)} value={this.state.url}/> 
                  

                <input type='submit' value='Add Meme'/>
                </form>
            </div>
         );
    }
}
 
export default NewMemeForm;