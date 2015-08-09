var React = require('react');
var mixin = require('baobab-react/mixins').branch
var Intro = require('./HomepageIntro.react.js')
var WorkItems = require('./HomepageProjects.react.js')
var Contact = require('../common/Contact.js')


var HomepageWrap = React.createClass({

	mixin: [mixin],
	cursors: {
		menu: ['menu', 'bumpAmount']
	},	
	
	render: function() {
		console.log("hompage", this.context);
		return (
			<div data-page='hp' id="wrap">
				<Intro />
				<WorkItems projects={this.props.projects}/>
				<Contact />
			</div>
		)
	}
});

module.exports = HomepageWrap
