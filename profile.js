function setupHandlers() {
  $('.animate').on('click', headerEffect);
  $('#greeting').on('click', greetingDisplay);
  $('.unanimate').on('click', actionsStop);
}
$(document).ready(setupHandlers);

function headerEffect(){
	$('h4').animate(
    {fontSize: 200},
    500)
    setTimeout(shrink, 500)
}
function shrink()
{
	$('h4').animate(
		{fontSize:90}, 500)
		headerEffect()

}
function greetingDisplay() {
  var userName = $('#username').val();
  $('.welcome').text('Welcome '+ userName+ '!');
  $('.welcome').animate({opacity:1}, 1)
  $('.welcome').animate({fontSize:50}, 2000)
}

function setup() {
  $("#ok_button").click(greeting);
}

$(document).ready(setup)

 function stopMovement(){
     $('.welcome').animate({fontSize:50}, 1000)
 }
 function actionsStop(){
     $('.welcome').animate({opacity: 0}, 1000)
     $('h4').animate({fontSize:90}, 5000)
 }
