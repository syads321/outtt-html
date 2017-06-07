app.controller('Following', function($scope, $rootScope, loadUser) {
    loadUser($rootScope);
    $rootScope.activePage = 'following';
});