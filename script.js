let currentJob = '';
let xp = 0;
let xpNext = 100;

const jobs = {
  farmer: { name: 'Fazendeiro', xpRate: 5 },
  miner: { name: 'Mineiro', xpRate: 6 },
  woodcutter: { name: 'Lenhador', xpRate: 4 },
  fisherman: { name: 'Pescador', xpRate: 7 },
  blacksmith: { name: 'Ferreiro', xpRate: 8 },
  hunter: { name: 'Caçador', xpRate: 5 },
  builder: { name: 'Construtor', xpRate: 6 },
  tailor: { name: 'Alfaiate', xpRate: 4 },
  merchant: { name: 'Comerciante', xpRate: 7 },
  guard: { name: 'Guarda', xpRate: 8 },
};

document.getElementById('start-button').addEventListener('click', function() {
  const selectedJob = document.getElementById('job-select').value;
  currentJob = selectedJob;
  document.getElementById('current-job').innerText = jobs[currentJob].name;
  startWorking();
});

function startWorking() {
  setInterval(function() {
    if (currentJob) {
      xp += jobs[currentJob].xpRate;
      if (xp >= xpNext) {
        levelUp();
      }
      updateUI();
    }
  }, 1000); // Ganha XP a cada 1 segundo
}

function levelUp() {
  xp = 0;
  xpNext += 50; // Aumenta a quantidade necessária de XP para o próximo nível
}

function updateUI() {
  document.getElementById('xp').innerText = xp;
  document.getElementById('xp-next').innerText = xpNext;
}

// Atualiza a interface do jogo ao iniciar
updateUI();
