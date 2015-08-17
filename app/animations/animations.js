var PanelSnap = require('../vendor/jquery.panelSnap.js');
var JColor = require('../vendor/jquery.color-2.1.2.min.js');
var PROJECTS = require('../data/projects.js');


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
		panelSnapper();	
	}
}