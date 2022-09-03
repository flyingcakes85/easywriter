function render_pdf() {
  let data = document.getElementById("message").value;
  fetch("http://app.snehit.dev/render-pdf", {
    method: "POST",
    headers: { "Content-Type": "application/text" },
    body: data,
  })
    .then((res) => res.blob())
    .then((data) => {
      var a = document.createElement("a");
      a.href = window.URL.createObjectURL(data);
      a.download = "document.pdf";
      a.click();
    });
}

function upload() {
  let data = document.getElementById("message").value;
  fetch("http://app.snehit.dev/upload", {
    method: "POST",
    headers: { "Content-Type": "application/text" },
    body: data,
  })
    .then((res) => res.text())
    .then((data) => {
      document.getElementById("shareLinkText").innerHTML =
        'Link for your document is <a href="' + data + '">' + data + "</a>.";
      shareLink = data;
    });
}

window.addEventListener("load", (event) => {
  document.getElementById("btnLink").addEventListener("click", upload);
  document.getElementById("btn-Pdf").addEventListener("click", render_pdf);
});
