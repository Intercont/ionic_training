(function(){
	'use strict';

	angular.module('eliteApp').controller('TimesCtrl',['eliteApi', TimesCtrl]);

	function TimesCtrl(eliteApi){
		var vm = this;

		var dados = eliteApi.getCampeonatosDados();
		vm.times = dados.teams;		
		
	};




})();