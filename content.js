const style = document.createElement('style');
style.textContent = `
  body {
    background-color: black !important;
    color: green !important;
  }
  a {
    color: red !important;
  }
`;
document.head.appendChild(style);
