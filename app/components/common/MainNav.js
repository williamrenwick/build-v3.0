var React = require('react')
var mixin = require('baobab-react/mixins').branch
var menuActions = require('../../actions/actions.js')

var bumpAmount = 0;

var MainNav = React.createClass({
	mixins: [mixin],
	cursors: {
		isClicked: ['menu', 'isOpen'],
		isHovering: ['menu', 'isHovering'],
		isOnDark: ['menu', 'isOnDark'],
		scrollPos: ['scrolling', 'scrollPosition']
	},
	teaseMenu: function(e) {
		menuActions.isHovering();
		bumpAmount = this.inAmount(e);
	},
	unteaseMenu: function(e) {
		menuActions.notHovering();	
	},
	handleClick: function(e) {
		menuActions.isClicked();
	},
	inAmount: function(e) {
		var button = e.target;

		function getOffset( el ) {
		    var _x = 0;
		    var _y = 0;
		    while( el && !isNaN( el.offsetLeft ) && !isNaN( el.offsetTop ) ) {
		        _x += el.offsetLeft - el.scrollLeft;
		        _y += el.offsetTop - el.scrollTop;
		        el = el.offsetParent;
		    }
		    return { top: _y, left: _x };
		}

		var btnX = getOffset( button ).left;
		var relX = (e.pageX - btnX) / 1.5

		return relX;
	},
	menuToggle: function() {

		if (!this.state.isClicked) {
			menuActions.isClicked();
		} else if (this.state.isClicked) {
			menuActions.notClicked();
		}

	},
	getStyles: function() {
		var styleObj = {
			transform: null
		}

		if (!this.state.isHovering && !this.state.isClicked) {
			styleObj.transform = 'translateX(' + 0 + 'px)';
		} else if (this.state.isHovering && !this.state.isClicked) {

			styleObj.transform = 'translateX(' + bumpAmount + 'px)';
		}

		//if (!this.state.isClicked && )

		return styleObj;
	},
	render: function() {

		return (
			<nav className={this.state.isClicked ? 'fixed-nav menu-active' : 'fixed-nav' } style={ this.getStyles() }>
	          <div id="menu-button" onMouseEnter={this.teaseMenu} onMouseLeave={this.unteaseMenu} onClick={this.menuToggle} ref="menu-btn">     
	              <span className="menu-line"></span>
	          </div>
	          <span className="site-title">Lorem Ipsum</span>
	        </nav>
		)
	}
})

module.exports = MainNav;