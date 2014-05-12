$(document).ready(function(){
		$('input').change(function(){
			var  p1=$('input[id="f-product1"]:checked').val()
				,p2=$('input[id="f-product2"]:checked').val()
				,p3=$('input[id="f-product3"]:checked').val()
				
			if (p1){
				$('span.sk1').html("Ruby(Rails)");
				$('span.sk2').html("php (Laravel)");
				$('span.sk3').html("CMS(Joomla, DNN)");
				$('span.sk4').html("C#, ASP.NET");
				$('span.sk5').html("VBA");
				$('span.sk6').html("DataBase (SQL)");}
			//else
				//$('#car').removeClass('selected')

			if (p2){
				$('span.sk1').html("JavaScript(jQuery, Ajax,DHTMLX)");
				$('span.sk2').html("HTML");
				$('span.sk3').html("CSS, twitter bootstrap");
				$('span.sk4').html("PhotoShop");
				$('span.sk5').html("Illustrator");
				$('span.sk6').html("?");}
			//else
				//$('#bus').removeClass('selected')

			if (p3){
				$('span.sk1').html("Android SDK");
				$('span.sk2').html("Version Control (Git)");
				$('span.sk3').html("<div class='long'>3D modelling (SolidWorks, AutoCad, Pro/Engineer)</div>");
				$('span.sk4').html("3D printing tech");
				$('span.sk5').html("MS Office");
				$('span.sk6').html("?");}
			//else
				//submit.attr('disabled','disabled')
		}).eq(0).trigger('change');
	});
	
