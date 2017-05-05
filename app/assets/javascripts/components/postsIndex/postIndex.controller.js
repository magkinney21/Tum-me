angular
 .module('TumMe')
 .controller('PostsIndexController', PostsIndexController);

PostsIndexController.$inject = ['postsService'];

function PostsIndexController(postsService) {
    var vm = this;
    vm.posts = [];

    postsService.getPosts().then(function(resp) {
      vm.posts = resp.data;
    });
}
