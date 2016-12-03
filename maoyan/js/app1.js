var app = angular.module('myApp',['ui.router']);



app.config(function($stateProvider,$urlRouterProvider) {

    //��urlΪ''�ǣ�����ת��/navs
    $urlRouterProvider.when('', '/nav/home');

    $stateProvider.state('nav', {  //������ҳ��
        url: '/nav',
        templateUrl: 'nav.html'

    })
        //���õ���������ҳ��
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
