$(document).ready(function(){
		
		//$('#'+localStorage.getItem("cat")).find('.baseBtn').css('display','none');
		//$('#'+localStorage.getItem("cat")).find('.overBtn').css('display','block');

		//console.log(localStorage.getItem("fash"),localStorage.getItem("viajero"), localStorage.getItem("tech") )

		if (localStorage.getItem("fash") == 'true') {
			$('#1').find('.baseBtn').css('display','none');
			$('#1').find('.overBtn').css('display','block');
		};

		if (localStorage.getItem("viajero") == 'true') {
			$('#2').find('.baseBtn').css('display','none');
			$('#2').find('.overBtn').css('display','block');
		};

		if (localStorage.getItem("tech") == 'true') {
			$('#3').find('.baseBtn').css('display','none');
			$('#3').find('.overBtn').css('display','block');
		};

		TweenMax.from("#mano", 0.8, {opacity:0, top:"50px", delay:0.15, ease:Expo.easeOut});
		TweenMax.from("#parrafos", 0.8, {opacity: 0, left:"100px", delay:0.30, ease:Expo.easeOut});
		TweenMax.from("#categorias", 0.8, {opacity:0,  delay:0.4, ease:Expo.easeOut});
	})