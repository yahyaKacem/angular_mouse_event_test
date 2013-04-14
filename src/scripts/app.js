'use strict';
//########################################################################
var app = angular.module('mouse_events_app', []);
//########################################################################
//######injecting the dependencies########################################
controllers.MainCtrl.$inject = ['$scope'];
//########################################################################
//###assigning the controllers & the direcitves to the application########
app.directive(directives);
app.controller(controllers);
//########################################################################
