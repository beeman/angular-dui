var app = angular.module('angularDui', []);

app.factory('DuiConfig', function () {
  var dui = {};
  var duiConfig = {};
  dui.getConfig = function () {
    return duiConfig;
  };
  dui.setConfig = function (config) {
    duiConfig = config;
  };
  return dui;
});

/**
 * app
 */
app.directive('duiApp', function () {
  return {
    restrict: 'E',
    transclude: true,
    templateUrl: '/templates/dui-app.html'
  };
});

/**
 * box
 */
app.directive('duiBox', function () {
  return {
    restrict: 'E',
    transclude: true,
    templateUrl: '/templates/dui-box.html'
  };
});
app.directive('duiBoxContent', function () {
  return {
    restrict: 'E',
    transclude: true,
    templateUrl: '/templates/dui-box-content.html'
  };
});
app.directive('duiBoxFooter', function () {
  return {
    restrict: 'E',
    transclude: true,
    templateUrl: '/templates/dui-box-footer.html'
  };
});
app.directive('duiBoxHeader', function () {
  return {
    restrict: 'E',
    transclude: true,
    templateUrl: '/templates/dui-box-header.html',
    scope: {
      title: '@'
    }
  };
});

/**
 * content
 */
app.directive('duiContent', function () {
  return {
    restrict: 'E',
    transclude: true,
    templateUrl: '/templates/dui-content.html'
  };
});

/**
 * footer
 */
app.directive('duiFooter', function () {
  return {
    restrict: 'E',
    transclude: true,
    templateUrl: '/templates/dui-footer.html'
  };
});

/**
 * header
 */
app.directive('duiHeader', function () {
  return {
    restrict: 'E',
    transclude: true,
    templateUrl: '/templates/dui-header.html'
  };
});
app.directive('duiHeaderNav', function () {
  return {
    restrict: 'E',
    transclude: true,
    templateUrl: '/templates/dui-header-nav.html'
  };
});

/**
 * main
 */
app.directive('duiMain', function () {
  return {
    restrict: 'E',
    transclude: true,
    templateUrl: '/templates/dui-main.html'
  };
});

/**
 * nav
 */
app.directive('duiNav', function () {
  return {
    restrict: 'E',
    transclude: true,
    templateUrl: '/templates/dui-nav.html',
    scope: {
      items: '=',
      class: '@'
    }
  };
});

/**
 * panel
 */
app.directive('duiPanel', function () {
  return {
    restrict: 'E',
    transclude: true,
    templateUrl: '/templates/dui-panel.html'
  };
});
app.directive('duiPanelContent', function () {
  return {
    restrict: 'E',
    transclude: true,
    templateUrl: '/templates/dui-panel-content.html'
  };
});
app.directive('duiPanelFooter', function () {
  return {
    restrict: 'E',
    transclude: true,
    templateUrl: '/templates/dui-panel-footer.html'
  };
});
app.directive('duiPanelHeader', function () {
  return {
    restrict: 'E',
    transclude: true,
    templateUrl: '/templates/dui-panel-header.html'
  };
});
/**
 * screen
 */
app.directive('duiScreen', function () {
  return {
    restrict: 'E',
    transclude: true,
    templateUrl: '/templates/dui-screen.html'
  };
});
app.directive('duiScreenContent', function () {
  return {
    restrict: 'E',
    transclude: true,
    templateUrl: '/templates/dui-screen-content.html'
  };
});
app.directive('duiScreenFooter', function () {
  return {
    restrict: 'E',
    transclude: true,
    templateUrl: '/templates/dui-screen-footer.html'
  };
});
app.directive('duiScreenHeader', function () {
  return {
    restrict: 'E',
    transclude: true,
    templateUrl: '/templates/dui-screen-header.html',
    scope: {
      title: '@'
    }
  };
});

/**
 * sidebar
 */
app.directive('duiSidebar', function () {
  return {
    restrict: 'E',
    transclude: true,
    templateUrl: '/templates/dui-sidebar.html'
  };
});
