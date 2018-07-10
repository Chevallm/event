var express = require('express');
var router = express.Router();

const Evenement = require('../../../application/models/evenement')

router.route('/')
    .get( (req, res, next) => {
        Evenement.find( (err, resp) => {
             res.json(resp)
        }).catch( err => {
            res.send(err)
        })
    })
    .post( (req, res, next) => {
        console.log(req.body.title)
        Evenement.create({
            title: req.body.title,
        }).then( (err) => {
            if(err) res.send(err)
            else
                res.status(201)
        }).catch( err => {
            res.status(400).send(err.message)
        })
    })

module.exports = router;
