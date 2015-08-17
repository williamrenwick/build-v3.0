var Baobab = require('baobab');

var stateTree = new Baobab({
	menu: {
		isHovering: false,
		isOpen: false,
		projSideOpen: false
	},
	scrolling: {
		scrollPosition: null
	},
	homepage: {
		workBGColor: null
	}
})



module.exports = stateTree;