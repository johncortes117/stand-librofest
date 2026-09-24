// IEEE & DevClub UPEC • Stand Game Engine
import { sound } from './audio.js';
import { triggerConfetti } from './confetti.js';
import { easyLogos, allLanguageNames } from './data/easy-logos.js';
import { mediumSnippets } from './data/medium-code.js';
import { hardConsoleChallenges } from './data/hard-console.js';
import { savePlayerScore, getTopScores, clearLeaderboard } from './leaderboard.js';

// --- State Machine ---
const state = {
  currentLevel: 'easy',       // 'easy' | 'medium' | 'hard'
  selectedHardLanguage: 'ALL', // 'Python' | 'JavaScript' | 'C / C++' | 'Java' | 'ALL'
  gameMode: 'blitz45',         // 'blitz45' | 'blitz30' | 'questions10' | 'zen'
  score: 0,
  streak: 0,
  maxStreak: 0,
  correctCount: 0,
  totalAnswered: 0,
  questionIndex: 0,
  lives: 3,
  timeRemaining: 45,
  timerDuration: 45,
  timerInterval: null,
  isAnsweringBlocked: false,
  currentQuestion: null,
  questionDeck: [],
  autoNextTimer: null,
};

// --- DOM Elements ---
const screens = {
  home: document.getElementById('screen-home'),
  game: document.getElementById('screen-game'),
  gameover: document.getElementById('screen-gameover')
};

// HUD Elements
const hudLevelTag = document.getElementById('hud-level-tag');
const hudModeTag = document.getElementById('hud-mode-tag');
const hudTimerBox = document.getElementById('hud-timer-box');
const hudTimerVal = document.getElementById('hud-timer-val');
const hudTimerUnit = document.getElementById('hud-timer-unit');
const hudLivesBox = document.getElementById('hud-lives-box');
const hudStreakVal = document.getElementById('hud-streak-val');
const hudStreakBox = document.getElementById('hud-streak-box');
const hudScoreVal = document.getElementById('hud-score-val');
const hudProgressFill = document.getElementById('hud-progress-fill');

// Question Elements
const qCounter = document.getElementById('q-counter');
const qPrompt = document.getElementById('q-prompt');
const qCategory = document.getElementById('q-category');
const questionDisplay = document.getElementById('question-display');
const optionsGrid = document.getElementById('options-grid');
const feedbackBanner = document.getElementById('feedback-banner');
const fbIcon = document.getElementById('fb-icon');
const fbStatus = document.getElementById('fb-status');
const fbText = document.getElementById('fb-text');
const advanceContainer = document.getElementById('advance-container');
const btnNextQuestion = document.getElementById('btn-next-question');

// Game Over Elements
const goLevelBadge = document.getElementById('go-level-badge');
const goFinalScore = document.getElementById('go-final-score');
const goCorrectCount = document.getElementById('go-correct-count');
const goTotalCount = document.getElementById('go-total-count');
const goAccuracy = document.getElementById('go-accuracy');
const goMaxStreak = document.getElementById('go-max-streak');
const formSaveScore = document.getElementById('form-save-score');
const inputPlayerName = document.getElementById('input-player-name');
const savedConfirmation = document.getElementById('saved-confirmation');
const saveScoreSection = document.getElementById('save-score-section');

// Modal Elements
const modalLeaderboard = document.getElementById('modal-leaderboard');
const boardTableContainer = document.getElementById('board-table-container');
const modalHardLang = document.getElementById('modal-hard-lang');
const btnCloseHardModal = document.getElementById('btn-close-hard-modal');

// Sound & Header Buttons
const btnSoundToggle = document.getElementById('btn-sound-toggle');
const soundIcon = document.getElementById('sound-icon');
const btnFullscreenToggle = document.getElementById('btn-fullscreen-toggle');
const btnShowRecords = document.getElementById('btn-show-records');

// --- Helper Functions ---
function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function escapeHTML(str) {
  return str.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;');
}

