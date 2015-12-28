/**
 *
 * 分页插件
 *  
 */

(function(){
	var paginationmodule=angular.module("paginationmodule",[]);
	
	paginationmodule.factory("paginationService",function(){
		
		return {
			
		};
	});
	
	paginationmodule.directive("paginationPlun",function(){
		return {
        restrict: 'A',
        link: function(scope, element, attr) {
        	console.dir(scope);
        	element.jqPagination({
				link_string : '{page_number}',
				max_page : scope.total,
				paged : function(page){
					scope.takepage(page);
				}
			});
        }
       };
	});
	
	paginationmodule.controller("testCtrl",function($scope){
		$scope.total=100;
		$scope.takepage=function(page){
			console.log(page);
		};
	});
	
}());
