var React = require('react');
var ViewBtn = require('./SideNavViewBtn.js');
var mixin = require('baobab-react/mixins').branch;
var menuActions = require('../../actions/actions.js');
var classNames = require('classnames');


var LiProjItem = React.createClass({
	mixins: [mixin],
    cursors: {
        projSideOpen: ['menu', 'projSideOpen'],
        menuActive: ['menu', 'isOpen']
    },
    handleClick: function() {
        var $window = $(window),
            workPostH = $window.height(),
            postIndex = this.props.project.index,
            postPosition = workPostH * postIndex;


        menuActions.notClicked();
        $window.scrollTop(postPosition);
        
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
                <Link to={this.props.project.link}>
    				<h1><span className="strikethrough">{this.props.project.title}</span></h1>
                    <ViewBtn />
                </Link>
			</li>
		)
	}
});

module.exports = LiProjItem;