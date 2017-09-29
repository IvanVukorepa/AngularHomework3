angular.module('app').controller('homeController', function ($scope, GetAllNewsService, favoritesService) {

    $scope.AllNews = GetAllNewsService.getAllNews();

    $scope.slicedNews = _.chunk($scope.AllNews, 3);
    $scope.News = $scope.slicedNews[0];

    $scope.numberOfNewsShown = 1;
    $scope.AllNewsAreShown = false;

    $scope.search = '';
    $scope.getFavorites = function () {
        return favoritesService.getAllFavorites();
    }

    $scope.showMore = function () {
        $scope.News = _.concat($scope.News, $scope.slicedNews[$scope.numberOfNewsShown++]);
        if ($scope.AllNews.length <= $scope.numberOfNewsShown * 3)
            $scope.AllNewsAreShown = true;
    }

    $scope.toggleFavorites = function () {
        $scope.showOnlyFavorites = !$scope.showOnlyFavorites;
    }
});