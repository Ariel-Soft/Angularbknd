'use strict';
/**
* @ngdoc overview
* @name controller.profileController
*/
angular.module('backAnd.controllers')
    .controller('profileController', ['$scope', 'Global', '$compile', 'menuService', '$timeout', '$rootScope', '$http', '$location', '$route',
        /**
        * @ngdoc function
        * @name init
        * @methodOf backand.js.controllers:profileController
        * @description initiate the configuration of the user profile
        */
        function ($scope, Global, $compile, menuService, $timeout, $rootScope, $http, $location) {
            debugger;
            $scope.global = Global;
            $scope.init = function (workspaceId, changeHomePage) {
                debugger;
                if (workspaceId == undefined) {
                    var search = $location.search();
                    if (search && search.workspaceId)
                        workspaceId = search.workspaceId;
                }
                menuService.queryjsonp({ workspaceId: workspaceId }
                , function (data) {
                    debugger;
                    $scope.profile = data.company;
                    $scope.profile.img = decodeURIComponent($scope.profile.logo);
                    $scope.profile.fullName = data.user.fullName;
                    $scope.profile.username = data.user.username;
                });
            }
            $scope.logOut = function() {
                localStorage.removeItem('Authorization');
                window.location.reload();
            }

            $scope.$on('signedIn', function (data) {
                $scope.init();
            });
            //$scope.changeWorkspace = function (workspaceId) {
            //    $scope.loadMenu(workspaceId, true);
            //    //if (!$location.search().viewName && !$location.search().dashboardId && !$location.search().contentId && $scope.currentWorkspace.homePage) {

            //    //}
            //}

            $scope.setCurrentMenuSelection = function (current, parent) {
                if (current.partType == "table") {
                    $location.search({
                        viewName: current.partId,
                        workspaceId: $scope.currentWorkspace.id
                    });
                    $location.path("/grids");
                }
                else if (current.partType == "dashboard") {
                    $location.search({
                        dashboardId: current.partId
                    });
                    $location.path("/dashboard");
                }
                else if (current.partType == "content") {
                    $location.search({
                        contentId: current.partId
                    });
                    $location.path("/content");
                }
                $scope.curTable = current.index;

                $scope.setBreadcrumbs(current, parent);

                $scope.$broadcast('menuItemSelected', current);

            }
        }
    ])
