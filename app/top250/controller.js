
(function(){
  'use strict';
  // 创建正在热映的模块
  var module=angular.module('moviecat.top250', ['ngRoute']);
  // 配置模块的路由
  module.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/top250', {
      controller: 'Top250Controller',
      templateUrl: 'top250/view.html'
    });
  }]);

  module.controller('Top250Controller', ['$scope',function($scope) {

  }]); 
})(angular)
