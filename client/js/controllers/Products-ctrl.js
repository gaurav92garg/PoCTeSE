"use strict";

function ProductsCtrl($scope,$rootScope,$timeout,landingService) {
  debugger;
  //$scope.instanceUrlRT = $rootScope.instanceUrl;
  //$scope.tokenRT= $rootScope.token;
  $scope.authenticationVar = landingService.getter();
  $scope.instanceUrlRT = $scope.authenticationVar.instanceUrl;
  $scope.tokenRT = $scope.authenticationVar.accessToken;
  $scope.offers = [];
  $scope.productDetails = null;
  $scope.basketInfo = null;
  $scope.cartContextKey = '';
  $scope.getProducts = function() {
    
    fetch("/api/products", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ instanceUrl: $scope.instanceUrlRT, token:  $scope.tokenRT})
    })
      .then(response => response.json())
      .then(data => {
        console.log("Success:", data);
        $timeout(function() {
            $scope.offers = data.offers;
            $scope.productDetails = null;
            $scope.basketInfo = null;
            $scope.cartContextKey = '';
            $scope.orderDetails = null;
          }, 0);
       
       // $scope.getProducts(data);
       
      })
      .catch(error => {
        console.error("Error:", error);
      });
  };
  $scope.getProductDetails = function(productCode) {
    
    fetch(`/api/products?appendUrl=${productCode}`, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ instanceUrl: $scope.instanceUrlRT, token:  $scope.tokenRT, appendUrl : productCode})
    })
      .then(response => response.json())
      .then(data => {
        console.log("Success:", data);
        $timeout(function() {
            $scope.productDetails = data.result;
            $scope.basketInfo = null;
            $scope.cartContextKey = '';
            $scope.orderDetails = null;
          }, 0);
       
       // $scope.getProducts(data);
       
      })
      .catch(error => {
        console.error("Error:", error);
      });
  };
  $scope.addToBasket = function(productCode) {
    
    fetch(`/api/products?appendUrl=basket`, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ instanceUrl: $scope.instanceUrlRT, token:  $scope.tokenRT, prcode : productCode})
    })
      .then(response => response.json())
      .then(data => {
        console.log("Success:", data);
        $timeout(function() {
            $scope.cartContextKey = data.cartContextKey;
            $scope.basketInfo = data.result;
            $scope.orderDetails = null;
          }, 0);
       
       // $scope.getProducts(data);
       
      })
      .catch(error => {
        console.error("Error:", error);
      });
  };
  $scope.createOrder = function() {
    
    fetch(`/api/products?appendUrl=carts&cartKey=${$scope.cartContextKey}`, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ instanceUrl: $scope.instanceUrlRT, token:  $scope.tokenRT})
    })
      .then(response => response.json())
      .then(data => {
        console.log("Success:", data);
        $timeout(function() {
            $scope.orderDetails = data.orderNumber;
          }, 0);
       
       // $scope.getProducts(data);
       
      })
      .catch(error => {
        console.error("Error:", error);
      });
  };
  

}