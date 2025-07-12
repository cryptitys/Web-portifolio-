// Efeito de máquina de escrever
function typeWriter(element, text, speed) {
    let i = 0;
    function typing() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        }
    }
    typing();
}

// Uso:
const subtitle = document.querySelector('.subtitle');
typeWriter(subtitle, "Desenvolvedor | Criativo ", 100);
