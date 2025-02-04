let currentJob = '';
let xp = 0;
let xpNext = 100;
const jobLevels = {};
const jobXP = {};
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

for (let job in jobs) {
  jobLevels[job] = 1;
  jobXP[job] = 0;
}

document.getElementById('job-list').addEventListener('change', function(e) {
  if (e.target.tagName === 'INPUT') {
    const selectedJob = e.target.parentElement.getAttribute('data-job');
    selectJob(selectedJob);
  }
});

function selectJob(job) {
  currentJob = job;
  document.getElementById('current-job').innerText = jobs[currentJob].name;
  
  const jobItems = document.querySelectorAll('#job-list li');
  jobItems.forEach(item => item.classList.remove('selected'));
  document.querySelector(`[data-job="${job}"]`).classList.add('selected');
  
  startWorking();
}

function startWorking() {
  setInterval(function() {
    if (currentJob) {
      jobXP[currentJob] += jobs[currentJob].xpRate;
      if (jobXP[currentJob] >= xpNext) {
        levelUp();
[_{{{CITATION{{{_1{](https://github.com/ermogenes/aulas-programacao-web/tree/291ef22fb4301268f9fc58b622726be720205738/content%2Fhello-world-gh-pages.md)[_{{{CITATION{{{_2{](https://github.com/ricardo-cas/pandas/tree/eefd8f3ed9250c15e029b7ae59a24ef9f7ffc4ab/GUIA_MARKDOWN.MD)
