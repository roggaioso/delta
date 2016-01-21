(function(){
    'use strict';

    angular.module('primeiro')
        .filter('maiusculo', maiusculo);

    /* @ngInject */
    function maiusculo() {
        return function(input){
            if(input && (typeof input === 'string')){
                return input.toUpperCase();
            }

            return input;
        };
    }
})();