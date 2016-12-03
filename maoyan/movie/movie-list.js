
/*
 * 电影列表
 */

(function(){
	
var movie = angular.module('app.movie',[]);

movie.controller('movieController',function($scope,$http){
	
	$scope.$watch('selectIndex',function(newVal){		 
		
		if(newVal == 0) {
			var url = "json/list-1.json";	
		}
		else if(newVal == 1) {
			var url = "json/list-2.json";
		}
		else if(newVal == 2) {
			var url = "json/list-3.json";
		}
		
		$http.get(url).success(function(responeData){
			$scope.movies = responeData.data.movies;
		});
		
	});
	
	
	$scope.getBigRating = function(sc){ //sc 9.2 ： 评分
		if(sc == 0) {
			return "暂无评分";
		}
		
		//'9.2'
		sc = sc.toString();
		var arr = sc.split('.');  //['9','2']
		return arr[0] + '.';
	}
	
	$scope.getSmallRating = function(sc){  //8
		if(sc == 0){
			return "";
		}

		sc = sc.toString();
		
		var arr = sc.split('.');  //['9','2']
		
//			console.log(arr[1]);
		if(arr[1] === undefined){
			return 0;
		}
		return arr[1];			
	}
		
		
	
	//电影类型
	$scope.typelist = ['全部','爱情','喜剧','动画','剧情','恐怖','惊悚','科幻','动作','悬疑','犯罪','冒险','战争','奇幻','运动','家庭','古装','武侠','西部','历史','传记','情色','歌舞','黑色电影','短片','纪录片','其他'];
	
	//国家类型
	$scope.countrys = ['全部','大陆','美国','韩国','日本','中国香港','中国台湾', '泰国', '印度', '法国', '英国', '俄罗斯', '意大利', '西班牙', '德国', '波兰', '澳大利亚', '伊朗', '其他'];

	//年份
	$scope.years = ['全部','2017以后', '2017', '2016', '2015', '2014', '2013', '2012', '2011', '2000-2010', '90年代', '80年代', '70年代', '更早'];
	
	$scope.selected = function(index,i){
//		console.log(index);
		$scope['selectIndex'+i] = index;

	}
	
});	
	
	
})();

