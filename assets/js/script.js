$(document).ready(function(){
    $("steps-hover").mouseenter(function(){
        $(this).html("<p>All you need to do is simply, download our app, register your details and select which medication you would like to order!</p>");

    });

    $("steps-hover").mouseout(function(){
        $(this).css("color","red");

    });


});



$(function(){
    $("#steps-hover").hover(function(){
        $(this).html("<p>All you need to do is simply, download our app, register your details and select which medication you would like to order!</p>");

    }, function(){
        $(this).css("color","red");
    });
});
