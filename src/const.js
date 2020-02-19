const COORDINATE_UNITS = {
  radian: 'radian',
  degree: 'degree',
};
const DEFAULT_KEY_NAME = {
  lat: 'latitude',
  long: 'longitude',
};
const DISTANCE_UNITS = {
  kms: 'kms',
  miles: 'miles',
};
const EARTH_RADIUS = {
  kms: 6371,
  miles: 3956,
};

module.exports = {
  COORDINATE_UNITS, DISTANCE_UNITS, EARTH_RADIUS, DEFAULT_KEY_NAME,
};
