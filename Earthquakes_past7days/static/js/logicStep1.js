// Add console.log to check to see if our code is working.
console.log("working");

// //Making a variable to store the data from cities.js
// var cityData = cities;

// // Loop through the cities array and create one marker for each city.
// cityData.forEach(function(city) {
//     console.log(city)
//     L.circleMarker(city.location, {
//         radius: city.population/200000,
//         color: "orange",
//         lineWeight: 4
//     })
//     .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population + "</h3>")
//   .addTo(map);
// });

// //Adding a marker to the map
// L.circleMarker([34.0522, -118.2437], {
//     color: 'black',
//     radius: 300,
//     fillColor: 'yellow'
// }).addTo(map);

// Add GeoJSON data.
// let sanFranAirport =
// {"type":"FeatureCollection","features":[{
//     "type":"Feature",
//     "properties":{
//         "id":"3469",
//         "name":"San Francisco International Airport",
//         "city":"San Francisco",
//         "country":"United States",
//         "faa":"SFO",
//         "icao":"KSFO",
//         "alt":"13",
//         "tz-offset":"-8",
//         "dst":"A",
//         "tz":"America/Los_Angeles"},
//         "geometry":{
//             "type":"Point",
//             "coordinates":[-122.375,37.61899948120117]}}
// ]};

// // Grabbing our GeoJSON data.
// L.geoJSON(sanFranAirport).addTo(map);

// //pointToLayer
// // Grabbing our GeoJSON data.
// L.geoJSON(sanFranAirport, {
//     // We turn each feature into a marker on the map.
//     pointToLayer: function(feature, latlng) {
//       console.log(feature);
//       return L.marker(latlng)
//       .bindPopup("<h2>" + feature.properties.name + "</h2>");
//     }

//   }).addTo(map);

// //onEachFeature
// //Grabbing our GeoJSON data
// L.geoJson(sanFranAirport, {
//     onEachFeature: function(feature, layer) {
//         console.log(layer);
//         layer.bindPopup("<h2>" +'Airport Code: ' + feature.properties.faa + "</h2>");
//         layer.bindPopup('<h2> Airport Code: `${feature.properties.faa}`</h2>')
//       }
// }).addTo(map);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});

// We create the dark view tile layer that will be an option for our map.
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create a base layer that holds both maps.
let baseMaps = {
  "Streets": streets,
  "satelliteStreets": satelliteStreets
};

// Create the map object with a center and zoom level.
let map = L.map('mapid', {
  center: [39.5, -98.5],
  zoom: 3,
  layers: [streets]
})

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

// // Then we add our 'graymap' tile layer to the map.
// streets.addTo(map);

// // Accessing the airport GeoJSON URL
// let airportData = "majorAirports.json"

// // Accessing the Toronto GeoJSON URL
// let toronto = "torontoRoutes.json"

// //Adding a style
// let myStyle = {
//   color: "yellow",
//   weight: 2
// }

// //Accessing the TorontoHoods GeoJSON URL
// let torontoHoods = "torontoNeighborhoods.json"

// //Accessing the Earthquake GeoJSON URL
// let earthquake = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson"

// Grabbing our GeoJSON data.
d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson").then(function(data) {
    console.log(data);
  // Creating a GeoJSON layer with the retrieved data.
  L.geoJSON(data).addTo(map);
});