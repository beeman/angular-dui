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

angular.module('angularDui').run(['$templateCache', function($templateCache) {
    $templateCache.put('/templates/dui-app.html',
        "<div class=\"dui-app\" ng-class=\"(dui.app.container) ? 'container' : ''\">\n    <div ng-transclude></div>\n</div>\n");
}]);
angular.module('angularDui').run(['$templateCache', function($templateCache) {
    $templateCache.put('/templates/dui-box-content.html',
        "<div class=\"dui-box-content\">\n    <div ng-transclude></div>\n</div>\n");
}]);
angular.module('angularDui').run(['$templateCache', function($templateCache) {
    $templateCache.put('/templates/dui-box-footer.html',
        "<div class=\"dui-box\">\n    <div ng-transclude></div>\n</div>\n");
}]);
angular.module('angularDui').run(['$templateCache', function($templateCache) {
    $templateCache.put('/templates/dui-box-header.html',
        "<div class=\"dui-box-header\">\n    <h2>{{title}}</h2>\n    <div ng-transclude></div>\n</div>\n");
}]);
angular.module('angularDui').run(['$templateCache', function($templateCache) {
    $templateCache.put('/templates/dui-box.html',
        "<div class=\"dui-box\">\n    <div ng-transclude></div>\n</div>\n");
}]);
angular.module('angularDui').run(['$templateCache', function($templateCache) {
    $templateCache.put('/templates/dui-content.html',
        "<div class=\"dui-content row\">\n    <div ng-transclude></div>\n</div>\n");
}]);
angular.module('angularDui').run(['$templateCache', function($templateCache) {
    $templateCache.put('/templates/dui-footer.html',
        "<footer class=\"dui-footer\">\n    <div ng-bind-html=\"dui.footer.text\"></div>\n    <div ng-transclude></div>\n</footer>\n");
}]);
angular.module('angularDui').run(['$templateCache', function($templateCache) {
    $templateCache.put('/templates/dui-header-nav.html',
        "<nav class=\"dui-header-nav {{dui.header.nav.class}}\">\n    <div ng-class=\"(dui.header.nav.container) ? 'container' : ''\">\n        <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle collapsed\"\n                    data-toggle=\"collapse\" data-target=\"#navbar\"\n                    aria-expanded=\"false\" aria-controls=\"navbar\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </button>\n            <a class=\"navbar-brand\" href=\"{{dui.header.nav.href}}\">{{dui.header.nav.title}}</a>\n        </div>\n        <div id=\"navbar\" class=\"collapse navbar-collapse\">\n            <dui-nav class=\"nav navbar-nav\" items=\"dui.header.nav.items\"></dui-nav>\n            <div ng-transclude></div>\n        </div>\n    </div>\n</nav>\n");
}]);
angular.module('angularDui').run(['$templateCache', function($templateCache) {
    $templateCache.put('/templates/dui-header.html',
        "<header class=\"dui-header\">\n    <div ng-transclude></div>\n</header>\n");
}]);
angular.module('angularDui').run(['$templateCache', function($templateCache) {
    $templateCache.put('/templates/dui-main.html',
        "<div class=\"dui-main {{dui.main.class}}\">\n    <div ng-transclude></div>\n    <div ui-view></div>\n</div>\n");
}]);
angular.module('angularDui').run(['$templateCache', function($templateCache) {
    $templateCache.put('/templates/dui-nav.html',
        "<ul class=\"{{class}}\">\n    <li ng-repeat=\"item in items\">\n        <a href=\"{{item.href}}\">{{item.label}}</a>\n    </li>\n</ul>");
}]);
angular.module('angularDui').run(['$templateCache', function($templateCache) {
    $templateCache.put('/templates/dui-panel-content.html',
        "<div class=\"panel-body\" ng-transclude></div>\n");
}]);
angular.module('angularDui').run(['$templateCache', function($templateCache) {
    $templateCache.put('/templates/dui-panel-footer.html',
        "<div class=\"dui-panel-footer\" ng-transclude></div>\n");
}]);
angular.module('angularDui').run(['$templateCache', function($templateCache) {
    $templateCache.put('/templates/dui-panel-header.html',
        "<div class=\"panel-heading\" ng-transclude></div>\n");
}]);
angular.module('angularDui').run(['$templateCache', function($templateCache) {
    $templateCache.put('/templates/dui-panel.html',
        "<div class=\"dui-panel panel panel-default\" ng-transclude></div>\n");
}]);
angular.module('angularDui').run(['$templateCache', function($templateCache) {
    $templateCache.put('/templates/dui-screen-content.html',
        "<div class=\"dui-screen-content\">\n    <div ng-transclude></div>\n</div>\n");
}]);
angular.module('angularDui').run(['$templateCache', function($templateCache) {
    $templateCache.put('/templates/dui-screen-footer.html',
        "<div class=\"dui-screen-footer\">\n    <div ng-transclude></div>\n</div>\n");
}]);
angular.module('angularDui').run(['$templateCache', function($templateCache) {
    $templateCache.put('/templates/dui-screen-header.html',
        "<div class=\"dui-screen-header\">\n    <h1>{{title}}</h1>\n    <div ng-transclude></div>\n</div>\n");
}]);
angular.module('angularDui').run(['$templateCache', function($templateCache) {
    $templateCache.put('/templates/dui-screen.html',
        "<div class=\"dui-screen\">\n    <div ng-transclude></div>\n</div>\n");
}]);
angular.module('angularDui').run(['$templateCache', function($templateCache) {
    $templateCache.put('/templates/dui-sidebar.html',
        "<div class=\"dui-sidebar {{dui.sidebar.class}}\">\n    <dui-nav class=\"nav nav-stacked\" items=\"dui.sidebar.items\"></dui-nav>\n    <div ng-transclude></div>\n</div>\n");
}]);