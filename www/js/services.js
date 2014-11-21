angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Events', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var events = [
    { id: 0, name: 'BBQ at Barnsdall Park' },
    { id: 1, name: 'Graduation Party' },
    { id: 2, name: 'Housecooling' },
    { id: 3, name: 'Launch Party' }
  ];

  return {
    all: function() {
      return events;
    },
    get: function(eventId) {
      // Simple index lookup
      return events[eventId];
    }
  }
});
