var JColor = require('../vendor/jquery.color-2.1.2.min.js');
var PROJECTS = require('../data/projects.js');

function Color(colourString) {
    this.colourString = colourString,
    this.getDigits = function() {
        var self = this,
            r = /\d+/g,
            matches = self.colourString.match(/(\d+), (\d+), (\d+)/),
            number1 = Number(matches[1]),
            number2 = Number(matches[2]);

        return matches
    },
    this.red = function() {
        var self = this,
            numbers = self.getDigits(),
            redNumber = Number(numbers[1]);

        return redNumber
    },
    this.green = function() {
        var self = this,
            numbers = self.getDigits(),
            greenNumber = Number(numbers[2]);

        return greenNumber
    },
    this.blue = function() {
        var self = this,
            numbers = self.getDigits(),
            greenNumber = Number(numbers[3]);

        return greenNumber
    }

}

function changeItemBg(scrollPos) {
	var $window = $(window),
        windowH = $window.height(),
        firstPostTop = windowH,
        lastPostTop = windowH * PROJECTS.length,
        animationBeginPos = firstPostTop,
		animationEndPos = lastPostTop+ windowH,
		beginningColor = new Color('rgb(231, 241, 255)'),
		endingColor = new Color('rgb(242, 231, 220)');


    //console.log('scrollPos', scrollPos, 'endPos', animationEndPos, 'beginPos', animationBeginPos)

	if (scrollPos >= animationBeginPos && scrollPos <= animationEndPos ) { 
		var percentScrolled = scrollPos / ( animationEndPos - animationBeginPos );
        var newRed = Math.round(beginningColor.red() + ( ( endingColor.red() - beginningColor.red() ) * percentScrolled ));
        var newGreen = Math.round(beginningColor.green() + ( ( endingColor.green() - beginningColor.green() ) * percentScrolled ));
        var newBlue = Math.round(beginningColor.blue() + ( ( endingColor.blue() - beginningColor.blue() ) * percentScrolled ));
        var newColor = 'rgb(' + newRed + ', ' + newGreen +', ' + newBlue + ')';

        //console.log('newColor', newColor, 'percentScrolled', percentScrolled);
        return newColor

	} else if ( scrollPos > animationEndPos ) {
		return endingColor.colourString
    } else if ( scrollPos < animationBeginPos ) {
        return beginningColor.colourString
    }
};


module.exports = {
    workInfoBg: changeItemBg
}