# geofilter-girdhariagrawal
#[Latest Version of Library: 1.0.2]

### Introduction
Filters the record on the basis of latitude and longitude coordinates.
- __Functions provided__
    - getDataWithInRange
    - distanceBetweenPoints
    
### How to use geofilter-girdhariagrawal in project
Enter the following command in your project's root directory
```shell script
npm install --save geofilter-girdhariagrawal
```

Import the function from library
```ecmascript 6
import { getDataWithInRange } from 'geofilter-girdhariagrawal';
```

Pass the data to the function, it will return you the filtered array.
```ecmascript 6
const center = {
  latitude: 53.339428,
  longitude: -6.257664,
};
const records = [{
    latitude: '52.986375', user_id: 12, name: 'Christina McArdle', longitude: '-6.043701',
}];
// getDataWithtInRange(<RECORDS>, <OBJECT_OF_CENTER_COORDINATES>, <DISTANCE_FROM_CENTER>, <CONFIG>);
const filteredRecords = getDataWithInRange(records, center, 25, config);
```

Pass the data to the function, it will return you the distance between provided points
```ecmascript 6
const center = {
  latitude: 53.339428,
  longitude: -6.257664,
};
// distanceBetweenPoints(<FROM_LATITUDE>, <FROM_LONGITUDE>, <TO_LATITUDE>, <TO_LONGITUDE>, <DEGREE_OR_RADIAN>, <KMS_OR_MILES>);
const distance = distanceBetweenPoints(center.latitude, center.longitude, 52.986375, -6.043701, 'degree', 'miles');
```

### Publish library to npm repository
    **_Prerequisites:_**
    1. Permission to publish the library
    2. Update the version of library as per semantic versioning
    
- To publish __geofilter-girdhariagrawal__ module `npm publish`
