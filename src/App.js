import React, { Component } from 'react';
import './Reset.css';
import axios from 'axios'
import Header from './Components/Header/Header'
import Banner from './Components/Banner/Banner'
import Stats from './Components/Stats/Stats'
import Profile from './Components/Profile/Profile'
import Footer from './Components/Footer/Footer'

class App extends Component {
  constructor() {
    super()
    this.state = {
      tweets: [],
      tweet: null
    }
  }

  componentDidMount () {
    this.newTweet()
  }

  postTweet = (tweet) => {
    console.log(tweet)
    axios.post('/api/tweets', {tweet}).then(res => {
      console.log(res)
      this.setState({
        tweets: res.data
      })
    })
    this.newTweet()
  }

  newTweet = () => {
    axios.get('https://api.whatdoestrumpthink.com/api/v1/quotes/random').then( res => {
      // console.log(res)
      this.setState({
        tweet: res.data.message
      })
    }).catch(error => {
      console.log(error)
    })
  }

  resetTweets = () => {
    let emptyArray = []
    this.setState({
      tweets: emptyArray
    })
  }


  render() {

    // console.log(this.state.tweet)
    // console.log(this.state.tweets)

    return (
      <div className="App">
        <Header />
        <Banner />
        <Stats tweets={this.state.tweets}/>
        <Profile reset={this.resetTweets} tweet={this.state.tweet} newTweet={this.newTweet} tweets={this.state.tweets} postTweet={this.postTweet}/>
        <Footer />
      </div>
    );
  }
}

export default App;
