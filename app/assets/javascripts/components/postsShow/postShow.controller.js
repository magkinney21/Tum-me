angular
.module('TumMe')

PostShowController.$inject = ['postsService'];

function PostShowController(postsService) {
  var vm = this;

  vm.post = {};

  $http.get().then(function(resp) {
    vm.note = resp.data;
  });
}
