const mapboxgl = require('mapbox-gl');
const buildMarker = require('./marker')

mapboxgl.accessToken = 'pk.eyJ1IjoiczE0MTM0MiIsImEiOiJjanYyaXBlaHAyNWNlNDNtd2l5cXh2Z3E0In0.i_7WiyC4kvnYEMWRGNcUsQ';

const map = new mapboxgl.Map ({
    container: "map",
    center: [-74.009, 40.705],
    zoom: 12,
    style: "mapbox://styles/mapbox/streets-v10"
});

const marker = buildMarker("hotels", [-87.641, 41.895]);

marker.addTo(map);
