(function(){
	'use strict';

	angular.module('eliteApp').controller('CampeonatosCtrl',['$state','eliteApi', CampeonatosCtrl]);

	function CampeonatosCtrl($state, eliteApi){
		var vm = this;
		var campeonatos = eliteApi.getCampeonatos();

		vm.campeonatos = campeonatos;
		
		vm.selectCampeonato = function(campId){
			//TODO: select correct league
			$state.go("app.times");

		}

		
		
	};




})();