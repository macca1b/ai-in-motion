document.addEventListener('DOMContentLoaded', function() {
  const themeToggle = document.getElementById('theme-toggle');
  themeToggle.addEventListener('click', function() {
    const htmlElement = document.documentElement;
    const currentTheme = htmlElement.getAttribute('data-theme');
    htmlElement.setAttribute('data-theme', currentTheme === 'light' ? 'dark' : 'light');
  });
});
