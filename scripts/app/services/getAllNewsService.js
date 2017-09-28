angular.module('app').service('GetAllNewsService', function (localStorageService){
    this.getAllNews = function(){
        return localStorageService.get('News').news;
    }});