// Simple & clean syntax highlighting engine for stand code windows
function highlightCode(code) {
  let safe = escapeHTML(code);

  // 1. Strings (double or single quotes or backticks)
  safe = safe.replace(/(["'`])(?:(?=(\\?))\2.)*?\1/g, '<span class="tok-str">$&</span>');

  // 2. Comments (//... or #...)
  safe = safe.replace(/(\/\/[^\n]*|#[^\n]*)/g, '<span class="tok-com">$&</span>');

  // 3. Keywords
  const keywords = [
    'fn', 'let', 'mut', 'match', 'def', 'return', 'import', 'from', 'as', 'package',
    'func', 'go', 'chan', 'make', 'struct', 'class', 'public', 'static', 'void',
    'const', 'var', 'async', 'await', 'new', 'try', 'catch', 'if', 'else', 'for',
    'while', 'switch', 'case', 'break', 'when', 'in', 'data', 'val', 'interface',
    'type', 'echo', 'foreach', 'namespace', 'using', 'SELECT', 'FROM', 'WHERE',
    'GROUP', 'BY', 'HAVING', 'ORDER', 'COUNT', 'AVG', 'INNER', 'JOIN', 'local',
    'Algoritmo', 'FinAlgoritmo', 'Proceso', 'FinProceso', 'Definir', 'Como', 'Escribir',
    'Leer', 'Si', 'Entonces', 'SiNo', 'FinSi', 'Para', 'Hasta', 'Con', 'Paso', 'Hacer',
    'FinPara', 'Mientras', 'FinMientras', 'Repetir', 'Que', 'Dimension', 'MOD', 'Trunc',
    'Subcadena', 'Longitud', 'Verdadero', 'Falso', 'NO', 'Y', 'O'
  ];
  const kwRegex = new RegExp(`\\b(${keywords.join('|')})\\b`, 'g');
  safe = safe.replace(kwRegex, '<span class="tok-kw">$1</span>');

  // 4. Numbers
  safe = safe.replace(/\b(\d+(\.\d+)?)\b/g, '<span class="tok-num">$1</span>');

  // 5. Types
  const types = [
    'int', 'float', 'string', 'bool', 'String', 'Boolean', 'Number', 'Double', 'Int',
    'Cadena', 'Entero', 'Real', 'Logico', 'Caracter'
  ];
  const typeRegex = new RegExp(`\\b(${types.join('|')})\\b`, 'g');
  safe = safe.replace(typeRegex, '<span class="tok-type">$1</span>');

  // 6. Assignment arrow <-
  safe = safe.replace(/&lt;-/g, '<span class="tok-op">&lt;-</span>');

  return safe;
}

// --- Navigation & View Switching ---
function showScreen(screenName) {
  Object.values(screens).forEach(s => s.classList.remove('active'));
  if (screens[screenName]) {
    screens[screenName].classList.add('active');
  }
}

function getProgressiveEasyDeck() {
  const tier1 = shuffle(easyLogos.filter(item => item.difficulty === 1));
  const tier2 = shuffle(easyLogos.filter(item => item.difficulty === 2));
  const tier3 = shuffle(easyLogos.filter(item => item.difficulty === 3));
  const tier4 = shuffle(easyLogos.filter(item => item.difficulty === 4));
  return [...tier1, ...tier2, ...tier3, ...tier4];
}

// --- Game Logic ---
function startGame(level) {
  sound.playSelect();
  state.currentLevel = level;
  state.score = 0;
  state.streak = 0;
  state.maxStreak = 0;
  state.correctCount = 0;
  state.totalAnswered = 0;
  state.questionIndex = 0;
  state.lives = 3;
  state.isAnsweringBlocked = false;

  // Determine Deck
  if (level === 'easy') {
    state.questionDeck = getProgressiveEasyDeck();
  } else if (level === 'medium') {
    state.questionDeck = shuffle(mediumSnippets);
  } else {
    if (state.selectedHardLanguage && state.selectedHardLanguage !== 'ALL') {
      state.questionDeck = shuffle(hardConsoleChallenges.filter(q => q.language === state.selectedHardLanguage));
    } else {
      state.questionDeck = shuffle(hardConsoleChallenges);
    }
  }

  // Setup Mode Timer
  setupModeHUD();

  showScreen('game');
  renderNextQuestion();

  // For Level 3: Untimed analysis mode (no countdown clock)
  if (state.currentLevel === 'hard') {
    clearInterval(state.timerInterval);
    hudTimerBox.style.display = 'none';
    hudLivesBox.style.display = 'none';
    hudProgressFill.style.width = '0%';
  } else if (state.gameMode === 'blitz45' || state.gameMode === 'blitz30') {
    startTimer();
  }
}

function setupModeHUD() {
  const levelNames = {
    easy: 'FÁCIL: LOGOS',
    medium: 'MEDIO: CÓDIGO',
    hard: state.selectedHardLanguage && state.selectedHardLanguage !== 'ALL'
      ? `DIFÍCIL: ${state.selectedHardLanguage.toUpperCase()}`
      : 'DIFÍCIL: CONSOLA'
  };

  hudLevelTag.textContent = levelNames[state.currentLevel];

  // Mode HUD adjustments
  hudStreakVal.textContent = 'x0';
  hudScoreVal.textContent = '0';
  hudTimerBox.classList.remove('urgent');

  if (state.currentLevel === 'hard') {
    hudTimerBox.style.display = 'none';
    hudLivesBox.style.display = 'none';
    hudModeTag.textContent = '♾️ Sin Tiempo (Análisis)';
  } else if (state.gameMode === 'blitz45') {
    state.timerDuration = 45;
    state.timeRemaining = 45;
    hudTimerBox.style.display = 'inline-flex';
    hudLivesBox.style.display = 'none';
    hudTimerVal.textContent = '45';
    if (hudTimerUnit) hudTimerUnit.textContent = 's';
    hudModeTag.textContent = '⏱️ 45s';
  } else if (state.gameMode === 'blitz30') {
    state.timerDuration = 30;
    state.timeRemaining = 30;
    hudTimerBox.style.display = 'inline-flex';
    hudLivesBox.style.display = 'none';
    hudTimerVal.textContent = '30';
    if (hudTimerUnit) hudTimerUnit.textContent = 's';
    hudModeTag.textContent = '⚡ 30s';
  } else if (state.gameMode === 'questions10') {
    hudTimerBox.style.display = 'none';
    hudLivesBox.style.display = 'flex';
    updateLivesUI();
    hudModeTag.textContent = '🎯 10 Preguntas';
  } else {
    // Zen
    hudTimerBox.style.display = 'none';
    hudLivesBox.style.display = 'none';
    hudModeTag.textContent = '♾️ Modo Libre';
  }
}

function updateLivesUI() {
  const hearts = hudLivesBox.querySelectorAll('.heart-icon');
  hearts.forEach((h, idx) => {
    if (idx < state.lives) {
      h.classList.remove('lost');
    } else {
      h.classList.add('lost');
    }
  });
}

function startTimer() {
  clearInterval(state.timerInterval);
  state.timerInterval = setInterval(() => {
    state.timeRemaining--;
    hudTimerVal.textContent = state.timeRemaining;

    // Progress bar update
    const percent = Math.max(0, (state.timeRemaining / state.timerDuration) * 100);
    hudProgressFill.style.width = `${percent}%`;

    // Audio ticks on low time
    if (state.timeRemaining <= 5 && state.timeRemaining > 0) {
      hudTimerBox.classList.add('urgent');
      sound.playUrgentTick();
    } else if (state.timeRemaining <= 10) {
      sound.playTick();
    }

    if (state.timeRemaining <= 0) {
      clearInterval(state.timerInterval);
      endGame('¡Tiempo agotado!');
    }
  }, 1000);
}

function renderNextQuestion() {
  clearTimeout(state.autoNextTimer);
  state.isAnsweringBlocked = false;
  feedbackBanner.style.display = 'none';
  advanceContainer.style.display = 'none';

  // Check if we exhausted deck or reached 10 questions in questions10 mode
  if (state.gameMode === 'questions10' && state.questionIndex >= 10) {
    endGame('¡Desafío de 10 preguntas completado!');
    return;
  }

  // If in level 3 (untimed) and all questions in language deck are finished
  if (state.currentLevel === 'hard' && state.questionIndex >= state.questionDeck.length) {
    endGame('¡Reto de consola completado con éxito!');
    return;
  }

  if (state.questionIndex >= state.questionDeck.length) {
    // Reshuffle deck if blitz has remaining time
    if (state.currentLevel === 'easy') {
      state.questionDeck = getProgressiveEasyDeck();
    } else if (state.currentLevel === 'medium') {
      state.questionDeck = shuffle(mediumSnippets);
    } else {
      if (state.selectedHardLanguage && state.selectedHardLanguage !== 'ALL') {
        state.questionDeck = shuffle(hardConsoleChallenges.filter(q => q.language === state.selectedHardLanguage));
      } else {
        state.questionDeck = shuffle(hardConsoleChallenges);
      }
    }
    state.questionIndex = 0;
  }

  const item = state.questionDeck[state.questionIndex];
  state.currentQuestion = item;
  state.questionIndex++;

  // Update question header
  if (state.currentLevel === 'hard') {
    qCounter.textContent = `RETO #${state.questionIndex} DE ${state.questionDeck.length}`;
    const percent = Math.min(100, Math.round(((state.questionIndex) / state.questionDeck.length) * 100));
    hudProgressFill.style.width = `${percent}%`;
  } else {
    qCounter.textContent = `PREGUNTA #${state.questionIndex}`;
  }

  if (state.currentLevel === 'easy') {
    renderEasyQuestion(item);
  } else if (state.currentLevel === 'medium') {
    renderMediumQuestion(item);
  } else {
    renderHardQuestion(item);
  }
}

// 1. Easy Mode: Logo Hunter
function renderEasyQuestion(item) {
  qPrompt.textContent = '¿Qué lenguaje o herramienta representa este logo?';
  qCategory.textContent = item.category || 'Tecnología';

  questionDisplay.innerHTML = `
    <div class="logo-stage-box">
      <img src="${item.logoUrl}" alt="${escapeHTML(item.name)} Logo" class="official-logo-img" />
    </div>
  `;

  // Generate 4 options: correct answer + 3 random distractors
  const distractors = allLanguageNames
    .filter(name => name !== item.name)
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  const options = shuffle([item.name, ...distractors]);
  renderOptions(options, item.name);
}

// 2. Medium Mode: Code Detective
function renderMediumQuestion(item) {
  qPrompt.textContent = '¿En qué lenguaje está escrito este código?';
  qCategory.textContent = 'Identifica la Sintaxis';

  questionDisplay.innerHTML = `
    <div class="code-terminal">
      <div class="terminal-topbar">
        <div class="terminal-dots">
          <span class="dot dot-red"></span>
          <span class="dot dot-yellow"></span>
          <span class="dot dot-green"></span>
        </div>
        <span class="terminal-filename">misterio_codigo.src</span>
        <span class="terminal-lang-badge">IEEE & DevClub</span>
      </div>
      <div class="terminal-body">
        <pre class="code-pre"><code>${highlightCode(item.code)}</code></pre>
      </div>
    </div>
  `;

  const options = shuffle([item.language, ...item.distractors]);
  renderOptions(options, item.language);
}

// 3. Hard Mode: Console Master
function renderHardQuestion(item) {
  qPrompt.textContent = item.question || '¿Qué imprime la consola al ejecutar este código?';
  qCategory.textContent = `${item.language} • ${item.title}`;

  questionDisplay.innerHTML = `
    <div class="code-terminal">
      <div class="terminal-topbar">
        <div class="terminal-dots">
          <span class="dot dot-red"></span>
          <span class="dot dot-yellow"></span>
          <span class="dot dot-green"></span>
        </div>
        <span class="terminal-filename">${item.language.toLowerCase()}_challenge.log</span>
        <span class="terminal-lang-badge">Nivel Difícil</span>
      </div>
      <div class="terminal-body">
        <pre class="code-pre"><code>${highlightCode(item.code)}</code></pre>
      </div>
    </div>
  `;

  const options = shuffle([...item.options]);
  renderOptions(options, item.correct);
}

function renderOptions(options, correctAnswer) {
  optionsGrid.innerHTML = '';
  const keyLabels = ['1', '2', '3', '4'];

  options.forEach((optText, index) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.dataset.answer = optText;
    btn.dataset.key = keyLabels[index];

    btn.innerHTML = `
      <span class="option-key">${keyLabels[index]}</span>
      <span class="option-text">${escapeHTML(optText)}</span>
    `;

    btn.addEventListener('click', () => handleOptionSelected(optText, correctAnswer, btn));
    optionsGrid.appendChild(btn);
  });
}

function handleOptionSelected(selectedAnswer, correctAnswer, selectedBtn) {
  if (state.isAnsweringBlocked) return;
  state.isAnsweringBlocked = true;
  state.totalAnswered++;

  const isCorrect = selectedAnswer === correctAnswer;
  const allButtons = optionsGrid.querySelectorAll('.option-btn');

  // Highlight choices
  allButtons.forEach(btn => {
    if (btn.dataset.answer === correctAnswer) {
      btn.classList.add('btn-correct');
    } else if (btn === selectedBtn && !isCorrect) {
      btn.classList.add('btn-wrong');
    } else {
      btn.classList.add('btn-dimmed');
    }
    btn.disabled = true;
  });

  // Calculate points
  const basePoints = { easy: 100, medium: 200, hard: 350 }[state.currentLevel];

  if (isCorrect) {
    state.correctCount++;
    state.streak++;
    if (state.streak > state.maxStreak) {
      state.maxStreak = state.streak;
    }

    // Multiplier calculation (1x, 1.5x, 2x, 3x)
    const multiplier = state.streak >= 6 ? 3 : state.streak >= 4 ? 2 : state.streak >= 2 ? 1.5 : 1;
    const gainedPoints = Math.round(basePoints * multiplier);
    state.score += gainedPoints;

    // HUD Update
    hudScoreVal.textContent = state.score;
    hudScoreVal.classList.add('bump');
    setTimeout(() => hudScoreVal.classList.remove('bump'), 300);

    hudStreakVal.textContent = `x${state.streak}`;
    if (state.streak >= 3) {
      hudStreakBox.classList.add('active');
    }

    sound.playCorrect();

    if (state.streak === 3 || state.streak === 5 || state.streak === 8) {
      sound.playStreak();
      triggerConfetti(1500);
    }

    // Feedback display
    showFeedback(true, `+${gainedPoints} pts${multiplier > 1 ? ` (Combo x${multiplier})` : ''}`, getFeedbackText());
  } else {
    // Incorrect answer
    state.streak = 0;
    hudStreakVal.textContent = 'x0';
    hudStreakBox.classList.remove('active');
    sound.playWrong();

    if (state.gameMode === 'questions10') {
      state.lives--;
      updateLivesUI();
      if (state.lives <= 0) {
        showFeedback(false, '¡Sin vidas restantes!', getFeedbackText());
        setTimeout(() => endGame('¡Te has quedado sin vidas!'), 1600);
        return;
      }
    }

    showFeedback(false, 'Respuesta Incorrecta', getFeedbackText());
  }

  // Auto advance or show manual button in Zen mode or Level 3 (Hard)
  if (state.gameMode === 'zen' || state.currentLevel === 'hard') {
    advanceContainer.style.display = 'flex';
  } else {
    // Stand blitz: 1.2s delay for instant high adrenaline rhythm
    const delay = isCorrect ? 1200 : 1800;
    state.autoNextTimer = setTimeout(() => {
      renderNextQuestion();
    }, delay);
  }
}

function getFeedbackText() {
  const q = state.currentQuestion;
  if (!q) return '';
  if (state.currentLevel === 'easy') {
    return q.funFact || `El logo oficial de ${q.name}.`;
  } else if (state.currentLevel === 'medium') {
    return q.explanation || q.hint || `Código característico de ${q.language}.`;
  } else {
    return q.explanation || 'Comportamiento estándar del lenguaje.';
  }
}

function showFeedback(isCorrect, statusMsg, textMsg) {
  feedbackBanner.className = `feedback-strip ${isCorrect ? 'correct' : 'wrong'}`;
  fbIcon.textContent = isCorrect ? '✓' : '✕';
  fbStatus.textContent = statusMsg;
  fbText.textContent = textMsg;
  feedbackBanner.style.display = 'flex';
}

// --- End of Game & Podium ---
function endGame(reason) {
  clearInterval(state.timerInterval);
  clearTimeout(state.autoNextTimer);

  sound.playVictory();
  triggerConfetti(3500);

  // Fill in final stats
  const levelLabels = {
    easy: 'NIVEL FÁCIL (LOGOS)',
    medium: 'NIVEL MEDIO (CÓDIGO)',
    hard: 'NIVEL DIFÍCIL (CONSOLA)'
  };
  goLevelBadge.textContent = levelLabels[state.currentLevel];
  goFinalScore.textContent = state.score;
  goCorrectCount.textContent = state.correctCount;
  goTotalCount.textContent = `de ${state.totalAnswered} preguntas`;

  const accuracy = state.totalAnswered > 0 ? Math.round((state.correctCount / state.totalAnswered) * 100) : 0;
  goAccuracy.textContent = `${accuracy}%`;
  goMaxStreak.textContent = `🔥 ${state.maxStreak}`;

  // Reset save form UI
  saveScoreSection.style.display = 'block';
  savedConfirmation.style.display = 'none';
  inputPlayerName.value = '';

  showScreen('gameover');
}

// --- Keyboard Handler for Stand & Presenters ---
window.addEventListener('keydown', (e) => {
  // If typing in input, don't trigger game keys
  if (document.activeElement === inputPlayerName) return;

  const key = e.key.toUpperCase();

  // Fullscreen shortcut
  if (key === 'F') {
    toggleFullscreen();
    return;
  }

  // Mute shortcut
  if (key === 'M') {
    toggleSound();
    return;
  }

  // If in game screen
  if (screens.game.classList.contains('active')) {
    if (key === '1' || key === 'A') triggerOptionByKey('1');
    if (key === '2' || key === 'B') triggerOptionByKey('2');
    if (key === '3' || key === 'C') triggerOptionByKey('3');
    if (key === '4' || key === 'D') triggerOptionByKey('4');

    if (key === ' ' || key === 'ENTER') {
      if (advanceContainer.style.display !== 'none') {
        renderNextQuestion();
      }
    }
  }

  // If in gameover screen
  if (screens.gameover.classList.contains('active')) {
    if (key === ' ' || key === 'ENTER') {
      // If modal not open and not submitting
      if (modalLeaderboard.style.display === 'none' && !inputPlayerName.value) {
        startGame(state.currentLevel);
      }
    }
  }

  // Escape closes modals
  if (key === 'ESCAPE') {
    closeLeaderboard();
    if (modalHardLang) modalHardLang.style.display = 'none';
  }
});

function triggerOptionByKey(keyNum) {
  const btn = optionsGrid.querySelector(`.option-btn[data-key="${keyNum}"]`);
  if (btn && !btn.disabled) {
    btn.click();
  }
}

// --- Fullscreen Toggle ---
function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch(() => {});
    btnFullscreenToggle.querySelector('.btn-label').textContent = 'Ventana';
  } else {
    document.exitFullscreen().catch(() => {});
    btnFullscreenToggle.querySelector('.btn-label').textContent = 'Pantalla TV';
  }
}

// --- Sound Toggle ---
function toggleSound() {
  const isMuted = sound.toggleMute();
  updateSoundButtonUI(isMuted);
}

function updateSoundButtonUI(isMuted) {
  soundIcon.textContent = isMuted ? '🔇' : '🔊';
  btnSoundToggle.classList.toggle('muted', isMuted);
  btnSoundToggle.title = isMuted ? 'Sonido desactivado (M para activar)' : 'Sonido activado (M para silenciar)';
}

// --- Leaderboard Modal & Filtering ---
function openLeaderboard(filterLevel = 'all') {
  sound.playSelect();
  renderLeaderboardTable(filterLevel);
  modalLeaderboard.style.display = 'flex';
}

function closeLeaderboard() {
  modalLeaderboard.style.display = 'none';
}

function renderLeaderboardTable(filterLevel = 'all') {
  // Update tabs
  const tabs = modalLeaderboard.querySelectorAll('.board-tab');
  tabs.forEach(tab => {
    tab.classList.toggle('active', tab.dataset.filter === filterLevel);
  });

  const records = getTopScores(filterLevel, 15);

  if (records.length === 0) {
    boardTableContainer.innerHTML = `
      <div class="empty-leaderboard">
        <p>No hay puntuaciones registradas en esta categoría todavía.</p>
        <p style="margin-top: 0.5rem; font-size: 1rem; color: #94a3b8;">¡Sé el primero en jugar en el stand de IEEE & DevClub!</p>
      </div>
    `;
    return;
  }

  const levelTag = {
    easy: '🟢 Fácil',
    medium: '🟡 Medio',
    hard: '🔴 Difícil'
  };

  const rowsHTML = records.map((entry, idx) => {
    const rankClass = idx === 0 ? 'rank-1' : idx === 1 ? 'rank-2' : idx === 2 ? 'rank-3' : '';
    const medal = idx === 0 ? '🥇' : idx === 1 ? '🥈' : idx === 2 ? '🥉' : `#${idx + 1}`;

    return `
      <div class="leader-row ${rankClass}">
        <div class="leader-left">
          <div class="leader-rank">${medal}</div>
          <div class="leader-info">
            <span class="leader-name">${escapeHTML(entry.name)}</span>
            <span class="leader-meta">
              <span>${levelTag[entry.level] || entry.level}</span>
              <span>• Precisión: ${entry.accuracy}%</span>
              <span>• Racha: 🔥 ${entry.maxStreak}</span>
              <span>• ${entry.date}</span>
            </span>
          </div>
        </div>
        <div class="leader-right">
          <div class="leader-score">${entry.score} pts</div>
        </div>
      </div>
    `;
  }).join('');

  boardTableContainer.innerHTML = `<div class="leader-list">${rowsHTML}</div>`;
}

// --- Event Listeners Setup ---
function setupEventListeners() {
  // Header Actions
  btnSoundToggle.addEventListener('click', toggleSound);
  btnFullscreenToggle.addEventListener('click', toggleFullscreen);
  btnShowRecords.addEventListener('click', () => openLeaderboard('all'));

  // Home Level Buttons
  document.getElementById('card-start-easy').addEventListener('click', () => startGame('easy'));
  document.getElementById('card-start-medium').addEventListener('click', () => startGame('medium'));
  document.getElementById('card-start-hard').addEventListener('click', () => {
    sound.playSelect();
    modalHardLang.style.display = 'flex';
  });

  // Hard Mode Language Picker Choices
  if (modalHardLang) {
    const langBtns = modalHardLang.querySelectorAll('.btn-lang-choice');
    langBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        sound.playSelect();
        state.selectedHardLanguage = btn.dataset.lang;
        modalHardLang.style.display = 'none';
        startGame('hard');
      });
    });

    if (btnCloseHardModal) {
      btnCloseHardModal.addEventListener('click', () => {
        modalHardLang.style.display = 'none';
      });
    }

    modalHardLang.addEventListener('click', (e) => {
      if (e.target === modalHardLang) {
        modalHardLang.style.display = 'none';
      }
    });
  }

  // Home Mode Buttons
  const modeButtons = document.querySelectorAll('#mode-selector .mode-btn');
  modeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      sound.playSelect();
      modeButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.gameMode = btn.dataset.mode;
    });
  });

  // Game Arena Controls
  document.getElementById('btn-abort-game').addEventListener('click', () => {
    clearInterval(state.timerInterval);
    clearTimeout(state.autoNextTimer);
    sound.playSelect();
    showScreen('home');
  });

  btnNextQuestion.addEventListener('click', () => {
    sound.playSelect();
    renderNextQuestion();
  });

  // Game Over Actions
  document.getElementById('btn-play-again').addEventListener('click', () => {
    startGame(state.currentLevel);
  });

  document.getElementById('btn-go-home').addEventListener('click', () => {
    sound.playSelect();
    showScreen('home');
  });

  document.getElementById('btn-go-leaderboard').addEventListener('click', () => {
    openLeaderboard(state.currentLevel);
  });

  // Form Save Score
  formSaveScore.addEventListener('submit', (e) => {
    e.preventDefault();
    const playerName = inputPlayerName.value;
    if (!playerName.trim()) return;

    sound.playSelect();
    savePlayerScore({
      name: playerName,
      level: state.currentLevel,
      score: state.score,
      correctCount: state.correctCount,
      totalQuestions: state.totalAnswered,
      maxStreak: state.maxStreak
    });

    saveScoreSection.style.display = 'none';
    savedConfirmation.style.display = 'inline-flex';
    triggerConfetti(2000);
  });

  // Modal Controls
  document.getElementById('btn-close-modal').addEventListener('click', closeLeaderboard);
  document.getElementById('btn-close-board-bottom').addEventListener('click', closeLeaderboard);
  modalLeaderboard.addEventListener('click', (e) => {
    if (e.target === modalLeaderboard) closeLeaderboard();
  });

  // Modal Filter Tabs
  const boardTabs = document.querySelectorAll('#board-tabs .board-tab');
  boardTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      sound.playSelect();
      renderLeaderboardTable(tab.dataset.filter);
    });
  });

  // Clear Leaderboard Button
  document.getElementById('btn-clear-board').addEventListener('click', () => {
    if (confirm('¿Estás seguro de que deseas borrar los récords registrados en el stand?')) {
      clearLeaderboard('all');
      renderLeaderboardTable('all');
    }
  });

  // Initial Sound UI
  updateSoundButtonUI(sound.isMuted);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  setupEventListeners();
});
