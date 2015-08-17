var React = require('react')
var ViewBtn = require('./HomepageViewBtn.react.js')
var Animations = require('../../animations/animations.js')

var HpWorkItem = React.createClass({
	render: function() {
		return (
			<section className="hp-work-item" style={{'background-image': 'url(' + this.props.project.bgImg + ')' }}>
			  <div className="work-info">
				  <div className="work-text js-fade-text">
					  <div className="worktext-appear-wrap">
						<ViewBtn />
				  	    <h1>{this.props.project.title}</h1>
                        <h3>Client</h3>
                        <h2>{this.props.project.client}</h2>
                        <h3>Fields</h3>
                        <h2>{this.props.project.fields}</h2>
					  </div>
				  </div>
			  </div>
			</section>
		)
	}
});

module.exports = HpWorkItem