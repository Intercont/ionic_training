(function(){
	'use strict';

	angular.module('eliteApp').controller('ClassificacaoCtrl',['eliteApi', ClassificacaoCtrl]);

	function ClassificacaoCtrl(eliteApi){
		var vm = this;

		var dados = eliteApi.getCampeonatosDados();
		vm.classificacao = dados.standings;		
		
	};




})();