angular.module('eliteApp',['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {      
      url: "/home", 
      abstract: true,     
      templateUrl: "app/home/home.html"
           
    })

    .state('home.campeonatos', {      
      url: "/campeonatos",      
      views: {
        "tab-campeonatos" : {
          templateUrl: "app/home/campeonatos.html"    
        }
      }
      
    })

    .state('home.meustimes', {      
      url: "/meustimes",      
      views: {
        "tab-meustimes" : {
          templateUrl: "app/home/meustimes.html"    
        }
      }      
    })

    .state('app', {
      abstract: true,
      url: "/app",      
      templateUrl: "app/layout/menu-layout.html",
      
    })

    .state('app.times', {      
      url: "/times",      
      views: {
        "mainContent" : {
          templateUrl: "app/times/times.html"    
        }
      }      
    })

    .state('app.time-detalhes', {      
      url: "/times/:id",      
      views: {
        "mainContent" : {
          templateUrl: "app/times/time-detalhes.html"    
        }
      }      
    })

    .state('app.jogo', {      
      url: "/jogo/:id",      
      views: {
        "mainContent" : {
          templateUrl: "app/jogo/jogo.html"    
        }
      }      
    })

    .state('app.classificacao', {      
      url: "/classificacao",      
      views: {
        "mainContent" : {
          templateUrl: "app/classificacao/classificacao.html"    
        }
      }      
    })

    .state('app.locais', {      
      url: "/locais",      
      views: {
        "mainContent" : {
          templateUrl: "app/locais/locais.html"    
        }
      }      
    })

    .state('app.regras', {      
      url: "/regras",      
      views: {
        "mainContent" : {
          templateUrl: "app/regras/regras.html"    
        }
      }      
    });

  // if none of the above states are matched, use this as the fallback
  //$urlRouterProvider.otherwise('home/campeonatos');
  $urlRouterProvider.otherwise('app/times');
});
