app.controller('TelescopeResolutionController', function ($scope, $location, $anchorScroll) {
    $scope.toTop = function () {
        $location.hash('wrapper');
        $anchorScroll();
    }
});