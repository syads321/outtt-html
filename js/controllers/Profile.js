app.controller('Profile', function($scope, $rootScope, loadUser) {
    loadUser($rootScope);
    $rootScope.activePage = 'profile';
});