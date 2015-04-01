$(document).ready(function(){

	$('.terminos').find($('a')).click(function(){
		$('.tc').css('display','block');
	})

	$('.cerrarTc').click(function(){
		$('.tc').css('display','none');
	})

	$('.styleselect').on('change', function(){
    	var selectText = $(this).children('select').children('option:selected').text();
    	$(this).children('span.listselect').html(selectText);
    	$(this).children('span.listselect').css('color','black');
	});

	$('.styleselect').each(function(index,element){
	    var selectText = $(element).children('select').children('option:selected').text();
	    $(element).children('span.listselect').html(selectText);
	    
	})

	var $anchoDoc = $(document).width();
	 
	 $(window).resize(function() {
	  var $anchoDoc = $(document).width();
	 });
	//variables de colores
	if ($anchoDoc < 768) {
		
	}else{
		
	}

	TweenMax.from("#todo", 1, {opacity:0});

	TweenMax.from("#photo", 1.5, {opacity:0, delay:0.2});

	TweenMax.from("#name", 0.8, {opacity:0, width:"5%", delay:0.3, ease:Expo.easeOut});
	TweenMax.from("#lastname", 0.8, {opacity:0, width:"5%", delay:0.4, ease:Expo.easeOut});
	TweenMax.from(".styleselect", 0.8, {opacity:0, width:"5%", delay:0.5, ease:Expo.easeOut});
	TweenMax.from("#numberdoc", 0.8, {opacity:0, width:"5%", delay:0.6, ease:Expo.easeOut});
	TweenMax.from("#email", 0.8, {opacity:0, width:"5%", delay:0.7, ease:Expo.easeOut});
	TweenMax.from("#phone", 0.8, {opacity:0, width:"5%", delay:0.8, ease:Expo.easeOut});
	TweenMax.from("#date", 0.8, {opacity:0, width:"5%", delay:0.9, ease:Expo.easeOut});
	
	TweenMax.from("#terminos", 1, {opacity:0, delay:1, ease:Power2.easeInOut});

	TweenMax.from("#botones", 0.8, {opacity:0, top:"15px", delay:1.2, ease:Expo.easeOut});

	$cat = localStorage.getItem("cat");

	$colores = ['#A467BB','#0FAECB','#63B427'];
	$openSelect = ['img/open1.jpg','img/open2.jpg','img/open3.jpg'];
	$openDate = ['img/date1.jpg','img/date2.jpg','img/date3.jpg'];
	$nomCat = ['Fashionistas','Viajeros','Techies'];

	$('input').css('border-color',$colores[$cat-1]);
	$('.formIbk select').css('background-image','url(' + $openSelect[$cat-1]+')');
	$('.formIbk select').css('border-color',$colores[$cat-1]);

	$('.styleselect').css('background-image','url(' + $openSelect[$cat-1]+')');
	$('.styleselect').css('border-color',$colores[$cat-1]);
	
	//$('.formIbk select').css('width','280px');

	$('h1').css('color',$colores[$cat-1]);
	$('.formIbk input.date').css('background-image','url(' + $openDate[$cat-1]+')');

	$('.botonEnviar').css('border-color',$colores[$cat-1]);
	$('.botonEnviar a').css('color',$colores[$cat-1]);
	
	$('.botonEnviar a').hover(function(){
		$(this).css('background-color',$colores[$cat-1]);
		$(this).css('color','white');
	}, function(){
		$(this).css('background-color','white');
		$(this).css('color',$colores[$cat-1]);
	})


	$('#titulo').append(' ' + $nomCat[$cat-1] + '!');


})