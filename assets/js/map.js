function initMap (){

var locations = {
    zoom:8,
    center: {lat:53.8008, lng:-1.5491},
};

var map = new google.maps.Map(document.getElementById("map"), locations); 

var infoWindow = null;

addPharmacy({coordinates:{lat:53.8013853,lng:-1.5643944},
    content:'<div class="map-click"><h4>Leeds</h4></div>',
    name: "Leeds",
    divid: "leeds"
});
addPharmacy({coordinates:{lat:53.9600,lng:-1.0873},
    content:'<div class="map-click"><h4>York</h4></div>',
    name: "York",
    divid: "york"
});
addPharmacy({coordinates:{lat:53.7960,lng:-1.7594},
    content:'<div class="map-click"><h4>Bradford</h4></div>',
    name: "Bradford",
    divid: "bradford"
});
addPharmacy({coordinates:{lat:53.4668,lng:-2.2339},
    content:'<div class="map-click"><h4>Manchester</h4></div>',
    name: "Manchester",
    divid: "manchester"
});


function addPharmacy(details){
    var marker = new google.maps.Marker({
        position:details.coordinates,
        map:map,
        icon:'http://maps.google.com/mapfiles/ms/icons/hospitals.png',
        content:details.content,
        name:details.name,
        divid:details.divid


    });


if(details.content){

marker.addListener('click',function(){
    if (infoWindow) {
        infoWindow.close();
    }

    infoWindow = new google.maps.InfoWindow({
    content:this.content
    });

    infoWindow.open(map, marker);
    console.log("clicked the marker ", this.divid);
    var elems = document.querySelectorAll(".pharmaselected");

    [].forEach.call(elems, function(el) {
        el.classList.remove("pharmaselected");
    });

    document.getElementById(this.divid).classList.add('pharmaselected');
});
}}}
