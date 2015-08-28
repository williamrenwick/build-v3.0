var React = require('react');
var mixin = require('baobab-react/mixins').branch;
var classNames = require('classnames');


var Brief = React.createClass({
	mixins: [mixin],
	cursors: {
		menuHover: ['menu', 'isHovering'],
		menuActive: ['menu', 'isOpen'],
		loadAnimation: ['project', 'loadAnimation']
	},
	render: function() {
		var activeProject = this.props.activeProject;

		return (
			<div id="brief">
				<h2 className="project-subhead">Brief</h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris feugiat nulla lectus, quis euismod diam euismod vel. Donec imperdiet vehicula fermentum. Ut nec quam eu tellus congue rhoncus non in sapien. </p>
			</div>
		)
	}
});

module.exports = Brief;