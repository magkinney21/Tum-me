angular
 .module('TumMe')
 .component('postsEdit', {
  templateUrl: '<%= asset_path("components/postsEdit/postEdit") %>',
  controller: 'EditController'
 });


PostsEditController.$inject = ['$http', '$stateParams', '$state'];

function PostsEditController($http, $stateParams, $state) {
  var vm = this;

  vm.note = {};

  vm.saveNote = saveNote;

  $http.get('/api/notes/' + $stateParams.id).then(function(resp) {
    vm.note = resp.data;
  });

  function saveNote() {
    $http.put('/api/notes/' + $stateParams.id, vm.note).then(function(resp) {
      if(resp.status == 200) {
        $state.go('notesShow', { id: resp.data.id })
      } else {
        alert('Something went wrong when trying to update')
      }
    });
  }
}
