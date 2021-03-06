var React = require('react');
var mixin = require('baobab-react/mixins').branch
var Intro = require('./HomepageIntro.react.js')
var classNames = require('classnames');
var WorkItems = require('./HomepageProjects.react.js')
var Contact = require('../../common/Contact.js')
var Animations = require('../../../animations/animations.js')



var HomepageWrap = React.createClass({
	mixins: [mixin],
	cursors: {
		menuHover: ['menu', 'isHovering'],
		menuActive: ['menu', 'isOpen']
	},
	componentDidMount: function() {
		Animations.init();
	},
	render: function() {
		return (
			<div data-page='hp' id="wrap" className={ classNames({ menuHover: this.state.menuHover, sideMenuActive: this.state.menuActive }) }>
				<Intro />
				<WorkItems projects={this.props.projects}/>
				<Contact />
			</div>
		)
	}
});

module.exports = HomepageWrap
