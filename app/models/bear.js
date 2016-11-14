var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var BearSchema   = Schema({
	_id : String,
    Symbol : String,
    CreatedDttm : String,
    MessageType : String,
    DateTime : String,
    PriceAtAlert : String,
    Message : String,
    Exchange : String
});

module.exports = mongoose.model('AlertStreamNasdaq', BearSchema);