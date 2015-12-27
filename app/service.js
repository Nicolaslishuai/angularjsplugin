/**
 * @author lenovo
 */
(function(){
	
	var overlay=angular.module("overlay",[]);
	
	overlay.factory("overlayService",function(){
		return {
			startOverlay:function(id){
				angular.element("#"+id).loadingOverlay();
			}
		};
	});
	
	overlay.directive("onFinishRenderFilters",function($timeout){
		return {
        restrict: 'A',
        link: function(scope, element, attr) {
        	console.dir("..");
            if (scope.$last === true) {
                $timeout(function() {
                	var attra=attr['onFinishRenderFilters'];
                	//关闭遮罩
                	angular.element("#"+attra).loadingOverlay('remove');
                });
            }
        }
       };
	});
	
}());
