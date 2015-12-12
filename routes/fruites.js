/**
 * Created by IlyaLitvinov on 01.12.15.
 */
var express = require('express'),
    fruitesModel = require('../models/fruites.js'),
    router = express.Router();


console.log(fruitesModel.getItem());
router.get('/', function (req, res) {
    setTimeout(function () {
        res.status(200).send(fruitesModel.getItem());
    }, 3000);
});

router.post('/', function (req, res) {
    console.log(req.body.fruite);
    if (req.body.fruite) {
        fruitesModel.setItem(req.body.fruite);
        console.log('add to Array');
        res.status(200).send(fruitesModel.getItem());
    } else {
        res.status(404).send('not found');
    }
});

router.put('/:index', function (req, res) {
    console.log(req.body);

    if (req.params.index && Number(req.params.index) < fruitesModel.getItem().length && req.body.fruite) {
        //fruites.splice(req.params.index, 1, req.body.fruite);
        //console.log('Update in Array');
        fruitesModel.updateItem(req.params.index, req.body.fruite);

        res.status(200).send(fruitesModel.getItem());
    } else {
        res.status(500).send('Bad request').end()
    }
});

router.delete('/:index', function (req, res) {
    if (req.params.index && Number(req.params.index) < fruitesModel.getItem().length) {
        setTimeout(function () {

            fruitesModel.deleteItem(req.params.index, 1);
            res.status(200).send(fruitesModel.getItem());
        }, 500);

    } else {
        res.status(500).send('Bad request').end()
    }
});

module.exports = router;
