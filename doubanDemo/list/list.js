/**
 * Created by Administrator on 2016/11/23.
 */

(function(){


var listModule = angular.module('doubanApp.listModule', ['toubanApp.service']);
listModule.controller('ListController', ['$timeout', '$scope', '$http', 'JsonpService','$routeParams','$route','$rootScope', function($timeout, $scope, $http, JsonpService,$routeParams,$route,$rootScope){
    $rootScope.category = $routeParams.category;

    $rootScope.seach = function(){

        //����·�ɲ���
        $route.updateParams({category:'search',haha:$routeParams.curl});

    };
    var count = 5;
    //�õ���ǰ��ҳ��
    var currentPage = parseInt($routeParams.page || 1);
    console.log(currentPage);
    console.log($routeParams.page);
    $scope.currentPage = currentPage;
       //�ӵڼ�����ʼ����
    var start = (currentPage - 1) * count;

    //�������󶹰�����
    JsonpService.jsonp('https://api.douban.com/v2/movie/'+$routeParams.category, { count: count, start: start,q:$rootScope.input}, function(res) {
        console.log(res);

        $scope.subjects = res.subjects;

        //���ݵ�������
        $scope.total = res.total;
        $scope.title = res.title;

    ��������      //���м�ҳ
        $scope.totalPage = Math.ceil($scope.total / count);

        //���� angular ˢ�½����ϵ�����
        $scope.$apply();

        //��ҳ   3
        $scope.hundlePage = function  (page) {

            // if (page < 1 || page > $scope.totalPage) {
            //     return;
            // }
            /*
             if (page > 8) {
             page = 8;
             }
             if (page < 1) {
             page = 1;
             }
             */
            page = Math.min(Math.max(page,1),$scope.totalPage);

            //����·�ɵĲ���,���Ʒ�ҳ,��Ҫ�õ�$route
            $route.updateParams({page:page})
        }
    });

}])
})()