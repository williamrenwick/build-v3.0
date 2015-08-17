
var PanelSnap = require('../vendor/jquery.panelSnap.js');
var JColor = require('../vendor/jquery.color-2.1.2.min.js');
var PROJECTS = require('../data/projects.js');


var $window = $(window),
	windowH = $window.height(),
	$nav = $('.fixed-nav'),
	navH = $nav.height(),
	relWindowH = windowH - navH,
	$workItem = $('.hp-work-item'),
	$workInfo = $('.work-info'),
	totalPosts = $workItem.length,
	postForIndex = totalPosts - 1,
	$lastPost = $workItem.eq(postForIndex),
	firstPostTop = windowH,
	lastPostBtm = windowH * PROJECTS.length,
	lastPostTop = lastPostBtm - windowH,
	$contact = $('#contact'),
	insidePosts,
	lastScrollTop;



function hpScroller() {
	$(window).on('scroll', function() {
		var scrollPos = $(this).scrollTop();

		hpGeneralPos(scrollPos);
		changeItemBg(scrollPos);
		menuColor();

		lastScrollTop = scrollPos;

	});
}


function hpGeneralPos(scrollPos) {
	if ( (scrollPos < relWindowH) ||  (scrollPos >= lastPostBtm) ) {
		insidePosts = false;
	} else if ( scrollPos > relWindowH ) {
		insidePosts = true;
	}
};

function menuColor() {
	var $siteTitle = $('.site-title');

	if (insidePosts == false) {
		
		$nav.removeClass('onDark');

	} else if (insidePosts == true) {
		
		$nav.addClass('onDark');
	}
};

function changeItemBg(scrollPos) {
	var animationBeginPos = firstPostTop,
		animationEndPos = lastPostTop,
		beginningColor = new $.Color('rgb(231, 241, 255)'),
		endingColor = new $.Color('rgb(242, 231, 220)');



	if (scrollPos >= animationBeginPos && scrollPos <= animationEndPos ) { 
		var percentScrolled = scrollPos / ( animationEndPos - animationBeginPos );
        var newRed = beginningColor.red() + ( ( endingColor.red() - beginningColor.red() ) * percentScrolled );
        var newGreen = beginningColor.green() + ( ( endingColor.green() - beginningColor.green() ) * percentScrolled );
        var newBlue = beginningColor.blue() + ( ( endingColor.blue() - beginningColor.blue() ) * percentScrolled );
        var newColor = new $.Color( newRed, newGreen, newBlue );

        console.log($workInfo);

        $workInfo.animate({ backgroundColor: newColor }, 0);
	} else if ( scrollPos > animationEndPos ) {
		$workInfo.animate({ backgroundColor: endingColor }, 0);
    } else if ( scrollPos < animationBeginPos ) {
        $workInfo.animate({ backgroundColor: beginningColor }, 0);
    } else { }
};

function panelSnapper() {
	var panelOptions = {
	  panelSelector: 'section',
	  onSnapStart: function(){
	  },
	  onSnapFinish: function(){
	  },
	  onActivate: function(){
	  	var $hpItems = $('.hp-work-item');

	  	$hpItems.each(function() {
	  		var checkStatus = $(this).hasClass('active');

	  		if (!checkStatus) {
	  			$(this).find('.worktext-appear-wrap').removeClass('worktext-fade-in');
	  		}
	  	});

	  	
	  },
	  directionThreshold: 0,
	  slideSpeed: 400,
		  delay: 0
	}		

	$('body').panelSnap(panelOptions);
};



module.exports = {
	init: function() {
		hpScroller();
		panelSnapper();	
	}
}