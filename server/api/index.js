const router = require('express').Router()
const unirest = require('unirest')
module.exports = router

router.use('/users', require('./users'))
router.use('/titles', require('./titles'))

// const req = unirest("GET", "https://streamzui-streamzui-v1.p.rapidapi.com/search");

// req.query({
// 	"country": "gb",
// 	"yearend": "2019",
// 	"yearstart": "1900",
// 	"page": "1"
// });
// req.headers({
// 	"x-rapidapi-host": "streamzui-streamzui-v1.p.rapidapi.com",
// 	"x-rapidapi-key": "6a09b68cecmsh9389d87c9f689e1p161c0bjsn10734a8c7955"
// });
// req.end(function (res) {
// 	if (res.error) throw new Error(res.error);
// 	console.log(res.body);
// });

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
