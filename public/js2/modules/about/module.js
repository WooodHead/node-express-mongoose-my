angular.module('de.damncreative.worktimer.about', [
    
])

.config([
    '$stateProvider',
    function($stateProvider) {
        $stateProvider
        .state("about", {
            url: "/about",
            templateUrl: "/partials/about/layout.html"
        })
    }
]);
;