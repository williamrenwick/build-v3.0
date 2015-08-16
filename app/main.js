var React = require('react');
var Router = require("react-router");
var routes = require("./routing/routes");
var stateTree = require('./data/stateTree.js')

Router.run(routes, (Root) => {
  React.render(<Root tree={stateTree} />, document.body);
});