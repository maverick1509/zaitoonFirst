angular.module('zaitoonFirst.common.controllers', [])

.controller('AppCtrl', function($scope, $ionicHistory, logged_user) {
  //Check if not logged in
  if(!_.isUndefined(window.localStorage.user)){
    $scope.isLoggedIn = true;
  }
  else{
      $scope.isLoggedIn = false;
  }
})

;
