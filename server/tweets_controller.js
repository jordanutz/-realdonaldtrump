let feed = []

module.exports = {
  createTweet: (req, res) => {
    // console.log(req.body)
    const {tweet} = req.body
    feed.push(tweet)
    res.status(200).send(feed)
  },
  deleteAll: (req, res) => {
    console.log('hit')
    feed.splice(0, feed.length)
    res.status(200).send(feed)
  }
}
