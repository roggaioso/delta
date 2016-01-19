angular.module('primeiro')
    .controller('CadastroPessoaController', CadastroPessoaController);

function CadastroPessoaController($scope){
    $scope.nome = 'Valor informado no controller';
}