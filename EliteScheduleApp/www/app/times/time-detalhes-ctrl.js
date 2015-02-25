(function(){
	'use strict';

	angular.module('eliteApp').controller('timeDetalhesCtrl',['$stateParams', 'eliteApi', timeDetalhesCtrl]);

	function timeDetalhesCtrl($stateParams, eliteApi){
		var vm = this;

		//console.log("$stateParams", $stateParams);
		vm.timeId = Number($stateParams.id);

		var dados = eliteApi.getCampeonatosDados();

		//TODO Toooda a query do video "Incorporating External Libraries with Bower", minuto 2:18

	};




})();