(function(){
	'use strict';

	angular.module('eliteApp').controller('LocaisCtrl',['eliteApi', LocaisCtrl]);

	function LocaisCtrl(eliteApi){
		var vm = this;

		var dados = eliteApi.getCampeonatosDados();
		vm.locais = dados.locations;		
		
	};




})();