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
        function caCrud(){
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

            }
        }
    }
)();