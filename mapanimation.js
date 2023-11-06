
// console.log('connected');
// // Initialize and add the map
// let map;

// async function initMap() {
//   // The location of Singapore
//   const position = { lat: -1.3825533620627133, lng: 103.7430026798573 };
//   // Request needed libraries.
//   //@ts-ignore
//   const { Map } = await google.maps.importLibrary("maps");
//   const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

//   // The map, centered at Singapore
//   map = new Map(document.getElementById("map"), {
//     zoom: 4,
//     center: position,
//     mapId: "DEMO_MAP_ID",
//   });

//   // The marker, positioned at Uluru
//   const marker = new AdvancedMarkerElement({
//     map: map,
//     position: position,
//     title: "Singapore",
//   });
// }

// initMap();