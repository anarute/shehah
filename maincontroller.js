app.controller("MainController", function($scope, $http){

	var phrases;

	$http.get('phrases.json')
	.then(function(res){
		phrases = res.data;
	});

	$scope.shit = "Clique no selo para ler sua sorte do dia."

	$scope.fala_shehah = function() {
		$scope.shit = phrases[Math.floor(Math.random()*phrases.length)].shit
	}
});
