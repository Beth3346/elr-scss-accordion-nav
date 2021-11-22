"use-strict";
(() => {
  const labels = Array.from(document.getElementsByClassName("js-label"));

  labels.forEach(label => {
    label.addEventListener("click", () => {
      const listId = label.attributes["data-listid"].nodeValue;
      const list = document.getElementById(listId);

      console.log("list", listId);

      if (list) {
        list.classList.toggle("active");
      }

      if (label) {
        label.classList.toggle("active");
      }
    });
  });
})();
