import React from 'react'
import './Tweet.css'
import Trump from '../Banner/Trump.jpg'

const Tweet = (props) => {
  console.log(props)
  return (
    <div className="Tweet">
      <div className="TweetPhoto">
        <img src={Trump} alt="Donnie" />
      </div>

      <div className="TweetDetails">
        <h3>Donald J.Trump</h3>
        {props.tweet}
      </div>
    </div>
  )
}

export default Tweet
