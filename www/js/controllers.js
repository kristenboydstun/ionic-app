angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
})

.controller('EventsCtrl', function($scope, Events) {
  $scope.events = Events.all();
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
