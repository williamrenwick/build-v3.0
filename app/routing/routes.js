var React = require('react');
var Router = require("react-router");
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var App = require("../components/app.react");
var Homepage = require("../components/pages/HomepageWrap.react.js")

module.exports = (
  <Route path="/" handler={App}>
  	<DefaultRoute handler={Homepage} />
  </Route>
);