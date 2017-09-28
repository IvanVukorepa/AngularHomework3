angular.module('app').controller('favoritesController', function ($scope, GetAllNewsService, favoritesService) {

    $scope.favoriteNews = favoritesService.getAllFavorites();

    $scope.favorite = function (news) {
        favoritesService.toggleFavorites(news);
        $scope.favoriteNews = favoritesService.getAllFavorites();
    }
});