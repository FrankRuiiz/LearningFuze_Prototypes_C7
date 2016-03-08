// Create the route module and name it routeApp
var app = angular.module("routeApp", ['ngRoute']);
// Config the routes
app.config(function($routeProvider){
    $routeProvider
      // route for the home page
        .when('/home', {
            templateUrl: 'pages/home.html',
            controller: 'mainCtrl'
        })
        // route for the about page
        .when('/about', {
            templateUrl: 'pages/about.html',
            controller: 'aboutCtrl'
        })
        // route for the contact page
        .when('/contact', {
            templateUrl: 'pages/contact.html',
            controller: 'contactCtrl'
        })
        .otherwise({
            redirectTo: '/home'
        });
});


// Create the controllers for the different pages below
app.controller('routeCtrl', function($scope) {
    $scope.message = "lorem Ipsum";
})
    // home page controller
    // Create a message to display in the view
    .controller('mainCtrl', function($scope) {
        $scope.message = "This is the home page";
    })
    // about page controller
    // Create a message to display in the view
    .controller('aboutCtrl', function($scope) {
    $scope.message = "This is the About Page";
    })
    // contact page controller
    // Create a message to display in the view
    .controller('contactCtrl', function($scope) {
    $scope.message = "This is the contact page";
    });