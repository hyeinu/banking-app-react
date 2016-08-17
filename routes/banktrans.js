var express = require('express');
var router = express.Router();
let BankTran = require('../models/banktran')

router.delete('/:id', (req, res) => {
  BankTran.findByIdAndRemove(req.params.id, (err, deletedTransaction) =>{
    if(err || !deltedTransaction) return res.status(400).send(err || 'Transaction not found')
    return res.status(200).json(`${deletedTransaction} was removed`)
  })
})

router.put('/', (req, res) =>{
  BankTran.findByIdAndUpdate(req.body._id, req.body, {new: true}, (err, updatedTransaction) =>{
    if (err || !updatedTransaction) return req.status(400).send(err || 'Transaction not Found!')
    return res.status(200).json(updatedTransaction)
  })
})

router.get('/', (req, res) => {
  BankTran.find({}, (err, trans) =>{
    res.status(err ? 400: 200).send(err || trans);
  })
})

router.post('/', (req, res) => {
  BankTran.create(req.body, (err, transaction) =>{
  return res.status(err ? 400: 200).send(err || transaction);
  })
});


module.exports = router;
