var service = angular.module('RegisterModule', []);

service.constant('baseUrl', 'http://localhost:5400/register')
service.service('lead', LeadService);


LeadService.$inject = ['$http', 'baseUrl'];
function LeadService($http, baseUrl) {
    var srv = this;

    srv.register = function(data) {
        var url = baseUrl + '/lead';
        return $http.post(url, data);
    }
}
