mapboxgl.accessToken = 'pk.eyJ1IjoibGVuYWVtYXlhIiwiYSI6ImNpa3VhbXE5ZjAwMXB3eG00ajVyc2J6ZTIifQ.kmZ4yVcNrupl4H8EonM3aQ';
var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/lenaemaya/cjs3m7hbd1kkw1fo8at2wohl2', //hosted style id
    center: [20.593035, 45.335444], // starting position
    zoom: 4.5,
    pitch: 25,
    bearing: 0,
    length: 0
     // starting zoom
});
var state = {
  animation: false,
  passedPoint: false,
  distance: 0,
  speed: 60, //in ms interval
  increment: 0.041,
  point: [20.593035, 45.335444],
  pitch: 70,
  bearing: 0,
  length: 0,
  zoom: 16
}

const routeSrc ={
  "waypoints": [{
    "name": "Keith Street",
    "location": [22.381405, 37.738277]
  }, {
    "name": "Palm Avenue",
    "location": [22.458041, 37.78539]
  }],
  "routes": [{
    "legs": [{
      "steps": [{
        "intersections": [{
          "out": 0,
          "entry": [true],
          "location": [-122.381405, 37.738277],
          "bearings": [35]
        }, {
          "out": 0,
          "in": 2,
          "entry": [true, true, false, false],
          "location": [-122.381002, 37.738726],
          "bearings": [30, 120, 210, 300]
        }],
        "geometry": {
          "coordinates": [
            [-122.381405, 37.738277],
            [-122.381002, 37.738726],
            [-122.380915, 37.738824]
          ],
          "type": "LineString"
        },
        "duration": 22,
        "distance": 74.6,
        "name": "Keith Street",
        "weight": 32.6,
        "mode": "driving",
        "maneuver": {
          "bearing_after": 35,
          "bearing_before": 0,
          "type": "depart",
          "location": [-122.381405, 37.738277],
          "instruction": "Head northeast on Keith Street"
        }
      }, {
        "intersections": [{
          "out": 2,
          "in": 1,
          "entry": [false, false, true],
          "location": [-122.380915, 37.738824],
          "bearings": [120, 210, 300]
        }, {
          "out": 3,
          "in": 1,
          "entry": [true, false, true, true],
          "location": [-122.383099, 37.740062],
          "bearings": [30, 120, 210, 300]
        }, {
          "out": 3,
          "in": 1,
          "entry": [true, false, true, true],
          "location": [-122.383777, 37.740444],
          "bearings": [45, 120, 210, 300]
        }, {
          "out": 3,
          "in": 1,
          "entry": [true, false, true, true],
          "location": [-122.38468, 37.740959],
          "bearings": [30, 120, 210, 300]
        }, {
          "out": 3,
          "in": 1,
          "entry": [true, false, true, true],
          "location": [-122.386522, 37.742004],
          "bearings": [30, 120, 210, 300]
        }, {
          "out": 3,
          "in": 1,
          "lanes": [{
            "valid": true,
            "indications": ["left"]
          }, {
            "valid": true,
            "indications": ["none"]
          }, {
            "valid": true,
            "indications": ["none"]
          }, {
            "valid": false,
            "indications": ["right"]
          }],
          "entry": [true, false, false, true],
          "location": [-122.387822, 37.74274],
          "bearings": [15, 120, 195, 285]
        }, {
          "out": 3,
          "in": 1,
          "entry": [false, true, true, true],
          "location": [-122.388041, 37.742749],
          "bearings": [15, 120, 195, 300]
        }, {
          "out": 3,
          "in": 1,
          "entry": [true, false, true, true],
          "location": [-122.388448, 37.742987],
          "bearings": [30, 120, 210, 300]
        }, {
          "out": 2,
          "in": 1,
          "entry": [true, false, true],
          "location": [-122.390328, 37.744046],
          "bearings": [30, 120, 300]
        }, {
          "out": 3,
          "in": 1,
          "entry": [true, false, true, true],
          "location": [-122.392193, 37.745106],
          "bearings": [30, 120, 210, 300]
        }, {
          "out": 2,
          "in": 0,
          "entry": [false, true, true],
          "location": [-122.394069, 37.746171],
          "bearings": [120, 210, 300]
        }, {
          "out": 4,
          "in": 1,
          "entry": [true, false, true, true, true],
          "location": [-122.395959, 37.747209],
          "bearings": [90, 120, 210, 270, 315]
        }, {
          "out": 2,
          "in": 1,
          "entry": [true, false, true],
          "location": [-122.396665, 37.74837],
          "bearings": [90, 165, 345]
        }, {
          "out": 2,
          "in": 0,
          "lanes": [{
            "valid": true,
            "indications": ["left"]
          }, {
            "valid": false,
            "indications": ["right"]
          }],
          "entry": [false, false, true],
          "location": [-122.397221, 37.749522],
          "bearings": [165, 315, 345]
        }],
        "geometry": {
          "coordinates": [
            [-122.380915, 37.738824],
            [-122.383099, 37.740062],
            [-122.383777, 37.740444],
            [-122.384305, 37.740745],
            [-122.38468, 37.740959],
            [-122.385631, 37.741495],
            [-122.386138, 37.741781],
            [-122.386522, 37.742004],
            [-122.387136, 37.742352],
            [-122.387388, 37.742487],
            [-122.387822, 37.74274],
            [-122.387897, 37.742764],
            [-122.387939, 37.74277],
            [-122.387989, 37.742765],
            [-122.388041, 37.742749],
            [-122.388136, 37.742805],
            [-122.388266, 37.742881],
            [-122.388448, 37.742987],
            [-122.390328, 37.744046],
            [-122.391805, 37.744888],
            [-122.392193, 37.745106],
            [-122.394069, 37.746171],
            [-122.395272, 37.746832],
            [-122.395959, 37.747209],
            [-122.396114, 37.747311],
            [-122.396186, 37.747385],
            [-122.396263, 37.74751],
            [-122.396318, 37.747628],
            [-122.396665, 37.74837],
            [-122.396698, 37.748439],
            [-122.397045, 37.749164],
            [-122.397221, 37.749522],
            [-122.397259, 37.749604],
            [-122.397269, 37.749636],
            [-122.397275, 37.749662],
            [-122.397284, 37.749695]
          ],
          "type": "LineString"
        },
        "duration": 269.3,
        "distance": 1925.6,
        "name": "Evans Avenue",
        "weight": 309.09999999999997,
        "mode": "driving",
        "maneuver": {
          "bearing_after": 305,
          "location": [-122.380915, 37.738824],
          "type": "end of road",
          "bearing_before": 33,
          "modifier": "left",
          "instruction": "Turn left onto Evans Avenue"
        }
      }, {
        "intersections": [{
          "out": 2,
          "in": 1,
          "lanes": [{
            "valid": true,
            "indications": ["left"]
          }, {
            "valid": false,
            "indications": ["right"]
          }],
          "entry": [true, false, true],
          "location": [-122.397284, 37.749695],
          "bearings": [90, 165, 270]
        }, {
          "out": 2,
          "in": 0,
          "entry": [false, true, true],
          "location": [-122.39849, 37.749624],
          "bearings": [86, 92, 265]
        }, {
          "out": 3,
          "in": 1,
          "lanes": [{
            "valid": true,
            "indications": ["straight", "left"]
          }, {
            "valid": true,
            "indications": ["straight", "right"]
          }],
          "entry": [true, false, false, true],
          "location": [-122.402064, 37.749409],
          "bearings": [0, 90, 180, 270]
        }, {
          "out": 3,
          "in": 1,
          "entry": [true, false, true, true],
          "location": [-122.40287, 37.749523],
          "bearings": [0, 105, 180, 285]
        }],
        "geometry": {
          "coordinates": [
            [-122.397284, 37.749695],
            [-122.397526, 37.749681],
            [-122.398015, 37.749652],
            [-122.39849, 37.749624],
            [-122.39856, 37.749618],
            [-122.399094, 37.749586],
            [-122.399323, 37.749573],
            [-122.400272, 37.749516],
            [-122.400576, 37.749498],
            [-122.400813, 37.749483],
            [-122.400972, 37.749474],
            [-122.40137, 37.74945],
            [-122.401968, 37.749415],
            [-122.402064, 37.749409],
            [-122.402213, 37.74944],
            [-122.40287, 37.749523],
            [-122.402971, 37.749536]
          ],
          "type": "LineString"
        },
        "duration": 48.900000000000006,
        "distance": 502.7,
        "name": "Cesar Chavez Street",
        "weight": 52.900000000000006,
        "mode": "driving",
        "maneuver": {
          "bearing_after": 265,
          "location": [-122.397284, 37.749695],
          "type": "end of road",
          "bearing_before": 343,
          "modifier": "left",
          "instruction": "Turn left onto Cesar Chavez Street"
        }
      }, {
        "intersections": [{
          "classes": ["motorway"],
          "out": 2,
          "in": 0,
          "entry": [false, true, true],
          "location": [-122.402971, 37.749536],
          "bearings": [105, 270, 285]
        }, {
          "classes": ["motorway"],
          "out": 0,
          "in": 2,
          "entry": [true, false, false],
          "location": [-122.402688, 37.752049],
          "bearings": [0, 181, 185]
        }],
        "geometry": {
          "coordinates": [
            [-122.402971, 37.749536],
            [-122.403065, 37.749562],
            [-122.403131, 37.749587],
            [-122.403183, 37.749627],
            [-122.403217, 37.749668],
            [-122.403229, 37.749712],
            [-122.403225, 37.749764],
            [-122.40314, 37.750064],
            [-122.402841, 37.751162],
            [-122.402796, 37.751341],
            [-122.40276, 37.751509],
            [-122.402717, 37.751774],
            [-122.402688, 37.752049],
            [-122.402686, 37.752659],
            [-122.402705, 37.752819],
            [-122.40274, 37.752963],
            [-122.402851, 37.753336]
          ],
          "type": "LineString"
        },
        "maneuver": {
          "bearing_after": 291,
          "location": [-122.402971, 37.749536],
          "type": "on ramp",
          "bearing_before": 278,
          "modifier": "slight right",
          "instruction": "Take the ramp on the right towards US 101"
        },
        "duration": 26.299999999999997,
        "distance": 441.3,
        "destinations": "US 101",
        "name": "",
        "weight": 26.299999999999997,
        "mode": "driving"
      }, {
        "intersections": [{
          "classes": ["motorway"],
          "out": 0,
          "in": 1,
          "entry": [true, false, false],
          "location": [-122.402851, 37.753336],
          "bearings": [0, 165, 180]
        }, {
          "classes": ["motorway"],
          "out": 0,
          "in": 2,
          "entry": [true, true, false],
          "location": [-122.405882, 37.761787],
          "bearings": [27, 37, 204]
        }],
        "maneuver": {
          "bearing_after": 354,
          "location": [-122.402851, 37.753336],
          "type": "merge",
          "bearing_before": 345,
          "modifier": "slight left",
          "instruction": "Merge left onto US 101"
        },
        "duration": 54.800000000000004,
        "distance": 1343.2,
        "name": "James Lick Freeway (US 101)",
        "geometry": {
          "coordinates": [
            [-122.402851, 37.753336],
            [-122.403053, 37.755443],
            [-122.403071, 37.755632],
            [-122.403094, 37.75583],
            [-122.403125, 37.75603],
            [-122.403163, 37.756217],
            [-122.403215, 37.756402],
            [-122.403278, 37.756577],
            [-122.403356, 37.756751],
            [-122.403454, 37.756932],
            [-122.403553, 37.757085],
            [-122.403663, 37.757233],
            [-122.403782, 37.757368],
            [-122.403905, 37.757501],
            [-122.404047, 37.757633],
            [-122.404195, 37.757757],
            [-122.404367, 37.75789],
            [-122.404528, 37.758008],
            [-122.404881, 37.758259],
            [-122.405061, 37.758389],
            [-122.405233, 37.758523],
            [-122.405406, 37.758665],
            [-122.405555, 37.758803],
            [-122.405698, 37.758957],
            [-122.405824, 37.759115],
            [-122.405928, 37.759265],
            [-122.406027, 37.759429],
            [-122.406104, 37.759584],
            [-122.406172, 37.759754],
            [-122.406222, 37.759921],
            [-122.406261, 37.760092],
            [-122.406285, 37.760253],
            [-122.406296, 37.76041],
            [-122.406294, 37.760569],
            [-122.406281, 37.760723],
            [-122.406257, 37.760874],
            [-122.406223, 37.761029],
            [-122.406177, 37.761184],
            [-122.406119, 37.761337],
            [-122.406051, 37.761482],
            [-122.405967, 37.761641],
            [-122.405882, 37.761787],
            [-122.40558, 37.762265],
            [-122.405475, 37.762439],
            [-122.40537, 37.762618],
            [-122.405274, 37.762798],
            [-122.405187, 37.762989],
            [-122.405115, 37.763173],
            [-122.405051, 37.763374],
            [-122.405001, 37.763567],
            [-122.40496, 37.763763],
            [-122.40493, 37.763958],
            [-122.404907, 37.764159],
            [-122.404888, 37.764385]
          ],
          "type": "LineString"
        },
        "ref": "US 101",
        "weight": 54.800000000000004,
        "mode": "driving"
      }, {
        "intersections": [{
          "classes": ["motorway"],
          "out": 2,
          "in": 1,
          "entry": [true, false, true],
          "location": [-122.404888, 37.764385],
          "bearings": [6, 185, 358]
        }, {
          "classes": ["motorway"],
          "out": 1,
          "in": 0,
          "entry": [false, true, true],
          "location": [-122.406918, 37.769032],
          "bearings": [134, 311, 314]
        }, {
          "classes": ["motorway"],
          "out": 2,
          "in": 0,
          "entry": [false, false, true],
          "location": [-122.411986, 37.769537],
          "bearings": [86, 95, 271]
        }],
        "maneuver": {
          "bearing_after": 357,
          "location": [-122.404888, 37.764385],
          "type": "fork",
          "bearing_before": 4,
          "modifier": "slight left",
          "instruction": "Keep left at the fork onto US 101"
        },
        "duration": 69.2,
        "distance": 1371,
        "exits": "433C",
        "mode": "driving",
        "weight": 69.2,
        "name": "Central Freeway (US 101)",
        "geometry": {
          "coordinates": [
            [-122.404888, 37.764385],
            [-122.404918, 37.765253],
            [-122.405145, 37.767125],
            [-122.405177, 37.767311],
            [-122.405205, 37.767419],
            [-122.405243, 37.767523],
            [-122.405298, 37.76764],
            [-122.405377, 37.76777],
            [-122.405474, 37.767887],
            [-122.405566, 37.767984],
            [-122.405661, 37.768067],
            [-122.405761, 37.768143],
            [-122.406918, 37.769032],
            [-122.407249, 37.769258],
            [-122.407579, 37.769474],
            [-122.407811, 37.769621],
            [-122.407959, 37.769711],
            [-122.408077, 37.76978],
            [-122.408205, 37.769842],
            [-122.40835, 37.769885],
            [-122.408493, 37.769909],
            [-122.408644, 37.769914],
            [-122.408798, 37.769892],
            [-122.408915, 37.769863],
            [-122.409005, 37.769829],
            [-122.409111, 37.769782],
            [-122.409205, 37.769724],
            [-122.409371, 37.769618],
            [-122.409462, 37.769561],
            [-122.409563, 37.76951],
            [-122.40966, 37.769468],
            [-122.409764, 37.769435],
            [-122.409868, 37.769415],
            [-122.409966, 37.769407],
            [-122.410092, 37.769406],
            [-122.410214, 37.769412],
            [-122.410692, 37.76946],
            [-122.411127, 37.769487],
            [-122.411287, 37.769505],
            [-122.411469, 37.769521],
            [-122.411611, 37.769533],
            [-122.411814, 37.769547],
            [-122.411986, 37.769537],
            [-122.412331, 37.76954],
            [-122.415395, 37.769616]
          ],
          "type": "LineString"
        },
        "ref": "US 101"
      }, {
        "intersections": [{
          "classes": ["motorway"],
          "out": 1,
          "in": 0,
          "entry": [false, true, true],
          "location": [-122.415395, 37.769616],
          "bearings": [92, 273, 277]
        }],
        "geometry": {
          "coordinates": [
            [-122.415395, 37.769616],
            [-122.415793, 37.769633],
            [-122.416188, 37.769657],
            [-122.416415, 37.769677],
            [-122.416642, 37.769699],
            [-122.416865, 37.769723],
            [-122.417102, 37.769754],
            [-122.417335, 37.769786],
            [-122.417591, 37.769824],
            [-122.418893, 37.770023],
            [-122.419074, 37.770046],
            [-122.419248, 37.770064],
            [-122.419414, 37.770079],
            [-122.419579, 37.770092],
            [-122.41974, 37.770096],
            [-122.420318, 37.770109],
            [-122.420547, 37.770117],
            [-122.420721, 37.77013],
            [-122.420895, 37.77015],
            [-122.421053, 37.770176],
            [-122.421204, 37.770205],
            [-122.421374, 37.770247],
            [-122.421523, 37.770292],
            [-122.421677, 37.770346],
            [-122.421827, 37.770406],
            [-122.421982, 37.770479],
            [-122.422125, 37.770555],
            [-122.422224, 37.770614],
            [-122.422316, 37.770675],
            [-122.422408, 37.770739],
            [-122.422495, 37.770804],
            [-122.422577, 37.770871],
            [-122.422653, 37.770937],
            [-122.422718, 37.771],
            [-122.422784, 37.771068],
            [-122.422853, 37.771144],
            [-122.42292, 37.771227],
            [-122.422994, 37.771325],
            [-122.42306, 37.771428],
            [-122.423322, 37.771858]
          ],
          "type": "LineString"
        },
        "maneuver": {
          "bearing_after": 272,
          "location": [-122.415395, 37.769616],
          "type": "new name",
          "bearing_before": 271,
          "modifier": "straight",
          "instruction": "Continue straight towards Octavia Boulevard"
        },
        "duration": 50.7,
        "distance": 787.8,
        "destinations": "Octavia Boulevard, Fell Street",
        "exits": "434B",
        "mode": "driving",
        "weight": 54.7,
        "name": "Central Freeway"
      }, {
        "intersections": [{
          "out": 3,
          "in": 1,
          "lanes": [{
            "valid": true,
            "indications": ["straight"]
          }, {
            "valid": true,
            "indications": ["straight"]
          }, {
            "valid": false,
            "indications": ["right"]
          }],
          "entry": [true, false, false, true],
          "location": [-122.423322, 37.771858],
          "bearings": [45, 150, 225, 330]
        }, {
          "out": 3,
          "in": 1,
          "lanes": [{
            "valid": true,
            "indications": ["straight"]
          }, {
            "valid": true,
            "indications": ["straight"]
          }, {
            "valid": false,
            "indications": ["right"]
          }],
          "entry": [false, false, false, true],
          "location": [-122.423404, 37.771986],
          "bearings": [45, 150, 225, 330]
        }, {
          "out": 2,
          "in": 1,
          "entry": [true, false, true],
          "location": [-122.423539, 37.772221],
          "bearings": [15, 150, 345]
        }, {
          "out": 3,
          "in": 1,
          "entry": [false, false, false, true],
          "location": [-122.423724, 37.772971],
          "bearings": [75, 165, 255, 345]
        }, {
          "out": 3,
          "in": 1,
          "entry": [true, false, false, true],
          "location": [-122.423912, 37.773903],
          "bearings": [75, 165, 255, 345]
        }, {
          "out": 3,
          "in": 1,
          "entry": [true, false, false, true],
          "location": [-122.4241, 37.774835],
          "bearings": [75, 165, 255, 345]
        }],
        "geometry": {
          "coordinates": [
            [-122.423322, 37.771858],
            [-122.423345, 37.771894],
            [-122.423386, 37.771958],
            [-122.423404, 37.771986],
            [-122.423489, 37.772122],
            [-122.423539, 37.772221],
            [-122.42358, 37.772322],
            [-122.423611, 37.772429],
            [-122.423633, 37.772528],
            [-122.423724, 37.772971],
            [-122.423912, 37.773903],
            [-122.4241, 37.774835],
            [-122.424272, 37.775679],
            [-122.424283, 37.77571],
            [-122.424307, 37.775738],
            [-122.424344, 37.775763]
          ],
          "type": "LineString"
        },
        "duration": 69.5,
        "distance": 446.4,
        "name": "Octavia Boulevard",
        "weight": 100.5,
        "mode": "driving",
        "maneuver": {
          "bearing_after": 331,
          "location": [-122.423322, 37.771858],
          "type": "new name",
          "bearing_before": 333,
          "modifier": "straight",
          "instruction": "Continue straight onto Octavia Boulevard"
        }
      }, {
        "intersections": [{
          "out": 2,
          "in": 1,
          "lanes": [{
            "valid": true,
            "indications": ["left"]
          }, {
            "valid": true,
            "indications": ["left"]
          }, {
            "valid": true,
            "indications": ["none"]
          }],
          "entry": [false, true, true],
          "location": [-122.424344, 37.775763],
          "bearings": [75, 165, 255]
        }, {
          "out": 2,
          "in": 0,
          "entry": [false, true, true, false],
          "location": [-122.424496, 37.775743],
          "bearings": [75, 165, 255, 345]
        }, {
          "out": 2,
          "in": 0,
          "entry": [false, true, true, true],
          "location": [-122.426098, 37.77554],
          "bearings": [75, 165, 255, 345]
        }, {
          "out": 2,
          "in": 0,
          "entry": [false, true, true, true],
          "location": [-122.42774, 37.775331],
          "bearings": [75, 165, 255, 345]
        }, {
          "out": 2,
          "in": 0,
          "entry": [false, true, true, true],
          "location": [-122.429383, 37.775121],
          "bearings": [75, 165, 255, 345]
        }, {
          "out": 2,
          "in": 0,
          "entry": [false, true, true, true],
          "location": [-122.431028, 37.774912],
          "bearings": [75, 165, 255, 345]
        }, {
          "out": 2,
          "in": 0,
          "entry": [false, true, true, true],
          "location": [-122.432675, 37.774702],
          "bearings": [75, 165, 255, 345]
        }, {
          "out": 2,
          "in": 0,
          "entry": [false, true, true, true],
          "location": [-122.434316, 37.774493],
          "bearings": [75, 165, 255, 345]
        }, {
          "out": 2,
          "in": 0,
          "entry": [false, false, true, true],
          "location": [-122.435961, 37.774284],
          "bearings": [75, 165, 255, 345]
        }, {
          "out": 2,
          "in": 0,
          "lanes": [{
            "valid": true,
            "indications": ["left"]
          }, {
            "valid": true,
            "indications": ["straight"]
          }, {
            "valid": true,
            "indications": ["none"]
          }, {
            "valid": true,
            "indications": ["none"]
          }],
          "entry": [false, false, true, true],
          "location": [-122.437584, 37.774077],
          "bearings": [75, 165, 255, 345]
        }, {
          "out": 2,
          "in": 0,
          "entry": [false, true, true, false],
          "location": [-122.437676, 37.774066],
          "bearings": [75, 165, 255, 345]
        }, {
          "out": 2,
          "in": 0,
          "lanes": [{
            "valid": false,
            "indications": ["left"]
          }, {
            "valid": true,
            "indications": ["straight"]
          }, {
            "valid": true,
            "indications": ["none"]
          }, {
            "valid": true,
            "indications": ["none"]
          }],
          "entry": [false, true, true, true],
          "location": [-122.439297, 37.773859],
          "bearings": [75, 165, 255, 345]
        }, {
          "out": 2,
          "in": 0,
          "lanes": [{
            "valid": false,
            "indications": ["left"]
          }, {
            "valid": true,
            "indications": ["straight"]
          }, {
            "valid": true,
            "indications": ["straight"]
          }, {
            "valid": true,
            "indications": ["none"]
          }],
          "entry": [false, true, true, true],
          "location": [-122.440935, 37.773642],
          "bearings": [75, 165, 255, 345]
        }, {
          "out": 1,
          "in": 0,
          "entry": [false, true, true],
          "location": [-122.44258, 37.77342],
          "bearings": [75, 255, 345]
        }, {
          "out": 1,
          "in": 0,
          "entry": [false, true, true],
          "location": [-122.444224, 37.773211],
          "bearings": [75, 255, 345]
        }],
        "geometry": {
          "coordinates": [
            [-122.424344, 37.775763],
            [-122.424496, 37.775743],
            [-122.426098, 37.77554],
            [-122.42774, 37.775331],
            [-122.429383, 37.775121],
            [-122.431028, 37.774912],
            [-122.432675, 37.774702],
            [-122.434316, 37.774493],
            [-122.435726, 37.774314],
            [-122.435961, 37.774284],
            [-122.435996, 37.77428],
            [-122.437246, 37.77412],
            [-122.437365, 37.774105],
            [-122.437584, 37.774077],
            [-122.437676, 37.774066],
            [-122.43797, 37.774028],
            [-122.438138, 37.774007],
            [-122.438998, 37.773897],
            [-122.439196, 37.773872],
            [-122.439297, 37.773859],
            [-122.440299, 37.773732],
            [-122.440544, 37.7737],
            [-122.440775, 37.773669],
            [-122.440935, 37.773642],
            [-122.441066, 37.773616],
            [-122.44258, 37.77342],
            [-122.442674, 37.773409],
            [-122.444224, 37.773211],
            [-122.444295, 37.773202],
            [-122.445226, 37.773084],
            [-122.445771, 37.773014],
            [-122.445924, 37.772995]
          ],
          "type": "LineString"
        },
        "duration": 205.00000000000003,
        "distance": 1922.1,
        "name": "Fell Street",
        "weight": 265.2,
        "mode": "driving",
        "maneuver": {
          "bearing_after": 260,
          "location": [-122.424344, 37.775763],
          "type": "end of road",
          "bearing_before": 351,
          "modifier": "left",
          "instruction": "Turn left onto Fell Street"
        }
      }, {
        "intersections": [{
          "out": 3,
          "in": 0,
          "lanes": [{
            "valid": false,
            "indications": ["left"]
          }, {
            "valid": false,
            "indications": ["straight"]
          }, {
            "valid": false,
            "indications": ["none"]
          }, {
            "valid": false,
            "indications": ["none"]
          }, {
            "valid": true,
            "indications": ["none"]
          }],
          "entry": [false, true, true, true],
          "location": [-122.445924, 37.772995],
          "bearings": [75, 165, 255, 345]
        }, {
          "out": 3,
          "in": 1,
          "entry": [true, false, true, true],
          "location": [-122.446126, 37.773946],
          "bearings": [75, 165, 255, 345]
        }, {
          "out": 3,
          "in": 1,
          "entry": [true, false, true, true],
          "location": [-122.446311, 37.774878],
          "bearings": [75, 165, 255, 345]
        }, {
          "out": 3,
          "in": 1,
          "entry": [true, false, true, true],
          "location": [-122.446493, 37.77581],
          "bearings": [75, 165, 255, 345]
        }, {
          "out": 2,
          "in": 1,
          "entry": [true, false, true],
          "location": [-122.446681, 37.776743],
          "bearings": [75, 165, 345]
        }, {
          "out": 3,
          "in": 1,
          "entry": [true, false, true, true],
          "location": [-122.446869, 37.777674],
          "bearings": [75, 165, 255, 345]
        }],
        "geometry": {
          "coordinates": [
            [-122.445924, 37.772995],
            [-122.445943, 37.773088],
            [-122.446007, 37.773407],
            [-122.446102, 37.773876],
            [-122.446126, 37.773946],
            [-122.446148, 37.774014],
            [-122.446308, 37.774803],
            [-122.446311, 37.774878],
            [-122.446319, 37.774952],
            [-122.446439, 37.775546],
            [-122.446477, 37.775731],
            [-122.446493, 37.77581],
            [-122.44651, 37.775895],
            [-122.446681, 37.776743],
            [-122.446851, 37.777584],
            [-122.446869, 37.777674],
            [-122.446888, 37.777767],
            [-122.447041, 37.778527],
            [-122.447062, 37.778631]
          ],
          "type": "LineString"
        },
        "duration": 84.6,
        "distance": 635,
        "name": "Masonic Avenue",
        "weight": 115.39999999999999,
        "mode": "driving",
        "maneuver": {
          "bearing_after": 350,
          "location": [-122.445924, 37.772995],
          "type": "turn",
          "bearing_before": 260,
          "modifier": "right",
          "instruction": "Turn right onto Masonic Avenue"
        }
      }, {
        "intersections": [{
          "out": 2,
          "in": 1,
          "entry": [true, false, true, true],
          "location": [-122.447062, 37.778631],
          "bearings": [75, 165, 255, 345]
        }, {
          "out": 2,
          "in": 0,
          "entry": [false, true, true],
          "location": [-122.448019, 37.77851],
          "bearings": [75, 165, 255]
        }, {
          "out": 2,
          "in": 0,
          "entry": [false, true, true],
          "location": [-122.448904, 37.778397],
          "bearings": [75, 165, 255]
        }, {
          "out": 2,
          "in": 0,
          "entry": [false, true, true],
          "location": [-122.449789, 37.778285],
          "bearings": [75, 165, 255]
        }, {
          "out": 2,
          "in": 0,
          "entry": [false, true, true],
          "location": [-122.450684, 37.778207],
          "bearings": [90, 165, 255]
        }, {
          "out": 2,
          "in": 0,
          "entry": [false, true, true],
          "location": [-122.451568, 37.778096],
          "bearings": [75, 165, 255]
        }, {
          "out": 2,
          "in": 0,
          "entry": [false, true, true],
          "location": [-122.452454, 37.777981],
          "bearings": [75, 165, 255]
        }, {
          "out": 2,
          "in": 0,
          "entry": [true, true, true, true],
          "location": [-122.453407, 37.777836],
          "bearings": [90, 165, 255, 345]
        }, {
          "out": 1,
          "in": 0,
          "entry": [false, true, true],
          "location": [-122.454355, 37.777719],
          "bearings": [75, 255, 345]
        }],
        "geometry": {
          "coordinates": [
            [-122.447062, 37.778631],
            [-122.4472, 37.778614],
            [-122.447549, 37.77857],
            [-122.448019, 37.77851],
            [-122.448904, 37.778397],
            [-122.449225, 37.778357],
            [-122.449789, 37.778285],
            [-122.44987, 37.778279],
            [-122.450348, 37.778244],
            [-122.450602, 37.778217],
            [-122.450684, 37.778207],
            [-122.4508, 37.778192],
            [-122.450903, 37.778179],
            [-122.451568, 37.778096],
            [-122.451804, 37.778065],
            [-122.452454, 37.777981],
            [-122.452554, 37.777969],
            [-122.453287, 37.777874],
            [-122.453333, 37.777864],
            [-122.453407, 37.777836],
            [-122.453473, 37.777831],
            [-122.453538, 37.777823],
            [-122.454355, 37.777719],
            [-122.455233, 37.777607]
          ],
          "type": "LineString"
        },
        "duration": 83.5,
        "distance": 727.8,
        "name": "Turk Boulevard",
        "weight": 104.1,
        "mode": "driving",
        "maneuver": {
          "bearing_after": 260,
          "location": [-122.447062, 37.778631],
          "type": "turn",
          "bearing_before": 350,
          "modifier": "left",
          "instruction": "Turn left onto Turk Boulevard"
        }
      }, {
        "intersections": [{
          "out": 0,
          "in": 1,
          "entry": [true, false, true, true],
          "location": [-122.455233, 37.777607],
          "bearings": [0, 75, 180, 255]
        }, {
          "out": 2,
          "in": 1,
          "entry": [true, false, true],
          "location": [-122.455664, 37.779667],
          "bearings": [0, 165, 330]
        }, {
          "out": 3,
          "in": 1,
          "lanes": [{
            "valid": false,
            "indications": ["left"]
          }, {
            "valid": true,
            "indications": ["none"]
          }],
          "entry": [false, false, true, true],
          "location": [-122.455859, 37.779946],
          "bearings": [75, 150, 240, 330]
        }, {
          "out": 2,
          "in": 0,
          "entry": [false, false, true],
          "location": [-122.456056, 37.780206],
          "bearings": [150, 180, 345]
        }, {
          "out": 3,
          "in": 1,
          "lanes": [{
            "valid": true,
            "indications": ["left"]
          }, {
            "valid": false,
            "indications": ["right"]
          }],
          "entry": [true, false, false, true],
          "location": [-122.456309, 37.78133],
          "bearings": [90, 165, 270, 345]
        }],
        "geometry": {
          "coordinates": [
            [-122.455233, 37.777607],
            [-122.455236, 37.777713],
            [-122.455279, 37.777952],
            [-122.45546, 37.778824],
            [-122.455569, 37.779361],
            [-122.455586, 37.779435],
            [-122.455604, 37.779505],
            [-122.455623, 37.779564],
            [-122.455642, 37.779614],
            [-122.455664, 37.779667],
            [-122.455691, 37.779723],
            [-122.455725, 37.779779],
            [-122.455759, 37.779825],
            [-122.455859, 37.779946],
            [-122.455937, 37.780042],
            [-122.455976, 37.780091],
            [-122.456017, 37.780144],
            [-122.45604, 37.780179],
            [-122.456045, 37.780187],
            [-122.456056, 37.780206],
            [-122.456084, 37.780275],
            [-122.456093, 37.780299],
            [-122.456167, 37.780663],
            [-122.45619, 37.78078],
            [-122.456283, 37.781239],
            [-122.456309, 37.78133],
            [-122.456344, 37.781451]
          ],
          "type": "LineString"
        },
        "duration": 80.7,
        "distance": 442.7,
        "name": "Stanyan Street",
        "weight": 102.80000000000001,
        "mode": "driving",
        "maneuver": {
          "bearing_after": 351,
          "location": [-122.455233, 37.777607],
          "type": "turn",
          "bearing_before": 260,
          "modifier": "right",
          "instruction": "Turn right onto Stanyan Street"
        }
      }, {
        "intersections": [{
          "out": 2,
          "in": 1,
          "lanes": [{
            "valid": true,
            "indications": ["left"]
          }, {
            "valid": false,
            "indications": ["right"]
          }],
          "entry": [false, false, true],
          "location": [-122.456344, 37.781451],
          "bearings": [90, 165, 270]
        }, {
          "out": 2,
          "in": 1,
          "lanes": [{
            "valid": true,
            "indications": ["straight"]
          }, {
            "valid": true,
            "indications": ["none"]
          }, {
            "valid": true,
            "indications": ["none"]
          }],
          "entry": [true, false, true],
          "location": [-122.456653, 37.781437],
          "bearings": [0, 90, 270]
        }],
        "geometry": {
          "coordinates": [
            [-122.456344, 37.781451],
            [-122.456446, 37.781447],
            [-122.456653, 37.781437],
            [-122.457647, 37.781392],
            [-122.457757, 37.781387]
          ],
          "type": "LineString"
        },
        "duration": 14.2,
        "distance": 124.4,
        "name": "Geary Boulevard",
        "weight": 22.400000000000002,
        "mode": "driving",
        "maneuver": {
          "bearing_after": 265,
          "location": [-122.456344, 37.781451],
          "type": "end of road",
          "bearing_before": 345,
          "modifier": "left",
          "instruction": "Turn left onto Geary Boulevard"
        }
      }, {
        "intersections": [{
          "out": 0,
          "in": 1,
          "entry": [true, false, true, true],
          "location": [-122.457757, 37.781387],
          "bearings": [0, 90, 180, 270]
        }, {
          "out": 0,
          "in": 2,
          "entry": [true, true, false, true],
          "location": [-122.45794, 37.783879],
          "bearings": [0, 90, 180, 270]
        }],
        "geometry": {
          "coordinates": [
            [-122.457757, 37.781387],
            [-122.457764, 37.78148],
            [-122.457843, 37.782519],
            [-122.45794, 37.783879],
            [-122.458041, 37.78539]
          ],
          "type": "LineString"
        },
        "duration": 99,
        "distance": 445.9,
        "name": "Palm Avenue",
        "weight": 99,
        "mode": "driving",
        "maneuver": {
          "bearing_after": 355,
          "location": [-122.457757, 37.781387],
          "type": "turn",
          "bearing_before": 265,
          "modifier": "right",
          "instruction": "Turn right onto Palm Avenue"
        }
      }, {
        "intersections": [{
          "in": 0,
          "entry": [true],
          "location": [-122.458041, 37.78539],
          "bearings": [177]
        }],
        "geometry": {
          "coordinates": [
            [-122.458041, 37.78539],
            [-122.458041, 37.78539]
          ],
          "type": "LineString"
        },
        "duration": 0,
        "distance": 0,
        "name": "Palm Avenue",
        "weight": 0,
        "mode": "driving",
        "maneuver": {
          "bearing_after": 0,
          "location": [-122.458041, 37.78539],
          "type": "arrive",
          "bearing_before": 357,
          "modifier": "right",
          "instruction": "You have arrived at your destination, on the right"
        }
      }],
      "weight": 1409,
      "distance": 11190.4,
      "summary": "Evans Avenue, Fell Street",
      "duration": 1177.7
    }],
    "weight_name": "routability",
    "geometry": {
      "coordinates": [
        [-122.381405, 37.738277],
        [-122.381002, 37.738726],
        [-122.380915, 37.738824],
        [-122.383099, 37.740062],
        [-122.383777, 37.740444],
        [-122.384305, 37.740745],
        [-122.38468, 37.740959],
        [-122.385631, 37.741495],
        [-122.386138, 37.741781],
        [-122.386522, 37.742004],
        [-122.387136, 37.742352],
        [-122.387388, 37.742487],
        [-122.387822, 37.74274],
        [-122.387897, 37.742764],
        [-122.387939, 37.74277],
        [-122.387989, 37.742765],
        [-122.388041, 37.742749],
        [-122.388136, 37.742805],
        [-122.388266, 37.742881],
        [-122.388448, 37.742987],
        [-122.390328, 37.744046],
        [-122.391805, 37.744888],
        [-122.392193, 37.745106],
        [-122.394069, 37.746171],
        [-122.395272, 37.746832],
        [-122.395959, 37.747209],
        [-122.396114, 37.747311],
        [-122.396186, 37.747385],
        [-122.396263, 37.74751],
        [-122.396318, 37.747628],
        [-122.396665, 37.74837],
        [-122.396698, 37.748439],
        [-122.397045, 37.749164],
        [-122.397221, 37.749522],
        [-122.397259, 37.749604],
        [-122.397269, 37.749636],
        [-122.397275, 37.749662],
        [-122.397284, 37.749695],
        [-122.397526, 37.749681],
        [-122.398015, 37.749652],
        [-122.39849, 37.749624],
        [-122.39856, 37.749618],
        [-122.399094, 37.749586],
        [-122.399323, 37.749573],
        [-122.400272, 37.749516],
        [-122.400576, 37.749498],
        [-122.400813, 37.749483],
        [-122.400972, 37.749474],
        [-122.40137, 37.74945],
        [-122.401968, 37.749415],
        [-122.402064, 37.749409],
        [-122.402213, 37.74944],
        [-122.40287, 37.749523],
        [-122.402971, 37.749536],
        [-122.403065, 37.749562],
        [-122.403131, 37.749587],
        [-122.403183, 37.749627],
        [-122.403217, 37.749668],
        [-122.403229, 37.749712],
        [-122.403225, 37.749764],
        [-122.40314, 37.750064],
        [-122.402841, 37.751162],
        [-122.402796, 37.751341],
        [-122.40276, 37.751509],
        [-122.402717, 37.751774],
        [-122.402688, 37.752049],
        [-122.402686, 37.752659],
        [-122.402705, 37.752819],
        [-122.40274, 37.752963],
        [-122.402851, 37.753336],
        [-122.403053, 37.755443],
        [-122.403071, 37.755632],
        [-122.403094, 37.75583],
        [-122.403125, 37.75603],
        [-122.403163, 37.756217],
        [-122.403215, 37.756402],
        [-122.403278, 37.756577],
        [-122.403356, 37.756751],
        [-122.403454, 37.756932],
        [-122.403553, 37.757085],
        [-122.403663, 37.757233],
        [-122.403782, 37.757368],
        [-122.403905, 37.757501],
        [-122.404047, 37.757633],
        [-122.404195, 37.757757],
        [-122.404367, 37.75789],
        [-122.404528, 37.758008],
        [-122.404881, 37.758259],
        [-122.405061, 37.758389],
        [-122.405233, 37.758523],
        [-122.405406, 37.758665],
        [-122.405555, 37.758803],
        [-122.405698, 37.758957],
        [-122.405824, 37.759115],
        [-122.405928, 37.759265],
        [-122.406027, 37.759429],
        [-122.406104, 37.759584],
        [-122.406172, 37.759754],
        [-122.406222, 37.759921],
        [-122.406261, 37.760092],
        [-122.406285, 37.760253],
        [-122.406296, 37.76041],
        [-122.406294, 37.760569],
        [-122.406281, 37.760723],
        [-122.406257, 37.760874],
        [-122.406223, 37.761029],
        [-122.406177, 37.761184],
        [-122.406119, 37.761337],
        [-122.406051, 37.761482],
        [-122.405967, 37.761641],
        [-122.405882, 37.761787],
        [-122.40558, 37.762265],
        [-122.405475, 37.762439],
        [-122.40537, 37.762618],
        [-122.405274, 37.762798],
        [-122.405187, 37.762989],
        [-122.405115, 37.763173],
        [-122.405051, 37.763374],
        [-122.405001, 37.763567],
        [-122.40496, 37.763763],
        [-122.40493, 37.763958],
        [-122.404907, 37.764159],
        [-122.404888, 37.764385],
        [-122.404918, 37.765253],
        [-122.405145, 37.767125],
        [-122.405177, 37.767311],
        [-122.405205, 37.767419],
        [-122.405243, 37.767523],
        [-122.405298, 37.76764],
        [-122.405377, 37.76777],
        [-122.405474, 37.767887],
        [-122.405566, 37.767984],
        [-122.405661, 37.768067],
        [-122.405761, 37.768143],
        [-122.406918, 37.769032],
        [-122.407249, 37.769258],
        [-122.407579, 37.769474],
        [-122.407811, 37.769621],
        [-122.407959, 37.769711],
        [-122.408077, 37.76978],
        [-122.408205, 37.769842],
        [-122.40835, 37.769885],
        [-122.408493, 37.769909],
        [-122.408644, 37.769914],
        [-122.408798, 37.769892],
        [-122.408915, 37.769863],
        [-122.409005, 37.769829],
        [-122.409111, 37.769782],
        [-122.409205, 37.769724],
        [-122.409371, 37.769618],
        [-122.409462, 37.769561],
        [-122.409563, 37.76951],
        [-122.40966, 37.769468],
        [-122.409764, 37.769435],
        [-122.409868, 37.769415],
        [-122.409966, 37.769407],
        [-122.410092, 37.769406],
        [-122.410214, 37.769412],
        [-122.410692, 37.76946],
        [-122.411127, 37.769487],
        [-122.411287, 37.769505],
        [-122.411469, 37.769521],
        [-122.411611, 37.769533],
        [-122.411814, 37.769547],
        [-122.411986, 37.769537],
        [-122.412331, 37.76954],
        [-122.415395, 37.769616],
        [-122.415793, 37.769633],
        [-122.416188, 37.769657],
        [-122.416415, 37.769677],
        [-122.416642, 37.769699],
        [-122.416865, 37.769723],
        [-122.417102, 37.769754],
        [-122.417335, 37.769786],
        [-122.417591, 37.769824],
        [-122.418893, 37.770023],
        [-122.419074, 37.770046],
        [-122.419248, 37.770064],
        [-122.419414, 37.770079],
        [-122.419579, 37.770092],
        [-122.41974, 37.770096],
        [-122.420318, 37.770109],
        [-122.420547, 37.770117],
        [-122.420721, 37.77013],
        [-122.420895, 37.77015],
        [-122.421053, 37.770176],
        [-122.421204, 37.770205],
        [-122.421374, 37.770247],
        [-122.421523, 37.770292],
        [-122.421677, 37.770346],
        [-122.421827, 37.770406],
        [-122.421982, 37.770479],
        [-122.422125, 37.770555],
        [-122.422224, 37.770614],
        [-122.422316, 37.770675],
        [-122.422408, 37.770739],
        [-122.422495, 37.770804],
        [-122.422577, 37.770871],
        [-122.422653, 37.770937],
        [-122.422718, 37.771],
        [-122.422784, 37.771068],
        [-122.422853, 37.771144],
        [-122.42292, 37.771227],
        [-122.422994, 37.771325],
        [-122.42306, 37.771428],
        [-122.423322, 37.771858],
        [-122.423345, 37.771894],
        [-122.423386, 37.771958],
        [-122.423404, 37.771986],
        [-122.423489, 37.772122],
        [-122.423539, 37.772221],
        [-122.42358, 37.772322],
        [-122.423611, 37.772429],
        [-122.423633, 37.772528],
        [-122.423724, 37.772971],
        [-122.423912, 37.773903],
        [-122.4241, 37.774835],
        [-122.424272, 37.775679],
        [-122.424283, 37.77571],
        [-122.424307, 37.775738],
        [-122.424344, 37.775763],
        [-122.424496, 37.775743],
        [-122.426098, 37.77554],
        [-122.42774, 37.775331],
        [-122.429383, 37.775121],
        [-122.431028, 37.774912],
        [-122.432675, 37.774702],
        [-122.434316, 37.774493],
        [-122.435726, 37.774314],
        [-122.435961, 37.774284],
        [-122.435996, 37.77428],
        [-122.437246, 37.77412],
        [-122.437365, 37.774105],
        [-122.437584, 37.774077],
        [-122.437676, 37.774066],
        [-122.43797, 37.774028],
        [-122.438138, 37.774007],
        [-122.438998, 37.773897],
        [-122.439196, 37.773872],
        [-122.439297, 37.773859],
        [-122.440299, 37.773732],
        [-122.440544, 37.7737],
        [-122.440775, 37.773669],
        [-122.440935, 37.773642],
        [-122.441066, 37.773616],
        [-122.44258, 37.77342],
        [-122.442674, 37.773409],
        [-122.444224, 37.773211],
        [-122.444295, 37.773202],
        [-122.445226, 37.773084],
        [-122.445771, 37.773014],
        [-122.445924, 37.772995],
        [-122.445943, 37.773088],
        [-122.446007, 37.773407],
        [-122.446102, 37.773876],
        [-122.446126, 37.773946],
        [-122.446148, 37.774014],
        [-122.446308, 37.774803],
        [-122.446311, 37.774878],
        [-122.446319, 37.774952],
        [-122.446439, 37.775546],
        [-122.446477, 37.775731],
        [-122.446493, 37.77581],
        [-122.44651, 37.775895],
        [-122.446681, 37.776743],
        [-122.446851, 37.777584],
        [-122.446869, 37.777674],
        [-122.446888, 37.777767],
        [-122.447041, 37.778527],
        [-122.447062, 37.778631],
        [-122.4472, 37.778614],
        [-122.447549, 37.77857],
        [-122.448019, 37.77851],
        [-122.448904, 37.778397],
        [-122.449225, 37.778357],
        [-122.449789, 37.778285],
        [-122.44987, 37.778279],
        [-122.450348, 37.778244],
        [-122.450602, 37.778217],
        [-122.450684, 37.778207],
        [-122.4508, 37.778192],
        [-122.450903, 37.778179],
        [-122.451568, 37.778096],
        [-122.451804, 37.778065],
        [-122.452454, 37.777981],
        [-122.452554, 37.777969],
        [-122.453287, 37.777874],
        [-122.453333, 37.777864],
        [-122.453407, 37.777836],
        [-122.453473, 37.777831],
        [-122.453538, 37.777823],
        [-122.454355, 37.777719],
        [-122.455233, 37.777607],
        [-122.455236, 37.777713],
        [-122.455279, 37.777952],
        [-122.45546, 37.778824],
        [-122.455569, 37.779361],
        [-122.455586, 37.779435],
        [-122.455604, 37.779505],
        [-122.455623, 37.779564],
        [-122.455642, 37.779614],
        [-122.455664, 37.779667],
        [-122.455691, 37.779723],
        [-122.455725, 37.779779],
        [-122.455759, 37.779825],
        [-122.455859, 37.779946],
        [-122.455937, 37.780042],
        [-122.455976, 37.780091],
        [-122.456017, 37.780144],
        [-122.45604, 37.780179],
        [-122.456045, 37.780187],
        [-122.456056, 37.780206],
        [-122.456084, 37.780275],
        [-122.456093, 37.780299],
        [-122.456167, 37.780663],
        [-122.45619, 37.78078],
        [-122.456283, 37.781239],
        [-122.456309, 37.78133],
        [-122.456344, 37.781451],
        [-122.456446, 37.781447],
        [-122.456653, 37.781437],
        [-122.457647, 37.781392],
        [-122.457757, 37.781387],
        [-122.457764, 37.78148],
        [-122.457843, 37.782519],
        [-122.45794, 37.783879],
        [-122.458041, 37.78539]
      ],
      "type": "LineString"
    },
    "weight": 1409,
    "distance": 11190.4,
    "duration": 1177.7
  }, {
    "legs": [{
      "steps": [{
        "intersections": [{
          "out": 0,
          "entry": [true],
          "location": [-122.381405, 37.738277],
          "bearings": [35]
        }, {
          "out": 0,
          "in": 2,
          "entry": [true, true, false, false],
          "location": [-122.381002, 37.738726],
          "bearings": [30, 120, 210, 300]
        }],
        "geometry": {
          "coordinates": [
            [-122.381405, 37.738277],
            [-122.381002, 37.738726],
            [-122.380915, 37.738824]
          ],
          "type": "LineString"
        },
        "duration": 22,
        "distance": 74.6,
        "name": "Keith Street",
        "weight": 32.6,
        "mode": "driving",
        "maneuver": {
          "bearing_after": 35,
          "bearing_before": 0,
          "type": "depart",
          "location": [-122.381405, 37.738277],
          "instruction": "Head northeast on Keith Street"
        }
      }, {
        "intersections": [{
          "out": 2,
          "in": 1,
          "entry": [false, false, true],
          "location": [-122.380915, 37.738824],
          "bearings": [120, 210, 300]
        }, {
          "out": 3,
          "in": 1,
          "entry": [true, false, true, true],
          "location": [-122.383099, 37.740062],
          "bearings": [30, 120, 210, 300]
        }, {
          "out": 3,
          "in": 1,
          "entry": [true, false, true, true],
          "location": [-122.383777, 37.740444],
          "bearings": [45, 120, 210, 300]
        }, {
          "out": 3,
          "in": 1,
          "entry": [true, false, true, true],
          "location": [-122.38468, 37.740959],
          "bearings": [30, 120, 210, 300]
        }, {
          "out": 3,
          "in": 1,
          "entry": [true, false, true, true],
          "location": [-122.386522, 37.742004],
          "bearings": [30, 120, 210, 300]
        }, {
          "out": 3,
          "in": 1,
          "lanes": [{
            "valid": true,
            "indications": ["left"]
          }, {
            "valid": true,
            "indications": ["none"]
          }, {
            "valid": true,
            "indications": ["none"]
          }, {
            "valid": false,
            "indications": ["right"]
          }],
          "entry": [true, false, false, true],
          "location": [-122.387822, 37.74274],
          "bearings": [15, 120, 195, 285]
        }, {
          "out": 3,
          "in": 1,
          "entry": [false, true, true, true],
          "location": [-122.388041, 37.742749],
          "bearings": [15, 120, 195, 300]
        }, {
          "out": 3,
          "in": 1,
          "entry": [true, false, true, true],
          "location": [-122.388448, 37.742987],
          "bearings": [30, 120, 210, 300]
        }, {
          "out": 2,
          "in": 1,
          "entry": [true, false, true],
          "location": [-122.390328, 37.744046],
          "bearings": [30, 120, 300]
        }, {
          "out": 3,
          "in": 1,
          "entry": [true, false, true, true],
          "location": [-122.392193, 37.745106],
          "bearings": [30, 120, 210, 300]
        }, {
          "out": 2,
          "in": 0,
          "entry": [false, true, true],
          "location": [-122.394069, 37.746171],
          "bearings": [120, 210, 300]
        }, {
          "out": 4,
          "in": 1,
          "entry": [true, false, true, true, true],
          "location": [-122.395959, 37.747209],
          "bearings": [90, 120, 210, 270, 315]
        }, {
          "out": 2,
          "in": 1,
          "entry": [true, false, true],
          "location": [-122.396665, 37.74837],
          "bearings": [90, 165, 345]
        }, {
          "out": 2,
          "in": 0,
          "lanes": [{
            "valid": true,
            "indications": ["left"]
          }, {
            "valid": false,
            "indications": ["right"]
          }],
          "entry": [false, false, true],
          "location": [-122.397221, 37.749522],
          "bearings": [165, 315, 345]
        }],
        "geometry": {
          "coordinates": [
            [-122.380915, 37.738824],
            [-122.383099, 37.740062],
            [-122.383777, 37.740444],
            [-122.384305, 37.740745],
            [-122.38468, 37.740959],
            [-122.385631, 37.741495],
            [-122.386138, 37.741781],
            [-122.386522, 37.742004],
            [-122.387136, 37.742352],
            [-122.387388, 37.742487],
            [-122.387822, 37.74274],
            [-122.387897, 37.742764],
            [-122.387939, 37.74277],
            [-122.387989, 37.742765],
            [-122.388041, 37.742749],
            [-122.388136, 37.742805],
            [-122.388266, 37.742881],
            [-122.388448, 37.742987],
            [-122.390328, 37.744046],
            [-122.391805, 37.744888],
            [-122.392193, 37.745106],
            [-122.394069, 37.746171],
            [-122.395272, 37.746832],
            [-122.395959, 37.747209],
            [-122.396114, 37.747311],
            [-122.396186, 37.747385],
            [-122.396263, 37.74751],
            [-122.396318, 37.747628],
            [-122.396665, 37.74837],
            [-122.396698, 37.748439],
            [-122.397045, 37.749164],
            [-122.397221, 37.749522],
            [-122.397259, 37.749604],
            [-122.397269, 37.749636],
            [-122.397275, 37.749662],
            [-122.397284, 37.749695]
          ],
          "type": "LineString"
        },
        "duration": 269.3,
        "distance": 1925.6,
        "name": "Evans Avenue",
        "weight": 309.09999999999997,
        "mode": "driving",
        "maneuver": {
          "bearing_after": 305,
          "location": [-122.380915, 37.738824],
          "type": "end of road",
          "bearing_before": 33,
          "modifier": "left",
          "instruction": "Turn left onto Evans Avenue"
        }
      }, {
        "intersections": [{
          "out": 2,
          "in": 1,
          "lanes": [{
            "valid": true,
            "indications": ["left"]
          }, {
            "valid": false,
            "indications": ["right"]
          }],
          "entry": [true, false, true],
          "location": [-122.397284, 37.749695],
          "bearings": [90, 165, 270]
        }, {
          "out": 2,
          "in": 0,
          "entry": [false, true, true],
          "location": [-122.39849, 37.749624],
          "bearings": [86, 92, 265]
        }, {
          "out": 3,
          "in": 1,
          "lanes": [{
            "valid": true,
            "indications": ["straight", "left"]
          }, {
            "valid": true,
            "indications": ["straight", "right"]
          }],
          "entry": [true, false, false, true],
          "location": [-122.402064, 37.749409],
          "bearings": [0, 90, 180, 270]
        }, {
          "out": 3,
          "in": 1,
          "entry": [true, false, true, true],
          "location": [-122.40287, 37.749523],
          "bearings": [0, 105, 180, 285]
        }],
        "geometry": {
          "coordinates": [
            [-122.397284, 37.749695],
            [-122.397526, 37.749681],
            [-122.398015, 37.749652],
            [-122.39849, 37.749624],
            [-122.39856, 37.749618],
            [-122.399094, 37.749586],
            [-122.399323, 37.749573],
            [-122.400272, 37.749516],
            [-122.400576, 37.749498],
            [-122.400813, 37.749483],
            [-122.400972, 37.749474],
            [-122.40137, 37.74945],
            [-122.401968, 37.749415],
            [-122.402064, 37.749409],
            [-122.402213, 37.74944],
            [-122.40287, 37.749523],
            [-122.402971, 37.749536]
          ],
          "type": "LineString"
        },
        "duration": 48.900000000000006,
        "distance": 502.7,
        "name": "Cesar Chavez Street",
        "weight": 52.900000000000006,
        "mode": "driving",
        "maneuver": {
          "bearing_after": 265,
          "location": [-122.397284, 37.749695],
          "type": "end of road",
          "bearing_before": 343,
          "modifier": "left",
          "instruction": "Turn left onto Cesar Chavez Street"
        }
      }, {
        "intersections": [{
          "classes": ["motorway"],
          "out": 2,
          "in": 0,
          "entry": [false, true, true],
          "location": [-122.402971, 37.749536],
          "bearings": [105, 270, 285]
        }, {
          "classes": ["motorway"],
          "out": 0,
          "in": 2,
          "entry": [true, false, false],
          "location": [-122.402688, 37.752049],
          "bearings": [0, 181, 185]
        }],
        "geometry": {
          "coordinates": [
            [-122.402971, 37.749536],
            [-122.403065, 37.749562],
            [-122.403131, 37.749587],
            [-122.403183, 37.749627],
            [-122.403217, 37.749668],
            [-122.403229, 37.749712],
            [-122.403225, 37.749764],
            [-122.40314, 37.750064],
            [-122.402841, 37.751162],
            [-122.402796, 37.751341],
            [-122.40276, 37.751509],
            [-122.402717, 37.751774],
            [-122.402688, 37.752049],
            [-122.402686, 37.752659],
            [-122.402705, 37.752819],
            [-122.40274, 37.752963],
            [-122.402851, 37.753336]
          ],
          "type": "LineString"
        },
        "maneuver": {
          "bearing_after": 291,
          "location": [-122.402971, 37.749536],
          "type": "on ramp",
          "bearing_before": 278,
          "modifier": "slight right",
          "instruction": "Take the ramp on the right towards US 101"
        },
        "duration": 26.299999999999997,
        "distance": 441.3,
        "destinations": "US 101",
        "name": "",
        "weight": 26.299999999999997,
        "mode": "driving"
      }, {
        "intersections": [{
          "classes": ["motorway"],
          "out": 0,
          "in": 1,
          "entry": [true, false, false],
          "location": [-122.402851, 37.753336],
          "bearings": [0, 165, 180]
        }, {
          "classes": ["motorway"],
          "out": 0,
          "in": 2,
          "entry": [true, true, false],
          "location": [-122.405882, 37.761787],
          "bearings": [27, 37, 204]
        }],
        "maneuver": {
          "bearing_after": 354,
          "location": [-122.402851, 37.753336],
          "type": "merge",
          "bearing_before": 345,
          "modifier": "slight left",
          "instruction": "Merge left onto US 101"
        },
        "duration": 54.800000000000004,
        "distance": 1343.2,
        "name": "James Lick Freeway (US 101)",
        "geometry": {
          "coordinates": [
            [-122.402851, 37.753336],
            [-122.403053, 37.755443],
            [-122.403071, 37.755632],
            [-122.403094, 37.75583],
            [-122.403125, 37.75603],
            [-122.403163, 37.756217],
            [-122.403215, 37.756402],
            [-122.403278, 37.756577],
            [-122.403356, 37.756751],
            [-122.403454, 37.756932],
            [-122.403553, 37.757085],
            [-122.403663, 37.757233],
            [-122.403782, 37.757368],
            [-122.403905, 37.757501],
            [-122.404047, 37.757633],
            [-122.404195, 37.757757],
            [-122.404367, 37.75789],
            [-122.404528, 37.758008],
            [-122.404881, 37.758259],
            [-122.405061, 37.758389],
            [-122.405233, 37.758523],
            [-122.405406, 37.758665],
            [-122.405555, 37.758803],
            [-122.405698, 37.758957],
            [-122.405824, 37.759115],
            [-122.405928, 37.759265],
            [-122.406027, 37.759429],
            [-122.406104, 37.759584],
            [-122.406172, 37.759754],
            [-122.406222, 37.759921],
            [-122.406261, 37.760092],
            [-122.406285, 37.760253],
            [-122.406296, 37.76041],
            [-122.406294, 37.760569],
            [-122.406281, 37.760723],
            [-122.406257, 37.760874],
            [-122.406223, 37.761029],
            [-122.406177, 37.761184],
            [-122.406119, 37.761337],
            [-122.406051, 37.761482],
            [-122.405967, 37.761641],
            [-122.405882, 37.761787],
            [-122.40558, 37.762265],
            [-122.405475, 37.762439],
            [-122.40537, 37.762618],
            [-122.405274, 37.762798],
            [-122.405187, 37.762989],
            [-122.405115, 37.763173],
            [-122.405051, 37.763374],
            [-122.405001, 37.763567],
            [-122.40496, 37.763763],
            [-122.40493, 37.763958],
            [-122.404907, 37.764159],
            [-122.404888, 37.764385]
          ],
          "type": "LineString"
        },
        "ref": "US 101",
        "weight": 54.800000000000004,
        "mode": "driving"
      }, {
        "intersections": [{
          "classes": ["motorway"],
          "out": 2,
          "in": 1,
          "entry": [true, false, true],
          "location": [-122.404888, 37.764385],
          "bearings": [6, 185, 358]
        }],
        "maneuver": {
          "bearing_after": 357,
          "location": [-122.404888, 37.764385],
          "type": "fork",
          "bearing_before": 4,
          "modifier": "slight left",
          "instruction": "Keep left at the fork onto US 101"
        },
        "duration": 25.8,
        "distance": 576.4,
        "exits": "433C",
        "mode": "driving",
        "weight": 25.8,
        "name": "Central Freeway (US 101)",
        "geometry": {
          "coordinates": [
            [-122.404888, 37.764385],
            [-122.404918, 37.765253],
            [-122.405145, 37.767125],
            [-122.405177, 37.767311],
            [-122.405205, 37.767419],
            [-122.405243, 37.767523],
            [-122.405298, 37.76764],
            [-122.405377, 37.76777],
            [-122.405474, 37.767887],
            [-122.405566, 37.767984],
            [-122.405661, 37.768067],
            [-122.405761, 37.768143],
            [-122.406918, 37.769032]
          ],
          "type": "LineString"
        },
        "ref": "US 101"
      }, {
        "intersections": [{
          "classes": ["motorway"],
          "out": 2,
          "in": 0,
          "entry": [false, true, true],
          "location": [-122.406918, 37.769032],
          "bearings": [134, 311, 314]
        }],
        "geometry": {
          "coordinates": [
            [-122.406918, 37.769032],
            [-122.408374, 37.770142],
            [-122.408458, 37.770217],
            [-122.408529, 37.770297],
            [-122.408586, 37.770378],
            [-122.408632, 37.770461],
            [-122.408664, 37.770552],
            [-122.408678, 37.770639],
            [-122.408686, 37.770725],
            [-122.408678, 37.770798],
            [-122.408659, 37.770868],
            [-122.408631, 37.770942],
            [-122.40856, 37.771113],
            [-122.408539, 37.771202],
            [-122.408537, 37.771301]
          ],
          "type": "LineString"
        },
        "maneuver": {
          "bearing_after": 313,
          "location": [-122.406918, 37.769032],
          "type": "off ramp",
          "bearing_before": 313,
          "modifier": "slight right",
          "instruction": "Take exit 433C on the right towards Ninth Street"
        },
        "duration": 50.2,
        "distance": 315.9,
        "destinations": "Ninth Street, Civic Center",
        "exits": "433C",
        "mode": "driving",
        "weight": 56.3,
        "name": ""
      }, {
        "intersections": [{
          "out": 4,
          "in": 2,
          "lanes": [{
            "valid": true,
            "indications": ["left"]
          }, {
            "valid": true,
            "indications": ["left"]
          }, {
            "valid": true,
            "indications": ["left", "right"]
          }, {
            "valid": false,
            "indications": ["right"]
          }],
          "entry": [true, false, false, false, true],
          "location": [-122.408537, 37.771301],
          "bearings": [45, 135, 195, 225, 315]
        }, {
          "out": 3,
          "in": 1,
          "entry": [false, false, true, true],
          "location": [-122.410083, 37.772538],
          "bearings": [45, 135, 225, 315]
        }, {
          "out": 2,
          "in": 0,
          "entry": [false, true, true],
          "location": [-122.410697, 37.773018],
          "bearings": [135, 225, 315]
        }, {
          "out": 3,
          "in": 1,
          "entry": [true, false, false, true],
          "location": [-122.411628, 37.773773],
          "bearings": [45, 135, 225, 315]
        }, {
          "out": 3,
          "in": 1,
          "entry": [false, false, true, true],
          "location": [-122.413153, 37.775],
          "bearings": [45, 135, 225, 315]
        }, {
          "out": 3,
          "in": 1,
          "entry": [true, false, true, true],
          "location": [-122.414717, 37.776233],
          "bearings": [45, 135, 225, 315]
        }, {
          "out": 2,
          "in": 0,
          "entry": [false, false, true],
          "location": [-122.415326, 37.776714],
          "bearings": [135, 225, 315]
        }, {
          "out": 3,
          "in": 1,
          "entry": [true, false, false, true],
          "location": [-122.416265, 37.777462],
          "bearings": [45, 135, 225, 315]
        }],
        "geometry": {
          "coordinates": [
            [-122.408537, 37.771301],
            [-122.409082, 37.771737],
            [-122.410083, 37.772538],
            [-122.410697, 37.773018],
            [-122.411079, 37.773324],
            [-122.411628, 37.773773],
            [-122.412166, 37.774203],
            [-122.412622, 37.774569],
            [-122.413153, 37.775],
            [-122.413443, 37.775229],
            [-122.413713, 37.775441],
            [-122.414171, 37.775803],
            [-122.414717, 37.776233],
            [-122.415326, 37.776714],
            [-122.415745, 37.777045],
            [-122.416167, 37.777377],
            [-122.416265, 37.777462],
            [-122.416308, 37.777499],
            [-122.416362, 37.777545]
          ],
          "type": "LineString"
        },
        "duration": 121.5,
        "distance": 977.6,
        "name": "9th Street",
        "weight": 145.6,
        "mode": "driving",
        "maneuver": {
          "bearing_after": 315,
          "location": [-122.408537, 37.771301],
          "type": "turn",
          "bearing_before": 9,
          "modifier": "left",
          "instruction": "Turn left onto 9th Street"
        }
      }, {
        "intersections": [{
          "out": 4,
          "in": 1,
          "entry": [false, false, true, true, true],
          "location": [-122.416362, 37.777545],
          "bearings": [45, 135, 225, 300, 345]
        }, {
          "out": 3,
          "in": 1,
          "entry": [false, false, false, true],
          "location": [-122.416423, 37.777745],
          "bearings": [90, 165, 255, 345]
        }, {
          "out": 3,
          "in": 1,
          "entry": [true, false, true, true],
          "location": [-122.416619, 37.778677],
          "bearings": [90, 165, 270, 345]
        }, {
          "out": 2,
          "in": 1,
          "entry": [true, false, true],
          "location": [-122.416814, 37.779585],
          "bearings": [75, 165, 345]
        }, {
          "out": 3,
          "in": 1,
          "entry": [true, false, true, true],
          "location": [-122.41699, 37.780499],
          "bearings": [75, 165, 255, 345]
        }, {
          "out": 3,
          "in": 1,
          "entry": [true, false, false, true],
          "location": [-122.417173, 37.781451],
          "bearings": [75, 165, 255, 345]
        }, {
          "out": 3,
          "in": 1,
          "entry": [false, false, true, true],
          "location": [-122.41736, 37.782384],
          "bearings": [75, 165, 255, 345]
        }, {
          "out": 3,
          "in": 1,
          "entry": [true, false, true, true],
          "location": [-122.417548, 37.783315],
          "bearings": [75, 165, 255, 345]
        }],
        "geometry": {
          "coordinates": [
            [-122.416362, 37.777545],
            [-122.416423, 37.777745],
            [-122.416619, 37.778677],
            [-122.41678, 37.779419],
            [-122.416814, 37.779585],
            [-122.416843, 37.77973],
            [-122.416976, 37.780389],
            [-122.416984, 37.780433],
            [-122.41699, 37.780499],
            [-122.416996, 37.780553],
            [-122.417003, 37.780599],
            [-122.417039, 37.78078],
            [-122.417085, 37.78101],
            [-122.417173, 37.781451],
            [-122.41736, 37.782384],
            [-122.417548, 37.783315],
            [-122.417643, 37.783784],
            [-122.417736, 37.784246]
          ],
          "type": "LineString"
        },
        "duration": 102.6,
        "distance": 755.2,
        "name": "Larkin Street",
        "weight": 133.4,
        "mode": "driving",
        "maneuver": {
          "bearing_after": 345,
          "location": [-122.416362, 37.777545],
          "type": "turn",
          "bearing_before": 316,
          "modifier": "slight right",
          "instruction": "Make a slight right onto Larkin Street"
        }
      }, {
        "intersections": [{
          "out": 2,
          "in": 1,
          "entry": [true, false, true, true],
          "location": [-122.417736, 37.784246],
          "bearings": [75, 165, 255, 345]
        }, {
          "out": 2,
          "in": 0,
          "entry": [false, true, true, true],
          "location": [-122.419381, 37.784036],
          "bearings": [75, 165, 255, 345]
        }, {
          "out": 2,
          "in": 0,
          "entry": [false, false, true, true],
          "location": [-122.420947, 37.783837],
          "bearings": [75, 165, 255, 345]
        }, {
          "out": 2,
          "in": 0,
          "entry": [false, true, true, false],
          "location": [-122.421098, 37.783818],
          "bearings": [75, 165, 255, 345]
        }],
        "geometry": {
          "coordinates": [
            [-122.417736, 37.784246],
            [-122.419381, 37.784036],
            [-122.420947, 37.783837],
            [-122.421098, 37.783818],
            [-122.422668, 37.783619]
          ],
          "type": "LineString"
        },
        "duration": 105.7,
        "distance": 439.1,
        "name": "Ellis Street",
        "weight": 125.9,
        "mode": "driving",
        "maneuver": {
          "bearing_after": 260,
          "location": [-122.417736, 37.784246],
          "type": "turn",
          "bearing_before": 350,
          "modifier": "left",
          "instruction": "Turn left onto Ellis Street"
        }
      }, {
        "intersections": [{
          "out": 3,
          "in": 0,
          "entry": [false, false, true, true],
          "location": [-122.422668, 37.783619],
          "bearings": [75, 165, 255, 345]
        }, {
          "out": 3,
          "in": 1,
          "entry": [true, false, false, true],
          "location": [-122.422856, 37.784551],
          "bearings": [75, 165, 285, 345]
        }, {
          "out": 2,
          "in": 1,
          "entry": [true, false, true],
          "location": [-122.422951, 37.78502],
          "bearings": [75, 165, 345]
        }],
        "geometry": {
          "coordinates": [
            [-122.422668, 37.783619],
            [-122.422763, 37.784088],
            [-122.422842, 37.784479],
            [-122.422856, 37.784551],
            [-122.422873, 37.784634],
            [-122.422951, 37.78502],
            [-122.423028, 37.785401],
            [-122.423045, 37.785486]
          ],
          "type": "LineString"
        },
        "duration": 29.7,
        "distance": 210.3,
        "name": "Franklin Street",
        "weight": 48.5,
        "mode": "driving",
        "maneuver": {
          "bearing_after": 350,
          "location": [-122.422668, 37.783619],
          "type": "turn",
          "bearing_before": 260,
          "modifier": "right",
          "instruction": "Turn right onto Franklin Street"
        }
      }, {
        "intersections": [{
          "out": 2,
          "in": 1,
          "entry": [false, false, true, true],
          "location": [-122.423045, 37.785486],
          "bearings": [75, 165, 255, 345]
        }, {
          "out": 2,
          "in": 1,
          "entry": [true, false, true],
          "location": [-122.424344, 37.785404],
          "bearings": [0, 90, 270]
        }, {
          "out": 3,
          "in": 1,
          "entry": [false, false, false, true, false],
          "location": [-122.424719, 37.785429],
          "bearings": [60, 90, 165, 270, 345]
        }, {
          "out": 2,
          "in": 0,
          "entry": [false, false, true, true],
          "location": [-122.428015, 37.785044],
          "bearings": [75, 165, 255, 345]
        }, {
          "out": 1,
          "in": 0,
          "entry": [false, true, true],
          "location": [-122.429933, 37.784808],
          "bearings": [75, 255, 270]
        }, {
          "out": 2,
          "in": 0,
          "lanes": [{
            "valid": false,
            "indications": ["left"]
          }, {
            "valid": true,
            "indications": ["none"]
          }, {
            "valid": true,
            "indications": ["none"]
          }, {
            "valid": true,
            "indications": ["none"]
          }],
          "entry": [false, false, true, false],
          "location": [-122.431163, 37.784654],
          "bearings": [75, 165, 255, 345]
        }, {
          "out": 2,
          "in": 0,
          "lanes": [{
            "valid": false,
            "indications": ["left"]
          }, {
            "valid": true,
            "indications": ["none"]
          }, {
            "valid": true,
            "indications": ["none"]
          }, {
            "valid": true,
            "indications": ["none"]
          }],
          "entry": [false, true, true, false],
          "location": [-122.431306, 37.784634],
          "bearings": [75, 165, 255, 345]
        }, {
          "out": 2,
          "in": 0,
          "entry": [false, false, true, false],
          "location": [-122.434596, 37.784214],
          "bearings": [75, 165, 255, 345]
        }, {
          "out": 2,
          "in": 1,
          "entry": [false, false, true],
          "location": [-122.435506, 37.784096],
          "bearings": [71, 81, 261]
        }, {
          "out": 2,
          "in": 0,
          "entry": [false, false, true, true],
          "location": [-122.437882, 37.783795],
          "bearings": [75, 165, 255, 345]
        }, {
          "out": 2,
          "in": 0,
          "entry": [false, false, true, true],
          "location": [-122.439467, 37.783388],
          "bearings": [75, 165, 255, 345]
        }, {
          "out": 2,
          "in": 0,
          "entry": [false, false, true, false],
          "location": [-122.439553, 37.783376],
          "bearings": [75, 165, 255, 345]
        }, {
          "out": 1,
          "in": 0,
          "entry": [false, true, true],
          "location": [-122.441175, 37.783169],
          "bearings": [75, 255, 345]
        }, {
          "out": 2,
          "in": 0,
          "entry": [false, false, true, true],
          "location": [-122.44282, 37.78296],
          "bearings": [75, 165, 255, 345]
        }, {
          "out": 1,
          "in": 0,
          "entry": [false, true, true],
          "location": [-122.443699, 37.78285],
          "bearings": [75, 255, 270]
        }, {
          "out": 2,
          "in": 0,
          "entry": [false, false, true],
          "location": [-122.449569, 37.782252],
          "bearings": [75, 90, 255]
        }, {
          "out": 2,
          "in": 0,
          "entry": [false, false, true, true],
          "location": [-122.450122, 37.782181],
          "bearings": [75, 165, 255, 345]
        }, {
          "out": 2,
          "in": 0,
          "lanes": [{
            "valid": false,
            "indications": ["left"]
          }, {
            "valid": true,
            "indications": ["none"]
          }, {
            "valid": true,
            "indications": ["none"]
          }, {
            "valid": true,
            "indications": ["none"]
          }],
          "entry": [false, true, true, true],
          "location": [-122.451148, 37.782051],
          "bearings": [75, 165, 255, 345]
        }, {
          "out": 2,
          "in": 0,
          "entry": [false, false, true, true],
          "location": [-122.452175, 37.781919],
          "bearings": [75, 165, 255, 345]
        }, {
          "out": 2,
          "in": 0,
          "lanes": [{
            "valid": false,
            "indications": ["left"]
          }, {
            "valid": true,
            "indications": ["none"]
          }, {
            "valid": true,
            "indications": ["none"]
          }, {
            "valid": true,
            "indications": ["none"]
          }],
          "entry": [false, true, true, true],
          "location": [-122.453199, 37.781789],
          "bearings": [75, 165, 255, 345]
        }, {
          "out": 2,
          "in": 0,
          "entry": [false, false, true, true],
          "location": [-122.454193, 37.781663],
          "bearings": [75, 165, 255, 345]
        }, {
          "out": 2,
          "in": 0,
          "lanes": [{
            "valid": false,
            "indications": ["left"]
          }, {
            "valid": true,
            "indications": ["none"]
          }, {
            "valid": true,
            "indications": ["none"]
          }, {
            "valid": true,
            "indications": ["none"]
          }],
          "entry": [false, true, true],
          "location": [-122.455307, 37.781522],
          "bearings": [75, 165, 255]
        }, {
          "out": 3,
          "in": 1,
          "entry": [true, false, true, true],
          "location": [-122.455551, 37.781493],
          "bearings": [0, 75, 180, 270]
        }, {
          "out": 2,
          "in": 0,
          "lanes": [{
            "valid": false,
            "indications": ["left"]
          }, {
            "valid": true,
            "indications": ["none"]
          }, {
            "valid": true,
            "indications": ["none"]
          }, {
            "valid": true,
            "indications": ["none"]
          }],
          "entry": [false, true, true],
          "location": [-122.456344, 37.781451],
          "bearings": [90, 165, 270]
        }, {
          "out": 2,
          "in": 1,
          "lanes": [{
            "valid": true,
            "indications": ["straight"]
          }, {
            "valid": true,
            "indications": ["none"]
          }, {
            "valid": true,
            "indications": ["none"]
          }],
          "entry": [true, false, true],
          "location": [-122.456653, 37.781437],
          "bearings": [0, 90, 270]
        }],
        "geometry": {
          "coordinates": [
            [-122.423045, 37.785486],
            [-122.423161, 37.785471],
            [-122.423681, 37.785405],
            [-122.423794, 37.785392],
            [-122.423909, 37.785384],
            [-122.424023, 37.785382],
            [-122.424146, 37.785387],
            [-122.424344, 37.785404],
            [-122.424603, 37.785425],
            [-122.424719, 37.785429],
            [-122.424822, 37.785427],
            [-122.424934, 37.785422],
            [-122.425048, 37.785415],
            [-122.425165, 37.785405],
            [-122.425284, 37.785392],
            [-122.427922, 37.785056],
            [-122.428015, 37.785044],
            [-122.428109, 37.785033],
            [-122.429132, 37.784906],
            [-122.429527, 37.784857],
            [-122.429933, 37.784808],
            [-122.430498, 37.784737],
            [-122.430819, 37.784697],
            [-122.430978, 37.784679],
            [-122.431053, 37.784669],
            [-122.431163, 37.784654],
            [-122.431306, 37.784634],
            [-122.431412, 37.78462],
            [-122.431423, 37.784619],
            [-122.432805, 37.784442],
            [-122.433094, 37.784405],
            [-122.434476, 37.784228],
            [-122.434494, 37.784226],
            [-122.434596, 37.784214],
            [-122.434676, 37.784204],
            [-122.435506, 37.784096],
            [-122.437286, 37.783871],
            [-122.437792, 37.783807],
            [-122.437882, 37.783795],
            [-122.437966, 37.783784],
            [-122.437998, 37.78378],
            [-122.438104, 37.783762],
            [-122.438202, 37.78374],
            [-122.438268, 37.783721],
            [-122.438299, 37.783713],
            [-122.438388, 37.783682],
            [-122.43848, 37.783645],
            [-122.438584, 37.783598],
            [-122.438684, 37.783555],
            [-122.438779, 37.783519],
            [-122.438876, 37.783486],
            [-122.438967, 37.783461],
            [-122.439064, 37.783441],
            [-122.439166, 37.783426],
            [-122.439305, 37.783408],
            [-122.439387, 37.783398],
            [-122.439467, 37.783388],
            [-122.439553, 37.783376],
            [-122.439652, 37.783364],
            [-122.441175, 37.783169],
            [-122.442716, 37.782973],
            [-122.44282, 37.78296],
            [-122.442936, 37.782946],
            [-122.443699, 37.78285],
            [-122.444393, 37.782735],
            [-122.444573, 37.782708],
            [-122.445724, 37.782564],
            [-122.446007, 37.782529],
            [-122.446288, 37.782502],
            [-122.446551, 37.782486],
            [-122.446822, 37.782481],
            [-122.447089, 37.78248],
            [-122.447336, 37.782475],
            [-122.447572, 37.782463],
            [-122.447735, 37.782452],
            [-122.447878, 37.782439],
            [-122.448016, 37.782425],
            [-122.448159, 37.782409],
            [-122.448309, 37.78239],
            [-122.448748, 37.782334],
            [-122.448993, 37.782303],
            [-122.449176, 37.782284],
            [-122.449334, 37.782271],
            [-122.449569, 37.782252],
            [-122.449759, 37.782228],
            [-122.450048, 37.782191],
            [-122.450122, 37.782181],
            [-122.4502, 37.782171],
            [-122.45083, 37.782089],
            [-122.451072, 37.78206],
            [-122.451148, 37.782051],
            [-122.451226, 37.782041],
            [-122.452095, 37.78193],
            [-122.452175, 37.781919],
            [-122.45225, 37.78191],
            [-122.452863, 37.781832],
            [-122.45312, 37.781799],
            [-122.453199, 37.781789],
            [-122.453278, 37.781779],
            [-122.454078, 37.781677],
            [-122.454193, 37.781663],
            [-122.454301, 37.781649],
            [-122.455, 37.781559],
            [-122.455307, 37.781522],
            [-122.45542, 37.781507],
            [-122.455551, 37.781493],
            [-122.45569, 37.781482],
            [-122.455811, 37.781475],
            [-122.455947, 37.781466],
            [-122.456232, 37.781455],
            [-122.456344, 37.781451],
            [-122.456446, 37.781447],
            [-122.456653, 37.781437],
            [-122.457647, 37.781392],
            [-122.457757, 37.781387]
          ],
          "type": "LineString"
        },
        "duration": 339.40000000000003,
        "distance": 3092.3,
        "name": "Geary Boulevard",
        "weight": 403.70000000000005,
        "mode": "driving",
        "maneuver": {
          "bearing_after": 260,
          "location": [-122.423045, 37.785486],
          "type": "turn",
          "bearing_before": 350,
          "modifier": "left",
          "instruction": "Turn left onto Geary Boulevard"
        }
      }, {
        "intersections": [{
          "out": 0,
          "in": 1,
          "entry": [true, false, true, true],
          "location": [-122.457757, 37.781387],
          "bearings": [0, 90, 180, 270]
        }, {
          "out": 0,
          "in": 2,
          "entry": [true, true, false, true],
          "location": [-122.45794, 37.783879],
          "bearings": [0, 90, 180, 270]
        }],
        "geometry": {
          "coordinates": [
            [-122.457757, 37.781387],
            [-122.457764, 37.78148],
            [-122.457843, 37.782519],
            [-122.45794, 37.783879],
            [-122.458041, 37.78539]
          ],
          "type": "LineString"
        },
        "duration": 99,
        "distance": 445.9,
        "name": "Palm Avenue",
        "weight": 99,
        "mode": "driving",
        "maneuver": {
          "bearing_after": 355,
          "location": [-122.457757, 37.781387],
          "type": "turn",
          "bearing_before": 265,
          "modifier": "right",
          "instruction": "Turn right onto Palm Avenue"
        }
      }, {
        "intersections": [{
          "in": 0,
          "entry": [true],
          "location": [-122.458041, 37.78539],
          "bearings": [177]
        }],
        "geometry": {
          "coordinates": [
            [-122.458041, 37.78539],
            [-122.458041, 37.78539]
          ],
          "type": "LineString"
        },
        "duration": 0,
        "distance": 0,
        "name": "Palm Avenue",
        "weight": 0,
        "mode": "driving",
        "maneuver": {
          "bearing_after": 0,
          "location": [-122.458041, 37.78539],
          "type": "arrive",
          "bearing_before": 357,
          "modifier": "right",
          "instruction": "You have arrived at your destination, on the right"
        }
      }],
      "weight": 1513.9,
      "distance": 11099.9,
      "summary": "Evans Avenue, Geary Boulevard",
      "duration": 1295.2
    }],
    "weight_name": "routability",
    "geometry": {
      "coordinates": [
        [-122.381405, 37.738277],
        [-122.381002, 37.738726],
        [-122.380915, 37.738824],
        [-122.383099, 37.740062],
        [-122.383777, 37.740444],
        [-122.384305, 37.740745],
        [-122.38468, 37.740959],
        [-122.385631, 37.741495],
        [-122.386138, 37.741781],
        [-122.386522, 37.742004],
        [-122.387136, 37.742352],
        [-122.387388, 37.742487],
        [-122.387822, 37.74274],
        [-122.387897, 37.742764],
        [-122.387939, 37.74277],
        [-122.387989, 37.742765],
        [-122.388041, 37.742749],
        [-122.388136, 37.742805],
        [-122.388266, 37.742881],
        [-122.388448, 37.742987],
        [-122.390328, 37.744046],
        [-122.391805, 37.744888],
        [-122.392193, 37.745106],
        [-122.394069, 37.746171],
        [-122.395272, 37.746832],
        [-122.395959, 37.747209],
        [-122.396114, 37.747311],
        [-122.396186, 37.747385],
        [-122.396263, 37.74751],
        [-122.396318, 37.747628],
        [-122.396665, 37.74837],
        [-122.396698, 37.748439],
        [-122.397045, 37.749164],
        [-122.397221, 37.749522],
        [-122.397259, 37.749604],
        [-122.397269, 37.749636],
        [-122.397275, 37.749662],
        [-122.397284, 37.749695],
        [-122.397526, 37.749681],
        [-122.398015, 37.749652],
        [-122.39849, 37.749624],
        [-122.39856, 37.749618],
        [-122.399094, 37.749586],
        [-122.399323, 37.749573],
        [-122.400272, 37.749516],
        [-122.400576, 37.749498],
        [-122.400813, 37.749483],
        [-122.400972, 37.749474],
        [-122.40137, 37.74945],
        [-122.401968, 37.749415],
        [-122.402064, 37.749409],
        [-122.402213, 37.74944],
        [-122.40287, 37.749523],
        [-122.402971, 37.749536],
        [-122.403065, 37.749562],
        [-122.403131, 37.749587],
        [-122.403183, 37.749627],
        [-122.403217, 37.749668],
        [-122.403229, 37.749712],
        [-122.403225, 37.749764],
        [-122.40314, 37.750064],
        [-122.402841, 37.751162],
        [-122.402796, 37.751341],
        [-122.40276, 37.751509],
        [-122.402717, 37.751774],
        [-122.402688, 37.752049],
        [-122.402686, 37.752659],
        [-122.402705, 37.752819],
        [-122.40274, 37.752963],
        [-122.402851, 37.753336],
        [-122.403053, 37.755443],
        [-122.403071, 37.755632],
        [-122.403094, 37.75583],
        [-122.403125, 37.75603],
        [-122.403163, 37.756217],
        [-122.403215, 37.756402],
        [-122.403278, 37.756577],
        [-122.403356, 37.756751],
        [-122.403454, 37.756932],
        [-122.403553, 37.757085],
        [-122.403663, 37.757233],
        [-122.403782, 37.757368],
        [-122.403905, 37.757501],
        [-122.404047, 37.757633],
        [-122.404195, 37.757757],
        [-122.404367, 37.75789],
        [-122.404528, 37.758008],
        [-122.404881, 37.758259],
        [-122.405061, 37.758389],
        [-122.405233, 37.758523],
        [-122.405406, 37.758665],
        [-122.405555, 37.758803],
        [-122.405698, 37.758957],
        [-122.405824, 37.759115],
        [-122.405928, 37.759265],
        [-122.406027, 37.759429],
        [-122.406104, 37.759584],
        [-122.406172, 37.759754],
        [-122.406222, 37.759921],
        [-122.406261, 37.760092],
        [-122.406285, 37.760253],
        [-122.406296, 37.76041],
        [-122.406294, 37.760569],
        [-122.406281, 37.760723],
        [-122.406257, 37.760874],
        [-122.406223, 37.761029],
        [-122.406177, 37.761184],
        [-122.406119, 37.761337],
        [-122.406051, 37.761482],
        [-122.405967, 37.761641],
        [-122.405882, 37.761787],
        [-122.40558, 37.762265],
        [-122.405475, 37.762439],
        [-122.40537, 37.762618],
        [-122.405274, 37.762798],
        [-122.405187, 37.762989],
        [-122.405115, 37.763173],
        [-122.405051, 37.763374],
        [-122.405001, 37.763567],
        [-122.40496, 37.763763],
        [-122.40493, 37.763958],
        [-122.404907, 37.764159],
        [-122.404888, 37.764385],
        [-122.404918, 37.765253],
        [-122.405145, 37.767125],
        [-122.405177, 37.767311],
        [-122.405205, 37.767419],
        [-122.405243, 37.767523],
        [-122.405298, 37.76764],
        [-122.405377, 37.76777],
        [-122.405474, 37.767887],
        [-122.405566, 37.767984],
        [-122.405661, 37.768067],
        [-122.405761, 37.768143],
        [-122.406918, 37.769032],
        [-122.408374, 37.770142],
        [-122.408458, 37.770217],
        [-122.408529, 37.770297],
        [-122.408586, 37.770378],
        [-122.408632, 37.770461],
        [-122.408664, 37.770552],
        [-122.408678, 37.770639],
        [-122.408686, 37.770725],
        [-122.408678, 37.770798],
        [-122.408659, 37.770868],
        [-122.408631, 37.770942],
        [-122.40856, 37.771113],
        [-122.408539, 37.771202],
        [-122.408537, 37.771301],
        [-122.409082, 37.771737],
        [-122.410083, 37.772538],
        [-122.410697, 37.773018],
        [-122.411079, 37.773324],
        [-122.411628, 37.773773],
        [-122.412166, 37.774203],
        [-122.412622, 37.774569],
        [-122.413153, 37.775],
        [-122.413443, 37.775229],
        [-122.413713, 37.775441],
        [-122.414171, 37.775803],
        [-122.414717, 37.776233],
        [-122.415326, 37.776714],
        [-122.415745, 37.777045],
        [-122.416167, 37.777377],
        [-122.416265, 37.777462],
        [-122.416308, 37.777499],
        [-122.416362, 37.777545],
        [-122.416423, 37.777745],
        [-122.416619, 37.778677],
        [-122.41678, 37.779419],
        [-122.416814, 37.779585],
        [-122.416843, 37.77973],
        [-122.416976, 37.780389],
        [-122.416984, 37.780433],
        [-122.41699, 37.780499],
        [-122.416996, 37.780553],
        [-122.417003, 37.780599],
        [-122.417039, 37.78078],
        [-122.417085, 37.78101],
        [-122.417173, 37.781451],
        [-122.41736, 37.782384],
        [-122.417548, 37.783315],
        [-122.417643, 37.783784],
        [-122.417736, 37.784246],
        [-122.419381, 37.784036],
        [-122.420947, 37.783837],
        [-122.421098, 37.783818],
        [-122.422668, 37.783619],
        [-122.422763, 37.784088],
        [-122.422842, 37.784479],
        [-122.422856, 37.784551],
        [-122.422873, 37.784634],
        [-122.422951, 37.78502],
        [-122.423028, 37.785401],
        [-122.423045, 37.785486],
        [-122.423161, 37.785471],
        [-122.423681, 37.785405],
        [-122.423794, 37.785392],
        [-122.423909, 37.785384],
        [-122.424023, 37.785382],
        [-122.424146, 37.785387],
        [-122.424344, 37.785404],
        [-122.424603, 37.785425],
        [-122.424719, 37.785429],
        [-122.424822, 37.785427],
        [-122.424934, 37.785422],
        [-122.425048, 37.785415],
        [-122.425165, 37.785405],
        [-122.425284, 37.785392],
        [-122.427922, 37.785056],
        [-122.428015, 37.785044],
        [-122.428109, 37.785033],
        [-122.429132, 37.784906],
        [-122.429527, 37.784857],
        [-122.429933, 37.784808],
        [-122.430498, 37.784737],
        [-122.430819, 37.784697],
        [-122.430978, 37.784679],
        [-122.431053, 37.784669],
        [-122.431163, 37.784654],
        [-122.431306, 37.784634],
        [-122.431412, 37.78462],
        [-122.431423, 37.784619],
        [-122.432805, 37.784442],
        [-122.433094, 37.784405],
        [-122.434476, 37.784228],
        [-122.434494, 37.784226],
        [-122.434596, 37.784214],
        [-122.434676, 37.784204],
        [-122.435506, 37.784096],
        [-122.437286, 37.783871],
        [-122.437792, 37.783807],
        [-122.437882, 37.783795],
        [-122.437966, 37.783784],
        [-122.437998, 37.78378],
        [-122.438104, 37.783762],
        [-122.438202, 37.78374],
        [-122.438268, 37.783721],
        [-122.438299, 37.783713],
        [-122.438388, 37.783682],
        [-122.43848, 37.783645],
        [-122.438584, 37.783598],
        [-122.438684, 37.783555],
        [-122.438779, 37.783519],
        [-122.438876, 37.783486],
        [-122.438967, 37.783461],
        [-122.439064, 37.783441],
        [-122.439166, 37.783426],
        [-122.439305, 37.783408],
        [-122.439387, 37.783398],
        [-122.439467, 37.783388],
        [-122.439553, 37.783376],
        [-122.439652, 37.783364],
        [-122.441175, 37.783169],
        [-122.442716, 37.782973],
        [-122.44282, 37.78296],
        [-122.442936, 37.782946],
        [-122.443699, 37.78285],
        [-122.444393, 37.782735],
        [-122.444573, 37.782708],
        [-122.445724, 37.782564],
        [-122.446007, 37.782529],
        [-122.446288, 37.782502],
        [-122.446551, 37.782486],
        [-122.446822, 37.782481],
        [-122.447089, 37.78248],
        [-122.447336, 37.782475],
        [-122.447572, 37.782463],
        [-122.447735, 37.782452],
        [-122.447878, 37.782439],
        [-122.448016, 37.782425],
        [-122.448159, 37.782409],
        [-122.448309, 37.78239],
        [-122.448748, 37.782334],
        [-122.448993, 37.782303],
        [-122.449176, 37.782284],
        [-122.449334, 37.782271],
        [-122.449569, 37.782252],
        [-122.449759, 37.782228],
        [-122.450048, 37.782191],
        [-122.450122, 37.782181],
        [-122.4502, 37.782171],
        [-122.45083, 37.782089],
        [-122.451072, 37.78206],
        [-122.451148, 37.782051],
        [-122.451226, 37.782041],
        [-122.452095, 37.78193],
        [-122.452175, 37.781919],
        [-122.45225, 37.78191],
        [-122.452863, 37.781832],
        [-122.45312, 37.781799],
        [-122.453199, 37.781789],
        [-122.453278, 37.781779],
        [-122.454078, 37.781677],
        [-122.454193, 37.781663],
        [-122.454301, 37.781649],
        [-122.455, 37.781559],
        [-122.455307, 37.781522],
        [-122.45542, 37.781507],
        [-122.455551, 37.781493],
        [-122.45569, 37.781482],
        [-122.455811, 37.781475],
        [-122.455947, 37.781466],
        [-122.456232, 37.781455],
        [-122.456344, 37.781451],
        [-122.456446, 37.781447],
        [-122.456653, 37.781437],
        [-122.457647, 37.781392],
        [-122.457757, 37.781387],
        [-122.457764, 37.78148],
        [-122.457843, 37.782519],
        [-122.45794, 37.783879],
        [-122.458041, 37.78539]
      ],
      "type": "LineString"
    },
    "weight": 1513.9,
    "distance": 11099.9,
    "duration": 1295.2
  }],
  "code": "Ok",
  "uuid": "cj7k5lw51138bxhm69o2yctgf"
}
;
var routeLine, nextPoint, maneuverPoints;
var interval;
var animationControl = d3.select("#animationControl"),
    maneuverIndicateName = d3.select("#maneuverIndicateName"),
    maneuverIndicateArrow = d3.select("#maneuverIndicateArrow"),
    maneuverIndicateDistance = d3.select("#maneuverIndicateDistance"),
    maneuverIndicateDistanceMeasure = d3.select("#maneuverIndicateDistanceMeasure"),
    topPanel = d3.select("#topPanel");

