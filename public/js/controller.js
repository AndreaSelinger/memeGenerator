app.controller('homeCtrl',['$scope','mainService',function($scope, mainService){
    $scope.text='HOME controller space';
}]);


app.controller('allCtrl',['$scope','mainService',function($scope, mainService){
    $scope.text='ALL controller space';
}]);


app.controller('memeCtrl',['$scope','mainService',function($scope, mainService){
    $scope.text='MEME controller space';
}]);