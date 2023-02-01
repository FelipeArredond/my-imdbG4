const icon = document.querySelector(".iconoTittle");

icon.addEventListener("mouseenter", function() {
console.log("El mouse está sobre el icono");
icon.style.fill = "yellow";
});

icon.addEventListener("mouseleave", function() {
console.log("El mouse se ha ido del icono");
icon.style.fill = "currentColor";
});
