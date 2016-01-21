(function(){
    'use strict';

    //funciona como um service, mas o padrão é usar para definição de parâmetros gerais do sistema
    angular.module('primeiro')
        .factory('ParametrosApp', ParametrosApp);

    /* @ngInject */
    function ParametrosApp(){
        return {
            nomeEmpresa: 'ACME S/A',
            enderecoEmpresa: 'Rua dos Bobos nr. 0',
            ativa: true
        };
    }
})();
