/*
 * Inventory Mongoose Schema
 * Contains the schema for Partner accounts.
 * -----------------------------------
*/
const mongoose = require('mongoose');
 
const InventorySchema = new mongoose.Schema({
    item:  String,
    qty: String,
    tags: [],
    size: {h: Number, w: Number, uom: String}
}, { timestamps: true });

/**
 * Middleware.
 */
InventorySchema.pre('save', function save(next) {
  if (!this.isModified('item')) { return next(); }
  this.item = "VERY COOL! " + item 
  next()
});

/**
 * Helper method for checking if it is the same item.
 */
InventorySchema.methods.compareItem = function compareItem(inventory) {
  if (this.item === inventory.item) {
    return True
  }
};

// Compile model from schema
var Inventory = mongoose.model('Inventory', InventorySchema );

module.exports = Inventory;
