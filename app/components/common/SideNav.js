var React = require('react')
var mixin = require('baobab-react/mixins').branch
var MainSide = require('./SideNavMain.js')
var ProjectSide = require('./SideNavProj.js')

console.log("is branch mixin", mixin);

var SideNav = React.createClass({
	mixins: [mixin],
	cursors: {
		bumpAmount: ['menu', 'bumpAmount']
	},	
	render: function() {
		console.log("sidenav", this.props, this.state, this.context);
		return (
			<nav id="side-nav" style={{ left: this.state.bumpAmount }}>
				<MainSide />
				<ProjectSide projects={this.props.projects}/>
			</nav>
		)
	}
});

module.exports = SideNav;