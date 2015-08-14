var stateTree = require('../data/stateTree.js');
var menuCursor = stateTree.select('menu');


var menuActions = {
	isHovering: function() {
		menuCursor.set('isHovering', true);
	},
	notHovering: function() {
		menuCursor.set('isHovering', false)
	},
	isClicked: function() {
		menuCursor.set('isOpen', true)
	},
	notClicked: function() {
		var projSideStatus = menuCursor.get('isOpen');

		menuCursor.set('isOpen', false)

		if (projSideStatus) {
			menuCursor.set('projSideOpen', false);
		}
	},
	projSideOpen: function() {
		menuCursor.set('projSideOpen', true)
	},
	projSideClose: function() {
		menuCursor.set('projSideOpen', false)
	}
}

module.exports = menuActions;