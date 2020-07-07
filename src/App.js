import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import NavBar from './NavBar'
import NewMemeForm from './NewMemeForm'
import MemeList from './MemeList'
import Collection from './Collection'
import './style.css'



class App extends Component  {


  constructor(){
    super()
    this.state = {
      memes: [],
      displayMemes: null,
      collections: [],
      searchTerm: "",
      sortedMemes: [],
      isLoaded: false,
      isLoggedIn: false,
      addMeme: false
    }
  }

  sortByName = () => {
    this.setState({
      displayMemes: this.state.displayMemes.sort((a, b) => a.name > b.name ? 1 : -1)
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
    fetch("http://localhost:3000/memes")
    .then( res => res.json() )
     .then( data => {
      this.setState({
        memes: [...data],
        displayMemes: this.randoms(data),
        isLoaded: true
      })
    })
  }
  
  randoms = (e) => {
     const array = []
    for( let i = 0; i < 40; i++){
      let ran = e[Math.floor(Math.random() * e.length)]
      array.push(ran)
      
      // console.log(ran)
    }
    return array
  }

  randomOneToFive = () => {
    return Math.floor(Math.random()*5)
  }

  randomSubreddit = () => {
    switch(this.randomOneToFive()) {
      case 0:
        this.sortBySubreddit("dankmemes")
        console.log("dankmemes")
        break;
      case 1:
        this.sortBySubreddit("wholesome")
        console.log("wholesome")
        break;
      case 2:
        this.sortBySubreddit("ProgrammerHumor")
        console.log("ProgrammerHumor")
        break;
      case 3:
        this.sortBySubreddit("memes") 
        console.log("memes")
        break;
      case 4:
        console.log("random")
        this.setState({
          displayMemes: this.randoms(this.state.memes)
        })
        break;
      default:
        break;
    }
  }

  sortBySubreddit = (subreddit) => {
    this.setState({
      displayMemes: this.state.memes.filter(meme => meme.category === subreddit)
    })
  }


  changeSearchTerm = (term) => {
    this.setState({
      searchTerm: term
    })
  }


  handleSearch = () => {

    // debugger
    let filtered = this.state.memes.filter(meme => meme.name.toLowerCase().includes(this.state.searchTerm) || meme.name.includes(this.state.searchTerm))
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
    fetch("http://localhost:3000/memes", newMeme)
    .then( res => res.json() )
    .then( data => {
      this.setState({
        memes : [...this.state.memes, data]
      })
    })
  }


  deleteMeme = (meme) => {
    debugger
  }

 sayHello = () => {
   console.log("hello")
 }

 displayToyForm = () => {
  //  debugger
   this.setState({
     addMeme: !this.state.addMeme
   })
  //  console.log(this.state.addMeme)
 }
  


  render () {
    if (this.state.displayMemes == null){
    return<h1>Loading </h1> 
    }else{
    // this.randoms(this.state.memes)
    return (
      <div className="App">
  
        <NavBar sortByName={this.sortByName} changeSearchTerm={this.changeSearchTerm} handleSearch={this.handleSearch} randomSubreddit={this.randomSubreddit} displayToyForm={this.displayToyForm}/>
        <NewMemeForm makeNewMeme={this.makeNewMeme} addMeme={this.state.addMeme}/>
        <MemeList memes={this.state.displayMemes} addToCollection={this.addToCollection} sortByTitle={this.sortByTitle} changeSearchTerm={this.changeSearchTerm} handleSearch={this.handleSearch} />
        <Collection collections={this.state.collections} deleteMeme={this.deleteMeme}/>
        
      </div>
    );
  }
  

}
}
export default App;
