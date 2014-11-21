angular.module('starter.services', [])

.factory('Events', function() {

  // Some fake testing data
  var events = [
    { id: 0, title: 'BBQ at Barnsdall Park' },
    { id: 1, title: 'Graduation Party' },
    { id: 2, title: 'Housecooling' },
    { id: 3, title: 'Launch Party' }
  ];

  return {
    all: function() {
      return events;
    },
    get: function(eventId) {
      // Simple index lookup
      return events[eventId];
    },
    create: function(event) {
      events.push(event);
    }
  }
})

.factory('Locations', function() {
  
  // Some fake testing data
  var locations = [
    { id: 0, address: 'Paris', latitude: 48.856614, longitude: 2.35222190000002 },
    { id: 1, address: 'Paris', latitude: 48.856614, longitude: 2.35222190000002 },
    { id: 2, address: 'Paris', latitude: 48.856614, longitude: 2.35222190000002 },
    { id: 3, address: 'Paris', latitude: 48.856614, longitude: 2.35222190000002 }
  ];

  return {
    all: function() {
      return locations;
    },
    get: function(locationId) {
      // Simple index lookup
      return locations[locationId];
    },
    create: function(location) {
      locations.push(location);
    }
  }
})


.factory('Geocoder', function() {
  var template = 
    {
      zoom: 13,
      styles: [
        {
          featureType: "landscape",
          stylers: [
            {
              color: "#f2f2f2"
            }
          ]
        }, {
          featureType: "water",
          elementType: "geometry",
          stylers: [
            {
              color: "#2da6a0"
            }
          ]
        }, {
          featureType: "road.highway",
          stylers: [
            {
              visibility: "simplified"
            }
          ]
        }, {
          featureType: "road",
          stylers: [
            {
              saturation: -100
            }, {
              lightness: 45
            }
          ]
        }, {
          featureType: "road.arterial",
          elementType: "labels.icon",
          stylers: [
            {
              visibility: "off"
            }
          ]
        }, {
          featureType: "administrative",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#444444"
            }
          ]
        }, {
          featureType: "transit",
          stylers: [
            {
              visibility: "simplified"
            }
          ]
        }, {
          featureType: "poi",
          stylers: [
            {
              visibility: "off"
            }
          ]
        }, {
          featureType: "road.arterial",
          elementType: "geometry.stroke",
          stylers: [
            {
              color: "#fa8303"
            }
          ]
        }, {
          featureType: "road.highway",
          elementType: "geometry.fill",
          stylers: [
            {
              color: "#fa8303"
            }
          ]
        }
      ]
    }

  return {
    fetchMapTemplate: function() {
      return template;
    }
  }
 
});
