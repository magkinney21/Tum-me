angular
 .module('TumMe')
 .component('postsEdit', {
  templateUrl: '<%= asset_path("components/postsEdit/postEdit") %>',
  controller: 'PostsEditController'
 });


PostsEditController.$inject = ['$http', '$stateParams', '$state'];

function PostsEditController($http, $stateParams, $state) {
  var vm = this;

  vm.note = {};

  vm.savePost = savePost;

  $http.get('/api/posts/' + $stateParams.id).then(function(resp) {
    vm.post = resp.data;
  });

  function savePost() {
    $http.put('/api/posts/' + $stateParams.id, vm.post).then(function(resp) {
      if(resp.status == 200) {
        $state.go('postsShow', { id: resp.data.id })
      } else {
        alert('Something went wrong when trying to update')
      }
    });
  }
}
