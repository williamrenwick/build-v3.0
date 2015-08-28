var React = require('react');
var mixin = require('baobab-react/mixins').branch;
var ProjectHeader = require('./ProjectHeader.js');
var ProjectActions = require('../../../actions/projectActions.js');
var classNames = require('classnames');
var ScrollActions = require('../../../actions/scrollActions.js');
var MenuActions = require('../../../actions/actions.js');
var Router = require('react-router')


var ProjectWrap = React.createClass({
	contextTypes: {
		router: React.PropTypes.func
	},
	mixins: [mixin, Router.State],
	cursors: {
		menuHover: ['menu', 'isHovering'],
		menuActive: ['menu', 'isOpen']
	},
	getDataIdx: function() {
		var currentPath = '/roche-cms';
		var props = this.props;


		for (var i = 0; i < props.projects.length; i++) {
			var relPath = '/' + props.projects[i].link

			console.log(relPath, currentPath)

			if (relPath == currentPath) {
				return i;
			}
		}
	},
	componentWillMount: function() {
		console.log('roche','componentWillMount');
		$('body').removeClass('noScroll')
	},
	componentWillUnmount: function() {
		console.log('roche','componentWillUnmount');
	},
	componentDidMount: function() {
		var scrollTop = $(window).scrollTop();

		console.log('project mounted')

		MenuActions.isOnDark();
		ScrollActions.scrollPosUpdate(scrollTop);
		ProjectActions.isInProjects();
		ProjectActions.hasAnimated();

	},
	render: function() {
		var idx = this.getDataIdx(),
			activeProject = this.props.projects[idx];

		return (
			<div id="projectWrap" className={ classNames({ menuHover: this.state.menuHover, sideMenuActive: this.state.menuActive }) }>
				<ProjectHeader activeProject={activeProject}/>
			</div>
		)
	}
});

module.exports = ProjectWrap;