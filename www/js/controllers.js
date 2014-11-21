angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
})

.controller('EventsCtrl', function($scope, Events) {
  $scope.events = Events.all();
})

.controller('EventDetailCtrl', function($scope, $stateParams, Events) {
  $scope.event = Events.get($stateParams.eventId);
})

.controller('CreateCtrl', function($scope, Events) {
   // Called when the form is submitted

  $scope.createEvent = function(event) {
    console.log("here");
    Events.create(event);
    event = {};
  };
});
