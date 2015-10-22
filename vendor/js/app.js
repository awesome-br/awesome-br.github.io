(function(){
	angular.module('awesome', ['iso.directives'])
	.directive('widget', function() {
	  return {
	      restrict: 'C',
	      link: function(scope, elem, attrs) {
	      	$(elem).geopattern(scope.item.name, {
	      		generator: 'squares'
	      	});
	      }
	  };
	})
	.controller('filterFormController', ['$scope', '$http', '$timeout', function($scope, $http, $timeout){
		var init = function() {
			$http.get('itens.json')
				.then(function(_response){
					$scope.itens = _response.data;
				});
		};

		$scope.itens = [];

		$scope.setFilter = function(_value){
			$scope.query = _value;
		}

		 $scope.$watch('query', function() {
		 	$timeout(function(){
		 		$scope.$emit('iso-method', {name:'arrange', params:null})
		 	}, 600);
		});

		init();
	}]);
})();