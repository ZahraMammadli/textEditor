(() => {
  var t = document.getElementById("buttonInstall");
  window.addEventListener("beforeinstallprompt", function (e) {
    e.preventDefault(),
      (t.style.visibility = "visible"),
      t.addEventListener("click", function () {
        e.prompt(), console.log("Asking to install the app");
      });
  }),
    window.addEventListener("appinstalled", function (e) {
      (t.style.visibility = "hidden"), console.log("Installed the app already");
    });
})();
