angular.module('zaitoonFirst.feed.controllers', [])

.controller('FeedCtrl', function($scope,  $ionicScrollDelegate, ShoppingCartService) {
	$scope.getProductsInCart = function(){
		return ShoppingCartService.getProducts().length;
	};
})

.controller('FashionCtrl', function($scope, $stateParams, products) {
	$scope.filters = $stateParams.filters;

	$scope.products = products;
})

.controller('FoodCtrl', function($scope, products, ShoppingCartService, $ionicLoading) {
		
		$scope.products = products;

		$scope.addToCart = function(product) {
		$ionicLoading.show({
			template: 'Adding to Cartsss',
			duration: 1000
		});

		product.qty = 1;
		product.size = "M";
		product.color = "black";
		product.price = 120;
  	    ShoppingCartService.addProduct(product);
  	    console.log(product);
  		};




})

.controller('FoodSoupCtrl', function($scope, products, ShoppingCartService, $ionicLoading) {
	$scope.products = products;

	$scope.addToCart = function(product) {
		$ionicLoading.show({
			template:  '<b style="color: #f1c40f">'+product.name+'</b> is added.',
			duration: 1000
		});

		product.qty = 1;
		product.size = "M";
		product.color = "black";
		product.price = 150;
  	    ShoppingCartService.addProduct(product);
  	    //console.log(product);
  };


})

.controller('FoodArabianCtrl', function($scope, $http, FoodArabianService, products, ShoppingCartService, $ionicLoading) {
	

	$http.get('http://localhost/vega-web-app/online/fetchmenu.php')
	.then(function(response){
      	console.log('********* am here');
      	console.log(response.data);
      	$scope.menu = response.data;
      	console.log($scope.menu);
    });

	$scope.search = { query : '' };
	//$scope.products = products;	

	console.log('******************************');
	console.log(products);

	$scope.showSearch = false;

	$scope.cancelSearch = function(){

	};

	$scope.resetSearch = function(){
		$scope.search = { query : '' };
		$scope.showSearch = !$scope.showSearch;
	}

	$scope.addToCart = function(product) {
		$ionicLoading.show({
			template:  '<b style="color: #f1c40f">'+product.itemName+'</b> is added.',
			duration: 1000
		});

		// product.qty = 1;
		// product.size = "M";
		// product.color = "black";
		// product.price = 150;
  	    ShoppingCartService.addProduct(product);
  	    //console.log(product);
  	};


})

.controller('FoodChineseCtrl', function($scope, products, ShoppingCartService, $ionicLoading) {
	$scope.products = products;

	$scope.addToCart = function(product) {
		$ionicLoading.show({
			template:  '<b style="color: #f1c40f">'+product.name+'</b> is added.',
			duration: 1000
		});

		product.qty = 1;
		product.size = "M";
		product.color = "black";
		product.price = 150;
  	    ShoppingCartService.addProduct(product);
  	    //console.log(product);
  };


})

.controller('FoodIndianCtrl', function($scope, products, ShoppingCartService, $ionicLoading) {
	$scope.products = products;

	$scope.addToCart = function(product) {
		$ionicLoading.show({
			template:  '<b style="color: #f1c40f">'+product.name+'</b> is added.',
			duration: 1000
		});

		product.qty = 1;
		product.size = "M";
		product.color = "black";
		product.price = 150;
  	    ShoppingCartService.addProduct(product);
  	    //console.log(product);
  };


})

.controller('FoodDessertCtrl', function($scope, products, ShoppingCartService, $ionicLoading) {
	$scope.products = products;

	$scope.addToCart = function(product) {
		$ionicLoading.show({
			template:  '<b style="color: #f1c40f">'+product.name+'</b> is added.',
			duration: 1000
		});

		product.qty = 1;
		product.size = "M";
		product.color = "black";
		product.price = 150;
  	    ShoppingCartService.addProduct(product);
  	    //console.log(product);
  };


})









.controller('TravelCtrl', function($scope, products) {
	$scope.products = products;
})

.controller('DealsCtrl', function($scope, products) {
	$scope.products = products;
})

.controller('RealStateCtrl', function($scope, products) {
	$scope.products = products;
})

;
