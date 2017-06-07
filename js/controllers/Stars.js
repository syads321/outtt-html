app.controller('Stars', function($scope, $rootScope, loadUser) {
    loadUser($rootScope);
    $rootScope.activePage = 'stars';
});