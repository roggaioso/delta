/**
 * Created by rogerio on 12/01/16.
 */

angular.module('primeiro')
    .controller('IndexController', IndexController);

IndexController.$inject = ['$scope']; //injeção de dependências

function IndexController($scope){
    $scope.nome = 'Rogério';
    $scope.qquerNome = testeFuncao; // esse 'qquerNome' é o valor que será utilizado no arquivo HTML

    function testeFuncao(){
        alert('Olá ' + $scope.nome);
    }
}