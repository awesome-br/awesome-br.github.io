(function() {

  // jQuery commands
  $(function () {
    if ( $(window).width() > 768 ) {
      $('[data-toggle="tooltip"]').tooltip();
    };
  });

  var app = angular.module('awesome', ['iso.directives', 'ngRoute']);

  /**
   * widget class directive
   */
  app.directive('widget', function() {
    return {
      restrict: 'C',
      link: function(scope, elem, attrs) {
        $(elem).geopattern(scope.item.name, {
          generator: 'squares'
        });
      }
    };
  });

  /**
   * target attribute directive
   */
  app.directive("targeter", function() {
    return {
      restrict: 'A',
      link: function(scope, element, attrs) {
        var href = scope.item.url;
        if (!href.match(/^#\//)) {
          element.attr("target", "_blank");
        } else {
          element.attr("target", "_self");
        }
      }
    };
  });


  /**
   * loop-itens directive
   */
  app.directive('loopItens', function() {
    return {
      restrict: 'E',
      templateUrl: '/views/parts/loop-itens.html',
      require: '^itens',
      scope: {
        itens: '=',
        query: '='
      },
      controller: ['$scope', '$timeout', function($scope, $timeout) {
        $scope.setFilter = function(_value) {
          $scope.query = _value;
        };

        $scope.$watch('query', function(a) {
          $timeout(function() {
            $scope.$emit('iso-method', {
              name: 'arrange',
              params: null
            });
          }, 600);
        });
      }]
    };
  });

  /**
   * filter-form directive
   */
  app.directive('filterForm', function() {
    return {
      restrict: 'E',
      templateUrl: '/views/parts/form.html',
      require: '^planceholder',
      scope: {
        planceholder: '=',
        query: '=',
        types: '=',
        tags: '='
      },
      controller: ['$scope', function($scope) {
        $scope.clearFilter = function() {
          $scope.query = '';
        };

        $scope.setFilter = function(_value) {
          $scope.query = _value;
        };
      }]
    };
  });

  /**
   * Configs (routes)
   */
  app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'homeController'
      })
      .when('/:sectionName', {
        templateUrl: 'views/section.html',
        controller: 'sectionController'
      });
  }]);

  /**
   * Run (events)
   */
  app.run(['$window', '$location', '$rootScope', function($window, $location, $rootScope) {
    $rootScope.$on('$routeChangeSuccess', function(scope, data) {
      $rootScope.currentController = data.controller;
    });

    var track = function() {
        $window.ga('send', 'pageview', {
            page: $location.path()
        });
    };
    $rootScope.$on('$viewContentLoaded', track);
  }]);

  /**
   * Main Controller
   */
  app.controller('mainController', ['$scope', '$http', '$timeout', function($scope, $http, $timeout) {

  }]);

  /**
   * Home Controller
   */
  app.controller('homeController', ['$scope', '$http', '$timeout', function($scope, $http, $timeout) {
    var init = function() {
      $http.get('sections.json')
        .then(function(_response) {
          $scope.itens = _response.data;
          $scope.spinner = false;

          $scope.types = _.chain(_response.data)
                          .pluck('type')
                          .uniq()
                          .value();
        });
    };

    $scope.itens = [];
    $scope.types = [];
    $scope.spinner = true;

    init();
  }]);

  /**
   * Section Controller
   */
  app.controller('sectionController', ['$rootScope', '$scope', '$http', '$timeout', '$routeParams', function($rootScope, $scope, $http, $timeout, $routeParams) {
    var init = function() {
      var file = 'sections/' + $routeParams.sectionName + '.json';

      $http.get(file)
        .then(function(_response) {
          $scope.itens = _response.data;
          $scope.spinner = false;

          $scope.tags = _.chain(_response.data)
                          .pluck('tags')
                          .flatten()
                          .uniq()
                          .value();

          $scope.types = _.chain(_response.data)
                          .pluck('type')
                          .uniq()
                          .value();
        });
    };

    $scope.itens = [];
    $scope.tags = [];
    $scope.types = [];
    $scope.spinner = true;

    init();

  }]);
})();
