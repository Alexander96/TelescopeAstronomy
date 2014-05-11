app.controller('PlanksLawController', function ($scope, $location, $anchorScroll) {
    $scope.toTop = function () {
        $location.hash('wrapper');
        $anchorScroll();
    }
});