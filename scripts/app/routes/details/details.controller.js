angular.module('app').controller('detailsController', function ($scope, $stateParams, GetAllNewsService, favoritesService) {

    $scope.chosenNews = GetAllNewsService.getNewsById($stateParams.id);
    console.log($stateParams.id);
    console.log($scope.chosenNews);
});