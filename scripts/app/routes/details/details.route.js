angular.module('app').config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
        .state('details',
            {
                url: '/details/:id',
                controller: 'detailsController',
                templateUrl: 'scripts/app/routes/details/details.template.html',
                params: {
                    id : null
                }
            });
});
