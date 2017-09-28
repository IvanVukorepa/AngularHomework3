angular.module('app').config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
        .state('home',
            {
                url: '/',
                controller: 'homeController',
                templateUrl: 'scripts/app/routes/home/homeTemplate.html'
            });
});
