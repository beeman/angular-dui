var app = angular.module('angularDuiDemo.controllers', []);

app.controller('AppCtrl', function () {

  // There seems to be nothing to control here yet :)

});

app.controller('ConfigCtrl', function ($scope, $rootScope, DuiConfig) {

  $scope.config = DuiConfig.getConfig();

  $scope.saveConfig = function () {
    DuiConfig.setConfig($scope.config);

    // TODO: this needs to save and update the configuration.
    $rootScope.dui = $scope.config;
  }

});
