var Baobab = require('baobab');

var stateTree = new Baobab({
	menu: {
		isHovering: false,
		bumpAmount: 0,
		isOpen: false
	}
})

var menuCursor = stateTree.select('menu'),
	hoverCursor = menuCursor.select('bumpAmount');


hoverCursor.on('update', function() {
	//test for setting here.
})


module.exports = stateTree;