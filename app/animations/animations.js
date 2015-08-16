var $ = require('jquery');
var Appear = require('../vendor/jquery.appear.js');
var PanelSnap = require('../vendor/jquery.panelSnap.js');


var $worktext = $('.worktext-appear-wrap'),
	$contact = $('#contact'),
	navH = $('.fixed-nav').outerHeight(),
	insidePosts,
	direction;




function hpGeneralPos(scrollPos) {
	if ( ) {
		insidePosts = false;
	} else if ( ) {
		insidePosts = true;
	}
};


function appearFns() {
	$worktext.on('appear', function() {
		$(this).addClass('worktext-fade-in');
	});
	$worktext.appear();
};

function panelSnapper() {
	panelOptions = {
	  panelSelector: 'section',
	  onSnapStart: function(){
	  },
	  onSnapFinish: function(){
	  },
	  onActivate: function(){
	  	var $hpItems = $('.hp-work-item');

	  	$hpItems.each(function() {
	  		checkStatus = $(this).hasClass('active');

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

function init() {
	panelSnapper();
	appearFns();
	hpGeneralPos();
}

init();

















module.exports = {}