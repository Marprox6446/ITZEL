let clicked = false; // Variable para controlar si ya se ha hecho clic

document.getElementById('heart-gif').addEventListener('click', function() {
    if (!clicked) {  // Verificar que solo se ejecute una vez
        clicked = true;

        // Reproducir la música de fondo
        const audio = document.getElementById('background-music');
        audio.play();

        // Mostrar el mensaje de amor con el efecto de escritura
        const messageElement = document.getElementById('message');
        const message = "Eres mi tentación más dulce, el deseo que nunca desaparece. Cada vez que te veo, mi corazón late más rápido y solo quiero tenerte más cerca. Tus labios, tu risa, todo en ti me enciende, y no hay un solo momento en el que no te desee. Eres mi única razón, mi pasión, y no puedo dejar de pensar en ti.";

        let i = 0;
        function typeWriter() {
            if (i < message.length) {
                messageElement.innerHTML += message.charAt(i);
                i++;
                setTimeout(typeWriter, 100); // Intervalo entre letras
            } else {
                messageElement.classList.add('show'); // Mostrar mensaje completo
            }
        }

        messageElement.innerHTML = ""; // Limpiar mensaje previo
        typeWriter(); // Iniciar efecto de escritura
    }
});
