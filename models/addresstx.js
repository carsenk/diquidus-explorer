var mongoose = require('mongoose')
  , Schema = mongoose.Schema;
 
var AddressTXSchema = new Schema({
  a_id: { type: String, index: true},
  blockindex: {type: Number, default: 0, index: true},
  txid: { type: String, lowercase: true, index: true},
  amount: { type: Number, default: 0}
}, {id: false});

module.exports = mongoose.model('AddressTx', AddressTXSchema);