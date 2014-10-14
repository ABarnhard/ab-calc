(function(){
  'use strict';
  angular.module('ab-calc')
  .controller('MainCtrl', ['$scope', function($scope){
    $scope.display = '0';

    $scope.calculate = function(op){
      $scope.operator = op;
      $scope.memory = $scope.display;
      $scope.display = '0';
    };

    $scope.number = function(num){
      console.log(num);
      num = num.toString();
      if(num === '.' && $scope.display.indexOf('.') > -1){return;}

      if($scope.display === '0' && num !== '.'){
        $scope.display = num;
      }else{
        $scope.display += num;
      }
    };

    $scope.doCalc = function(){
      switch($scope.operator){
        case '+':
          $scope.display = (parseFloat($scope.display) + parseFloat($scope.memory)).toString();
          break;
        case '-':
          $scope.display = (parseFloat($scope.display) - parseFloat($scope.memory)).toString();
          break;
        case '*':
          $scope.display = (parseFloat($scope.display) * parseFloat($scope.memory)).toString();
          break;
        case '/':
          $scope.display = (parseFloat($scope.display) / parseFloat($scope.memory)).toString();
          break;
      }
    };

    $scope.clear = function(){
      $scope.display = '0';
      $scope.operator = '';
      $scope.memory = '';
    };

  }]);
})();
