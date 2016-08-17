const mongoose = require('mongoose');

let bankTransaction = new mongoose.Schema({
  description: {type: String, required: true},
  value: {type: Number, required: true},
  date: {type: Date, default: Date.now},
  credit: {type: Boolean}
});

let BankTrans = mongoose.model('Bank', bankTransaction)

module.exports = BankTrans;
