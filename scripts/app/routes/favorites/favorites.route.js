angular.module('app').config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
        .state('favorites',
            {
                url: '/favorites',
                controller: 'favoritesController',
                templateUrl: 'scripts/app/routes/favorites/favorites.template.html'
            });
});
