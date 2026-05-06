import { useState, useRef, useEffect, useCallback } from 'react';
import {
  WELCOME_MESSAGE,
  getAbout,
  PROJECTS,
  SKILLS,
  CONTACT,
  HELP,
  PROJECT_LINKS,
} from '../data/content';
import AsciiLogo from './AsciiLogo';
import './Terminal.css';

const COLOR_MAP = {
  green: 'var(--green)',
  red: 'var(--red)',
  yellow: 'var(--yellow)',
  blue: 'var(--blue)',
  purple: 'var(--purple)',
  cyan: 'var(--cyan)',
  orange: 'var(--orange)',
  text: 'var(--text)',
  dim: 'var(--text-dim)',
};

const COMMAND_SUGGESTIONS = ['about', 'projects', 'skills', 'contact', 'help'];

const SPINNER_FRAMES = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'];

function AgeSegment({ seg, textWidth }) {
  const [phase, setPhase] = useState('loading'); // 'loading' | 'done'
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    if (phase !== 'loading') return;
    const spinner = setInterval(() => {
      setFrame((f) => (f + 1) % SPINNER_FRAMES.length);
    }, 80);
    const done = setTimeout(() => {
      clearInterval(spinner);
      setPhase('done');
    }, 1200);
    return () => { clearInterval(spinner); clearTimeout(done); };
  }, [phase]);

  const color = COLOR_MAP[seg.color] || COLOR_MAP.text;

  if (phase === 'loading') {
    const loadingText = seg.ageLabel + SPINNER_FRAMES[frame];
    return (
      <span style={{ color: COLOR_MAP.cyan }}>
        {loadingText.padEnd(textWidth)}
      </span>
    );
  }

  return <span style={{ color }}>{seg.text}</span>;
}

function TerminalLine({ line, animated, onDone, onCommand }) {
  const [displayText, setDisplayText] = useState(animated ? '' : line.text);
  const [done, setDone] = useState(!animated);

  useEffect(() => {
    if (!animated) return;
    if (!line.text) {
      setDone(true);
      onDone?.();
      return;
    }
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayText(line.text.slice(0, i));
      if (i >= line.text.length) {
        clearInterval(interval);
        setDone(true);
        onDone?.();
      }
    }, 8);
    return () => clearInterval(interval);
  }, [animated, line.text, onDone]);

  const color = COLOR_MAP[line.color] || COLOR_MAP.text;

  if (line.link) {
    return (
      <div className="terminal-line">
        <a
          href={line.link}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color, textDecoration: 'none' }}
          className="terminal-link"
        >
          {displayText}
        </a>
        {animated && !done && <span className="typing-cursor">▊</span>}
      </div>
    );
  }

  if (line.command) {
    return (
      <div
        className="terminal-line terminal-command-line"
        style={{ whiteSpace: 'pre', cursor: 'pointer' }}
        onClick={() => onCommand?.(line.command)}
      >
        <span style={{ color }}>{displayText}</span>
        {animated && !done && <span className="typing-cursor">▊</span>}
      </div>
    );
  }

  // Multi-segment line (multiple colors on one line)
  if (line.segments) {
    return (
      <div className="terminal-line" style={{ whiteSpace: 'pre' }}>
        {line.segments.map((seg, idx) => {
          if (seg.ageValue !== undefined) {
            return <AgeSegment key={idx} seg={seg} textWidth={seg.text.length} />;
          }
          return (
            <span key={idx} style={{ color: COLOR_MAP[seg.color] || COLOR_MAP.text }}>
              {seg.text}
            </span>
          );
        })}
      </div>
    );
  }

  return (
    <div className="terminal-line" style={{ whiteSpace: 'pre' }}>
      <span style={{ color }}>{displayText}</span>
      {animated && !done && <span className="typing-cursor">▊</span>}
    </div>
  );
}

