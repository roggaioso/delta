(function () {
    'use strict';

    angular
        .module('primeiro.controller')
        .controller('IndexController4', IndexController4);

    /* @ngInject */
    function IndexController4(AlertService) {
        var vm = this;

        vm.entidade = {};
        vm.salvar = salvar;
        vm.limpar = limpar;
        vm.excluir = excluir;
        vm.testeFuncao = testeFuncao;

        function salvar(){
            AlertService.showSuccess('Salvou registro');
        }

        function limpar(){
            vm.entidade = {};
        }

        function excluir(){
            AlertService.showSuccess('Excluiu registro');
        }

        function testeFuncao(){
            AlertService.showInfo('Tecla ENTER pressionada');
        }
    }

})();

