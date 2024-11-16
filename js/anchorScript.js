function anchorClick(e) {
  const anchor = document.createElement("a");

  anchor.href = e;
  anchor.textContent = "Click me!";
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
}
