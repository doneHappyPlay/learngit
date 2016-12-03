var app = angular.module('myApp',['ui.router']);



app.config(function($stateProvider,$urlRouterProvider) {

    //当url为''是，则跳转到/navs
    $urlRouterProvider.when('', '/nav/home');

    $stateProvider.state('nav', {  //导航栏页面
        url: '/nav',
        templateUrl: 'nav.html'

    })
        //配置导航栏的子页面
        .state('nav.home', {
            url: '/home',
            templateUrl: 'home/home.html'
        }).state('nav.movie', {
            url: '/movie',
            templateUrl: 'movie/movie.html'
        }).state('nav.board', {
            url: '/board',
            templateUrl: 'board/board.html'
        })

})
