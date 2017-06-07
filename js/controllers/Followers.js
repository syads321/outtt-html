app.controller('Followers', function($scope, $rootScope, loadUser) {
    loadUser($rootScope);
    $rootScope.activePage = 'follower';
});