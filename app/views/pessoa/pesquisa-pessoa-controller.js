angular.module('primeiro')
    .controller('PesquisaPessoaController', PesquisaPessoaController);

function PesquisaPessoaController($scope){
    $scope.nome = 'controller Pesquisa carregado';
}