var routeStyleSimple = {
  "id": "route",
  // "after": "road-shields-black",
  "type": "line",
  "filter": ["==", "type", "route"],
  "source": "route",
  "layout": {
      "line-cap": "round",
      "line-join": "round"
    },
  "paint": {
    "line-color": "#D659FF",
    "line-opacity": 1,
    "line-width": {
          "stops": [
            [7, 1.8],
            [8, 1.9],
            [9, 2.4],
            [10, 2.5],
            [12, 3],
            [14, 5],
            [18, 20]
          ]},
  }
};
// var routeStyleTraffic = {
//   "id": "routeTraffic",
//   "after": "road-label-small",
//   "type": "line",
//   "filter": ["==", "type", "traffic"],
//   "source": "route",
//   "layout": {
//     "line-cap": "round",
//     "line-join": "round"
//   },
//   "paint": {
//     "line-opacity": 1,
//     "line-color":  "#52a9f4",
//     "line-width": {
//       "base": 1,
//       "stops": [
//         [8, 1],
//     [11, 4],
//     [14, 9],
//     [18, 13],
//     [22, 20]
//       ]
//     }
//   }
// };


// var routeStyleTrafficCase = {
//   "id": "routeTrafficCase",
//   "after": "road-label-small",
//   "type": "line",
//   "filter": ["==", "type", "traffic"],
//   "source": "route",
//   "layout": {
//     "line-cap": "round",
//     "line-join": "round"
//   },
//   "paint": {
//     "line-color": {
//       "property": "speed",
//       "type": "interval",
//       "stops": [
//         [10, "#1e85e6"],
//         [20, "#FDBC04"],
//         [30, "#ED0B0B"],
//         [40, "#990303"]
//       ],
//     },

