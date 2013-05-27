angular.module('details', []).
    config( function( $routeProvider ) {
        $routeProvider.
        when('/', {templateUrl:'view/list.html'}).
        when('/edit/:detailId', {templateUrl:'view/detail.html'}).
        otherwise({redirectTo: '/'});
    } );

function ListCtrl( $scope ) {
    $scope.websites = [
        {id:1, title:"Google", site:"http://www.google.de", text:"Lorem Ipsum"},
        {id:2, title:"Microsoft", site:"http://www.ms.de", text:"Lorem Ipsum2"}
    ];
    $scope.empty = function() {
        $scope.search = '';
    };
}

function DetailCtrl( $scope, $http, $location, $routeParams ) {
    var self   = this;
    var reqUrl = 'data/detail' + $routeParams.detailId + '.json';
    $http( {method:'GET', url:reqUrl} ).
        success( function(data) {
            $scope.source = {};
            angular.forEach( data, function(value, key) {
                $scope.source[ key ] = value;
            } )
        }).
        error( function(data) {
            console.log("error");
        });
}