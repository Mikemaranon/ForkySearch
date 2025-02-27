document.getElementById('theme-toggle-checkbox').addEventListener('change', function() {
    const themeStyle = document.getElementById('theme-style');
    if (this.checked) {
        themeStyle.setAttribute('href', 'css/dark-theme.css');
    } else {
        themeStyle.setAttribute('href', 'css/white-theme.css');
    }
});