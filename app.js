'use strict';

var app = angular.module('localStorageDemo', ['LocalStorageModule']);

app.config(function (localStorageServiceProvider) {
	localStorageServiceProvider
		.setPrefix('demo_')
		.setStorageType('localStorage')
});

app.controller('localStorageCtrl', ['$scope', 'localStorageService',
function($scope, localStorageService) {
	if (localStorageService.isSupported) {
	}
	
	if (localStorageService.get('valorGuardado'))
		$scope.valorGuardado = 'Valor guardado: ' + localStorageService.get('valorGuardado');
	else
		$scope.valorGuardado = 'Ingrese un valor y luego presione guardar.';
	$scope.guardar = function() {
		localStorageService.set('valorGuardado', $scope.entrada);
		$scope.valorGuardado = "Se guardó el valor '" + $scope.entrada + "', ahora puede refrescar el navegador y verificar que la información permanece.";
		$scope.entrada = '';
	};
}]);