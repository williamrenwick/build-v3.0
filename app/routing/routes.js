var React = require('react');
var Router = require("react-router");
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var App = require("../components/app.react");
var Homepage = require("../components/pages/homepage/HomepageWrap.react.js")
var Project = require('../components/pages/projects/Project.js')

module.exports = (
  <Route path="/" handler={App}>
  	<Route name="projects" hander={Project}/>
  	<DefaultRoute handler={Homepage} />
  </Route>
);