(function(angular, jQuery){

var app = angular.module('spacewarApp', []);

function isLocation(viewLocation){
    if (viewLocation == window.location.pathname) return true;
    if ('/app.php'+viewLocation == window.location.pathname) return true;
    if ('/app_dev.php'+viewLocation == window.location.pathname) return true;
    return false;
}

app.controller('navbarCtrl', function($scope, $location){
     $scope.isActive = function(viewLocation){
         return (viewLocation == $location.path()) || isLocation(viewLocation);
     };
});

})(angular, jQuery);
