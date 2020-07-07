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


    // let addToy = false;

    //     document.addEventListener("DOMContentLoaded", () => {
    //     const addBtn = document.querySelector("#new-toy-btn");
    //     const toyFormContainer = document.querySelector(".container");
    //     addBtn.addEventListener("click", () => {
    // // hide & seek with the form
    //  addToy = !addToy;
    //     if (addToy) {
    //         toyFormContainer.style.display = "block";
    //     } else {
    //   toyFormContainer.style.display = "none";
    //     }
    //     });
    // });
    

    render() { 

        // this.props.addMeme ?
        // return
        // (
        return ( 
        <div>
            {this.props.addMeme
            ?           
            <div >
                <h3>New Meme Form</h3>
            
                <form class="add-meme-form" onSubmit={event => this.handleSubmit(event)} className=".add-meme-form">        
                <input className="input-text" type='text' placeholder='Meme Title' onChange={event => this.handleTitle(event)} value={this.state.title}/>
                <input className="input-text" type='text' placeholder='Meme Subreddit' onChange={event => this.handleSubreddit(event)} value={this.state.subreddit}/>
                <input className="input-text" type='text' placeholder='Meme Post Link' onChange={event => this.handlePostLink(event)} value={this.state.postLink}/> 
                <input className="input-text" type='text' placeholder='Meme URL' onChange={event => this.handleURL(event)} value={this.state.url}/> 
                  

                <input className="submit" type='submit' value='Add Meme'/>
                </form>
            </div> 
            : 
            null}
        </div>
         );
         
        //  :
        //  null
    }
}
 
export default NewMemeForm;