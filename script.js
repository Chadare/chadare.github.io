function scrollToSection() {
    document.getElementById("about").scrollIntoView({
        behavior: "smooth"
    });
}

function changeColor() {
    const colors = [
        "#0f172a",
        "#1e1b4b",
        "#022c22",
        "#3f1d1d",
        "#020617"
    ];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.background = randomColor;
}
