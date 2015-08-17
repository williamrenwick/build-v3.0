var JColor = require('../vendor/jquery.color-2.1.2.min.js');
var PROJECTS = require('../data/projects.js');

function Color(colourString) {
    this.param = colourString
    this.getDigits = function() {
        var r = /\d+/g;
        var self = this;
        var match;

        while ((match = r.exec(self.param)) != null ) {
            match = match;
        }
    }
}




function changeItemBg(scrollPos, DOMNode) {
	var $window = $(window),
        windowH = $window.height(),
        firstPostTop = windowH,
        lastPostBtm = windowH * PROJECTS.length,
        lastPostTop = lastPostBtm - windowH,
        animationBeginPos = firstPostTop,
		animationEndPos = lastPostTop,
		beginningColor = new $.Color('rgb(231, 241, 255)'),
		endingColor = new $.Color('rgb(242, 231, 220)');


	if (scrollPos >= animationBeginPos && scrollPos <= animationEndPos ) { 
		var percentScrolled = scrollPos / ( animationEndPos - animationBeginPos );
        var newRed = beginningColor.red() + ( ( endingColor.red() - beginningColor.red() ) * percentScrolled );
        var newGreen = beginningColor.green() + ( ( endingColor.green() - beginningColor.green() ) * percentScrolled );
        var newBlue = beginningColor.blue() + ( ( endingColor.blue() - beginningColor.blue() ) * percentScrolled );
        var newColor = new $.Color( newRed, newGreen, newBlue );

        console.log(newColor);

        return newColor

	} else if ( scrollPos > animationEndPos ) {
		return endingColor
    } else if ( scrollPos < animationBeginPos ) {
        return beginningColor
    } else { }
};


module.exports = {
    workInfoBg: changeItemBg
}