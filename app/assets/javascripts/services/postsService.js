angular
  .module('TumMe')
  .factory('postsService', postsService);

postsService.$inject = ['$http'];

function postsService($http) {
  var factory = {};

  factory.getPosts = function() {
    return $http.get('api/posts');
  };
  factory.getPost = function(id) {
    return $http.get('/api/posts' + id);
  }
  return factory;
}
