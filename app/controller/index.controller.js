(function () {
    'use scrict';

    angular
        .module('primeiro')
        .controller('IndexController', IndexController);

    /* @ngInject */
    function IndexController($scope){
        var vm = this;
        vm.nome = 'Rogério';
        vm.qquerNome = testeFuncao; // esse 'qquerNome' é o valor que será utilizado no arquivo HTML

        function testeFuncao(){
            alert('Olá ' + vm.nome);
        }
    }
})();
