var React = require('react');
var mixin = require('baobab-react/mixins').branch
var Intro = require('./HomepageIntro.react.js')
var classNames = require('classnames');
var WorkItems = require('./HomepageProjects.react.js')
var Contact = require('../../common/Contact.js')
var Animations = require('../../../animations/animations.js')
var HomepageActions = require('../../../actions/hpActions.js');
var menuActions = require('../../../actions/actions.js');
var PROJECTS = require('../../../data/projects.js');
var ScrollActions = require('../../../actions/scrollActions.js');

var totalProjAmount = PROJECTS.length;

var HomepageWrap = React.createClass({
	mixins: [mixin],
	cursors: {
		scrollPos: ['scrolling', 'scrollPosition'],
		menuHover: ['menu', 'isHovering'],
		menuActive: ['menu', 'isOpen'],
		isInHomepage: ['homepage', 'isInHomepage']
	},
	componentDidMount: function() {
		var scrollTop = $(window).scrollTop();

		ScrollActions.scrollPosUpdate(scrollTop);
		HomepageActions.isInHomepage();
		this.whereInHomepage();
		
		Animations.init();

		$(window).on('scroll', this.handleScroll);
	},
	componentDidUnmount: function() {
		$(window).off('scroll', this.handleScroll);
	},
	handleScroll: function() {
		var timer = null,
			self = this;

		self.whereInHomepage();

		$(window).on('scroll', function() {
			if(timer !== null) {
				clearTimeout(timer);
			}
			timer = setTimeout(function() {
				self.whereInHomepage();
			}, 150)
		});
	},
	whereInHomepage: function() {
		var windowH = $(window).height(),
			delta = 5,
			workPostsTop = ( windowH - delta ),
			workPostsBottom = (windowH * totalProjAmount) + (windowH - delta);

		if (this.state.scrollPos < workPostsTop || this.state.scrollPos > workPostsBottom) {
			menuActions.isOnLight();
		} else {
			menuActions.isOnDark();
		}
	},
	render: function() {
		console.log(this.props)
		return (
			<div data-page='hp' id="wrap" className={ classNames({ menuHover: this.state.menuHover, sideMenuActive: this.state.menuActive }) }>
				<Intro />
				<WorkItems projects={this.props.projects}/>
				<Contact />
			</div>
		)
	}
});

module.exports = HomepageWrap
