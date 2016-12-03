/**
 * Created by Administrator on 2016/10/21.
 */
var app = angular.module("myApp",["ui.router"]);

app.config(function($stateProvider,$urlRouterProvider){
    //默认进入导航页
    $urlRouterProvider.when("","/nav/home");
    $stateProvider.state("nav",{
        url:"/nav",
        templateUrl:"nav.html"
    })
    //配置导航栏的子页面
        .state("nav.home",{
            url:"/home",
            templateUrl:"home/home.html"
        })
        .state("nav.board",{
            url:"/board",
            templateUrl:"board/board.html"
        })
        .state("nav.hot",{
            url:"/hot",
            templateUrl:"hot/hot.html"
        })
        .state("nav.movie",{
            url:"/movie",
            templateUrl:"movie/movie.html"
        })
        .state("nav.movie.in_theater",{
            url:"/in_theater",
            templateUrl:"movie/in_theater/in_theater.html"
        })
        .state("nav.movie.coming_soon",{
            url:"/in_theater",
            templateUrl:"movie/coming_soon/coming_soon.html"
        })
        .state("nav.movie.classic",{
            url:"/in_theater",
            templateUrl:"movie/classic/classic.html"
        })



       //配置电影页面的子页面
        .state('navs.movie.subpage1',{
            url : '/subpage1',
            templateUrl : '../movie1/正在热映.html'
        }).state('navs.movie.subpage2',{
            url : '/subpage2',
            templateUrl : '../movie1/即将上映.html'
        }).state('navs.movie.subpage3',{
            url : '/subpage3',
            templateUrl : '../movie1/经典电影.html'
        }).state('navs.subpage4',{
            url : '/subpage4',
            templateUrl : '../movie1/电影详情.html',
        }).state('navs.subpage4.info',{
            url : '/info',
            views : {
                'introduce' : {
                    templateUrl : '../movie1/电影详情-介绍.html'
                },
                'actors' : {
                    templateUrl : '../movie1/电影详情-演职人员.html'
                },
                'pics' : {
                    templateUrl : '../movie1/电影详情-图集.html'
                }
            }
        })
        .state('login',{  //登陆页面
            url : '/login',
            templateUrl : '../login/login.html'

        });

});


app.run(function($rootScope){

//	$rootScope.$on('$stateChangeStart',
//	function(event, toState, toParams, fromState, fromParams){
//
//		window.scrollTo(0,0);
//
//		console.log("change");
//
//	});

    $rootScope.$on('$locationChangeSuccess',function(){
//		console.log("change");

        //切换页面时，让页面回到起始位置
        window.scrollTo(0,0);
    });

});

app.filter('replaceImg',function(){
    return function(content,width,height){
        if(content){
            var s = content.replace(/w.h/g,'');
            if(s.indexOf('@') !== -1) {
                s = s.split('@').shift();
            }
            if(width && height){
                s = s + '.webp@'+ width + 'w_' + height + 'h_1e_1c'
            }

            return s;
        }
    }
});


