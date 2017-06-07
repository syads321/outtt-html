app.controller('Repositories', function($scope, $rootScope, loadUser, $http) {
    //  loadUser($rootScope);
    $rootScope.activePage = 'repositories';
    $scope.repositories = [];
    $http.get('https://api.github.com/users/andhikamaheva/repos').success(function(resp) {
        $scope.repositories = resp;
    })
});