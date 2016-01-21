(function (){
    'use strict';

    angular
        .module('primeiro')
        .controller('IndexController2', IndexController2);

    /* @ngInject */
    function IndexController2($scope){
        var vm = this;
        vm.nome = 'Rogério';
        vm.myStyle = {};   //criando um objeto

        $scope.$watch('nome', onChangeNome);

        function onChangeNome(novoNome, nomeAntigo){

            //para eliminar a alteração do texto ao iniciar a aplicação
            if(novoNome === nomeAntigo){
                return;
            }

            if(novoNome === 'delta'){
                vm.myStyle.backgroundColor = 'red';
            } else {
                vm.myStyle.backgroundColor = 'blue';
            }
        }
    }
})();

