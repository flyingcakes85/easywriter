function render() {
    let data = "#title \n\n test para";
    fetch("http://app.snehit.dev/render", {
      method: "POST",
      headers: { "Content-Type": "application/text" },
      body: data,
    }).then((res) => {
      console.log("Request complete! response:", res);
    });
  }
  