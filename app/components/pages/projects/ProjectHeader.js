var React = require('react');
var mixin = require('baobab-react/mixins').branch;
var classNames = require('classnames');

var ProjectHdr = React.createClass({
	mixins: [mixin],
	cursors: {
		menuHover: ['menu', 'isHovering'],
		menuActive: ['menu', 'isOpen'],
		loadAnimation: ['project', 'loadAnimation']
	},
	render: function() {
		var activeProject = this.props.activeProject;
		console.log(this.state.loadAnimation)
		return (
			<div id="project-hdr">
				<div id="project-hdr-img" className={ classNames({ loadAnim: this.state.loadAnimation }) } style={{backgroundImage: 'url(' + activeProject.bgImg + ')'}}></div>
				<div id="project-hdr-text" className={ classNames({ loadAnim: this.state.loadAnimation }) }>
				    <div className="close-proj">
				        <div className="view-close"></div>
				        <p>Close Project</p>
				    </div>
				    <h1>{activeProject.title}</h1>
				    <h3>Client</h3>
				    <h2>{activeProject.client}</h2>
				    <h3>Fields</h3>
				    <h2>{activeProject.fields}</h2>
				</div>
			</div>
		)
	}
});

module.exports = ProjectHdr;