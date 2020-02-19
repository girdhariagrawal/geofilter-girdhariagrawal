import util from './util';
import {
  COORDINATE_UNITS, DISTANCE_UNITS, EARTH_RADIUS, DEFAULT_KEY_NAME,
} from './const';

/**
 * Finds the distance between two geo points using Haversine formula
 * @param fromLat   latitude of starting point
 * @param fromLong  longitude of starting point
 * @param toLat     latitude of ending point
 * @param toLong    longitude of ending point
 */
const distanceBetweenPoints = (fromLat, fromLong, toLat, toLong, coordinateUnit, distanceUnit) => {
  let distance = 0;
  // Distance will be 0 if points are same
  if (fromLat === toLat && fromLong === toLong) {
    return distance;
  }
  // Convert to radian only if provided coordinates are in degree
  if (coordinateUnit === COORDINATE_UNITS.degree) {
    fromLat = util.degreeToRadian(fromLat);
    fromLong = util.degreeToRadian(fromLong);
    toLat = util.degreeToRadian(toLat);
    toLong = util.degreeToRadian(toLong);
  }
  // Calculation for haversine formula
  const angleLat = toLat - fromLat;
  const angleLong = toLong - fromLong;
  const angle = (Math.sin(angleLat / 2) ** 2) + Math.cos(fromLat) * Math.cos(toLat) * (angleLong / 2) ** 2;
  const calculatedDistance = 2 * Math.asin(Math.sqrt(angle));

  if (distanceUnit === DISTANCE_UNITS.kms) {
    distance = calculatedDistance * EARTH_RADIUS.kms;
  } else {
    distance = calculatedDistance * EARTH_RADIUS.miles;
  }
  return distance;
};

/**
 *
 * @param records - Array of object which needs to be filtered
 * @param center - Center coordinates of the circle
 * @param range - Radius or distance from center in miles or kms (default kms)
 * @param config - Configuration parameters to define parameters like key name
 *                 for lat, long (default is latitude and longitude), distance unit (default is kms),
 *                 coordinate unit (default is degree)
 */
const getDataWithInRange = (records, center, range, config) => {
  if (typeof records === 'object' && records.length > 0) {
    const latKeyName = (config && config.keyNames && config.keyNames.lat) || DEFAULT_KEY_NAME.lat;
    const longKeyName = (config && config.keyNames && config.keyNames.long) || DEFAULT_KEY_NAME.long;
    const coordinateUnit = (config && config.coordinateUnit) || COORDINATE_UNITS.degree;
    const distanceUnit = (config && config.distanceUnit) || DISTANCE_UNITS.kms;

    return records.filter((record) => {
      const distance = distanceBetweenPoints(center[latKeyName],
        center[longKeyName],
        record[latKeyName],
        record[longKeyName],
        coordinateUnit,
        distanceUnit);
      return distance < range;
    });
  }
  return [];
};

export { getDataWithInRange, distanceBetweenPoints };
