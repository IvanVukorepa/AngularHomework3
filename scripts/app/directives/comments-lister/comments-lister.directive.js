angular.module('app').directive('commentsLister', function () {
    return {
        templateUrl: 'scripts/app/directives/comments-lister/comments-lister.template.html',
        controller: 'comments-listerDirectiveController',
        scope: {
            comments: '='
        }
    }
})