$(document).ready(function(){
	burger();
	//projectAnimation();
	smoothScroll(300);

	$('.projects-container').owlCarousel({
		loop:true,
		responsive:{
			300:{
				items:1
			},
			1000:{
				items:3
			}
		}
	});


});

class Carousel{
	constructor(options){
		this.el = options.el;	
		this.show = options.show;
		this.right = options.right;
		this.left = options.left;
		this.slide_name = options.slide_name
		this.init();
	}

	init(){
		this.controlInit();
	}

	controlInit(){
		document.querySelector(this.right).addEventListener('click',function(){
			// alert($(this.slide_name+':nth-child(1)'));
			// $(this.slide_name+':nth-child(1)').append(this.el);
			$(this.el).append($(this.slide_name+':nth-child(1)'));
		}.bind(this));
		document.querySelector(this.left).addEventListener('click',function(){
			alert('left');
		}.bind(this));
	}
}


$(window).scroll(function(){

	var wScroll = $(this).scrollTop();

	//console.log(wScroll);
	if (wScroll > $(".skills").offset().top - $(window).height()){
		animatedGraph('.skill');
	}

	if (wScroll > $(".projects").offset().top - $(window).height()){
		$('.project:nth-child(1)').css({'opacity':'1', 'display':'flex'});
		$('.project:nth-child(2)').css({'opacity':'1', 'display':'flex'});
		$('.project:nth-child(3)').css({'opacity':'1', 'display':'flex'});
	}

});

function smoothScroll (duration) {
	$('a[href^="#"]').on('click', function(event) {
		var target = $( $(this).attr('href') );

		$('.navigation').removeClass('on');
		$('.navigation ul').removeClass('on');
	
	    if( target.length ) {
	        event.preventDefault();
	        $('html, body').animate({
	            scrollTop: target.offset().top
	        }, duration);
	    }
	});
}

function burger(){
	document.querySelector('.burger').addEventListener('click',function(){
		document.querySelector('div.navigation ul').classList.toggle("on");
		document.querySelector('div.navigation').classList.toggle("on");
	});
}


// function projectAnimation(){
// 	$('.project').hover(function(){
// 		$(this).find('.project-heading').fadeToggle('slow');
// 		$(this).find('.tags').fadeToggle('slow');
// 		$(this).find('.project-cta').fadeToggle('slow');
// 	});
// }

function animatedGraph(input){

	$(input).each(function( index ) {
		var self = this;
		setTimeout(function(){
		 var bar = $( self ).find('.bar');
 		 var percentage = bar.attr('percentage');
 		 bar.css('width',percentage);
 		 //console.log(bar,percentage);
		},index *100);		 
 	});
}