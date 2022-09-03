function render() {
  let data = document.getElementById("message").value;
  fetch("http://app.snehit.dev/render", {
    method: "POST",
    headers: { "Content-Type": "application/text" },
    body: data,
  }).then((res) => {
    console.log("Request complete! response:", res);
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
});
