app.factory('Get', function($http, Url) {
    var Get = function(name, param, callback) {
        $http.get(Url(name, param)).success(function(resp) {
            callback(resp);
        })
    }
    return Get;
});