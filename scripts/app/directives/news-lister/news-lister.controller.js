angular.module('app').controller('news-listerDirectiveController', function ($scope, $stateParams, GetAllNewsService, favoritesService) {
    $scope.favorite = function (news) {
        favoritesService.toggleFavorites(news);
    }

    $scope.isFavorite = function (news) {
        return favoritesService.isFavorite(news);
    }
});