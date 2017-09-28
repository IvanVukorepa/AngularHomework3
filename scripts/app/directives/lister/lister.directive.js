angular.module('app').directive('lister', function () {
    return {
        templateUrl: 'scripts/app/directives/lister/lister.template.html',
        controller: 'newsListerDirectiveController',
        scope: {
            allNews: '='
        }
    }
});
