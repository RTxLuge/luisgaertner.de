// ============================================================
// PORTFOLIO CONTENT — Passe diese Datei an deine Infos an!
// ============================================================

export const WELCOME_MESSAGE = [
  { text: '' },
  { text: ' ██╗     ██╗   ██╗██╗███████╗', color: 'green' },
  { text: ' ██║     ██║   ██║██║██╔════╝', color: 'green' },
  { text: ' ██║     ██║   ██║██║███████╗', color: 'green' },
  { text: ' ██║     ██║   ██║██║╚════██║', color: 'green' },
  { text: ' ███████╗╚██████╔╝██║███████║', color: 'green' },
  { text: ' ╚══════╝ ╚═════╝ ╚═╝╚══════╝', color: 'green' },
  { text: '' },
  { text: '' },
  { text: 'Welcome to my portfolio terminal.', color: 'text' },
  { text: "Type 'help' to see available commands.", color: 'dim' },
  { text: '' },
];

export const ABOUT = [
  { text: '┌─────────────────────────────────────┐', color: 'blue' },
  { text: '│           ABOUT ME                  │', color: 'blue' },
  { text: '└─────────────────────────────────────┘', color: 'blue' },
  { text: '' },
  { text: '  Name:      Luis Gaertner', color: 'text' },
  { text: '  Location:  Germany', color: 'text' },
  { text: '  Focus:     Full-Stack Development', color: 'text' },
  { text: '' },
  { text: '  I build things for the web and beyond.', color: 'dim' },
  { text: '  Passionate about clean code, open source,', color: 'dim' },
  { text: '  and creating tools that make life easier.', color: 'dim' },
  { text: '' },
];

export const PROJECTS = [
  { text: '┌─────────────────────────────────────────────┐', color: 'purple' },
  { text: '│              PROJECTS                       │', color: 'purple' },
  { text: '└─────────────────────────────────────────────┘', color: 'purple' },
  { text: '' },
  {
    text: '  [01]  Speachy',
    color: 'green',
  },
  { text: '        macOS menubar speech-to-text app using', color: 'dim' },
  { text: '        OpenAI Whisper API with formal rewriting mode.', color: 'dim' },
  { text: '        Stack: Swift, Whisper API', color: 'cyan' },
  {
    text: '        → https://github.com/RTxLuge/Speachy',
    color: 'blue',
    link: 'https://github.com/RTxLuge/Speachy',
  },
  { text: '' },
  {
    text: '  [02]  SpeachyiOS',
    color: 'green',
  },
  { text: '        Speachy on iOS — mobile companion app', color: 'dim' },
  { text: '        for speech-to-text on the go.', color: 'dim' },
  { text: '        Stack: Swift, iOS', color: 'cyan' },
  {
    text: '        → https://github.com/RTxLuge/SpeachyiOS',
    color: 'blue',
    link: 'https://github.com/RTxLuge/SpeachyiOS',
  },
  { text: '' },
  {
    text: '  [03]  luisgaertner.de',
    color: 'green',
  },
  { text: '        This website — a terminal-style', color: 'dim' },
  { text: '        portfolio built with React & Vite.', color: 'dim' },
  { text: '        Stack: React, Vite, GitHub Pages', color: 'cyan' },
  {
    text: '        → https://github.com/RTxLuge/luisgaertner.de',
    color: 'blue',
    link: 'https://github.com/RTxLuge/luisgaertner.de',
  },
  { text: '' },
  { text: "  Tip: Click a link or type 'open <number>' to visit.", color: 'dim' },
  { text: '' },
];

export const SKILLS = [
  { text: '┌─────────────────────────────────────┐', color: 'yellow' },
  { text: '│           SKILLS                    │', color: 'yellow' },
  { text: '└─────────────────────────────────────┘', color: 'yellow' },
  { text: '' },
  { text: '  Languages', color: 'green' },
  { text: '  ─────────', color: 'dim' },
  { text: '  JavaScript  ████████████████████  95%', color: 'text' },
  { text: '  TypeScript  ██████████████████░░  90%', color: 'text' },
  { text: '  Python      ████████████████░░░░  80%', color: 'text' },
  { text: '  Rust        ██████████░░░░░░░░░░  50%', color: 'text' },
  { text: '' },
  { text: '  Frameworks & Tools', color: 'green' },
  { text: '  ──────────────────', color: 'dim' },
  { text: '  React, Next.js, Node.js, Express', color: 'text' },
  { text: '  Docker, Git, CI/CD, Linux', color: 'text' },
  { text: '  PostgreSQL, MongoDB, Redis', color: 'text' },
  { text: '' },
];

export const CONTACT = [
  { text: '┌─────────────────────────────────────┐', color: 'red' },
  { text: '│           CONTACT                   │', color: 'red' },
  { text: '└─────────────────────────────────────┘', color: 'red' },
  { text: '' },
  {
    text: '  Email:    luisgaertner@icloud.com',
    color: 'text',
    link: 'mailto:luisgaertner@icloud.com',
  },
  {
    text: '  GitHub:   github.com/RTxLuge',
    color: 'text',
    link: 'https://github.com/RTxLuge',
  },
  {
    text: '  LinkedIn: linkedin.com/in/luisgaertner',
    color: 'text',
    link: 'https://linkedin.com/in/luisgaertner',
  },
  { text: '' },
  { text: "  Feel free to reach out — I don't byte.", color: 'dim' },
  { text: '' },
];

export const HELP = [
  { text: '' },
  { text: '  Available commands:', color: 'yellow' },
  { text: '' },
  { text: '  about       Who I am', color: 'green' },
  { text: '  projects    Things I\'ve built', color: 'green' },
  { text: '  skills      My tech stack', color: 'green' },
  { text: '  contact     Get in touch', color: 'green' },
  { text: '  clear       Clear the terminal', color: 'green' },
  { text: '  help        Show this message', color: 'green' },
  { text: '' },
  { text: '  You can also click on the commands above.', color: 'dim' },
  { text: '' },
];

export const PROJECT_LINKS = [
  'https://github.com/RTxLuge/Speachy',
  'https://github.com/RTxLuge/SpeachyiOS',
  'https://github.com/RTxLuge/luisgaertner.de',
];
