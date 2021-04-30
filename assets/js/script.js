// sidenav functions

/* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}



//steps section mouseover 
 
 $(document).ready(function () {
    $(".hover-me-1").mouseover(function () {
      $("p.show-me-1").show();
      $("div.placehold-1").hide();
    });
    $(".hover-me-1, p.show-me-1").mouseleave(function () {
      $("p.show-me-1").hide();
       $("div.placehold-1").show();
    });
    $("p.show-me-1").mouseover(function () {
      $(this).stop(true, true).show();
    });
  });


   $(document).ready(function () {
    $(".hover-me-2").mouseover(function () {
      $("p.show-me-2").show();
      $("div.placehold-2").hide();
    });
    $(".hover-me-2, p.show-me-2").mouseleave(function () {
      $("p.show-me-2").hide();
       $("div.placehold-2").show();
    });
    $("p.show-me-2").mouseover(function () {
      $(this).stop(true, true).show();
    });
  });

  
  
   $(document).ready(function () {
    $(".hover-me-3").mouseover(function () {
      $("p.show-me-3").show();
      $("div.placehold-3").hide();
    });
    $(".hover-me-3, p.show-me-3").mouseleave(function () {
      $("p.show-me-3").hide();
       $("div.placehold-3").show();
    });
    $("p.show-me-3").mouseover(function () {
      $(this).stop(true, true).show();
    });
  });

  
  
   $(document).ready(function () {
    $(".hover-me-4").mouseover(function () {
      $("p.show-me-4").show();
      $("div.placehold-4").hide();
    });
    $(".hover-me-4, p.show-me-4").mouseleave(function () {
      $("p.show-me-4").hide();
       $("div.placehold-4").show();
    });
    $("p.show-me-4").mouseover(function () {
      $(this).stop(true, true).show();
    });
  });



//faqs section toggle

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

  $(document).ready(function(){

    $('.question').on("click",function(){
        $(this).show('.fa-arrow-circle-down');

        
    });
  });

//alert for contact us form submission 

 function showAlert(){
      alert("Thank you for contacting us!\nWe aim to reply to all queries within 2 working days.");
  }



//emailJS contact us form

function sendEmail() {

    var name = document.getElementById("fromName").value;
	  var email = document.getElementById("fromEmail").value;
	  var message = document.getElementById("message").value;
	  if (name.length > 0){
		if (email.length > 0){
		  if (message.length > 0){
				 var contactForm ={
					  from_name: name,
					  from_email: email,
					  message: message,
				  };

                  emailjs.send("service_liljt1y","template_e2wnhxl",contactForm)
				  .then(function(response){
					  console.log("success", response.status);
					  showAlert(); 
					  document.getElementById("fromName").value = '';
					  document.getElementById("fromEmail").value = '';
					  document.getElementById("message").value = '';
				  });
}

}
	  }
  }
