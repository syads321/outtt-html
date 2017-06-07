app.factory('Url', function() {
    var baseUrl = 'https://api.github.com/users/';
    var username = 'andhikamaheva';
    var url = {
        getUser: baseUrl + username,
        repos: baseUrl + username + '/repos'
    }
    return function(name, param) {
        return url[name] + param;
    };
})