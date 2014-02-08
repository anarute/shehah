app.controller("MainController", function($scope, $http){
    $http.get('phrases.json')
	.then(function(res){
		$scope.phrases = res.data;
	});

    $scope.fala_shehah = function() {
		$scope.shit = $scope.phrases[Math.floor(Math.random()*6)].shit
    }
});
