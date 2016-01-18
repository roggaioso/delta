angular.module('primeiro')
    .controller('IndexController3', IndexController3);

IndexController3.$inject = ['$scope', '$timeout', 'AlertService', '$filter']; //injeção de dependências

function IndexController3($scope, $timeout, AlertService, $filter){
    $scope.listaDePessoas = [];
    $scope.entidade = {};

    $scope.salvar = salvar;
    $scope.limpar = limpar;
    $scope.onClickEditar = onClickEditar;
    $scope.getRowStyle = getRowStyle;

    iniciar();

    function iniciar(){
        //
        $scope.gridOptions = {
            data: 'listaDePessoas',
            columnDefs: [
                {field:'nome', displayName:'Nome', width:300},
                {field:'sobrenome', displayName:'Sobrenome'},
                {field:'nascimento', displayName:'Dt Nascimento', width:200, cellTemplate: 'app/template/cell-template-date.html'},
                {field:'btn-editar', displayName:'', width:45, cellTemplate:'app/template/cell-template-editar.html'}
            ],
            rowTemplate: 'app/template/row-template.html'
        };
    }

    function salvar(){
        setarTouchedNosInputs();
        if($scope.formPessoa.$invalid){
            AlertService.showError('Verifique os campos antes de salvar!', 'Erro');
            return;
        }

        //teste de filtro no controller
        var data = $scope.entidade.nascimento;
        $scope.ultimaDataCadastrada = $filter('date')(data, 'dd/MM/yyyy');

        $scope.listaDePessoas.push($scope.entidade);//adiciona a entidade na lista
        AlertService.showSuccess('Registro salvo com sucesso.', 'Ok');
        limpar();
    }

    function limpar(){
        $scope.entidade = {};
        $timeout(function(){
            setarUnTouchedNosInputs();
        }, 50);
    }

    function setarTouchedNosInputs(){
        angular.forEach($scope.formPessoa.$error, function(error){
            angular.forEach(error, function(field){
                field.$setTouched();
            });
        });
    }

    function setarUnTouchedNosInputs(){
        angular.forEach($scope.formPessoa.$error, function(error){
            angular.forEach(error, function(field){
                field.$setUntouched();
            });
        });
    }

    function onClickEditar(linhaSelecionada){
        $scope.entidade = linhaSelecionada;
    }

    function getRowStyle(linhaSelecionada){
        var meuEstilo = {};
        meuEstilo.backgroundColor = linhaSelecionada.cor;
        meuEstilo.color = 'white';
        return meuEstilo;
    }
}