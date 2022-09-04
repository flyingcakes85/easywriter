var sans_serif_btn = document.getElementById("sans-serif");
var serif_btn = document.getElementById("serif");
var serif = true;
sans_serif_btn.addEventListener("click", () => {
  serif_btn.classList.remove("selected");
  sans_serif_btn.classList.add("selected");
  serif = false;
});

serif_btn.addEventListener("click", () => {
  sans_serif_btn.classList.remove("selected");
  serif_btn.classList.add("selected");
  serif = true;
});

function render_pdf() {
  let data = document.getElementById("message").value;
  fetch("https://app.snehit.dev/render-pdf", {
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

function render_pdf_sans_serif() {
  let data = document.getElementById("message").value;
  fetch("https://app.snehit.dev/render-sans-serif-pdf", {
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

function render_docx() {
  let data = document.getElementById("message").value;
  fetch("https://app.snehit.dev/render-docx", {
    method: "POST",
    headers: { "Content-Type": "application/text" },
    body: data,
  })
    .then((res) => res.blob())
    .then((data) => {
      var a = document.createElement("a");
      a.href = window.URL.createObjectURL(data);
      a.download = "document.docx";
      a.click();
    });
}

function upload() {
  let data = document.getElementById("message").value;
  fetch("https://app.snehit.dev/upload", {
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

function render() {
  if (serif) {
    render_pdf();
  } else {
    render_pdf_sans_serif();
  }
}

window.addEventListener("load", (event) => {
  document.getElementById("btnLink").addEventListener("click", upload);
  document.getElementById("btn-Pdf").addEventListener("click", render);
  document.getElementById("btn-docx").addEventListener("click", render_docx);
});