//     //"line-color":  "#1c84e6",
//     "line-opacity": 1,
//     "line-width": {
//       "base": 1,
//       "stops": [
//         [8, 1.5],
//         [11, 8],
//         [14, 16],
//         [18, 23],
//         [22, 35]
//       ]
//     }
//   }
// };
// var pointerStyleBg = {
//   "id": "pointerBg",
//   "type": "circle",
//   "source": "point",
//   "paint": {
//     "circle-color": "#53A9F4",
//     "circle-opacity": 0.35,
//     "circle-radius": {
//       "stops": [
//         [9,0],
//         [11.99, 0],
//         [12, 14],
//         [16, 23],
//         [18, 32]

//       ]}
//   }
// };

// var pointerStyleBg2 = {
//   "id": "pointerBg2",
//   "type": "circle",
//   "source": "point",
//   "paint": {
//     "circle-color": "#53A9F4",
//     "circle-opacity": 0.55,
//     "circle-radius": {
//       "stops": [
//         [9,0],
//         [11.99, 0],
//         [12, 7],
//         [16, 13],
//         [18, 18]

//       ]}
//   }
// };

// var pointerStyle = {
//   "id": "pointer",
//   "type": "circle",
//   "source": "point",
//   "paint": {
//     "circle-color": "#53A9F4",
//     "circle-opacity": 1,
//     "circle-radius": {
//       "stops": [
//         [9,0],
//         [11.99, 0],
//         [12, 4],
//         [16, 7],
//         [18, 10]
//       ]}
//   }
// };


