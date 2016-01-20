angular.module('primeiro')
    .controller('CadastroPessoaController', CadastroPessoaController);

function CadastroPessoaController($scope, $stateParams){
    $scope.nome = 'Valor informado no controller';
    //variável que recebe o valor vindo da URL
    var meuId = $stateParams.id;

    //checa se o valor foi passado
    if(meuId){
        //trata o valor como desejado, por exemplo, redirecionar a página
    }
}