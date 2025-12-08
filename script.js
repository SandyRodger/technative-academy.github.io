document.querySelectorAll(".bootcamp-card").forEach((card) => {
    const url = card.getAttribute("data-url");
    console.log("Navigating to: " + url);
    card.addEventListener("click", () => {
        window.location.href = "./pages/" + url + ".html";
    });
});
