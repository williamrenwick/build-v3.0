var React = require('react')
var ViewBtn = require('./HomepageViewBtn.react.js')
var HpColorAnim = require('../../animations/hpColorAnim.js')


var HpWorkItem = React.createClass({
	componentDidMount: function() {
		window.addEventListener('scroll', this.handleScroll);
	},
	componentDidUnmount: function() {
		window.removeEventListener('scroll', this.handleScroll);
	},
	handleScroll: function(event) {
 		var scrollTop = event.srcElement.body.scrollTop,
 			colorData = HpColorAnim.workInfoBg(scrollTop);

 		this.setState({
 			backgroundColor: colorData
 		})
	},
	render: function() {
	
		return (
			<section className="hp-work-item" style={{'background-image': 'url(' + this.props.project.bgImg + ')' }}>
			  <div className="work-info" style={{ backgroundColor: this.state.backgroundColor }} ref="workInfo">
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