var StateTree = require('../data/stateTree.js');
var HpCursor = StateTree.select('homepage');

var homePageActions = {
	updateBGColor: function(newColor) {
		HpCursor.set('workBGColor', newColor)
	}
}

module.exports = homePageActions;