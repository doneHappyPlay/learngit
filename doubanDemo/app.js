
/**
 * Created by Administrator on 2016/11/23.
 */
var doubanApp = angular.module("doubanApp",["ngRoute","doubanApp.listModule"]);
doubanApp.config(["$routeProvider", function ($routeProvider) {
    $routeProvider.when("/:category/:page",{
        templateUrl:"./list/list.html",
        controller:"detailController"
    }).otherwise()
}])