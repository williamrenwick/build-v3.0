var React = require('react')

var MainSide = React.createClass({
	render: function() {
		return (
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
                    <div id="view-all-btn"></div>
                </li>
                <li id="contactLi">
                    <span className="number-wrap">
                        <span className="page-number">3</span>/<span className="total-number">3</span>
                    </span>
                    <span className="page-title">Contact</span>
                </li>
              </ul>
		)
	}
});

module.exports = MainSide;