var app = angular.module('myApp', ['ngLoad']);
	app.controller('myCtrl', function($scope) {
		$scope.iFrameCallbackFunction = function() {
            alert("Iframe is Loaded successfully")
		};
	});  