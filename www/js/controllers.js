angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
})

.controller('EventsCtrl', function($scope, $state, Events) {
  $scope.events = Events.all();

  $scope.findEvent = function(event_id) {
    console.log("Looking up your event!");
    console.log(event_id);
    Events.get(event_id);
    $state.go('tab.event-detail',{eventId: event_id});
    event = {};
  };
})

.controller('EventDetailCtrl', function($scope, $stateParams, Events, Locations, Geocoder) {
  $scope.event = Events.get($stateParams.eventId);
  $scope.location = Locations.get($stateParams.eventId);
  $scope.mapTemplate = Geocoder.fetchMapTemplate();
  console.log($scope.mapTemplate);

  $scope.map = { 
    center: { latitude: $scope.location.latitude, longitude: $scope.location.longitude },
    zoom: $scope.mapTemplate.zoom,
    options: $scope.mapTemplate.styles
  };

  console.log($scope.map.options);
})

.controller('CreateCtrl', function($scope, Events) {
   // Called when the form is submitted

  $scope.createEvent = function(event) {
    console.log("here");
    Events.create(event);
    event = {};
  };
});
