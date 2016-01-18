angular.module('primeiro')
    .filter('maiusculo', maiusculo);

    function maiusculo() {
        return function(input){
            if(input && (typeof input === 'string')){
                return input.toUpperCase();
            }

            return input;
        }
    };