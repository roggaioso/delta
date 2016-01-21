(function(){
    'use strict';

    angular
        .module('primeiro')
        .config(config);

//definição das rotas
    /* @ngInject */
    function config($stateProvider, $urlRouterProvider){

        //página que será redirecionada caso seja digitado um endereço errado
        $urlRouterProvider.otherwise('/home');


        //criando objetos para evitar código inline
        var home = {
            url: '/home',
            templateUrl: 'app/views/home/home.html'
        };

        var menu = {
            url: '/menu',
            templateUrl: 'app/views/menu/menu.html'
        };

        //o $ocLazyLoad.load aceita um array, para poder carregar mais de um arquivo
        //o :id aceita valores passados pela URL
        var cadastroPessoa = {
            url: '/cadastroPessoa/:id',
            templateUrl: 'app/views/pessoa/cadastro-pessoa.html',
            resolve: {
                deps: function($ocLazyLoad){
                    return $ocLazyLoad.load('app/views/pessoa/cadastro-pessoa.controller.js');
                }
            }
        };

        var pesquisaPessoa = {
            url: '/pesquisaPessoa',
            templateUrl: 'app/views/pessoa/pesquisa-pessoa.html',
            resolve: {
                deps: function($ocLazyLoad){
                    return $ocLazyLoad.load('app/views/pessoa/pesquisa-pessoa.controller.js');
                }
            }
        };

        //criando as rotas
        $stateProvider.state('home', home); //isso vai criar a rota .....arquivo.html#/home
        $stateProvider.state('menu', menu); //isso vai criar a rota .....arquivo.html#/menu
        $stateProvider.state('cadastroPessoa', cadastroPessoa); //isso vai criar a rota .....arquivo.html#/menu
        $stateProvider.state('pesquisaPessoa', pesquisaPessoa); //isso vai criar a rota .....arquivo.html#/menu
    }
})();

