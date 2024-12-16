// Obtém os parâmetros da URL
const urlParams = new URLSearchParams(window.location.search);

// Captura os valores dos parâmetros ou define valores padrão
const targetDate = new Date(urlParams.get("time") || "2024-12-31T23:59:59").getTime();
const boxColor = `#${urlParams.get("boxColor") || "ffffff"}`;
const fontColor = `#${urlParams.get("fontColor") || "0e024e"}`;

// Aplica as cores dinâmicas ao elemento do countdown
const countdownElement = document.getElementById("countdown");
countdownElement.style.backgroundColor = boxColor;
countdownElement.style.color = fontColor;

// Função para atualizar o countdown a cada segundo
function updateCountdown() {
  const now = new Date().getTime();
  const timeLeft = targetDate - now;

  if (timeLeft > 0) {
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % 1000) / 1000);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
  } else {
    // Quando o tempo acabar, exibe "Promoção Encerrada" com o mesmo layout
    countdownElement.innerHTML = '<span>Promoção Encerrada!</span>';
  }
}

// Atualiza o countdown a cada segundo
setInterval(updateCountdown, 1000);
updateCountdown();
