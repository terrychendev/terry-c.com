function process(){

	var email = document.getElementsByName("email")[0].value;

    var message = document.getElementsByName("message")[0].value;

	var human = document.getElementsByName("human")[0].value;
	

	
	var dstring = new Array();
	dstring[0] = email;
	dstring[1] = message;
	dstring[2] = human;

	
/*	var form2 = '<div id = "form2">'+
      '<h2>Your Almost done!</h2>'+
		'<hr></hr>'+
		'<h3>Your Almost done!</h3>'+
        '<p><input size="50" type="text" value="" placeholder="Current Home Address" id="address"></p>'+
		'<p><input size="50" type="text" value="" placeholder="Original Purchase Price" id="pp"></p>'+
        '<p><input size="50" type="date" value="" placeholder="Original Purchase Date" id="date"></p>'+
		'<p><input size="50" type="text" value="" placeholder="Current Mortgage Amount" id="ma"></p>'+
		'<p><input size="50" type="text" value="" placeholder="Current Interest Rate" id="ir"></p>'+
		'<!--<p><input type="text" name="username" value="" placeholder="UserName" id="username"></p>'+
		'<p><input type="password" name="password" value="" placeholder="Password" id="password"></p>'+
        '<p class="remember_me">'+
        '<label>'+
        '<input type="checkbox" name="remember_me" id="remember_me">'+
        'Remember me on this computer'+
        '</label>'+
        '</p>-->'+
        '<p class="submit"><input type="button" name="commit" value="Submit Information" onclick="process2()"></p>'+
 '</div>';
	*/

	if(dstring[2] === "2")
	{
	
	$.ajax({
		type: 'POST',
		url: 'index.php',
		data: {myArray:dstring},
		success: 
		function() {
/*		$("#form1").fadeOut(300, "linear").delay(700);
		$("#form2").fadeIn(3000, "linear");*/
		$('div.fail').removeClass('fail_post');
		$('div.success').addClass('success_post');
		}

	});
	
	}
	else{
		$('div.success').removeClass('success_post');
		$('div.fail').addClass('fail_post');

		
	}

}