import React from 'react'
import './Stats.css'

const Stats = (props) => {

  let randomFollowers = Math.floor(Math.random() * 10000)
  let randomFollowing = Math.floor(Math.random() * 10000)

  return (
    <section>
      <div className="Stats">
        <p>Tweets:{props.jokes.length}</p>
        <p>Following: {randomFollowing}</p>
        <p>Followers: {randomFollowers} </p>
      </div>
    </section>
  )
}

export default Stats
