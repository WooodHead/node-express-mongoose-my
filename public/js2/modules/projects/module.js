angular.module('de.damncreative.worktimer.projects', [
    
])

.config([
    '$stateProvider',
    function($stateProvider) {
        $stateProvider
        .state("projects", {
            url: "/projects",
            abstract: true,
            templateUrl: "/partials/projects/layout.html"
        })
        .state("projects.list", {
            url: "/",
            views: {
                'container': {
                    templateUrl: "/partials/projects/list.html"
                }
            }
        })
        .state("projects.details", {
            url: "/",
            abstract: true,
            views: {
                'container': {
                    templateUrl: "/partials/projects/details.html"
                }
            }
        });
    }
]);
;