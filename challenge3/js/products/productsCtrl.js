angular.module('miniRouting').controller("productsCtrl", function($scope, $stateParams, productService) {
    var productType = $stateParams.productid;



    if (productType === "shoes") {
        $scope.productData = productService.getShoes();
    } else {
        $scope.productData = productService.getSocks();
    }
});
