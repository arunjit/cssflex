angular.module('index', []).
controller('IndexCtrl', function($scope) {
  $scope.values = [
    {label: "Something", options: [1, 2, 3], date: '2013-04-01'},
    {label: "Something", options: [2, 3, 4], date: '2013-04-02'},
    {label: "Something", options: [3, 4, 5], date: '2013-04-03'},
    {label: "Something", options: [4, 5, 6], date: '2013-04-05'}
  ];
});
