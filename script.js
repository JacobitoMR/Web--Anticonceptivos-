// Juego de preguntas
function checkAnswer(answer) {
    const result = document.getElementById("result");
    if (answer === 'a') {
        result.innerHTML = "<p>¡Correcto! En el Antiguo Egipto, las mezclas de miel y acacia eran utilizadas como método anticonceptivo.</p>";
    } else {
        result.innerHTML = "<p>Incorrecto. Inténtalo de nuevo.</p>";
    }
}

// Efecto de desplazamiento en la página
document.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY;
    const preview = document.querySelector('.timeline-preview');
    if (scrollPosition > 100) {
        preview.style.transform = "translateY(0)";
        preview.style.opacity = "1";
    } else {
        preview.style.transform = "translateY(50px)";
        preview.style.opacity = "0";
    }
});
