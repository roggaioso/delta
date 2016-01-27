(function(){
        'use strict';

        angular.module('primeiro.directive')
            .directive('caEnter', caEnter);

        /**
         *  @ngdoc directive
         *  @name primeiro.directive:caEnter
         *  @element ca-enter
         *  @restrict A
         *
         *  @description
         *  Captura a tecla pressionada pelo usuário
         *
         */

        /* @ngInject */
        function caEnter(KeyCode){
            return {
                restrict: 'A',
                link: link
            };

            function link(scope, element, attrs){
                element.bind('keydown', onkeydown);

                function onkeydown(event){
                    var code = event.keyCode;

                    if(code === KeyCode.ENTER){
                        scope.$eval(attrs.caEnter);
                    }
                }
            }
        }
    }
)();