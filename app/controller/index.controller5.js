(function () {
    'use strict';

    angular
        .module('primeiro.controller')
        .controller('IndexController5', IndexController5);

    /* @ngInject */
    function IndexController5($http) {
        var vm = this;
        vm.listaDeDados = [];
        vm.carregaListaDeDados = carregaListaDeDados;

        //variável que exibe os dados no HTML. Como no HTML foi declarado cmo vmIndex, aqui deve ser usado assim
        vm.gridOptions = {
            data: 'vmIndex.listaDeDados'
        };

        //método que faz o acesso HTTP ao servidor e carrega os dados
        function carregaListaDeDados(){
            var promisse = $http.get('http://jsonplaceholder.typicode.com/posts');

            promisse.then(carregaResult, carregaFault);
        }

        //método que é disparado para carregar os dados
        function carregaResult(response){
            //variável do controller que recebe os dados para serem exibidos no HTML
            vm.listaDeDados = response.data;
        }

        //método que é disparado caso a requisição gere algum erro (acesso ao servidor, exceção, etc
        function carregaFault(rejection){
            //trata o erro
           //se for somente exibir mensagem para o usu�rio, utilizar Interceptor
        }
    }

})();

