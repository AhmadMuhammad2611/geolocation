mymap = document.getElementById('mymap');

function getlocationdata() {
    // check availability of geolocation as an object inside navigator object
    if (navigator.geolocation) {
        // available
        // 2- get permission => getcurrentposition() => exist inside geolocation object
        navigator.geolocation.getCurrentPosition(getposition, errorhandeler);

    } else {
        // not available
        mymap.innerText = "Sorry , Please Update Your Browser And Try Again !";
    }
}
function getposition(position) {
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;

    // steps to deal with google
    //1 - create object from google LatLng 
    var mylocation = new google.maps.LatLng(lat, lon);
    //2- create specs of your map
    var myspecs = { center: mylocation, zoom: 17 };
    //3- display map inside div
    new google.maps.Map(mymap, myspecs);




    //var latlon = lat + ' , ' + lon;
    //mymap.innerText = latlon;

    //console.log();
    //alert("success");
    // read all data => 
}
function errorhandeler(error) {
    //alert("Error");
    // errors codes
    // PERMISSION_DENIED
    // POSITION_UNAVAIBALBE
    // TIMEOUT
    // UNKOWN_ERROR
    switch (error.code) {
        case error.PERMISSION_DENIED:
            mymap.innerText = "Sorry : You Rejected Access !";
            break;
        case error.POSITION_UNAVAIBALE:
            mymap.innerText = "POSITION_UNAVAIBALE -   bla ";
            break;
        case error.TIMEOUT:
            mymap.innerText = "TimeOUt";
            break;
        case error.UNKOWN_ERROR:
            mymap.innerText = "UNKOWN_ERROR";
            break;

    }
}