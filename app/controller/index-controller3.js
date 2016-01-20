angular.module('primeiro')
    .controller('IndexController3', IndexController3);

//injeção de dependências
//funciona sem elas, mas quando mimificar vai parar de funcionar
IndexController3.$inject = ['$scope', '$timeout', 'AlertService', '$filter', '$rootScope', '$state'];

function IndexController3($scope, $timeout, AlertService, $filter, $rootScope, $state){
    $scope.listaDePessoas = [];
    $scope.entidade = {};

    $scope.salvar = salvar;
    $scope.limpar = limpar;
    $scope.onClickEditar = onClickEditar;
    $scope.getRowStyle = getRowStyle;
    $scope.disparaEvento = disparaEvento;
    $scope.disparaEventoInexistente = disparaEventoInexistente;
    //escutando evento (segundo parâmetro é uma function). Esses nomes de evento é definido pelo UI-Router
    $rootScope.$on('$stateChangeStart', stateChangeStart);//disparado sempre que há uma alteração de estado
    $rootScope.$on('$stateChangeSuccess', stateChangeSuccess);
    $rootScope.$on('$stateNotFound', stateNotFound);//disparado quando o estado é inválido

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

    //dispara evento broadcast, usando o scope-pai (vai para todos abaixo dele)
    //de baixo para cima seria $rootScope.$emit
    function disparaEvento(){
        //esse evento seria definido para ser escutado em outro controller
        $rootScope.$broadcast('testeBroadcastEvent', {nome: 'valor passado pelo broadcast'});
    }

    //dispara um estado que não exite, para disparar o evento stateNotFound
    function disparaEventoInexistente(){
        $state.go('asdfgh');
    }

    function stateChangeStart(event, toState, toParams, fromState, fromParams){
        //neste exemplo, não vai permitir acessar a rota cadastroPessoa
        if(toState.name === 'cadastroPessoa'){
            AlertService.showError('Você não possui permissão para acessar esta página!!');
            //interrompe o broadcast do evento e pára o processamento
            event.preventDefault();
        }
    }

    function stateChangeSuccess(event, toState, toParams, fromState, fromParams){
        AlertService.showSuccess('Carregou estado ' + toState.name + ' com sucesso');
    }

    function stateNotFound(event, unfoundState, fromState, fromParams){
        AlertService.showError('Essa página não existe');
        //redireciona para a rota 'home'
        $state.go('home');
    }
}