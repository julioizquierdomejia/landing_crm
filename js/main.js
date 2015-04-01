$(document).ready(function(){

	var $anchoDoc = $(document).width();

	/* xxxxxxxxxxxxxxxxxxxxxxx */
	var $me;
	var $fash = true;
	var $viajero = false;
	var $tech = true;
	var $tipoUser = true;
	/* xxxxxxxxxxxxxxxxxxxxxxx */

	$(window).resize(function() {
		var $anchoDoc = $(document).width();
	});

	//colocar los stopers
	if ($fash) {$('#fashionista').append('<div class="off" id="offfash"><img src="img/sellos/sello1.png"></div>')};
	if ($viajero) {$('#viajero').append('<div class="off" id="offViajero"><img src="img/sellos/sello2.png"></div>')};
	if ($tech) {$('#tech').append('<div class="off" id="offTech"><img src="img/sellos/sello3.png"></div>')};

	if ($fash) {$('#fashionista').find($('.overAll')).remove()};
	if ($viajero) {$('#viajero').find($('.overAll')).remove()};
	if ($tech) {$('#tech').find($('.overAll')).remove()};


	
	var $conten = $('.conten');
	var $item = $conten.find($('.item'));
	var $overAll = $item.find($('.overAll'));
	var $button = $item.find('a');

	$button.click(function(){
		localStorage.setItem("cat", $(this).attr('id'));

		localStorage.setItem("fash", $fash);
		localStorage.setItem("viajero", $viajero);
		localStorage.setItem("tech", $tech);

		$me = $(this);

		if (!$tipoUser) {
			$me.attr('href','formulario.html')
		}else{
			$me.attr('href','final.html')
		};
		
	})


	//hover del Home
	if ($anchoDoc < 768) {

		$item.click(function(){

			TweenMax.to($item.find($('.overAll')), 0.32, {css:{opacity:0}});
			$item.find($('.titulo')).removeClass('overAllMobile')

			TweenMax.to($item, 0.32, {css:{height:'31.5%'}});
			var $me = $(this);
			TweenMax.to($(this), 0.32, {css:{height:'650px'}, onComplete:function(){
				$('.conten').scrollTo( $me, 800 );
			}});

			TweenMax.to($(this).find($('.overAll')), 0.32, {css:{opacity:1}});
			$(this).find($('.titulo')).addClass('overAllMobile')
			TweenMax.to($('.off'), 0.32, {css:{opacity:0}});
			TweenMax.to($(this).find($('.off')), 0.32, {css:{opacity:1}});
		})
	}else{
		//mas de 768px
		$button.hover(function(){
			$color = $(this).attr('color')
			$(this).css('color',$color)
		}, function(){
			$(this).css('color','white')
		})
		
		$item.hover(function(){
			TweenMax.to($item, 0.32, {css:{width:'30%'}});
			TweenMax.to($(this), 0.32, {css:{width:'40%'}});

			TweenMax.to($(this).find($('.overAll')), 0.32, {css:{opacity:1}});
			TweenMax.to($(this).find($('.off')), 0.32, {css:{opacity:0.8}});	
			
		}, function(){
			TweenMax.to($item, 0.32, {css:{width:'33.33%'}});
			TweenMax.to($(this).find($('.overAll')), 0.32, {css:{opacity:0}});
			TweenMax.to($(this).find($('.off')), 0.32, {css:{opacity:0}});
		})

	};
	
	
})


