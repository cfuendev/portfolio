document.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('A link with target URL ' + e.target.href + ' was clicked');
  });
})
