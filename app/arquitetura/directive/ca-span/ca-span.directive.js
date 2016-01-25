(function(){
        'use strict';

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