// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

//////////////////////////////ROUTES//////////////////////////////

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    
    .state('login', {
      url: '/login',
      controller: 'LoginCtrl',
      templateUrl: 'templates/login.html'
    })

    .state('tabs', {
      url: '/tab',
      controller: 'TabsCtrl',
      templateUrl: 'templates/tabs.html'
    })

    .state('tabs.home', {
      url: '/home',
      views: {
        'tab-home': {
          templateUrl: 'templates/home.html',
          controller: 'HomeCtrl'
        }
     }
  })

    .state('tabs.sobre', {
      url: '/sobre',
      views: {
        'tab-sobre': {
          templateUrl: 'templates/sobre.html',
          controller: 'SobreCtrl'
        }
     }
  })

    .state('tabs.configuracoes', {
      url: '/configuracoes',
      views: {
        'tab-configuracoes': {
          templateUrl: 'templates/configuracoes.html',
          controller: 'ConfigCtrl'
        }
     }
  })

    .state('viagem', {
      url: '/viagem',
      controller: 'ViagemCtrl',
      templateUrl: 'templates/viagem.html'
  })

    .state('automovel', {
      url: '/automovel',
      controller: 'AutomovelCtrl',
      templateUrl: 'templates/automovel.html'
  })

    .state('residencial', {
      url: '/residencial',
      controller: 'ResidencialCtrl',
      templateUrl: 'templates/residencial.html'
  })

    .state('acidentes', {
      url: '/acidentes',
      controller: 'AcidentesCtrl',
      templateUrl: 'templates/acidentes.html'
  })

    .state('empresarial', {
      url: '/empresarial',
      controller: 'EmpresarialCtrl',
      templateUrl: 'templates/empresarial.html'
  })

    .state('contratacao', {
      url: '/contratacao',
      controller: 'ContratacaoCtrl',
      templateUrl: 'templates/contratacao.html'
  })

  $urlRouterProvider.otherwise('/login');
})

//////////////////////////////CONTROLLERS//////////////////////////////

.controller('ContratacaoCtrl', function($scope, $ionicSideMenuDelegate) {
  
  $scope.abrirMenu = function () {
    $ionicSideMenuDelegate.toggleLeft();
  
  }

})

.controller('ViagemCtrl', function($scope, $ionicSideMenuDelegate, $ionicPopup, $location, $ionicLoading) {
  
  $scope.abrirMenu = function () {
    $ionicSideMenuDelegate.toggleLeft();
  }
  $scope.contratar = function() {
    
  var myPopup = $ionicPopup.show({
    title: 'Confirmar contratação',
    scope: $scope,
    buttons: [
      { text: 'Cancela' },
      {
        text: '<b>Confirma</b>',
        type: 'button-dark',
        onTap: function(e) {
          $ionicLoading.show({
            duration: 3000,
            template: '<ion-spinner></ion-spinner>'+
                '<p>Finalizando contratação...</p>'
          })

          $location.path('/contratacao') 
        }
      }
    ]
  })
  
  }
  
})

.controller('AutomovelCtrl', function($scope, $ionicSideMenuDelegate, $ionicPopup, $location, $ionicLoading) {
  
  $scope.abrirMenu = function () {
    $ionicSideMenuDelegate.toggleLeft();
  }
  $scope.contratar = function() {
    
  var myPopup = $ionicPopup.show({
    title: 'Confirmar contratação',
    scope: $scope,
    buttons: [
      { text: 'Cancela' },
      {
        text: '<b>Confirma</b>',
        type: 'button-dark',
        onTap: function(e) {
          $ionicLoading.show({
            duration: 3000,
            template: '<ion-spinner></ion-spinner>'+
                '<p>Finalizando contratação...</p>'
          })

          $location.path('/contratacao') 
        }
      }
    ]
  })
  
  }

  $scope.acessorios = false;
  
})

