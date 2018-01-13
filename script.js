var app = angular.module('mainApp',[]);
app.filter('base',function(){

		var s = function(input,base){
			var parsed = parseInt(input,10);
			var based  = parseFloat(base,10);
			if(isNaN(parsed) || isNaN(based) || based <=1 || based>=37) return input;

			return parsed.toString(based);
		}

			return s;
		});
	app.controller('app',function(){


		});
