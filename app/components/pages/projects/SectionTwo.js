var React = require('react');
var mixin = require('baobab-react/mixins').branch;
var classNames = require('classnames');
var Overview = require('./Overview.js');
var Brief = require('./Brief.js')


var SectionTwo = React.createClass({
	mixins: [mixin],
	cursors: {
		menuHover: ['menu', 'isHovering'],
		menuActive: ['menu', 'isOpen'],
		loadAnimation: ['project', 'loadAnimation']
	},
	render: function() {
		var activeProject = this.props.activeProject;

		return (
			<div id="section2">
				<div id="s2-img1"></div>
				<Brief/>
				<div id="s2-img2"></div>
			</div>
		)
	}
});

module.exports = SectionTwo;