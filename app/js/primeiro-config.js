/**
 * Created by rogerio on 12/01/16.
 */
//declaração do module principal, feito uma vez por projeto
//.config para declarar rotas (ui-router); poderia ser feito em um arquivo separado
angular.module('primeiro',[
    'ngMessages',
    'toastr',
    'ui.grid',
    'ngMaterial',
    'ui.router',
    'oc.lazyLoad'
])

    .config(config);

config.$inject = ['$stateProvider', '$urlRouterProvider'];

//definição das rotas
function config($stateProvider, $urlRouterProvider){

    //página que será redirecionada caso seja digitado um endereço errado. Ex.: criar uma rota para página de erro
    $urlRouterProvider.otherwise("/home");


    //criando objetos para evitar código inline
    var home = {
        url: "/home",
        templateUrl: "app/views/home/home.html"
    };

    var menu = {
      url: "/menu",
        templateUrl: "app/views/menu/menu.html"
    };

    //o $ocLazyLoad.load aceita um array, para poder carregar mais de um arquivo
    var cadastroPessoa = {
        url: "/cadastroPessoa",
        templateUrl: "app/views/pessoa/cadastro-pessoa.html",
        resolve: {
            deps: function($ocLazyLoad){
                return $ocLazyLoad.load('app/views/pessoa/cadastro-pessoa-controller.js');
            }
        }
    };

    var pesquisaPessoa = {
        url: "/pesquisaPessoa",
        templateUrl: "app/views/pessoa/pesquisa-pessoa.html",
        resolve: {
            deps: function($ocLazyLoad){
                return $ocLazyLoad.load('app/views/pessoa/pesquisa-pessoa-controller.js');
            }
        }
    };

    //criando as rotas
    $stateProvider.state('home', home); //isso vai criar a rota .....arquivo.html#/home
    $stateProvider.state('menu', menu); //isso vai criar a rota .....arquivo.html#/menu
    $stateProvider.state('cadastroPessoa', cadastroPessoa); //isso vai criar a rota .....arquivo.html#/menu
    $stateProvider.state('pesquisaPessoa', pesquisaPessoa); //isso vai criar a rota .....arquivo.html#/menu
}