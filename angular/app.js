app.module('myApp',['ngRoute']);

app.controller('mainController',['$scope','$http',function($scope,$http) {
	var main = this;

	this.All = [];
	this.AllBooks = [];
	this.AllChars =[];
	this.AllHouses = [];

	this.loadAllBooks = function() {
		$http.get('https://www.anapioficeandfire.com/api/books').success(function(data) {
			console.log(data);
			mainCtrl.AllBooks = data;
			for (var i = 0; i < main.AllBooks.length; i++) {
                    mainCtrl.All.push(mainCtrl.AllBooks[i]);
                },
            function errorCallback(data) {
				alert("Some error occurred");
            	console.log(data);
            }
		});

	} //end of loadAllBooks

	this.loadAllBooks();

	this.loadAllChars =function() {
		$http.get('http://www.anapioficeandfire.com/api/characters').success(function(data) {
			console.log(data);
			mainCtrl.AllChars = data;
			for (var i = 0; i < mainCtrl.AllChars.length; i++) {
				mainCtrl.All.push(mainCtrl.AllChars[i]);
			},
			function errorCallback(data) {
			alert("Some error occurred");
			console.log(data);
		}
		});
	}//end of loadAllChars

	this.loadAllChars();

	this.loadAllHouses = function() {
		$http.get('http://www.anapioficeandfire.com/api/houses').success(function(data) {
			console.log(data);
			mainCtrl.AllHouses = data;
			for (var i = 0; i < mainCtrl.AllHouses.length; i++) {
				mainCtrl.All.push(mainCtrl.AllHouses[i]);
			}
		})
		function errorCallback(data) {
			alert("Some error occurred");
			console.log(data);
		}
	}//end of loadAllHouses
	this.loadAllHouses();

	$scope.myBook = function (name) {
		console.log(name);
		$http.get('name').success(function(data){
			console.log(data);
			$scope.bookName = data.name;
                $scope.authorName =  data.authors[0];
                $scope.isbn =  data.isbn;
                $scope.publishers =  data.publisher;
                $scope.page =  data.numberOfPages;
                $scope.media =  data.mediaType;
                $scope.country =  data.country;
                $scope.releasedDate =  data.released;
		},
		function errorCallback(data) {
			alert("Some error occurred");
			console.log(data);
		});
	} //end myBook

	$scope.myHouse = function(name) {
		console.log(name);
		$http.get('name').success(function(data) {
			console.log(data);
			$scope.houseName = data.name;
			$scope.region = data.region;
			$scope.coatOfArms = data.coatOfArms;
			$scope.words = data.words;
			$scope.titles = data.titles;
			$scope.seats = data.seats;
			$scope.heir = data.heir;
			$scope.founded = data.founded;
			$scope.founder = data.founder;

		},
			function errorCallback(data) {
				alert("Some error occurred");
				console.log(data);
			});
	}//end myHouse

	$scope.myChar =function(name) {
		$http.get('name').success(function(data) {
			console.log(data);
			$scope.charName = data.name;
			$scope.gender = data.gender;
			$scope.culture = data.culture;
			$scope.born = data.born;
			$scope.aliases = data.aliases;
			$scope.father = data.father;
			$scope.mother = data.mother;
		},
			function errorCallback(data) {
				alert("Some error occurred");
				console.log(data);
			});
	}//end myChar

}]);

//custom directives
	app.directive('myBook',function() {
		return {
			templateUrl : 'all-books.html'
		}
	});

	app.directive('myChar',function() {
		return {
			templateUrl: 'all-chars.html'
		}
	});

	app.directive('myHouse',function() {
		return {
			templateUrl: 'all-houses.html'
		}
	});