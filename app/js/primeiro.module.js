(function(){
    'use strict';

    angular.module('primeiro.controller', []);
    angular.module('primeiro.service', []);
    angular.module('primeiro.factory', []);
    angular.module('primeiro.directive', []);
    angular.module('primeiro.filter', []);



    angular.module('primeiro', [
            'ngMessages',
            'toastr',
            'ui.grid',
            'ngMaterial',
            'ui.router',
            'oc.lazyLoad',
            'primeiro.controller',
            'primeiro.service',
            'primeiro.factory',
            'primeiro.filter',
            'primeiro.directive',
            'angular-keycode',
            'ui.bootstrap'
        ]);
})();
