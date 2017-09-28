angular.module('app').controller('homeController', function ($scope, GetAllNewsService, favoritesService) {

    $scope.AllNews = GetAllNewsService.getAllNews();

    $scope.slicedNews = _.chunk($scope.AllNews, 2);
    $scope.News = $scope.slicedNews[0];

    $scope.numberOfNewsShown = 1;
    $scope.AllNewsAreShown = false;

    $scope.getFavorites = function () {
        return favoritesService.getAllFavorites();
    }

    $scope.showMore = function () {
        $scope.News = _.concat($scope.News, $scope.slicedNews[$scope.numberOfNewsShown++]);
        if ($scope.AllNews.length <= $scope.numberOfNewsShown * 2)
            $scope.AllNewsAreShown = true;
    }

    $scope.favorite = function (news) {
        favoritesService.toggleFavorites(news);
    }

    $scope.isFavorite = function(news){
        return favoritesService.isFavorite(news);
    }

    $scope.toggleFavorites = function () {
        $scope.showOnlyFavorites = !$scope.showOnlyFavorites;
    }
});