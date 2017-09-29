angular.module('app').config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('home');
});

angular.module('app').run(function (localStorageService, $http) {
    if (!localStorageService.get('News'))
        var x = $http.get('DefaultNews.json').then(function (response) {
            var value = response.data;
            localStorageService.set('News', value);
        });
    
});

angular.module('app').run(function (localStorageService, $http) {
    if (!localStorageService.get('Favorites'))
            localStorageService.set('Favorites', angular.toJson([]));
        });

