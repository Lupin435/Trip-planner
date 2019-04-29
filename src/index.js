const mapboxgl = require('mapbox-gl');

mapboxgl.accessToken = 'pk.eyJ1IjoiczE0MTM0MiIsImEiOiJjanYyaXBlaHAyNWNlNDNtd2l5cXh2Z3E0In0.i_7WiyC4kvnYEMWRGNcUsQ';

const map = new mapboxgl.Map ({
    container: "map",
    center: [-74.009, 40.705],
    zoom: 12,
    style: "mapbox://styles/mapbox/streets-v10"
});

const markerDomEl = document.createElement("div"); // Create a new, detached DIV
markerDomEl.style.width = "32px";
markerDomEl.style.height = "39px";
markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

new mapboxgl.Marker(markerDomEl).setLngLat([-74.009, 40.705]).addTo(map);

const markerDomEl2 = document.createElement("div");
markerDomEl2.style.width = "32px";
markerDomEl2.style.height = "39px";
markerDomEl2.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

new mapboxgl.Marker(markerDomEl2).setLngLat([-87.641, 41.895]).addTo(map);