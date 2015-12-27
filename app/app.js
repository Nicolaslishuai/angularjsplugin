/**
 * @author lenovo
 */
(function(){
	
	var app=angular.module("app",["overlay"]);
	
	app.controller("testRepeatCtrl",function($scope,$timeout,overlayService){
		
        overlayService.startOverlay('target');//开启遮罩
		$timeout(function(){
			var obj={name:'老王',age:12,address:'西安'};
		    var temp=[];
		   for(var i=0;i<100;i++){
			temp.push(obj);
		   }
		  $scope.list=temp;
		},1000);
		
	});
	
}());
