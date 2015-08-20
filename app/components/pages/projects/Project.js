var React = require('react');
var mixin = require('baobab-react/mixins').branch

var ProjectWrap = React.createClass({
	render: function() {
		return (
			<div id="project-hdr">
				<div id="project-hdr-text">
				    <div className="close-proj">
				        <div className="view-close"></div>
				        <p>Close Project</p>
				    </div>
				    <h1>Quisque Sit Amet Mi Eleifend</h1>
				    <h3>Client</h3>
				    <h2>Client Name</h2>
				    <h3>Fields</h3>
				    <h2>UX, Design</h2>
				</div>
			</div>
		)
	}
})