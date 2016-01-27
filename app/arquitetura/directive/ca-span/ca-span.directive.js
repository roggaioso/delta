(function(){
        'use strict';


        /**
         *  @ngdoc directive
         *  @name primeiro.directive:caSpan
         *  @element ca-span
         *  @scope
         *  @restrict AE
         *
         *  @description
         *  Componente padrão de span, com redefinição de características
         *
         * @param {string} texto Texto a ser formatado pelo span
         */

        /* @ngInject */
        angular.module('primeiro.directive')
            .directive('caSpan', caSpan);

        //scope permite criar atributos (para passar parâmetros) na minha diretiva
        function caSpan(){
            return {
                restrict: 'AE',
                templateUrl: 'app/arquitetura/directive/ca-span/ca-span.directive.html',
                scope: {
                    texto: '@'
                }
            };
        }
    }
)();