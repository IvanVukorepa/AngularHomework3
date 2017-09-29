angular.module('app').directive('newsLister', function () {
	return {
	    templateUrl: 'scripts/app/directives/news-lister/news-lister.template.html',
	    controller: 'news-listerDirectiveController',
	    scope: {
	        news: '=',
            search1: '='
	    }
	}
})