// Juego de preguntas
función checkAnswer(respuesta) {
    const resultado = document.getElementById("resultado");
    si (respuesta === 'a') {
        result.innerHTML = "<p>¡Correcto! En el Antiguo Egipto, las mezclas de miel y acacia eran utilizadas como método anticonceptivo.</p>";
    } demás {
        result.innerHTML = "<p>Incorrecto. Inténtalo de nuevo.</p>";
    }
}

// Efecto de desplazamiento en la página
documento.addEventListener("desplazarse", () => {
    const scrollPosition = ventana.scrollY;
    const preview = document.querySelector('.timeline-preview');
    si (posición de desplazamiento > 100) {
        vista previa.style.transform = "translateY(0)";
        vista previa.estilo.opacidad = "1";
    } demás {
        vista previa.style.transform = "translateY(50px)";
        vista previa.estilo.opacidad = "0";
    }
});
