(function(){
	'use strict';

	angular.module('eliteApp').controller('timeDetalhesCtrl',['$stateParams', timeDetalhesCtrl]);

	function timeDetalhesCtrl($stateParams){
		var vm = this;

		console.log("$stateParams", $stateParams);
	};




})();