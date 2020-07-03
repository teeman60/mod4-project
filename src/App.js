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
      searchTerm: "",
      sortedMemes: []
    }
  }

  sortByTitle = () => {
    this.setState({
      displayMemes: this.state.displayMemes.sort((a, b) => a.title > b.title ? 1 : -1)
    })
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
    


  render () {
    return (
      <div className="App">
  
        <NavBar sortByTitle={this.sortByTitle} changeSearchTerm={this.changeSearchTerm}/>
        <NewMemeForm />
        <MemeList memes={this.state.displayMemes}/>
        <Collection />
        
      </div>
    );
  }
  

}

export default App;
