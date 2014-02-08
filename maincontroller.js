app.controller("MainController", function($scope, $http){

	var phrases;

	$http.get('phrases.json')
	.then(function(res){
		phrases = res.data;
	});

	$scope.fala_shehah = function() {
		$scope.shit = phrases[Math.floor(Math.random()*phrases.length)].shit
	}
});
