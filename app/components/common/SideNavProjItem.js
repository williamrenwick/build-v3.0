var React = require('react');
var mixin = require('baobab-react/mixins').branch;
var menuActions = require('../../actions/actions.js');
var classNames = require('classnames');

var LiProjItem = React.createClass({
	mixins: [mixin],
    cursors: {
        projSideOpen: ['menu', 'projSideOpen']
    },
    handleClick: function(e, idx) {
        console.log(idx)
    },
    getStyles: function() {
    	var styleObj = {
    		backgroundImage: 'url(' + this.props.project.bgImg + ')',
    		height: heightCalc(this.props.totalAmount)
    	}

        function heightCalc(totalLiAmount) {
            var originalHeight = 100;
            var totalLiHeight = totalLiAmount * originalHeight;

            if (totalLiHeight < window.innerHeight) {
                var newHeight = window.innerHeight / totalLiAmount

                return newHeight

            } else if (totalLiHeight > window.innerHeight) {
                return originalHeight
            }
        }

    	return styleObj
    },
	render: function() {
		return (
			<li className={classNames({projLink: true, projLi: !this.state.projSideOpen })} style={ this.getStyles() } onClick={ this.handleClick }>
				<h1> {this.props.project.title} </h1>
			</li>
		)
	}
});

module.exports = LiProjItem;