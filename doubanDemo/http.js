/**
 * Created by Administrator on 2016/11/23.
 */
var serviceModule = angular.module("doubanApp.service",[]);
serviceModule.service("jsonpService",["$window",function($window){
    this.jsonp = function(url,params,fn){
        var queryString = "?";
        //拼接参数
        for(key in params){
            queryString +=key +"="+params[key]+"&&";
        }
        var funName = "my_callback" +new Date().getTime();
        queryString += "callback"+"="+funName;


        var script = $window.document.createElement('script');
        script.src = url + queryString;
        $window.document.body.appendChild(script);



        //挂载函数在window上面
        $window[funName] = function(res){
            console.log(res);
            fn(res);
            //删除之前添加的script标签
            $window.document.body.removeChild(script);
        }
    }
}])