export default function Terminal() {
  const [phase, setPhase] = useState('logo'); // 'logo' | 'welcome' | 'ready'
  const [history, setHistory] = useState([]);
  const [input, setInput] = useState('');
  const [welcomeIndex, setWelcomeIndex] = useState(0);
  const [lang, setLang] = useState('de');
  const [cmdHistory, setCmdHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef(null);
  const scrollRef = useRef(null);
  const terminalRef = useRef(null);

  // Build commands map based on current language
  const getCommands = useCallback((l) => ({
    about: getAbout(l),
    projects: PROJECTS[l],
    skills: SKILLS[l],
    contact: CONTACT[l],
    help: HELP[l],
  }), []);

  // Auto-scroll to bottom
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history, welcomeIndex, input, phase]);

  // Welcome text animation (after logo finishes)
  useEffect(() => {
    if (phase !== 'welcome') return;
    const welcomeMsg = WELCOME_MESSAGE[lang];
    if (welcomeIndex >= welcomeMsg.length) {
      setPhase('ready');
      return;
    }
    const line = welcomeMsg[welcomeIndex];
    const delay = line.text === '' ? 100 : line.color === 'green' ? 50 : 300;
    const timer = setTimeout(() => {
      setHistory((prev) => [...prev, line]);
      setWelcomeIndex((i) => i + 1);
    }, delay);
    return () => clearTimeout(timer);
  }, [welcomeIndex, phase, lang]);

  const handleLogoDone = useCallback(() => {
    setPhase('welcome');
  }, []);

  // Focus input on click
  const handleTerminalClick = useCallback(() => {
    if (phase === 'ready') inputRef.current?.focus();
  }, [phase]);

  // Switch language
  const switchLang = useCallback((newLang) => {
    setLang(newLang);
    const label = newLang === 'de' ? 'Deutsch' : 'English';
    setHistory((prev) => [
      ...prev,
      { text: `  Sprache / Language → ${label}`, color: 'cyan' },
      { text: '' },
    ]);
  }, []);

  const toggleLang = useCallback(() => {
    const newLang = lang === 'de' ? 'en' : 'de';
    switchLang(newLang);
  }, [lang, switchLang]);

  const processCommand = useCallback((cmd) => {
    const trimmed = cmd.trim().toLowerCase();
    const promptLine = { text: `visitor@luis ~ $ ${cmd}`, color: 'green' };

    if (trimmed === 'clear') {
      setHistory([...WELCOME_MESSAGE[lang]]);
      return;
    }

    // Language switch command
    if (trimmed === 'lang' || trimmed === 'language') {
      const newLang = lang === 'de' ? 'en' : 'de';
      setLang(newLang);
      const label = newLang === 'de' ? 'Deutsch' : 'English';
      setHistory((prev) => [
        ...prev,
        promptLine,
        { text: `  Sprache / Language → ${label}`, color: 'cyan' },
        { text: '' },
      ]);
      return;
    }

    if (trimmed === 'lang de' || trimmed === 'language de') {
      setLang('de');
      setHistory((prev) => [
        ...prev,
        promptLine,
        { text: '  Sprache → Deutsch', color: 'cyan' },
        { text: '' },
      ]);
      return;
    }

    if (trimmed === 'lang en' || trimmed === 'language en') {
      setLang('en');
      setHistory((prev) => [
        ...prev,
        promptLine,
        { text: '  Language → English', color: 'cyan' },
        { text: '' },
      ]);
      return;
    }

    if (trimmed.startsWith('open ')) {
      const num = parseInt(trimmed.split(' ')[1], 10);
      if (num >= 1 && num <= PROJECT_LINKS.length) {
        window.open(PROJECT_LINKS[num - 1], '_blank');
        setHistory((prev) => [
          ...prev,
          promptLine,
          { text: `  Opening project ${num}...`, color: 'dim' },
          { text: '' },
        ]);
        return;
      }
    }

    const commands = getCommands(lang);
    const output = commands[trimmed];
    if (output) {
      setHistory((prev) => [...prev, promptLine, ...output]);
    } else {
      const errMsg = lang === 'de'
        ? `  Befehl nicht gefunden: ${trimmed}. Tippe 'help' für verfügbare Befehle.`
        : `  Command not found: ${trimmed}. Type 'help' for available commands.`;
      setHistory((prev) => [
        ...prev,
        promptLine,
        { text: errMsg, color: 'red' },
        { text: '' },
      ]);
    }
  }, [lang, getCommands]);

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'Enter' && input.trim()) {
        setCmdHistory((prev) => [input, ...prev]);
        setHistoryIndex(-1);
        processCommand(input);
        setInput('');
      }
      // Arrow up — previous command
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        setCmdHistory((prev) => {
          const nextIdx = Math.min(historyIndex + 1, prev.length - 1);
          if (prev.length > 0 && nextIdx >= 0) {
            setHistoryIndex(nextIdx);
            setInput(prev[nextIdx]);
          }
          return prev;
        });
      }
      // Arrow down — next command (or clear)
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (historyIndex <= 0) {
          setHistoryIndex(-1);
          setInput('');
        } else {
          const nextIdx = historyIndex - 1;
          setHistoryIndex(nextIdx);
          setInput(cmdHistory[nextIdx]);
        }
      }
      // Tab completion
      if (e.key === 'Tab') {
        e.preventDefault();
        const allCmds = [...COMMAND_SUGGESTIONS, 'lang'];
        const match = allCmds.find((c) =>
          c.startsWith(input.toLowerCase())
        );
        if (match) setInput(match);
      }
    },
    [input, processCommand, historyIndex, cmdHistory]
  );

  const handleSuggestionClick = useCallback(
    (cmd) => {
      processCommand(cmd);
      inputRef.current?.focus();
    },
    [processCommand]
  );

  return (
    <div className="terminal-window" ref={terminalRef}>
      {/* macOS Title Bar */}
      <div className="terminal-titlebar">
        <div className="terminal-dots">
          <span className="dot dot-red" />
          <span className="dot dot-yellow" />
          <span className="dot dot-green" />
        </div>
        <div className="terminal-title">visitor@luis — portfolio</div>
        <button className="lang-toggle" onClick={toggleLang}>
          {lang === 'de' ? 'EN' : 'DE'}
        </button>
      </div>

      {/* Terminal Body */}
      <div className="terminal-body" ref={scrollRef} onClick={handleTerminalClick}>
        {/* Animated Logo Intro */}
        {phase === 'logo' && <AsciiLogo onDone={handleLogoDone} />}

        {/* Output Lines (shown after logo) */}
        {phase !== 'logo' &&
          history.map((line, i) => (
            <TerminalLine key={i} line={line} onCommand={processCommand} />
          ))}

        {/* Input Line */}
        {phase === 'ready' && (
          <div className="terminal-input-line">
            <span className="prompt">visitor@luis ~ $&nbsp;</span>
            <div className="input-wrapper">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="terminal-input"
                autoFocus
                spellCheck={false}
                autoComplete="off"
                autoCapitalize="off"
              />
            </div>
          </div>
        )}

        {/* Command Suggestions */}
        {phase === 'ready' && (
          <div className="command-suggestions">
            {COMMAND_SUGGESTIONS.map((cmd) => (
              <button
                key={cmd}
                className="suggestion-btn"
                onClick={() => handleSuggestionClick(cmd)}
              >
                {cmd}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