var pointerStyle = {
  "id": "pointer",
  "type": "symbol",
  "source": "point",
  "layout": {
    "icon-image": "location_start",
    "icon-allow-overlap": true,
    "icon-size": {
      "base": 1,
      "stops": [
        [8, 0.55],
        [12, 0.85],
        [22, 1.75]
      ]
    }
  }
};


// var maneuverStyle = {
//   "id": "maneuver",
//   "type": "circle",
//   "source": "route",
//   // "layout": {
//   //   "visibility": "none"
//   // },
//   "filter": ["==", "type", "maneuver"],
//   "paint": {
//     "circle-color": "#F766FF",
//     "circle-opacity": 1,
//     "circle-radius": 9
//   }
// };


var maneuverStyle = {
    "id": "maneuver",
    "type": "symbol",
    "source": "route",
    "min-zoom": 12,
    "filter": ["==", "type", "maneuver"],
    "layout": {
      'visibility': 'none',
        "text-size": {
            "base": 1,
            "stops": [
                [11,0],
                [12.9, 0],
                [13, 13],
                [15,16],
                [22,20]
            ]
        },
        // "icon-offset": [
        //     62,-25
        // ],
        "icon-image": {
          "base": 1,
          "type": "categorical",
          "property": "arrow",
          "stops": [
            ["right", "right_2"],
            ["left", 'left_2'],
            ["straight", "straight_2"],
            ["slight-left", "slight-left_2"],
            ["slight-right", "slight-right_2"]
          ],
          "default": "straight"
        },
        "icon-rotation-alignment": "viewport",
        "text-max-angle": 30,
        // "symbol-spacing": {
        //     "base": 1,
        //     "stops": [
        //         [0,100],
        //         [22,1000]
        //     ]
        // },
        "text-font": [
            "Roboto Bold",
            "Arial Unicode MS Bold"
        ],
        "symbol-placement": "point",
        "text-justify": "right",
        'text-allow-overlap': true,
        //"text-padding": 5,
        "text-offset": [6.5,-1.2],
        "text-rotation-alignment": "viewport",
        "icon-allow-overlap": true,
        "icon-text-fit": 'both',
        'icon-text-fit-padding': [
          40,120,40,150
        ],
        // "icon-size": {
        //     "base": 1.25,
        //     "stops": [
        //         [12, 0],
        //         [22, 0.9]
        //     ]
        // },
        "text-field": '{name}',
        "text-letter-spacing": 0
    },
    "paint": {
        "text-color": '#fff',
        "text-translate": [
            0,
            0
        ]
    }
};




