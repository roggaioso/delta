(function(){
        'use strict';

        /**
         *  @ngdoc directive
         *  @name primeiro.directive:caPanel
         *  @element ca-panel
         *  @scope
         *  @restrict E
         *
         *  @description
         *  teste do transclude múltiplo
         *
         * @param {string} titulo Texto a ser exibido na parte superior do input
         * @param {string} tipo classe CSS do Bootstrap para o layout do panel. Valor padrão: 'panel panel-default'
         * @param {object} salvar Nome da função a ser executada
         * @param {object} limpar Nome da função a ser executada
         * @param {object} excluir Nome da função a ser executada
         *
         */

        /* @ngInject */
        angular.module('primeiro.directive')
            .directive('caPanel', caPanel);

        //scope permite criar atributos (para passar parâmetros) na minha diretiva
        //      @ >>> string
        //      = >>> objetos
        //      & >>> funções
        //link
        //transclude define os alias que serão usados no xxx.directive.html e pelo programador no HTML
        function caPanel(){
            return {
                restrict: 'E',
                templateUrl: 'app/arquitetura/directive/ca-panel/ca-panel.directive.html',
                transclude: {
                    'body': 'panelBody',
                    'footer': '?panelFooter'
                },
                link: link,
                scope: {
                    titulo: '@',
                    tipo: '@',
                    salvar: '&',
                    limpar: '&',
                    excluir: '&'
                }
            };

            function link(scope, element, attrs){
                if(!attrs.tipo){
                    scope.myPanel = 'panel panel-default';
                } else {
                    scope.myPanel = attrs.tipo;
                }
            }
        }
    }
)();