
 index.html content
index_html = """
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Anticonceptivos y Su Trayecto en la Historia</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Anticonceptivos y Su Trayecto en la Historia</h1>
        <p>Explora la evolución de los métodos anticonceptivos a lo largo del tiempo.</p>
        <nav>
            <a href="timeline.html">Línea de Tiempo</a>
            <a href="methods.html">Métodos y Evolución</a>
            <a href="game.html">Juego Interactivo</a>
        </nav>
    </header>

    <main>
        <section class="intro">
            <h2>Bienvenido</h2>
            <p>Desde la antigüedad hasta la modernidad, el viaje de los métodos anticonceptivos ha sido extenso y fascinante.</p>
            <a href="timeline.html" class="btn">Explora la Historia</a>
        </section>
        
        <section class="preview">
            <h2>Un Vistazo Rápido a la Historia</h2>
            <div class="timeline-preview">
                <div class="period">
                    <h3>Antigüedad</h3>
                    <p>Métodos naturales en Egipto y Grecia.</p>
                </div>
                <div class="period">
                    <h3>Edad Media</h3>
                    <p>Métodos en secreto debido a restricciones religiosas.</p>
                </div>
                <div class="period">
                    <h3>Revolución Industrial</h3>
                    <p>Primeros preservativos de caucho.</p>
                </div>
                <div class="period">
                    <h3>Siglo XX</h3>
                    <p>Avances en anticoncepción moderna.</p>
                </div>
            </div>
        </section>
    </main>

    <footer>
        <p>&copy; 2024 Anticonceptivos y Su Trayecto en la Historia</p>
    </footer>

    <script src="script.js"></script>
</body>
</html>
"""

# styles.css content
styles_css = """
/* Estilos generales */
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f3f2;
    color: #333;
}

header {
    background: #5d4037;
    color: white;
    padding: 20px;
    text-align: center;
}

nav a {
    color: white;
    margin: 0 10px;
    text-decoration: none;
}

.intro, .preview {
    padding: 40px;
    text-align: center;
}

.btn {
    display: inline-block;
    padding: 10px 20px;
    background: #6d4c41;
    color: white;
    text-decoration: none;
    border-radius: 5px;
}

.timeline-preview {
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
}

.period {
    background: #ffffff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
}
"""

# game.html content
game_html = """
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Juego de Historia Anticonceptiva</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Juego de Historia Anticonceptiva</h1>
    </header>

    <main class="game">
        <h2>¿Cuánto sabes sobre la historia de los anticonceptivos?</h2>
        <div id="quiz-container">
            <div class="question">
                <p>¿Cuál de estos métodos fue utilizado en el Antiguo Egipto?</p>
                <button onclick="checkAnswer('a')">a) Mezclas de miel y acacia</button>
                <button onclick="checkAnswer('b')">b) Pastillas de látex</button>
                <button onclick="checkAnswer('c')">c) Condones de látex</button>
            </div>
            <div id="result"></div>
        </div>
    </main>

    <footer>
        <p>&copy; 2024 Anticonceptivos y Su Trayecto en la Historia</p>
    </footer>

    <script src="script.js"></script>
</body>
</html>
"""

# script.js content
script_js = """
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
"""

# Saving all files to a zip archive to facilitate download
from zipfile import ZipFile

# Create the ZIP file
zip_filename = '/mnt/data/AnticonceptivosHistoriaWebsite.zip'
with ZipFile(zip_filename, 'w') as zipf:
    zipf.writestr("index.html", index_html)
    zipf.writestr("styles.css", styles_css)
    zipf.writestr("game.html", game_html)
    zipf.writestr("script.js", script_js)

zip_filename
