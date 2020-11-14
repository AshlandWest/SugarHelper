console.log("Sugar Helper Plugin is running on this page");
//Add needed font for clipboard button to the page
function addFonts() {
  let node = document.createElement("link");
  node.setAttribute("rel", "stylesheet");
  node.setAttribute(
    "href",
    "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  );
  document.head.appendChild(node);
}
addFonts();
var emailElements = [];
var readyStateCheckInterval = setInterval(function () {
  if (document.readyState === "complete") {
    clearInterval(readyStateCheckInterval);

    // ----------------------------------------------------------
    // This part of the script triggers when page is done loading

    emailElements.push(
      ...document.querySelectorAll("a[href='javascript:void(0);']")
    );
    function makeButton(emailAddress) {
      let button = document.createElement("button");
      let copyIcon = document.createElement("i");
      copyIcon.classList.add("fa", "fa-copy");
      button.appendChild(copyIcon);
      button.value = emailAddress;
      button.addEventListener("click", (event) => {
        navigator.clipboard.writeText(button.value);
      });
      return button;
    }
    emailElements.forEach((element) => {
      element.after("\xa0", makeButton(`${element.innerText}`));
    });
    // ----------------------------------------------------------
  }
});
