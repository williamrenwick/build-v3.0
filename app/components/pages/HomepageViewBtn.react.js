var React = require('react');
var Routes = require('../../routing/routes.js');



var ViewBtn = React.createClass({
	render: function() {
		return (
			<div data-url="project.html" className="view-proj">
			  
			    <div className="view-plus"></div>
			    <p>View Project</p>
			  
			</div>
		)
	}
});

module.exports = ViewBtn