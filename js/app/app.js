var app = angular.module("ivDevsApp", ["firebase"]);

app.controller("galleriesCtrl", function($scope, $firebaseArray, $rootScope) {
   var ref = new Firebase("https://crackling-heat-5342.firebaseio.com/events");
   $scope.galleries = $firebaseArray(ref);

   $scope.cargarEvento = function(eventID){
      $rootScope.$emit('updateEvent', eventID);
    };
});

app.controller("photosCtrl", function($scope, $firebaseArray, $firebaseObject, $rootScope) {
   $scope.information = [];
   $scope.photos = [];
   $rootScope.$on('updateEvent', function(event, eventID) {
      var refevent = new Firebase("https://crackling-heat-5342.firebaseio.com/events/"+ eventID );
      $scope.information = $firebaseObject(refevent);
   });

});
