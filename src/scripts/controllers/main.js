'use strict';
//########################################################################
//###################START MainCtrl#######################################
controllers.MainCtrl = function($scope) {
  $scope.focus = function(event){
    console.log(event);
  };
  $scope.blur = function(event){
    console.log(event);
  };
};
//###################END MainCtrl#########################################
//########################################################################
