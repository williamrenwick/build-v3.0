var React = require('react');
var Router = require("react-router");
var routes = require("./routing/routes");
var stateTree = require('./data/stateTree.js')

Router.run(routes, function(Handler) {
  React.render(<Handler tree={stateTree} />, document.body);
});