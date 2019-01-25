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
    })
  }

  resetTweets = () => {
    axios.delete('/api/tweets').then(res => {
      // console.log(res.data)
      this.setState({
        tweets: res.data
      })
    })
  }

  render() {
    // console.log(this.state.tweet)
    // console.log(this.state.tweets)

    const {tweets, tweet} = this.state
    const {resetTweets, newTweet, postTweet} = this

    return (
      <div className="App">
        <Header />
        <Banner />
        <Stats tweets={tweets}/>
        <Profile
          reset={resetTweets}
          tweet={tweet}
          newTweet={newTweet}
          tweets={tweets}
          postTweet={postTweet}/>
        <Footer />
      </div>
    );
  }
}

export default App;
