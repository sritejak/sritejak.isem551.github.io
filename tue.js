angular.module('myApp', []).controller('userCtrl', function($scope) {
$scope.Student ID = '';
$scope.firstname = '';
$scope.lastname = '';
$scope.passw1 = '';
$scope.passw2 = '';
$scope.Students = [
{ Student ID:1, firstname:'Wiz',  lastname:"Khalifa"},
{ Student ID:2, firstname:'Kim',   lastname:"Kardashian"},
{ Student ID:3, firstname:'Dominic',   lastname:"Toretto"},
{ Student ID:4, firstname:'Smrithy',  lastname:"Jacob"},
{ Student ID:5, firstname:'Sriteja',  lastname:"Kanuri"},
{ Student ID:6, firstname:'Peter', lastname:"Crouch"},
{ Student ID:7, firstname:'Thiery', lastname:"Henry"},
{ Student ID:8, firstname:'Jane', lastname:"Zhang"},
{ Student ID:9, firstname:'Jack', lastname:"Wilshere"},
{ Student ID:10, firstname:'Mesut', lastname:"Ozil"},
];
$scope.edit = true;
$scope.error = false;
$scope.incomplete = false; 

$scope.editStudent = function(id) {
  if (id == 'new') {
    $scope.edit = true;
    $scope.incomplete = true;
	$scope.Student ID = '';
    $scope.firstname = '';
    $scope.lastname = '';
    } else {
    $scope.edit = false;
	$scope.Student ID = $scope.Students[id-1].Student ID; 
    $scope.firstname = $scope.Students[id-1].firstname;
    $scope.lastname = $scope.Students[id-1].lastname; 
	

	
  }
};

$scope.$watch('passw1',function() {$scope.test();});
$scope.$watch('passw2',function() {$scope.test();});
$scope.$watch('Student.ID', function() {$scope.test();});
$scope.$watch('firstname', function() {$scope.test();});
$scope.$watch('lastname', function() {$scope.test();});
$scope.$watch('Designation', function() {$scope.test();});


$scope.test = function() {
  if ($scope.passw1 !== $scope.passw2) {
    $scope.error = true;
    } else {
    $scope.error = false;
  }
  $scope.incomplete = false;
  if ($scope.edit && (!$scope.firstname.length ||
  !$scope.lastname.length ||
  !$scope.passw1.length || !$scope.passw2.length)) {
       $scope.incomplete = true;
  }
};

});