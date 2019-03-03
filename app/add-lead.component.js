var app = angular.module('MajorisApp', ['toastr', 'RegisterModule']);

app.controller('AddLeadCtrl', AddLeadCtrl);

AddLeadCtrl.$inject = ['$window', 'toastr', 'lead'];
function AddLeadCtrl($window, toastr, leadService) {
    var ctrl = this;

    ctrl.data = {};

    ctrl.register = function() {
        leadService.register(ctrl.data)
            .then(handleSuccess, handleError);
    };

    function handleSuccess(res) {
        // Redirecionar para success.html
        $window.location.href = 'success.html';
    }
    
    function handleError(err) {
        if(err.status === 409) {
            toastr.warning(err.data.msg, err.data.title);
            return;
        }

        toastr.error(err.data.msg, err.data.title);
    }

    function resetFields() {
        ctrl.data.name = '';
        ctrl.data.email = '';
        ctrl.data.company = '';
        ctrl.data.segment = '';
    }
}