/**
 * Created by Administrator on 2016/11/23.
 */
var serviceModule = angular.module("doubanApp.service",[]);
serviceModule.service("jsonpService",["$window",function($window){
    this.jsonp = function(url,params,fn){
        var queryString = "?";
        //ƴ�Ӳ���
        for(key in params){
            queryString +=key +"="+params[key]+"&&";
        }
        var funName = "my_callback" +new Date().getTime();
        queryString += "callback"+"="+funName;


        var script = $window.document.createElement('script');
        script.src = url + queryString;
        $window.document.body.appendChild(script);



        //���غ�����window����
        $window[funName] = function(res){
            console.log(res);
            fn(res);
            //ɾ��֮ǰ��ӵ�script��ǩ
            $window.document.body.removeChild(script);
        }
    }
}])