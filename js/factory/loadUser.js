app.factory('loadUser', function(Get) {
    var user = 'andhikamaheva';
    return function($root) {
        Get('getUser', user, function(resp) {
            console.log(resp);
            $root.user = resp;
        })
    };
});