(function(){
    'use strict';

    angular.module('primeiro.controller', []);
    angular.module('primeiro.service', []);
    angular.module('primeiro.factory', []);


    angular.module('primeiro', [
            'ngMessages',
            'toastr',
            'ui.grid',
            'ngMaterial',
            'ui.router',
            'oc.lazyLoad'
        ]);
})();
