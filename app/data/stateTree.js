var Baobab = require('baobab');

var stateTree = new Baobab({
	menu: {
		isHovering: false,
		isOpen: false,
		projSideOpen: false,
		isOnDark: false
	},
	scrolling: {
		scrollPosition: null
	},
	homepage: {
		workBGColor: null,
		isInHomepage: null
	},
	project: {
		isInProjects: null,
		loadAnimation: false
	}
})



module.exports = stateTree;