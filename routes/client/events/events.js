var express = require('express');
var router = express.Router();
const request = require('request')

router.get('/', function(req, res, next) {
  res.render('events/index', { title: 'Express' });
});

router.route('/join')
  .get( (req, res, next) => {
    res.render('events/join', { title: 'Join event'})
  })
  .post( (req, res, next) => {
    const code = req.query.code
    res.render('events/join', {title: 'Join event', code: code})
  })

router.route('/create')
  .get( (req, res, next) => {
    res.render('events/create', { title: 'Create event'})
  })
  .post( (req, res, next) => {
    const url = `http://${process.env.HOST}/api/evenements`
    request.post(url, (error, response, body) => {
      console.log('error: ', error); // Print the error if one occurred
      console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
      console.log('res', response.headers)
      console.log('body:', body);
      res.render('events/created', { title: 'Event created', message: 'Event created', location: ''})
    })
    
  })

module.exports = router;
