var StateTree = require('../data/stateTree.js');
var ScrollCursor = StateTree.select('scrolling');


var scrollingActions = {
	scrollPosUpdate: function(livePosition) {
		ScrollCursor.set('scrollPosition', livePosition)
	}
}


module.exports = scrollingActions;