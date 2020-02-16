const express = require ('express');
const router = express.Router();
const Inventory = require('../models/inventory');

// get a list of inventory from the db
router.get('/inventory', function(res){
    Inventory.find({}).then(function(inventory){
        res.send(inventory);
    });
});

// add a new inventory to the db
router.post('/inventory', function(req, res){
    Inventory.create(req.body).then(function(inventory){
        res.send(inventory);
    });
});

// update a inventory in the db
router.put('/inventory/:id', function(req, res){
    res.send({type: 'PUT'});
});

// delete a inventory from the db
router.delete('/inventory/:id', function(req, res){
    res.send({type: 'DELETE'});
});

module.exports = router;
