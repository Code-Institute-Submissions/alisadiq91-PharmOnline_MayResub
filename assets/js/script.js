// sidenav functions
// For this code I had help from https://www.w3schools.com/howto/howto_js_sidenav.asp

/* Set the width of the side navigation to 250px */
function openNav() {
  
  
  document.getElementById("mySidenav").style.width = "250px";
  setTimeout(function(){
      divsToHide = document.querySelectorAll("#mySidenav a");
        for(var i = 0; i < divsToHide.length; i++){
            divsToHide[i].classList.remove("hide");
        }
  }, 300);
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  divsToHide = document.querySelectorAll("#mySidenav a");
  for(var i = 0; i < divsToHide.length; i++){
        divsToHide[i].classList.add("hide");
  }
  document.getElementById("mySidenav").style.width = "0";
  

}

//steps section mouseover 

const numSlides = 4;

$(document).ready(function () {
    for (let i = 1; i <= numSlides; i++) {
        $(`.hover-me-${i}`).mouseover(function () {
            $(`p.show-me-${i}`).show();
            $(`div.placehold-${i}`).hide();
        });
        $(`.hover-me-${i}, p.show-me-${i}`).mouseleave(function () {
            $(`p.show-me-${i}`).hide();
            $(`div.placehold-${i}`).show();
        });
        $(`p.show-me-${i}`).mouseover(function () {
            $(this).stop(true, true).show();
        });
    }
});
 
//faqs section toggle - I had help from https://www.jqueryscript.net/accordion/Simple-Smooth-FAQ-Accordion-with-jQuery-CSS-FAQ-Slider.html to write this code

  var action = 'click';
  var speed = "500";

  $(document).ready(function(){

        $('.question').on(action,function(){

            $(this).next().slideToggle(speed)
            .siblings('.answer').slideUp();

            var img = $(this).children('.img');

            $('.img').not(img).removeClass('rotate');

            img.toggleClass('rotate');

        });
  });

// function checking if string is empty to use with form which I used from https://stackoverflow.com/questions/154059/how-can-i-check-for-an-empty-undefined-null-string-in-javascript

String.prototype.isEmpty = function() {
    return (this.length === 0 || !this.trim());
};

//alert for contact us form submission 

 function showAlert(){
      alert("Thank you for contacting us!\nWe aim to reply to all queries within 2 working days.");
 }



//emailJS contact us form

function sendEmail() {

    var name = document.getElementById("fromName").value;
	  var email = document.getElementById("fromEmail").value;
	  var message = document.getElementById("message").value;
	  if (name.isEmpty() == false){
		if (email.isEmpty() == false){
		  if (message.isEmpty() == false){
				 var contactForm ={
					  from_name: name,
					  from_email: email,
					  message: message,
				  };
                // emailJs key
                  emailjs.send("service_liljt1y","template_e2wnhxl",contactForm)
				  .then(function(response){
					  console.log("success", response.status);
					  showAlert(); 
					  document.getElementById("fromName").value = '';
					  document.getElementById("fromEmail").value = '';
					  document.getElementById("message").value = '';
				  });
            }
            else{
            alert("Invalid content entered. Fields can not be empty.");
            }
        }
        else{
        alert("Invalid content entered. Fields can not be empty.");
        }
      }
    else{
    alert("Invalid content entered. Fields can not be empty.");
    }
}
