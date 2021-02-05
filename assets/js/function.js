function initMap (){

var locations = {
    zoom:8,
    center: {lat:53.8008, lng:-1.5491},
}

var map = new google.maps.Map(document.getElementById("map"), locations); 



addPharmacy({coordinates:{lat:53.8013853,lng:-1.5643944},
    content:'<h4>Leeds</h4><h6>Woodhouse<br>Leeds<br>LS2 9JT</h6>'
});
addPharmacy({coordinates:{lat:53.9600,lng:-1.0873},
    content:'<h4>York</h4><h6>Heslington<br>York<br>YO10 5DD</h6>'
});
addPharmacy({coordinates:{lat:53.7960,lng:-1.7594},
    content:'<h4>Bradford</h4><h6>Richmond Rd<br>Bradford<br>BD7 1DP</h6>'
});
addPharmacy({coordinates:{lat:53.28359,lng:-2.14308},
    content:'<h4>Manchester</h4><h6>Oxford Rd<br>Manchester<br>M13 9PL</h6>'
});


function addPharmacy(details){
    var marker = new google.maps.Marker({
        position:details.coordinates,
        map:map,
        icon:'http://maps.google.com/mapfiles/ms/icons/hospitals.png',
        content:details.content,


    });


if(details.content){
var infoWindow = new google.maps.InfoWindow({
    content:details.content
});

marker.addListener('click',function(){
    infoWindow.open(map, marker);
});
}}}