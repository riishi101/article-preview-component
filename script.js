document.addEventListener("DOMContentLoaded", () => {
  const showButton = document.getElementById("button");
  const hiddenContent = document.getElementById("hidden");

  showButton.addEventListener("click", () => {
    if (hiddenContent.style.visibility === "hidden") {
      hiddenContent.style.visibility = "visible";
    } else {
      hiddenContent.style.visibility = "hidden";
    }
  });
});
