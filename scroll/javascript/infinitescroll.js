var firstPost = document.querySelector('#new');

var loadMore = function() {
  var newPost = firstPost.cloneNode(true)
  newPost.removeAttribute("id");
  document.body.appendChild(newPost);
}

// Generate a new post when the user hits the bottom.
document.addEventListener('scroll', function() {
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
    loadMore();
  }
});
