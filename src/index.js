const mapboxgl = require('mapbox-gl');
import { marker } from './marker';


mapboxgl.accessToken = "pk.eyJ1IjoiaWdneWZ1ZnUiLCJhIjoiY2pnbzQxZGN5MGJ2azJ4cG1lMXg0ZWlwdCJ9.Ejp-7rL_XD2CKhvgL1qCiQ";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});
