var app = angular.module('angularDuiDemo.controllers', []);

app.controller('AppCtrl', function ($templateCache) {

  $templateCache.put("/templates/dui-footer.html",
    "<footer class='dui-footer'> " +
    "   <h6 ng-bind-html='dui.footer.text'> </h6>" +
    "   <div ng-transclude></div>" +
    "   <h6>override &lt;dui-footer&gt; in AppCtrl</h6>" +
    "</footer> ");

});

app.controller('ConfigCtrl', function ($scope, $rootScope, DuiConfig) {

  $scope.config = DuiConfig.getConfig();

  $scope.saveConfig = function () {
    DuiConfig.setConfig($scope.config);

    // TODO: this needs to save and update the configuration.
    $rootScope.dui = $scope.config;
  }

});
