var React = require('react');
var mixin = require('baobab-react/mixins').branch;
var menuActions = require('../../actions/actions.js');
var classNames = require('classnames');

var MainSide = React.createClass({
    mixins: [mixin],
    cursors: {
        projSideOpen: ['menu', 'projSideOpen']
    },
    handleClick: function() {
        if (!this.state.projSideOpen) {
            menuActions.projSideOpen();
        } else if (this.state.projSideOpen) {
            menuActions.projSideClose();
        }  

    },
	render: function() {
		return (
            <div id="main-side" >
    			<ul>
                    <li id="homeLi">
                        <span className="number-wrap">
                            <span className="page-number">1</span>/<span className="total-number">3</span>
                        </span>
                        <span className="page-title">Home</span>
                    </li>
                    <li id="projLi">
                        <span className="number-wrap">
                            <span className="page-number">2</span>/<span className="total-number">3</span>
                        </span>
                        <span className="page-title">Projects</span>
                        <div id="view-all-btn" className={ classNames({close: this.state.projSideOpen}) } onClick={this.handleClick}></div>
                    </li>
                    <li id="contactLi">
                        <span className="number-wrap">
                            <span className="page-number">3</span>/<span className="total-number">3</span>
                        </span>
                        <span className="page-title">Contact</span>
                    </li>
                </ul>
            </div>
		)
	}
});

module.exports = MainSide;