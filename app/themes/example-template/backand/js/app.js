'use strict';
  
angular.module('backAnd.directives', []);
angular.module('backAnd.filters', []);
angular.module('backAnd.controllers', []);
angular.module('backAnd.services', []);


angular.module('backAnd', [
    'ngRoute',
    'ngResource',
    'ngGrid',
    //'cgBusy',
    'ui.bootstrap',
    'backAnd.filters',
    'backAnd.services',
    'backAnd.directives',
    'backAnd.controllers'
]).config(['$routeProvider',

    function ($routeProvider) {

        backand.options.url = backandGlobal.url;
        //todo: switch to ui router, work with resolve
        $routeProvider
            .when('/', {
                templateUrl: 'themes/example-template/backand/partials/default/default.html',
//                resolve: {
//                    loginState : function (loginManager, $location) {
//                        (loginManager.isLoggedIn()) ?
//                            return true;
//                            : $location.url('/login');
//                    }
//                }
            })

            .when('/login', {
                templateUrl: 'themes/example-template/backand/partials/login/login.html'
            })

            .when('/grids', {
                templateUrl: 'themes/example-template/backand/partials/grids/grids.html'
            })

            .when('/dashboard', {
                templateUrl: 'themes/example-template/backand/partials/dashboard/dashboard.html'
            })

            .when('/content', {
                templateUrl: 'themes/example-template/backand/partials/content/content.html'
            })

            .when('/forms', {
                templateUrl: 'themes/example-template/backand/partials/forms/forms.html'
            })

            .when('/404', {
                templateUrl: 'themes/example-template/backand/partials/custom/404.html'
            })

            .when('/error', {
                templateUrl: 'themes/example-template/backand/partials/custom/error.html'
            })

            .when('/example', {
                templateUrl: 'themes/example-template/backand/partials/custom/example.html'
            })

            /********************************************************/
            /* uncomment this route for the custom new page example */
            /********************************************************/
            //.when('/page1', {
            //    templateUrl: 'themes/AdminLTE-master/my-pages/page1/page1.html'
            //})


            .otherwise({
                redirectTo: '/'
            });

    }
]);


