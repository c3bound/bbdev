var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var BearSchema   = new Schema({
	Symbol: String
});

module.exports = mongoose.model('AlertStreamNasdaq', BearSchema);