(function(){
        'use strict';

        /**
         *  @ngdoc directive
         *  @name primeiro.directive:caInputText
         *  @element ca-input-text
         *  @scope
         *  @restrict E
         *
         *  @description
         *  Componente padrão de input text
         *
         * @param {string} label Texto a ser exibido na parte superior do input
         * @param {number} colspan Quantidade de colunas que o input ocupara. Default: 3
         * @param {object} ng-model Referência do input
         * @param {boolean} ng-required Informa se o campo é obrigatório ou não. Default:false
         */

        /* @ngInject */
        angular.module('primeiro.directive')
            .directive('caInputText', caInputText);

        //scope permite criar atributos (para passar parâmetros) na minha diretiva
        //link
        //require ^form: exige que o componente seja inserido dentro de um form
        function caInputText(){
            return {
                require: '^form',
                restrict: 'E',
                templateUrl: 'app/arquitetura/directive/ca-input-text/ca-input-text.directive.html',
                link: link,
                scope: {
                    label: '@',
                    colspan: '@',
                    ngModel: '=',
                    ngRequired: '=',
                    ngMaxlength: '@',
                    ngMinlength: '@'
                }
            };

            //a existência do require permite a ocorrẽncia do quarto parâmetro. Neste caso,
            //o formControl é uma referência para o objeto que controla o form
            function link(scope, element, attrs, formControl){
                //armazenando esse valor no scope para poder utilizá-lo no HTML
                scope.formControl = formControl;
                //definindo um nome dinâmico para o inputText
                scope.inputName = 'inputText' + scope.$id;

                if(!attrs.colspan){
                    scope.myColSpan = 'col-sm-3';
                }
                scope.myColSpan = 'col-sm-' + attrs.colspan;
            }
        }
    }
)();