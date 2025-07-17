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

const subtitle = document.querySelector('.subtitle');
typeWriter(subtitle, "Desenvolvedor | Criativo", 100);

// Filtro de categorias
const buttons = document.querySelectorAll('.category-btn');
const cards = document.querySelectorAll('.project-card');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const category = button.dataset.category;

    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    cards.forEach(card => {
      const matches = category === "todos" || card.dataset.category === category;
      card.style.display = matches ? "block" : "none";
    });
  });
});
