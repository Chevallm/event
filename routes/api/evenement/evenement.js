var express = require('express');
var router = express.Router();

const Evenement = require('../../../application/models/evenement')

router.route('/')
    .get( (req, res, next) => {
        Evenement.find( (err, res) => {
             res.json(res)
        }).catch( err => {
            res.send(err)
        })
    })
    .post( (req, res, next) => {
        Evenement.create({
            name: req.body.name
        })
    })

module.exports = router;
