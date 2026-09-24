// Audio Synthesizer using Web Audio API (100% offline & zero dependencies)
class SoundFX {
  constructor() {
    this.ctx = null;
    this.isMuted = localStorage.getItem('stand_muted') === 'true';
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    localStorage.setItem('stand_muted', this.isMuted);
    return this.isMuted;
  }

  playTone(freq, type = 'sine', duration = 0.15, startTime = 0, gainLevel = 0.2) {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime + startTime);

      gain.gain.setValueAtTime(gainLevel, this.ctx.currentTime + startTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + startTime + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(this.ctx.currentTime + startTime);
      osc.stop(this.ctx.currentTime + startTime + duration);
    } catch (e) {
      console.warn('Audio play error', e);
    }
  }

  playSelect() {
    this.playTone(600, 'sine', 0.08, 0, 0.15);
  }

  playCorrect() {
    if (this.isMuted) return;
    this.init();
    // Happy bright arpeggio: C5, E5, G5, C6
    const notes = [523.25, 659.25, 783.99, 1046.50];
    notes.forEach((freq, idx) => {
      this.playTone(freq, 'triangle', 0.12, idx * 0.07, 0.25);
    });
  }

  playWrong() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      
      const now = this.ctx.currentTime;
      osc.frequency.setValueAtTime(180, now);
      osc.frequency.linearRampToValueAtTime(90, now + 0.3);

      gain.gain.setValueAtTime(0.3, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.32);
    } catch (e) {}
  }

  playTick() {
    this.playTone(880, 'sine', 0.05, 0, 0.15);
  }

  playUrgentTick() {
    this.playTone(1200, 'square', 0.08, 0, 0.2);
  }

  playStreak() {
    if (this.isMuted) return;
    this.init();
    // Power-up chord
    const freqs = [440, 554.37, 659.25, 880, 1108.73];
    freqs.forEach((f, i) => {
      this.playTone(f, 'sine', 0.2, i * 0.05, 0.22);
    });
  }

  playVictory() {
    if (this.isMuted) return;
    this.init();
    // Victory fanfare (G4, C5, E5, G5, E5, G5)
    const melody = [
      { f: 392, d: 0.12, t: 0.0 },
      { f: 523.25, d: 0.12, t: 0.14 },
      { f: 659.25, d: 0.12, t: 0.28 },
      { f: 783.99, d: 0.35, t: 0.42 },
      { f: 659.25, d: 0.15, t: 0.8 },
      { f: 783.99, d: 0.6, t: 0.98 }
    ];
    melody.forEach(note => {
      this.playTone(note.f, 'triangle', note.d, note.t, 0.3);
    });
  }
}

export const sound = new SoundFX();
