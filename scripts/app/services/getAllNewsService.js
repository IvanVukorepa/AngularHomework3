angular.module('app').service('GetAllNewsService', function (localStorageService){
    this.getAllNews = function(){
        return angular.fromJson(localStorageService.get('News'));
    }});