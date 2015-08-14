var React = require('react');
var mixin = require('baobab-react/mixins').branch;
var menuActions = require('../../actions/actions.js');
var classNames = require('classnames');

var LiProjItem = React.createClass({
	mixins: [mixin],
    cursors: {
        projSideOpen: ['menu', 'projSideOpen']
    },
    getStyles: function() {
    	var styleObj = {
    		backgroundImage: 'url(' + this.props.project.bgImg + ')',
    		height: window.innerHeight / this.props.totalAmount
    	}


    	return styleObj
    },
	render: function() {
		console.log(this.props.totalAmount)
		return (
			<li className={classNames({projLink: true, projLi: !this.state.projSideOpen })} style={ this.getStyles() }>
				<h1> {this.props.project.title} </h1>
			</li>
		)
	}
});

module.exports = LiProjItem;