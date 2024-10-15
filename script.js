// Asked ChatGPT how to Load the navbar dynamically
document.addEventListener("DOMContentLoaded", function () {
  fetch("navbar.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("navbar").innerHTML = data;

      const themeToggle = document.getElementById("theme-toggle");
      const savedTheme = localStorage.getItem("theme") || "light-theme";
      const body = document.body;

      body.classList.add(savedTheme);

      if (themeToggle) {
        themeToggle.checked = savedTheme === "dark-theme";

        themeToggle.addEventListener("change", () => {
          if (themeToggle.checked) {
            body.classList.add("dark-theme");
            body.classList.remove("light-theme");
            localStorage.setItem("theme", "dark-theme");
          } else {
            body.classList.add("light-theme");
            body.classList.remove("dark-theme");
            localStorage.setItem("theme", "light-theme");
          }
        });
      }
    })
    .catch((error) => console.error("Error loading navbar:", error));

  fetch("footer.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("footer").innerHTML = data;
    })
    .catch((error) => console.error("Error loading footer:", error));
});
