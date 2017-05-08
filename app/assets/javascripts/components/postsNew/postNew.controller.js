angular
 .module('TumMe')
 .controller('PostNewController', PostNewController);

PostNewController.$inject = ['$http', '$state'];

function PostNewController($http, $state) {
  var vm = this;

  vm.post = {
    title: '',
    content: '',
  };

  vm.savePost = savePost;
  function savePost() {
    $http.post('/api/posts/', vm.post).then(function(resp) {
      if(resp.status == 201) {
        $state.go('postShow', { id: resp.data.id })
      } else {
        alert('Something went wrong when trying to create')
      }
    });
  }
}
