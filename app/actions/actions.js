var stateTree = require('../data/stateTree.js');

var movePercentage = ( (-100 + (20 / (window.innerWidth/2) * 100))/2 ) +'%';

console.log(movePercentage)


var menuActions = {
	isHovering: function() {
		var menuCursor = stateTree.select('menu');

		menuCursor.set('hoverClass', 'menu-hover');
		menuCursor.set('isHovering', true);
		menuCursor.set('bumpAmount', movePercentage)
	},
	notHovering: function() {
		var menuCursor = stateTree.select('menu');

		menuCursor.set('bumpAmount', '-50%');
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