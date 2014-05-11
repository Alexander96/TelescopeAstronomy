app.controller('ReflectorController', function ($scope, $location, $anchorScroll) {
    $scope.showH = false;
    $scope.showInfoText = false;
    $scope.historyInfo = 'Покажи';
    $scope.info = 'Покажи';
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
    $scope.showInfo = function () {
        if (!$scope.showInfoText) {
            $scope.showInfoText = true;
            $scope.info = 'Скрий';
        }
        else {
            $scope.showInfoText = false;
            $scope.info = 'Покажи';
        }
    }
    $scope.toTop = function () {
        $location.hash('wrapper');
        $anchorScroll();
    }
});