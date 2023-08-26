// A simple script that would, for example, load more articles when scrolled to the bottom
// This is just a placeholder to show where you'd put interactive features

window.addEventListener("scroll", function() {
  if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
    alert("You've reached the bottom! More articles could be loaded here.");
  }
});
