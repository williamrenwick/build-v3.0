var React = require('react');
var App = require("../components/app.react");
var Homepage = require("../components/pages/homepage/HomepageWrap.react.js")
var Project = require('../components/pages/projects/Project.js')
var Router = require("react-router");
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;


module.exports = (
  <Route handler={App}>
  	<DefaultRoute handler={Homepage} />
  	<Route name="forward" handler={Project}/>
  	<Route name="roche-cms" handler={Project}/>
  	<Route name="mei-li-rose" handler={Project}/>
  </Route>
);