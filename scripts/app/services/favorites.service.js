angular.module('app').service('favoritesService', function (localStorageService) {
    this.toggleFavorites = function (news) {
        var favorites = angular.fromJson(localStorageService.get('Favorites'));
        if (favorites == null)
            favorites = [];

        if (_.findIndex(favorites, { id: news.id }) != -1) 
            favorites.splice(_.findIndex(favorites, { id: news.id }), 1);
        else
            favorites.push(news);
        localStorageService.set('Favorites', favorites);
    };

    this.isFavorite = function(news)
    {    
        var favorites = angular.fromJson(localStorageService.get('Favorites'));
        return _.findIndex(favorites, {id: news.id})==-1 ? false : true;
    }

    this.getAllFavorites = function () {
        console.log(angular.fromJson(localStorageService.get('Favorites')));
        return angular.fromJson(localStorageService.get('Favorites'));
    }
});