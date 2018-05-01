const mapboxgl = require('mapbox-gl');

const iconURLs = {
  activity: 'http://i.imgur.com/WbMOfMl.png',
  hotel: 'http://i.imgur.com/D9574Cu.png',
  restaurant: 'http://i.imgur.com/cqR6pUI.png'
};


const marker = (type, coords) => {
  const markerCreate = document.createElement('div');
  markerCreate.style.width = '32px';
  markerCreate.style.height = '39px';
  markerCreate.style.backgroundImage = `url(${iconURLs[type]})`;
  return new mapboxgl.Marker(markerCreate).setLngLat(coords);
};

module.exports = { marker };
