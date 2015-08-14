var React = require('react');
var mixin = require('baobab-react/mixins').branch
var Intro = require('./HomepageIntro.react.js')
var WorkItems = require('./HomepageProjects.react.js')
var Contact = require('../common/Contact.js')


var HomepageWrap = React.createClass({
	mixins: [mixin],
	cursors: {
		hoverClass: ['menu', 'isHovering']
	},	
	render: function() {
		console.log("homepage", this.state);
		return (
			<div data-page='hp' id="wrap" className={this.state.hoverClass ? "menu-hover" : "" }>
				<Intro />
				<WorkItems projects={this.props.projects}/>
				<Contact />
			</div>
		)
	}
});

module.exports = HomepageWrap