.controller('ResidencialCtrl', function($scope, $ionicSideMenuDelegate, $ionicPopup, $location, $ionicLoading) {
  
  $scope.abrirMenu = function () {
    $ionicSideMenuDelegate.toggleLeft();
  }
  $scope.contratar = function() {
    
  var myPopup = $ionicPopup.show({
    title: 'Confirmar contratação',
    scope: $scope,
    buttons: [
      { text: 'Cancela' },
      {
        text: '<b>Confirma</b>',
        type: 'button-dark',
        onTap: function(e) {
          $ionicLoading.show({
            duration: 3000,
            template: '<ion-spinner></ion-spinner>'+
                '<p>Finalizando contratação...</p>'
          })

          $location.path('contratacao') 
        }
      }
    ]
  })
  
  }
  
})

.controller('AcidentesCtrl', function($scope, $ionicSideMenuDelegate, $ionicPopup, $location, $ionicLoading) {
  
  $scope.abrirMenu = function () {
    $ionicSideMenuDelegate.toggleLeft();
  }
  $scope.contratar = function() {
    
  var myPopup = $ionicPopup.show({
    title: 'Confirmar contratação',
    scope: $scope,
    buttons: [
      { text: 'Cancela' },
      {
        text: '<b>Confirma</b>',
        type: 'button-dark',
        onTap: function(e) {
          $ionicLoading.show({
            duration: 3000,
            template: '<ion-spinner></ion-spinner>'+
                '<p>Finalizando contratação...</p>'
          })

          $location.path('contratacao') 
        }
      }
    ]
  })
  
  }
  
  $scope.adcoletiva = false;

})

.controller('EmpresarialCtrl', function($scope, $ionicSideMenuDelegate, $ionicPopup, $location, $ionicLoading) {
  
  $scope.abrirMenu = function () {
    $ionicSideMenuDelegate.toggleLeft();
  }
  $scope.contratar = function() {
    
  var myPopup = $ionicPopup.show({
    title: 'Confirmar contratação',
    scope: $scope,
    buttons: [
      { text: 'Cancela' },
      {
        text: '<b>Confirma</b>',
        type: 'button-dark',
        onTap: function(e) {
          $ionicLoading.show({
            duration: 3000,
            template: '<ion-spinner></ion-spinner>'+
                '<p>Finalizando contratação...</p>'
          })

          $location.path('contratacao') 
        }
      }
    ]
  })
  
  }
  $scope.socios = false;

})

.controller('TabsCtrl', function($scope, $ionicSideMenuDelegate) {
  
  $scope.abrirMenu = function () {
    $ionicSideMenuDelegate.toggleLeft();
  }
  
})

.controller('HomeCtrl', function($scope, $ionicSideMenuDelegate) {
  
  $scope.abrirMenu = function () {
    $ionicSideMenuDelegate.toggleLeft();
  }
  
})

.controller('SobreCtrl', function($scope, $ionicSideMenuDelegate) {
  
  $scope.abrirMenu = function () {
    $ionicSideMenuDelegate.toggleLeft();
  }
  
})

.controller('ConfigCtrl', function($scope, $ionicSideMenuDelegate, $location, $ionicLoading) {
  
  $scope.abrirMenu = function () {
    $ionicSideMenuDelegate.toggleLeft();
  }

  $scope.logout = function() {
    $ionicLoading.show({
      duration: 1000,
      template: '<ion-spinner></ion-spinner>'+
                '<p>Desconectando...</p>'
    })

    $location.path('/login');
  }

})

.controller('LoginCtrl', function ($scope, LoginService, $ionicPopup, $location) {
    $scope.data = {};

    $scope.login = function () {
        LoginService.loginUser($scope.data.username, $scope.data.password).success(function (data) {

          $location.path('/tab/home');

        }).error(function (data) {
            var alertPopup = $ionicPopup.alert({
                title: 'Falha no login!',
                template: 'Favor checar suas credenciais.'
            });
        });
    }
})

//////////////////////////////SERVICES//////////////////////////////

.service('LoginService', function($q) {
    return {
        loginUser: function(name, pw) {
            var deferred = $q.defer();
            var promise = deferred.promise;
 
            if (name == 'teste' && pw == 'teste') {
                deferred.resolve('Bem-vindo ' + name + '!');
            } else {
                deferred.reject('Credenciais inexistentes.');
            }
            promise.success = function(fn) {
                promise.then(fn);
                return promise;
            }
            promise.error = function(fn) {
                promise.then(null, fn);
                return promise;
            }
            return promise;
        }
    }
});