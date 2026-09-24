// Stand Leaderboard & Scores Manager (LocalStorage based)
const STORAGE_KEY = 'upec_librofest_stand_leaderboard_v1';

export function getLeaderboard() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.error('Error loading leaderboard', e);
    return [];
  }
}

export function savePlayerScore({ name, level, score, correctCount, totalQuestions, maxStreak }) {
  const list = getLeaderboard();
  const entry = {
    id: Date.now().toString(36) + Math.random().toString(36).substring(2, 6),
    name: name.trim() || 'Hacker Anónimo',
    level, // 'easy' | 'medium' | 'hard'
    score: Math.max(0, score),
    correctCount,
    totalQuestions,
    accuracy: totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0,
    maxStreak: maxStreak || 0,
    date: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  };

  list.push(entry);
  list.sort((a, b) => b.score - a.score || b.accuracy - a.accuracy);
  
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  } catch (e) {
    console.error('Error saving leaderboard', e);
  }

  return entry;
}

export function getTopScores(level = 'all', limit = 10) {
  const list = getLeaderboard();
  const filtered = level === 'all' ? list : list.filter(item => item.level === level);
  return filtered.slice(0, limit);
}

export function clearLeaderboard(level = 'all') {
  if (level === 'all') {
    localStorage.removeItem(STORAGE_KEY);
  } else {
    const list = getLeaderboard().filter(item => item.level !== level);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  }
}
