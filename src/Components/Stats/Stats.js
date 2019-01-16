import React from 'react'
import './Stats.css'

const Stats = (props) => {


  return (
    <section>
      <div className="Stats">
        <p>Tweets:{props.tweets.length}</p>
        <p>Following: 21</p>
        <p>Followers: 127k </p>
      </div>
    </section>
  )
}

export default Stats
