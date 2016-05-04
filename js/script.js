'use strict'

var $imgs = $('.wrapper img');
var length = $imgs.length;
var k = 0;

function goOn(){

	var click = k % length;

	k++;

	for (var i = 0; i < length; i++){

		if (click == i) $imgs.eq(i).animate({
			opacity: 1
		});

		else $imgs.eq(i).css({
			opacity: 0
		});
	};
};

var $btn =$('.wrapper');

$btn.on('click', goOn);