function toggle() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }

  document.getElementById("theme-toggle").addEventListener("click", () => {
    if (document.body.className.includes("dark")) {
        document.body.classList.remove('dark');
        localStorage.setItem("pref-theme", 'light');
    } else {
        document.body.classList.add('dark');
        localStorage.setItem("pref-theme", 'dark');
    }
})


if (localStorage.getItem("pref-theme") === "dark") {
    document.body.classList.add('dark');
}