myApp.controller('HomeCtrl', ['$scope',
        function($scope) {
            $scope.test = "111";
        }
    ])
    .controller('EditCtrl', ['$scope', 'CRUD', function($scope, CRUD) {
        $scope.article = {
            title: '123123'
        };

        CRUD.articles.findOne('57aed06d143b88196dbcedf63').then(function(res){
          var article=res.data.articles[0];
          $scope.article=article;
          console.log(article);
        });

    }])

.controller('ArticlesCtrl', ['$scope', 'CRUD', function($scope, CRUD) {
        // $scope.articles = [{
        //     title: 't1',
        //     body:'```\nasdfasf\n```'
        // }, {
        //     title: 't2',
        //     body:'##asdfasf\n`asdfasf`'
        // }];
        $scope.pageChanged = function(newPage) {

            CRUD.articles.findAll(newPage, $scope.limit).then(function(res) {
                $scope.articles = res.data.articles;
                var meta = res.data.meta;
                $scope.meta = meta;
                $scope.limit = meta.limit;
                $scope.total = meta.total;
                $scope.page = meta.page;
            });

        };
        $scope.pageChanged($scope.page, $scope.limit);

    }])
    .controller('QuestionsCtrl', ['$scope', 'CRUD', function($scope, CRUD) {
        $scope.total = 0;
        $scope.page = 1;
        $scope.limit = 5;

        $scope.pageChanged = function(newPage) {
            CRUD.questions.findAll(newPage, $scope.limit).then(function(res) {

                $scope.questions = res.data.questions;
                var meta = res.data.meta;
                $scope.meta = meta;

                $scope.limit = meta.limit;
                $scope.total = meta.total;
                $scope.page = meta.page;

                //console.log(JSON.stringify(res.data));

            });

        };

        $scope.pageChanged($scope.page, $scope.limit);

    }]);
