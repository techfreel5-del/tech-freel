(function () {
    try {
        var theme = localStorage.getItem("theme");
        if (theme === "dark" || theme === "light") {
            document.documentElement.setAttribute("data-bs-theme", theme);
        } else {
            document.documentElement.setAttribute("data-bs-theme", "light");
        }
    } catch (e) {
        document.documentElement.setAttribute("data-bs-theme", "light");
    }
})();
