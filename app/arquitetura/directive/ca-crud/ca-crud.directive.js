(function(){
        'use strict';

        /**
         *  @ngdoc directive
         *  @name primeiro.directive:caCrud
         *  @element ca-crud
         *  @scope
         *  @restrict E
         *
         *  @description
         *  Componente padrão de input text, com uso de transclude
         *
         * @param {string} titulo Texto a ser exibido na parte superior do input
         * @param {object} salvar Nome da função a ser executada
         * @param {object} limpar Nome da função a ser executada
         * @param {object} excluir Nome da função a ser executada
         */

        /* @ngInject */
        angular.module('primeiro.directive')
            .directive('caCrud', caCrud);

        //scope permite criar atributos (para passar parâmetros) na minha diretiva
        //      @ >>> string
        //      = >>> objetos
        //      & >>> funções
        //link
        function caCrud(AlertService, $timeout){
            return {
                restrict: 'E',
                templateUrl: 'app/arquitetura/directive/ca-crud/ca-crud.directive.html',
                transclude: true,
                link: link,
                scope: {
                    titulo: '@',
                    salvar: '&',
                    limpar: '&',
                    excluir: '&'
                }
            };

            function link(scope, element, attrs){

                scope.onSalvar = onSalvar;
                scope.onLimpar = onLimpar;

                function onSalvar(){
                    setarTouchedNosInputs();
                    if(scope.formCrud.$invalid){
                        AlertService.showError('Verifique os campos antes de salvar!', 'Erro');
                        return;
                    }
                    scope.salvar();
                }

                function onLimpar(){
                    scope.limpar();
                    $timeout(function(){
                        setarUnTouchedNosInputs();
                    }, 50);
                }

                function setarTouchedNosInputs(){
                    angular.forEach(scope.formCrud.$error, function(error){
                        angular.forEach(error, function(field){
                            field.$setTouched();
                        });
                    });
                }

                function setarUnTouchedNosInputs(){
                    angular.forEach(scope.formCrud.$error, function(error){
                        angular.forEach(error, function(field){
                            field.$setUntouched();
                        });
                    });
                }
            }
        }
    }
)();