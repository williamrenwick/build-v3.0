var React = require('react')
var LiProjItem = require('./SideNavProjItem.js')


var ProjectSide = React.createClass({

	render: function() {
		var liItems = [];

		this.props.projects.forEach(function(project) {
			liItems.push(<LiProjItem project={project} />)
		})
		return (
			<ul id="proj-all">
				<li className="proj-all-title projLi"></li>
				{liItems}
			</ul>
		)
	}
})

module.exports = ProjectSide;