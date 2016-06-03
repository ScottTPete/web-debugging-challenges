angular.module("miniRouting", ['ui.router'])

.config(function($stateProvider) {

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'js/home/homeTmpl.html',
            controller: 'homeCtrl',
            // resolve: function(productService) {
            //     product
            // }
        })
        .state('settings', {
            url: '/settings',
            templateUrl: 'js/settings/settingsTmpl.html',
            controller: 'settingsCtrl'
        })
        .state('products', {
            url: '/products/:productid',
            templateUrl: 'js/products/productTmpl.html',
            controller: 'productsCtrl'
        });


});