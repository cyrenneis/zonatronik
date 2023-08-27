document.addEventListener('DOMContentLoaded', function() {
    const drawButton = document.getElementById('draw-button');
    const countdown = document.getElementById('countdown');
    const countdownTimer = document.getElementById('countdown-timer');
    const winnersSection = document.getElementById('winners');
    const winnersList = document.getElementById('winners-list');
    const participantsInput = document.getElementById('participant-list');
  
    drawButton.addEventListener('click', startDraw);
  
    function startDraw() {
      const numWinnersInput = document.getElementById('num-winners');
      const participants = participantsInput.value.split(',').map(participant => participant.trim());
      const numWinners = parseInt(numWinnersInput.value);
  
      if (participants.length === 0 || isNaN(numWinners) || numWinners <= 0) {
        alert('Ingrese participantes válidos y un número de ganadores válido.');
        return;
      }
  
      participantsInput.style.display = 'none'; // Oculta la lista de participantes
      drawButton.disabled = true;
      countdown.style.display = 'block';
  
      let secondsLeft = 10;
      countdownTimer.textContent = secondsLeft;
  
      const countdownInterval = setInterval(() => {
        secondsLeft--;
        countdownTimer.textContent = secondsLeft;
  
        if (secondsLeft === 0) {
          clearInterval(countdownInterval);
          showWinners(participants, numWinners);
        }
      }, 1000);
    }
  
    function showWinners(participants, numWinners) {
      countdown.style.display = 'none';
      winnersSection.style.display = 'block';
  
      for (let i = 0; i < numWinners; i++) {
        const randomIndex = Math.floor(Math.random() * participants.length);
        const winnerName = participants.splice(randomIndex, 1)[0];
        const winnerItem = document.createElement('li');
        winnerItem.textContent = winnerName;
        winnersList.appendChild(winnerItem);
      }
    }
  });
  
  