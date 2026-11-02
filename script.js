// Highlight the sidebar link of the section you are viewing.
var links = document.querySelectorAll('#nav a');
var sections = document.querySelectorAll('main section');

var observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      links.forEach(function (a) {
        a.classList.toggle('on', a.getAttribute('href') === '#' + entry.target.id);
      });
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(function (s) { observer.observe(s); });
