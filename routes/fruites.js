/**
 * Created by IlyaLitvinov on 01.12.15.
 */
const express = require('express');
const fruitesModel = require('../models/fruites.js');
const router = express.Router();

router.get('/', function (req, res) {
    res.status(200).send(fruitesModel.getItem());
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
    if (req.params.index && Number(req.params.index) < fruitesModel.getItem().length && req.body.fruite) {
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
