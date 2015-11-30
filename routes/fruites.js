/**
 * Created by IlyaLitvinov on 01.12.15.
 */
var express = require('express'),
    fruitesModel = require('../models/fruites.js'),
    router = express.Router();


console.log(fruitesModel.getItem());
router.get('/', function (req, res) {
    setTimeout(function () {
        res.status(200).send(fruites);
    }, 3000);
});

router.post('/', function (req, res) {
    console.log(req.body.fruite);
    if (req.body.fruite) {
        fruites.push(req.body.fruite);
        console.log('add to Array');
        res.status(200).send(fruites);
    } else {
        res.status(404).send('not faund');
    }
});

router.put('/:index', function (req, res) {
    console.log(req.body);
    if (req.params.index && Number(req.params.index) < fruites.length && req.body.fruite) {
        fruites.splice(req.params.index, 1, req.body.fruite);
        console.log('Update in Array');
        res.status(200).send(fruites);
    } else {
        res.status(500).send('Bad request').end()
    }
});

router.delete('/:index', function (req, res) {
    if (req.params.index && Number(req.params.index) < fruites.length) {
        setTimeout(function () {
            fruites.splice(req.params.index, 1);
            res.status(200).send(fruites);
        }, 3000);

    } else {
        res.status(500).send('Bad request').end()
    }
});

module.exports = router;
