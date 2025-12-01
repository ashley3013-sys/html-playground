function runCode() {
  const code = document.getElementById("editor").value;
  const iframe = document.getElementById("output");
  iframe.srcdoc = code;
}
