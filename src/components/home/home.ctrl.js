/**
 * Created with IntelliJ IDEA.
 * User: dothin
 * Date: 2017/4/12
 * Time: 20:30
 * To change this template use File | Settings | File Templates.
 */

(function () {
    'use strict';
    angular.module('app.home').controller('homeCtrl', homeCtrl);
    homeCtrl.$inject = ['$state', '$rootScope', 'tools'];
    function homeCtrl($state, $rootScope, tools) {
        tools.alertSuccess('success')
    }
})();
