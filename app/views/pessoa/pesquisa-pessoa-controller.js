angular.module('primeiro')
    .controller('PesquisaPessoaController', PesquisaPessoaController);

function PesquisaPessoaController($scope, $state){
    $scope.nome = 'controller Pesquisa carregado';
    $scope.redirecionaParaCadastro =redirecionaParaCadastro;
    //escutando o evento disparado em IndexController3
    $scope.$on('testeBroadcastEvent', recebendoValorEvento);

    function redirecionaParaCadastro(){
        //redireciona via javascript
        // O primeiro parâmetro é um estado definido na definição das rotas
        // o segundo (opcional) passa algum valor para a página de destino (ver URL após redirecionar)
        $state.go('cadastroPessoa', {id:15});
    }

    //método apenas para capturar o valor enviado pelo evento disparado
    function recebendoValorEvento(event, valor){
        var teste = valor;
    }
}