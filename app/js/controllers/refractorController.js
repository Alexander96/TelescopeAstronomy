app.controller('RefractorController', function ($scope, $location, $anchorScroll) {
    $scope.showH = false;
    $scope.historyInfo = 'Покажи';
    $scope.showHistory = function () {
        if (!$scope.showH) {
            $scope.showH = true;
            $scope.historyInfo = 'Скрий';
        }
        else {
            $scope.showH = false;
            $scope.historyInfo = 'Покажи';
        }
    }
    $scope.toTop = function () {
        $location.hash('wrapper');
        $anchorScroll();
    }
});