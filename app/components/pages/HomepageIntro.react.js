var React = require('react')
var Data = require('../../data/projects.js')

var introText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet mi eleifend, vestibulum nunc eget, cursus urna. Maecenas elementum mauris et lorem congue, ut rhoncus lacus ullamcorper. Nulla sed ipsum sed tortor facilisis tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit.';

var HomepageIntro = React.createClass({
	render: function() {
		return (
			<section id="intro">
                <div id="intro-text" className="js-fade-text">
                	<h1>{introText}</h1>
                </div>
                <div id="intro-arrow" className="down-arrow"></div>
        	</section>
        )
	}
});

module.exports = HomepageIntro