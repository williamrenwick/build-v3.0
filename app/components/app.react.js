var stateTree = require('../data/stateTree.js');
var rootMixin = require('baobab-react/mixins').root;
var React = require('react');
var Router = require('react-router');
var MainNav = require('./common/MainNav.js');
var SideNav = require('./common/SideNav.js');
var styles = require('../main.css');
var PROJECTS = require('../data/projects.js');
	
var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;

var Homepage = require('./pages/HomepageWrap.react.js')

var App = React.createClass({
	mixins: [rootMixin],
	render: function() {
		console.log( "app", this.state, this.props, this.getChildContext() );
		return (
			<div id="reactWrap">
				<MainNav ref="main-nav"/>
				<SideNav projects={PROJECTS} ref="side-nav" />
				<RouteHandler projects={PROJECTS} ref="content" />
			</div>
		)
	}
});

module.exports = App;