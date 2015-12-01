(function () {
var app = angular.module('hello',[]);    

  app.directive('helloWorld',function () {
	 return {
	  restrict: 'E',
	  templateUrl:'hello-world.html'
	  };
  });
})();