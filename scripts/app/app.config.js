angular.module('app').config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
});

angular.module('app').run(function (localStorageService, $http) {
    //if (!localStorageService.get('News'))
        var sync = $http.get('DefaultNews.json').then(function (response) {
            var value = { favorites: [], news: response.data };
            localStorageService.set('News', value);
        });

});