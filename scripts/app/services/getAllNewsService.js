angular.module('app').service('GetAllNewsService', function (localStorageService){
    this.getAllNews = function(){
        return angular.fromJson(localStorageService.get('News'));
    }

    this.getNewsById = function (ID) {
        var allNews = this.getAllNews();
        //var index = _.findIndex(allNews, { id: ID })

        return allNews[ID-1];
    }
});