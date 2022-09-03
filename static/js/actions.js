function getBold() {
  // javascript
  console.log("test");

  // obtain the object reference for the textarea>
  var txtarea = document.getElementById("message");
  // obtain the index of the first selected character
  var start = txtarea.selectionStart;
  // obtain the index of the last selected character
  var finish = txtarea.selectionEnd;
  //obtain all Text
  var allText = txtarea.value;

  // obtain the selected text
  var sel = allText.substring(start, finish);
  //append te text;
  var newText =
    allText.substring(0, start) +
    "**" +
    sel +
    "**" +
    allText.substring(finish, allText.length);

  txtarea.value = newText;
  console.log(newText);
  // do something with the selected content
}
document.getElementById("btnBold").addEventListener("click", getBold);

function getItalic() {
  // javascript
  console.log("test");

  // obtain the object reference for the textarea>
  var txtarea = document.getElementById("message");
  // obtain the index of the first selected character
  var start = txtarea.selectionStart;
  // obtain the index of the last selected character
  var finish = txtarea.selectionEnd;
  //obtain all Text
  var allText = txtarea.value;

  // obtain the selected text
  var sel = allText.substring(start, finish);
  //append te text;
  var newText =
    allText.substring(0, start) +
    "*" +
    sel +
    "*" +
    allText.substring(finish, allText.length);

  txtarea.value = newText;
  console.log(newText);
  // do something with the selected content
}
document.getElementById("btnItalic").addEventListener("click", getItalic);

function getBlockquote() {
  // javascript
  console.log("test");

  // obtain the object reference for the textarea>
  var txtarea = document.getElementById("message");
  // obtain the index of the first selected character
  var start = txtarea.selectionStart;
  // obtain the index of the last selected character
  var finish = txtarea.selectionEnd;
  //obtain all Text
  var allText = txtarea.value;

  // obtain the selected text
  var sel = allText.substring(start, finish);
  //append te text;
  var newText =
    allText.substring(0, start) +
    "\n>" +
    sel +
    allText.substring(finish, allText.length);

  txtarea.value = newText;
  console.log(newText);
  // do something with the selected content
}
document
  .getElementById("btnBlockquote")
  .addEventListener("click", getBlockquote);

function getCode() {
  // javascript
  console.log("test");

  // obtain the object reference for the textarea>
  var txtarea = document.getElementById("message");
  // obtain the index of the first selected character
  var start = txtarea.selectionStart;
  // obtain the index of the last selected character
  var finish = txtarea.selectionEnd;
  //obtain all Text
  var allText = txtarea.value;

  // obtain the selected text
  var sel = allText.substring(start, finish);
  //append te text;
  var newText =
    allText.substring(0, start) +
    "`" +
    sel +
    "`" +
    allText.substring(finish, allText.length);

  txtarea.value = newText;
  console.log(newText);
  // do something with the selected content
}
document.getElementById("btnCode").addEventListener("click", getCode);

function getHeading1() {
  // javascript
  console.log("test");

  // obtain the object reference for the textarea>
  var txtarea = document.getElementById("message");
  // obtain the index of the first selected character
  var start = txtarea.selectionStart;
  // obtain the index of the last selected character
  var finish = txtarea.selectionEnd;
  //obtain all Text
  var allText = txtarea.value;

  // obtain the selected text
  var sel = allText.substring(start, finish);
  //append te text;

  var newText =
    allText.substring(0, start) +
    "#" +
    sel +
    allText.substring(finish, allText.length);

  txtarea.value = newText;
  console.log(newText);
  // do something with the selected content
}
document.getElementById("heading-1").addEventListener("click", getHeading1);

const saveBtn = document.querySelector("#btn-Save");
const pdfBtn = document.querySelector("#btn-Pdf");

saveBtn.addEventListener("click", () => {
  const a = document.createElement("a");
  //creating a blob file which is a binary file
  const blob = new Blob([document.getElementById("message").value]); //will get some binary content
  const dataUrl = URL.createObjectURL(blob); //create object url from this binary data
  a.href = dataUrl;
  a.download = "document.md";
  a.click();
});

//to erase the text--> new file
function eraseText() {
  document.getElementById("message").value = "";
}
