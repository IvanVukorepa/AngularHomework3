angular.module('app').controller('homeController', function ($scope, GetAllNewsService) {

    $scope.AllNews = GetAllNewsService.getAllNews();

    $scope.slicedNews = _.chunk($scope.AllNews, 2);
    $scope.News = $scope.slicedNews[0];
    $scope.numberOfNewsShown = 1;
    $scope.AllNewsAreShown = false;

    $scope.showMore = function () {
        $scope.News = _.concat($scope.News, $scope.slicedNews[$scope.numberOfNewsShown++]);
        if ($scope.AllNews.length <= $scope.numberOfNewsShown * 2)
            $scope.AllNewsAreShown = true;
    }
});