const mongoose = require('mongoose');

let bankTransaction = new mongoose.Schema({
  description: {type: String, required: true},
  date: {type: String},
  value: {type: Number, required: true},
  credit: {type: Boolean}
});

let BankTrans = mongoose.model('Bank', bankTransaction)

module.exports = BankTrans;
