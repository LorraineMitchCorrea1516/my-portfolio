// If a photo file is missing, show a clear placeholder instead of a broken icon.
document.querySelectorAll('.polaroid img').forEach(function (img) {
  img.addEventListener('error', function () {
    img.removeAttribute('src');
    img.alt = 'Add your photo: ' + img.alt;
  });
});
