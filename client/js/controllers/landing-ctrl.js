"use strict";

function LandingCtrl($scope,$location,$rootScope,$timeout,landingService) {
  debugger;
  $scope.landing = {
    title: "Hello, World!",
    version: "Loading..."
  };
  
  $scope.un = "";
  $scope.password = "";
  ///$rootScope.instanceUrl = '';
  //$rootScope.token = '';

  $scope.login = function() {
    fetch("/api/login", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username: $scope.un, password: $scope.password })
    })
      .then(response => response.json())
      .then(data => {
        console.log("Success:", data);
       // $scope.getProducts(data);
       //$rootScope.instanceUrl = data.instanceUrl;
       //$rootScope.token = data.accessToken;
       landingService.setter(data.instanceUrl,data.accessToken);
      //  $scope.$apply(function(){
      //     $location.path('/products');
      //  });
      $timeout(function() {
         $location.path('/products');
       }, 0);
      })
      .catch(error => {
        console.error("Error:", error);
      });
  };

//   $scope.landing.fetchVersion = function() {
//     // const promise = landingService.login({username: 'ad', password: 'dsf'});
//     const data = { username: "example" };
//   };
//   $scope.getProducts = function(data){
//    var conn = new jsforce.Connection({
//       instanceUrl : data.instanceUrl,
//       accessToken : data.token
//    });
//    conn.requestGet("/services/apexrest/vlocity_cmt/v3/catalogs/VLPOC/offers", function(err, orders) {
//       if (err) { return console.error(err); }
//       console.log("gaurav response: ");
//       console.log("response: ", orders);
//       // the response object structure depends on the definition of apex class
//     });
//   }
}
