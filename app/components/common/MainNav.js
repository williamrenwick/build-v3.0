var React = require('react')
var $ = require('jQuery')
var menuActions = require('../../actions/actions.js')


var MainNav = React.createClass({
	getInitialState: function() {
		return {moveAmount: 0}
	},
	teaseMenu: function(e) {
		menuActions.isHovering();
		var newX = this.inAmount(e);

		this.setState({ moveAmount: newX });
	},
	unteaseMenu: function(e) {
		this.setState({ moveAmount: 0 });
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
	menuBtnOut: function() {

	},
	render: function() {

		return (
			<nav className="fixed-nav" style={{transform: 'translateX(' + this.state.moveAmount +'px)'}}>
	          <div id="menu-button" onMouseEnter={this.teaseMenu} onMouseLeave={this.unteaseMenu} ref="menu-btn">   
	              <span className="menu-line"></span>
	          </div>
	          <span className="site-title">Lorem Ipsum</span>
	        </nav>
		)
	}
})

module.exports = MainNav;