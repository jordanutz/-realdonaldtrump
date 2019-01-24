let feed = []

module.exports = {
  createTweet: (req, res) => {
    // console.log(req.body)
    const {tweet} = req.body
    feed.push(tweet)
    res.status(200).send(feed)
  }
}
