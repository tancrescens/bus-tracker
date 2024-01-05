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


// run() and getBusLocations() calls api and returns quried data in console respectively
async function run(){
    // get bus data    
	const locations = await getBusLocations();
	console.log(new Date());
	console.log(locations);

	// timer
	setTimeout(run, 15000);
}

// Request bus data from datamall
async function getBusLocations(){
    var myHeaders = new Headers();
    myHeaders.append("AccountKey", "jjGDI3/TTG6wPZBatS96ww==");
    // myHeaders.append("Host", "http://127.0.0.1:5500");
    // myHeaders.append("Access-Control-Allow-Origin", "http://127.0.0.1:5500");

    var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
    };

    // fetch("http://datamall2.mytransport.sg/ltaodataservice/BusArrivalv2?BusStopCode=44461&ServiceNo=188", requestOptions)
 fetch("https://reqres.in/api/users", requestOptions)
    .then(result => result.json())
    .then(data => console.log(JSON.parse(data)));
    // .catch(error => console.log('error', error));
}
getBusLocations();

// run();

//Goal: (DISPLAY markers) of (BUS 188) of (user selected timing)
// If (tracking bus: refresh run every 5s)
// If
