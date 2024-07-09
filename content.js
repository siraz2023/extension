(function() {
  const darkModeCSS = `
    body {
      background-color: black !important;
      color: #ffffff !important;
    }
    a {
      color: #fffff !important;
    }
    .dark-mode-toggle {
      display: none !important;
    }
  `;

  const styleElement = document.createElement('style');
  styleElement.classList.add('dark-mode-style');
  styleElement.textContent = darkModeCSS;

  const existingStyleElement = document.querySelector('.dark-mode-style');

  if (existingStyleElement) {
    existingStyleElement.remove();
  } else {
    document.head.appendChild(styleElement);
  }
})();
