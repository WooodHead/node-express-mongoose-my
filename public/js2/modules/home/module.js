angular.module('de.damncreative.worktimer.home', [
    
])

.config([
    '$stateProvider',
    function($stateProvider) {
        $stateProvider
        .state("home", {
            url: "/",
            templateUrl: "/partials/home/layout.html"
        })
    }
]);
;