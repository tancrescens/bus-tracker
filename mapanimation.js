function initMap () {
    
    var options = {
        center: {lat: 1.3853796796577809, lng: 103.74487128465967},
        zoom: 17
    }
    
    // Creation of Map object
    map = new google.maps.Map(document.getElementById("map"), options)

    // Creation of Marker object
    let singapore = {lat: 1.3853796796577809, lng: 103.74487128465967};
    marker = new google.maps.Marker({position: singapore, map: map});
}

