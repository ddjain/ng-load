# ng-load
ng-load is implementation of javascript's on-load event in angular js.

## About
You may wish to use callback function on DOM is loaded same like onload event in javascript. ng-load will provide custom callback once DOM is loaded. Implementation of OnLoad event of javascript in Angular JS. Internally ng-load calls onload event so this directive can work with almost every DOM element like div, a, iframe, body, image etc.

## Requirements
* Angular js.

## Getting Started
Files to Download
install them from npm by entering the command ```npm i angular-ng-load```.

Include `angular-load.min.js` after `angular.js`.

example:

JS
```
	// include the `ngLoad` module
	var app = angular.module('myApp', ['ngLoad']);
	app.controller('myCtrl', function($scope) {
		$scope.testCallbackFunction = function() {
		  //TODO : Things to do once Element is loaded
		};

	});  
 
```

HTML 

```
  <div ng-app='myApp' ng-controller='myCtrl'> 
      <iframe src="test.html" ng-load callback="testCallbackFunction()">  
  </div>
```  
 ##Contributing
 
Contributors are welcome. I am interested in suggestions for new features or improvements. Please get in touch.
