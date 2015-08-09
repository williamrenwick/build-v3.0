var React = require('react')

var LiProjItem = React.createClass({
	render: function() {
		return (
			<li className="proj-link projLi" style={{'backgroundImage': 'url(' + this.props.project.bgImg + ')' }}>
				<h1>this.props.project.title</h1>
			</li>
		)
	}
});

module.exports = LiProjItem;