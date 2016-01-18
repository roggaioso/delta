/**
 * Created by rogerio on 12/01/16.
 */

angular.module('primeiro')
    .controller('IndexController2', IndexController2);

IndexController.$inject = ['$scope']; //injeção de dependências

function IndexController2($scope){
    $scope.nome = 'Rogério';
    $scope.myStyle = {};   //criando um objeto

    $scope.$watch('nome', onChangeNome);

    function onChangeNome(novoNome, nomeAntigo){

        //para eliminar a alteração do texto ao iniciar a aplicação
        if(novoNome === nomeAntigo){
            return;
        }

        if(novoNome === 'delta'){
            $scope.myStyle.backgroundColor = 'red';
        } else {
            $scope.myStyle.backgroundColor = 'blue';
        }
    }
}