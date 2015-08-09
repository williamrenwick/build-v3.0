var React = require('react');
var Router = require("react-router");
var Route = Router.Route;
var App = require("../components/app.react");
var Homepage = require("../components/pages/HomepageWrap.react.js")

module.exports = (
  <Route handler={App}>
  	<Route path="/" handler={Homepage} />
  </Route>
);