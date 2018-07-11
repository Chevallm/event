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
        Evenement.create({
            title: req.body.title,
        }).then( resp => {
            const ObjectId = resp._id
            res.status(201).location(`/api/evenements/${ObjectId}`).json(resp)
        })
        .catch( err => {
            res.status(400).send(err.message)
        })
    })

router.route('/:id')
    .get( (req, res, next) => {
        Evenement.findById(req.params.id)
            .then( resp => {
                res.json(resp)
            })
            .catch( err => {
                res.status(400).send(err.message)
            })
    })


module.exports = router;
