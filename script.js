let level = 1;
let exp = 0;
let expNext = 100;

document.getElementById('work-button').addEventListener('click', function() {
  exp += 10; // Ganhar 10 exp por clique
  if (exp >= expNext) {
    levelUp();
  }
  updateUI();
});

function levelUp() {
  exp = 0;
  level++;
  expNext += 50; // Aumenta a quantidade necessária de exp para o próximo nível
}

function updateUI() {
  document.getElementById('level').innerText = level;
  document.getElementById('exp').innerText = exp;
  document.getElementById('exp-next').innerText = expNext;
}

// Atualiza a interface do jogo ao iniciar
updateUI();
