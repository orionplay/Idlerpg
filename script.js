let currentJob = '';
let xp = 0;
let xpNext = 100;
let money = { copper: 0, silver: 0, gold: 0, platinum: 0, starGold: 0 };
let days = 0;
const jobLevels = {};
const jobXP = {};
const jobs = {
  farmer: { name: 'Fazendeiro', xpRate: 5, moneyRate: 5 },
  miner: { name: 'Mineiro', xpRate: 6, moneyRate: 6 },
  woodcutter: { name: 'Lenhador', xpRate: 4, moneyRate: 4 },
  fisherman: { name: 'Pescador', xpRate: 7, moneyRate: 7 },
  blacksmith: { name: 'Ferreiro', xpRate: 8, moneyRate: 8 },
  hunter: { name: 'Caçador', xpRate: 5, moneyRate: 5 },
  builder: { name: 'Construtor', xpRate: 6, moneyRate: 6 },
  tailor: { name: 'Alfaiate', xpRate: 4, moneyRate: 4 },
  merchant: { name: 'Comerciante', xpRate: 7, moneyRate: 7 },
  guard: { name: 'Guarda', xpRate: 8, moneyRate: 8 },
};

const leisureCosts = {
  rest: 2,
  read: 3,
  exercise: 4,
  playGames: 5,
  watchMovies: 6,
  cook: 3,
  socialize: 5,
  travel: 10,
  learn: 4,
  hobby: 3,
};

for (let job in jobs) {
  jobLevels[job] = 1;
  jobXP[job] = 0;
}

document.getElementById('job-list').addEventListener('click', function(e) {
  if (e.target.tagName === 'LABEL') {
    const selectedJob = e.target.parentElement.getAttribute('data-job');
    selectJob(selectedJob);
  }
});

function selectJob(job) {
  currentJob = job;

  const jobItems = document.querySelectorAll('#job-list li');
  jobItems.forEach(item => item.classList.remove('selected'));
  document.querySelector(`[data-job="${job}"]`).classList.add('selected');
  
  startWorking();
}

function startWorking() {
  setInterval(function() {
    if (currentJob) {
      jobXP[currentJob] += jobs[currentJob].xpRate;
      money.copper += jobs[currentJob].moneyRate * jobLevels[currentJob];
      if (jobXP[currentJob] >= xpNext) {
        levelUp();
      }
      updateUI();
    }
  }, 1000); // Ganha XP e dinheiro a cada 1 segundo
}

function levelUp() {
  jobXP[currentJob] = 0;
  jobLevels[currentJob]++;
  xpNext += 50; // Aumenta a quantidade necessária de XP para o próximo nível
}

function updateUI() {
  for (let job in jobs) {
    const xpBar = document.getElementById(`xp-bar-${job}`);
    const level = document.getElementById(`level-${job}`);
    const fillPercent = (jobXP[job] / xpNext) * 100;
    if (xpBar) {
      xpBar.innerHTML = `<div class="xp-bar-fill" style="width: ${fillPercent}%;"></div>`;
    }
    if (level) {
      level.innerText = jobLevels[job];
    }
  }
  updateMoneyDisplay();
  document.getElementById('xp').innerText = xp;
  document.getElementById('xp-next').innerText = xpNext;
  document.getElementById('timer').innerText = `${days} dias`;
}

function updateMoneyDisplay() {
  let copper = money.copper;
  money.silver = Math.floor(copper / 10);
  money.copper = copper % 10;
  
  let silver = money.silver;
  money.gold = Math.floor(silver / 10);
  money.silver = silver % 10;
  
  let gold = money.gold;
  money.platinum = Math.floor(gold / 10);
  money.gold = gold % 10;
  
  let platinum = money.platinum;
  money.starGold = Math.floor(platinum / 10);
  money.platinum = platinum % 10;
  
  // Atualizar a exibição de moedas
}

setInterval(function() {
  days++;
  updateUI();
}, 1000); // Cada dia é um segundo na vida real

function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Abrir a aba de Trabalhos por padrão
document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.tablinks').click();
});
