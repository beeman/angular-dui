var app = angular.module('angularDuiDemo', [
  'angularDuiDemo.controllers',
  'angularDui',
  'ui.router',
  'ngSanitize'
]);

app.run(function ($rootScope, DuiConfig) {
  var appName = 'angular-dui';
  var appNavitems = [
    {label: 'Home', href: '#/app/home'}, {label: 'Config', href: '#/app/config'}, {label: 'About', href: '#/app/about'}, {label: 'Contact', href: '#/app/contact'}
  ];
  var appConfig = {
    app: {
      name: appName,
      container: true
    },
    header: {
      nav: {
        class: 'navbar navbar-inverse navbar-fixed-top',
        container: true,
        title: appName,
        href: '#/',
        items: appNavitems
      }
    },
    sidebar: {
      class: 'col-md-2',
      items: appNavitems
    },
    main: {
      class: 'col-md-8'
    },
    footer: {
      text: '<a href="https://github.com/beeman/angular-dui">angular-dui</a> by <a href="https://github.com/beeman">beeman</a>'
    }
  };

  DuiConfig.setConfig(appConfig);

  // TODO: the config should be dynamically handled by a service
  $rootScope.dui = appConfig;
});

app.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/app/home');
  $stateProvider
    .state('app', {
      abstract: true,
      url: '/app',
      templateUrl: 'templates/app.html',
      controller: 'AppCtrl'
    })
    .state('app.home', {
      url: '/home',
      templateUrl: 'templates/home.html',
      controllerAs: 'ctrl',
      controller: function() {
        this.items = [
          {title: 'Post 1', author: 'beeman', date: 'Just now...', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel quam ac quam posuere eleifend at cursus orci. Maecenas vitae tellus a metus scelerisque consectetur. Sed feugiat tincidunt diam ac laoreet. Curabitur ac pretium odio, in porta orci. Praesent non malesuada turpis. Nulla justo leo, ultricies sed sapien sed, pulvinar molestie dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sollicitudin venenatis leo, quis dignissim diam posuere nec. Sed ut faucibus elit.'},
          {title: 'Post 2', author: 'beeman', date: 'Just now...', content: 'Nam malesuada massa et purus porttitor cursus. Proin maximus nibh sed mattis placerat. Aenean quam odio, convallis lacinia orci ac, pulvinar posuere ex. Morbi elementum ultricies blandit. Sed ultrices tellus non nisl hendrerit dapibus. Cras sodales porttitor diam et consectetur. Pellentesque tempus lacus eget orci placerat cursus.'},
          {title: 'Post 3', author: 'beeman', date: 'Just now...', content: 'Maecenas volutpat nunc porta tincidunt tristique. Maecenas in tellus a ligula luctus fringilla non ut sapien. Etiam consequat, risus ac blandit vehicula, nisl nisi varius risus, sit amet commodo diam magna vitae magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent sit amet ante sollicitudin, vehicula mauris a, posuere eros. Donec id velit non massa sagittis luctus. Aenean mollis cursus sagittis. Suspendisse placerat tristique mi, nec dictum nunc cursus quis. Nam placerat elit magna, egestas molestie tortor vehicula quis.'}
        ];
      }
    })
    .state('app.config', {
      url: '/config',
      templateUrl: 'templates/config.html',
      controller: 'ConfigCtrl'
    })
    .state('app.about', {
      url: '/about',
      templateUrl: 'templates/about.html'
    })
    .state('app.contact', {
      url: '/contact',
      templateUrl: 'templates/contact.html'
    });

});
