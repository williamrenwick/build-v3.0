var StateTree = require('../data/stateTree.js');
var MenuCursor = StateTree.select('menu');


var menuActions = {
	isHovering: function() {
		MenuCursor.set('isHovering', true);
	},
	notHovering: function() {
		MenuCursor.set('isHovering', false)
	},
	isClicked: function() {
		MenuCursor.set('isOpen', true)
	},
	notClicked: function() {
		var projSideStatus = MenuCursor.get('isOpen');

		MenuCursor.set('isOpen', false)

		if (projSideStatus) {
			MenuCursor.set('projSideOpen', false);
		}
	},
	projSideOpen: function() {
		MenuCursor.set('projSideOpen', true)
	},
	projSideClose: function() {
		MenuCursor.set('projSideOpen', false)
	},
	isOnDark: function() {
		MenuCursor.set('isOnDark', true)
	}
}

module.exports = menuActions;