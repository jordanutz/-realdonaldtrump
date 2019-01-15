import React, { Component } from 'react';
import './Reset.css';
import axios from 'axios'
import Header from './Components/Header/Header'
import Banner from './Components/Banner/Banner'
import Stats from './Components/Stats/Stats'
import Profile from './Components/Profile/Profile'

class App extends Component {
  constructor() {
    super()
    this.state = {
      jokes: [],
      joke: null
    }
  }

  componentDidMount () {
    this.newJoke()
  }

  newJoke = () => {
    axios.get('https://api.whatdoestrumpthink.com/api/v1/quotes/random').then( res => {
      const feed = [...this.state.jokes]
      feed.push(res.data.message)
      this.setState({
        joke: res.data.message,
        jokes: feed
      })
    }).catch(error => {
      console.log(error)
    })
  }


  render() {

    console.log(this.state.jokes)
    let trumpFeed = this.state.jokes.map( (joke, index) => {
      return (
        <div className="FeedJoke">
          <h2 key={index}>{joke}</h2>
        </div>
      )
    })

    return (
      <div className="App">
        <Header />
        <Banner />
        <Stats jokes={this.state.jokes}/>
        <Profile />
          <button onClick={this.newJoke}>Make Joke</button>
          {trumpFeed}
      </div>
    );
  }
}

export default App;
