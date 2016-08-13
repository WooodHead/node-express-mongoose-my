angular.module('de.damncreative.worktimer.docs', [
    
])

.config([
    '$stateProvider',
    function($stateProvider) {
        $stateProvider
        .state("docs", {
            url: "/docs",
            templateUrl: "/partials/docs/layout.html"
        })
        .state("docs.list", {
            url: "/",
            views: {
                'container': {
                    templateUrl: "/partials/docs/list.html"
                }
            }
        });
    }
]);
;