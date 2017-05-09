angular
 .module('TumMe')
 .controller('PostIndexController', PostIndexController);

PostIndexController.$inject = ['postsService'];

function PostIndexController(postsService) {
    var vm = this;
    vm.posts = [];


    postsService.getPosts().then(function(resp) {
      vm.posts = resp.data;
    });
}