toggleAnimation = () => {
  if(!state.animation) {
    interval = setInterval(moveNext, state.speed);
    state.animation = true;
    animationControl.attr("class", "stop");
    map.addLayer(maneuverStyle);
  } else {
    clearInterval(interval);
    state.animation = false;
    animationControl.attr("class", "play");
    map.removeLayer(maneuverStyle);
  }
}
moveNext = () => {
  state.distance += state.increment;
  console.log(state.distance);
  if((state.distance-state.increment) > state.length) {
    state.distance = 0;
    resetManeuverPoints();
  }
  state.point = turf.along(routeLine, state.distance, 'kilometers');
  state.bearing = turf.bearing(state.point, turf.along(routeLine, (state.distance+state.increment), 'kilometers'));
  //      map.setPitch
  map.easeTo({
      center: state.point.geometry.coordinates,
      bearing: state.bearing,
      pitch: state.pitch,
      zoom: state.zoom
  });
  var nearest = turf.nearest(state.point, {type: "FeatureCollection", features: maneuverPoints.features.filter(f=>!f.properties.passed)});
  var maneuverDistance = turf.distance(state.point, nearest, "kilometers");
  maneuverIndicateDistance.text(formatter(maneuverDistance));
  maneuverIndicateDistanceMeasure.text(formatterM(maneuverDistance));
  maneuverIndicateName.text(nearest.properties.name);
  maneuverIndicateArrow.attr("class", nearest.properties.arrow);
  if(maneuverDistance < state.increment*2) {
    maneuverPoints.features.forEach(f=>{
      if(f.properties.id === nearest.properties.id) {
        f.properties.passed = true;
      }
    });
  }
  map.getSource("point").setData({type: "FeatureCollection", features: [state.point]});
}
resetManeuverPoints = () => {
  maneuverPoints.features.forEach((f,i)=>{
    f.properties['passed'] = false;
    f.properties['id'] = i;
  });
}
formatter = (v) => {
  var r;
  if(v>0) r = Math.floor(v*1000);
  if(v>0.1) r = Math.floor(v*100)*10;
  if(v>1) r = Math.floor(v*10)/10;
  if(v>10) r = Math.floor(v);
  return r;
}
formatterM = (v) => {
  var r;
  if(v>0) r ="m";
  if(v>1) r = "km";
  if(v>10) r = "km";
  return r;
}
map.on('click', function(e) {
     // set bbox as 5px reactangle area around clicked point
     var bbox = [[e.point.x - 5, e.point.y - 5], [e.point.x + 5, e.point.y + 5]];
     var features = map.queryRenderedFeatures(bbox, { layers: ['maneuver'] });
     console.log(features);
  });
  
  map.on('load', ()=> {
    d3.json('./routeUnited.geojson?' + Math.random(), json => {
      
      routeLine = json.features[0];
      maneuverPoints = { type: "FeatureCollection", features: json.features.filter((f)=> f.properties.type === "maneuver") }
      resetManeuverPoints(); //reset maneuver points flag
      state.length = turf.lineDistance(routeLine, 'kilometers');
      state.point = turf.along(routeLine, state.distance, 'kilometers');
      map.addSource("route", { type: "geojson", data: "./routeUnited.geojson" });
      map.addSource("maneuver1", { type: "geojson", data: "./routeUnited.geojson" });
      map.addSource("point", { type: "geojson", data: {type: "FeatureCollection", features: [state.point]} });
      //map.addLayer(maneuverStyle);
      var style = map.getStyle();
      //console.log(style);

    style.layers.forEach(l=>{ console.log(l.id);});

    var afterId = style.layers.length;
    style.layers.forEach((l, i) => {
    //  console.log(l.id);
      if (l.id=='road-label-small') afterId=i;
       });
    console.log(afterId);
    //style.layers.splice(afterId, 0, pointerStyleBg);
    //style.layers.splice(afterId, 0,routeStyleSimple);
    // style.layers.splice(afterId, 0, routeStyleTraffic);
    // style.layers.splice(afterId, 0, routeStyleTrafficCase);
    //style.layers.splice(afterId, 0, maneuverStyle);
    map.setStyle(style);

    //map.addLayer(routeStyleSimple,'road-shields-black');
    //map.addLayer(pointerStyleBg);
    //map.addLayer(pointerStyleBg2);
    map.addLayer(pointerStyle);
    //map.addLayer(maneuverStyle);
    // map.addLayer(routeStyleTraffic);
    animationControl.attr("class", "play");
    animationControl.on('click', toggleAnimation); //bind

    //map.on('click', toggleLabels);

    //starting
    //toggleLabels();

  // trafficLayers.forEach(l => {
  //     map.setLayoutProperty(l, "visibility", labelsVisibility ? 'visible' : 'none');
  //     map.setPaintProperty(l, "line-opacity", 0);
  //   });

    // var lrs = map.getStyle();
    // lrs.layers.forEach(l=>{ console.log(l.id);})

 });
});

//var labelLayers = ['road-label-large', 'road-label-medium', 'road-label-small'];
//var trafficLayers = ['traffic-main','traffic-link', 'traffic-primary', 'traffic-small', 'traffic-others', 'traffic-main-case', 'traffic-link-case', 'traffic-primary-case', 'traffic-small-case', 'traffic-others-case'];

var labelsVisibility = false;



toggleLabels = () => {

  topPanel.style("top", labelsVisibility ? "0px" : "-100px");

  // labelLayers.forEach(l => {
  //   map.setLayoutProperty(l, "visibility", labelsVisibility ? 'visible' : 'none');
  // });

  // trafficLayers.forEach(l => {
  //   map.setPaintProperty(l, "line-opacity", labelsVisibility ? 1 : 0);
  // });


  // labelsVisibility = !labelsVisibility;

}

d3.select("#closeBtn").on('click', toggleLabels);
topPanel.on('click', toggleLabels);

//request for example
//https://api.mapbox.com/directions/v5/mapbox/driving-traffic/-122.381405%2C37.738277%3B-122.45771097983936%2C37.78540378184813.json?geometries=polyline&alternatives=true&steps=true&overview=full&access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA
