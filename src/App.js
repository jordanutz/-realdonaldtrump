import React, { Component } from 'react';
import './App.css';
import axios from 'axios'

class App extends Component {
  constructor() {
    super()
    this.state = {
      joke: null
    }
  }

  componentDidMount () {
    this.newJoke()
  }

  newJoke = () => {
    axios.get('https://api.whatdoestrumpthink.com/api/v1/quotes/random').then( res => {
      this.setState({
        joke: res.data.message
      })
    }).catch(error => {
      console.log(error)
    })
  }


  render() {
    return (
      <div className="App">
        <h1>{this.state.joke}</h1>
        <button onClick={this.newJoke}>Make Joke</button>
      </div>
    );
  }
}

export default App;
