
angular.module('myApp').factory('CRUD', ['$http', function ($http) {

			var ret = {
				questions : {
					findAll : function (page, limit) {
						var config = {
							params : {}
						};
            if(page){
              config.params.page=page;
            }
						if (limit) {
							config.params.limit = limit;
						}

						var resUrl = '/api/questions';
						return $http.get(resUrl, config);

					}
				}
			};

			return ret;
		}
	]);

angular.module('angularRestfulAuth').factory('CRUD', ['$http', function ($http) {

			var ret = {
				questions : {
					findAll : function (page, limit) {
						var config = {
							params : {}
						};
            if(page){
              config.params.page=page;
            }
						if (limit) {
							config.params.limit = limit;
						}

						var resUrl = '/api/questions';
						return $http.get(resUrl, config);

					}
				}
			};

			return ret;
		}
	]);
