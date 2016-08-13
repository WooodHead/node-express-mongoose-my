angular.module('de.damncreative.worktimer.help', [
    
])

.config([
    '$stateProvider',
    function($stateProvider) {
        $stateProvider
        .state("help", {
            url: "/help",
            templateUrl: "/partials/help/layout.html"
        })
    }
]);
;