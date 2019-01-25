import React, {Component} from 'react'
import './Profile.css'
import Tweet from '../Tweet/Tweet'

class Profile extends Component {

  render () {
    // console.log(this.props)

    const {tweets, tweet, newTweet, postTweet, reset} = this.props

    let trumpFeed = tweets.map( (tweet, index) => {
      return (
        <div className="Feed">
          <Tweet key={index} tweet={tweet}/>
        </div>
      )
    })

    return (
      <div className="Profile">
        <div className="ProfileName">
          <h2>Donald J. Trump</h2>
          <h3>@realDonaldTrump</h3>
          <h4>45th President of the United States of America 🇺🇸</h4>
        </div>
        <div className="TweetProfile">
          <div className="TweetType">
            <h4>What's on your mind?</h4>
            <h2>{tweet}</h2>
          </div>

          <div className="FeedButtons">
            <button onClick={newTweet}>Generate</button>
            <button onClick={() => postTweet(tweet)}>Tweet</button>
            <button onClick={() => reset()}>Reset</button>
          </div>

          {trumpFeed}


        </div>
      </div>
    )
  }
}

export default Profile
