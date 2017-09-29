angular.module('app').controller('detailsController', function ($scope, $stateParams, GetAllNewsService, favoritesService) {

    $scope.chosenNews = GetAllNewsService.getNewsById($stateParams.id);
    
    $scope.favorite = function (news) {
        favoritesService.toggleFavorites(news);
    }

    $scope.isFavorite = function (news) {
        return favoritesService.isFavorite(news);
    }
});