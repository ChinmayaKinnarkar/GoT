app.config(['$routeProvider',function($routeProvider) {
 'use strict';
  $routeProvider
  .when('/',{
  	template: ' '
  })
  .when('/books',{
  	templateUrl: 'views/allViews.html',
  	controller: 'mainController',
  	controllerAs: 'mainCtrl'
  })
  .when('/characters',{
  	templateUrl: 'views/allViews.html',
  	controller: 'mainController',
  	controllerAs: 'mainCtrl'
  })
  .when('/houses',{
  	templateUrl: 'views/allViews.html',
  	controller: 'mainController',
  	controllerAs: 'mainCtrl'
  })
  .when('/singleView',{
  	templateUrl: 'views/singleView.html',
  	controller: 'mainController',
  	controllerAs: 'mainCtrl'
  })
  .otherwise({
            template: '<h2 style="color:white;text-align:center;">Error : 404 page not found</h2>'
        });
}]);