import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar'
import NewMemeForm from './NewMemeForm'
import MemeList from './MemeList'
import Collection from './Collection'


class App extends Component  {


  constructor(){
    super()
    this.state = {
      memes: [],
      displayMemes: [],
      collections: [],
      searchTerm: "",
      sortedMemes: []
    }
  }

  sortByTitle = () => {
    this.setState({
      displayMemes: this.state.displayMemes.sort((a, b) => a.title > b.title ? 1 : -1)
    })
  }


  addToCollection = (meme) => {
    // debugger
    if (!this.state.collections.includes(meme)) {
    this.setState({
      collections: [...this.state.collections, meme]
    })
  } else {
    alert("Meme already included in collection")
  }
    
  }

  

  componentDidMount(){
    fetch("https://meme-api.herokuapp.com/gimme/popular/20")
    .then( res => res.json() )
    .then( data => {
      this.setState({
        memes: [...data.memes],
        displayMemes: [...data.memes],
      })
    })
  }


  changeSearchTerm = (term) => {
    this.setState({
      searchTerm: term
    })
  }


  handleSearch = () => {

    // debugger
    let filtered = this.state.displayMemes.filter(meme => meme.title.toLowerCase().includes(this.state.searchTerm) || meme.title.includes(this.state.searchTerm))
    this.setState({
      displayMemes: filtered
    })
  }
   
  makeNewMeme = (memeObj) => {
    const newMeme = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({...memeObj})
    }
    // fetch("", newMeme)
    // .then( res => res.json() )
    // .then( data => {
    //   this.setState({
    //     : [...this.state.transactions, data]
    //   })
  }


  render () {
    return (
      <div className="App">
  
        <NavBar sortByTitle={this.sortByTitle} changeSearchTerm={this.changeSearchTerm} handleSearch={this.handleSearch}/>
        <NewMemeForm makeNewMeme={this.makeNewMeme}/>
        <MemeList memes={this.state.displayMemes} addToCollection={this.addToCollection}/>
        <Collection collections={this.state.collections}/>
        
      </div>
    );
  }
  

}

export default App;
