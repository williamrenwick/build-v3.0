var React = require('react')
var mixin = require('baobab-react/mixins').branch
var MainSide = require('./SideNavMain.js')
var ProjectSide = require('./SideNavProj.js')

console.log("is branch mixin", mixin);

var SideNav = React.createClass({
	mixin: [mixin],
	cursors: {
		menu: ['menu', 'bumpAmount']
	},	
	render: function() {
		console.log("sidenav", this.props, this.state, this.context);
		return (
			<nav id="side-nav">
				<MainSide />
				<ProjectSide projects={this.props.projects}/>
			</nav>
		)
	}
});

module.exports = SideNav;