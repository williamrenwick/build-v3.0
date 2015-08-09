var stateTree = require('../data/stateTree.js');

var menuActions = {
	isHovering: function() {
		var menuCursor = stateTree.select('menu');

		menuCursor.set('isHovering', true);
		menuCursor.set('bumpAmount', 20)
	},
	notHovering: function() {
		var menuCursor = stateTree.select('menu');

		menuCursor.set('isHovering', false)
	},
	isClicked: function() {
		var menuCursor = stateTree.select('menu');

		menuCursor.set('isOpen', true)
	},
	notClicked: function() {
		var menuCursor = stateTree.select('menu');

		menuCursor.set('isOpen', false)
	}
}

module.exports = menuActions;