function TodoCtrl($scope) {
    $scope.todos = [
        {text:"lorem ipsum 1", done:true},
        {text:"lorem ipsum 2", done:false}
    ];

    $scope.addToDo = function() {
        $scope.todos.push({
            text: $scope.todoText,
            done: false
        });
        $scope.clearText();
    };
    
    $scope.clearText = function() {
        $scope.todoText = '';
    };

    $scope.todoLen = function() {
        return $scope.todos.length;
    }

    $scope.remaining = function() {
        var count = 0;
        angular.forEach( $scope.todos, function(todo) {
            count += todo.done ? 1 : 0;
        } );
        return count;
    };

    $scope.formatText = function(text) {
        return text + "..";
    };

    $scope.cleanup = function() {
        var copy     = angular.copy( $scope.todos );
        $scope.todos = [];
        angular.forEach( copy, function(todo) {
            if ( !todo.done ) {
                $scope.todos.push( todo );
            }
        } );
    };
}