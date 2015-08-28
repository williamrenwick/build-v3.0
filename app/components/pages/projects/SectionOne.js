var React = require('react');
var mixin = require('baobab-react/mixins').branch;
var classNames = require('classnames');
var Overview = require('./Overview.js');


var SectionOne = React.createClass({
	mixins: [mixin],
	cursors: {
		menuHover: ['menu', 'isHovering'],
		menuActive: ['menu', 'isOpen'],
		loadAnimation: ['project', 'loadAnimation']
	},
	render: function() {
		var activeProject = this.props.activeProject;

		return (
			<div id="section1">
				<Overview/>
				<div id="overviewImg"></div>
			</div>
		)
	}
});

module.exports = SectionOne;