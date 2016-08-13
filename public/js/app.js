var myApp = angular.module('myApp', ['ngRoute',
    'angularUtils.directives.dirPagination',
    'ngSanitize',
    'ui.router',
    'btford.markdown'
]);
myApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'partials/home.html',
                controller: 'HomeCtrl'
            })
            .when('/signin', {
                templateUrl: 'partials/signin.html',
                controller: 'HomeCtrl'
            })
            .when('/signup', {
                templateUrl: 'partials/signup.html',
                controller: 'HomeCtrl'
            })
            .when('/questions', {
                templateUrl: 'partials/questions.html',
                controller: 'HomeCtrl'
            })
            .when('/articles', {
                templateUrl: 'partials/articles.html',
                controller: 'HomeCtrl'
            })
            .when('/articles/new', {
                templateUrl: 'partials/edit.html',
                controller: 'HomeCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    }
]);
