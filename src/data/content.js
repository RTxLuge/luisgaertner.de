// ============================================================
// PORTFOLIO CONTENT — DE + EN
// ============================================================

// ---- AGE CALCULATION ----

const BIRTHDAY = new Date(2003, 5, 25); // 25. Juni 2003 (Monate 0-basiert)

export function getAge() {
  const today = new Date();
  let age = today.getFullYear() - BIRTHDAY.getFullYear();
  const m = today.getMonth() - BIRTHDAY.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < BIRTHDAY.getDate())) {
    age--;
  }
  return age;
}

// ---- WELCOME ----

export const WELCOME_MESSAGE = {
  de: [
    { text: '' },
    { text: ' ██╗     ██╗   ██╗██╗███████╗', color: 'green' },
    { text: ' ██║     ██║   ██║██║██╔════╝', color: 'green' },
    { text: ' ██║     ██║   ██║██║███████╗', color: 'green' },
    { text: ' ██║     ██║   ██║██║╚════██║', color: 'green' },
    { text: ' ███████╗╚██████╔╝██║███████║', color: 'green' },
    { text: ' ╚══════╝ ╚═════╝ ╚═╝╚══════╝', color: 'green' },
    { text: '' },
    { text: '' },
    { text: 'Willkommen in meinem Portfolio-Terminal.', color: 'text' },
    { text: "Tippe 'help' für verfügbare Befehle.", color: 'dim' },
    { text: '' },
  ],
  en: [
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
  ],
};

// ---- ABOUT (age lines are injected dynamically) ----

export const ABOUT_TEMPLATE = {
  de: [
    { text: '┌─────────────────────────────────────┐', color: 'blue' },
    { text: '│           ÜBER MICH                  │', color: 'blue' },
    { text: '└─────────────────────────────────────┘', color: 'blue' },
    { text: '' },
  { segments: [{ text: '                                                 ', color: 'dim' }, { text: '⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠿⠿⣿⣿⡿⣿⣿⡿⠿⠿⣿⣽⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿', color: 'dim' }] },
  { segments: [{ text: '                                                 ', color: 'dim' }, { text: '⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠛⠉⠁⠀⠀⠀⠙⠄⠀⠀⠀⠀⠀⠀⣏⣀⠁⠐⠻⢿⠛⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿', color: 'dim' }] },
  { segments: [{ text: '                                                 ', color: 'dim' }, { text: '⣿⣿⣿⣿⣿⣿⣿⣿⣟⣁⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠁⡏⠀⢀⠈⠠⠀⠀⠓⠍⠙⠛⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿', color: 'dim' }] },
  { segments: [{ text: '                                                 ', color: 'dim' }, { text: '⣿⣿⣿⣟⡻⠟⠋⡽⢋⠁⢠⠄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢣⠀⠀⠈⠀⠁⡄⠀⠀⠀⠀⠀⠉⠙⠿⢿⣿⣿⣿⣿⣿⣿', color: 'dim' }] },
  { segments: [{ text: '                                                 ', color: 'dim' }, { text: '⡿⠛⠯⠉⠀⠀⠀⠉⠀⠀⠀⠀⡠⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡀⠀⠀⠀⠀⠀⢠⣀⣀⣀⣾⣿⣿⣿⣿⣿', color: 'dim' }] },
  { segments: [{ text: '                                                 ', color: 'dim' }, { text: '⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠐⠉⠀⠀⠀⠀⠠⢠⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⠏⠀⠀⠀⠈⠉⠋⠛⠙⢍⣻⣿⣿⣿⣿⣿', color: 'dim' }] },
  { segments: [{ text: '                                                 ', color: 'dim' }, { text: '⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⠀⢄⠒⠸⠞⣷⠀⡈⡹⣿⢿⣿⣿', color: 'dim' }] },
  { segments: [{ text: '                                                 ', color: 'dim' }, { text: '⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠤⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠲⣾⡆⠘⣿⡄⠃⢤⢄⣿⠖⠁⠀⡹⣤⣿⣿', color: 'dim' }] },
  { segments: [{ text: '                                                 ', color: 'dim' }, { text: '⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣋⣳⣶⣀⡀⢬⢀⣀⣀⣤⣄⠐⠚⠉⠉⠉⢻⣿', color: 'dim' }] },
  { segments: [{ text: '                                                 ', color: 'dim' }, { text: '⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⣿⣘⣿⣿⣿⣿⣿⣿⣿⣿⣿⡆⠀⡀⠀⠀⢸⣿', color: 'dim' }] },
  { segments: [{ text: '                                                 ', color: 'dim' }, { text: '⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣴⣤⡀⡀⣀⣤⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⣠⣿⡄⠀⠀⢿', color: 'dim' }] },
  { segments: [{ text: '                                                 ', color: 'dim' }, { text: '⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⠀⠀⢈', color: 'dim' }] },
  { segments: [{ text: '                                                 ', color: 'dim' }, { text: '⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠿⠿⠿⠿⠿⠛⠿⢿⣿⣿⣿⣿⣿⣿⣿⡇⠂⣾', color: 'dim' }] },
  { segments: [{ text: '                                                 ', color: 'dim' }, { text: '⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠻⣿⣿⣿⣿⣿⣿⣿⣏⠀⠀⠀⣀⣀⣀⣤⣤⣤⣴⣿⣿⣿⣿⣿⣿⣧⡘⣾⣿', color: 'dim' }] },
  { segments: [{ text: '                                                 ', color: 'dim' }, { text: '⣿⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⣿⣿⣿⣿⣿⣿⣿⠿⠛⠛⠿⠿⢿⣿⣿⣿⣿⣿⣿⣿⡟⡿⠿⠟⢹⣿', color: 'dim' }] },
  { segments: [{ text: '                                                 ', color: 'dim' }, { text: '⣮⡠⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⠁⠀⠀⠀⠀⠈⣙⠲⢭⣻⣿⣿⣿⣿⣿⠁⢘⠀⣾⣿', color: 'dim' }] },
  { segments: [{ text: '                                                 ', color: 'dim' }, { text: '⣟⡡⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⣿⣿⣿⣿⣿⡀⠀⠀⠀⠀⠰⣿⣧⣶⣿⣿⣿⣿⣿⣿⠀⢸⣤⣾⣿', color: 'dim' }] },
  { segments: [{ text: '                                                 ', color: 'dim' }, { text: '⣿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣾⣿⣿⣿⣿⣿⣧⣄⣀⣀⣶⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⣼⣿⣿⡾', color: 'dim' }] },
  { segments: [{ text: '  Name:      Luis Gaertner                       ', color: 'text' }, { text: '⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣾⣿⣿⣿⣇', color: 'dim' }] },
  { segments: [{ text: '                                                 ', color: 'dim', age: 'de' }, { text: '⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣆⠘⠛⣿', color: 'dim' }], age: 'de' },
  { segments: [{ text: '  Standort:  Deutschland                         ', color: 'text' }, { text: '⣿⣿⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⣠⣿', color: 'dim' }] },
  { segments: [{ text: '  Fokus:     Full-Stack-Entwicklung              ', color: 'text' }, { text: '⣿⣿⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⢻⣿⠋⠉⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣿⣿⣿⣿', color: 'dim' }] },
  { segments: [{ text: '                                                 ', color: 'dim' }, { text: '⣿⣿⣗⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠺⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿', color: 'dim' }] },
  { segments: [{ text: '  Ich baue Dinge fürs Web und darüber hinaus.    ', color: 'dim' }, { text: '⣿⣿⣿⣽⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣾⡇⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿', color: 'dim' }] },
  { segments: [{ text: '  Leidenschaft für sauberen Code, Open Source    ', color: 'dim' }, { text: '⣿⣿⣿⣿⣷⡤⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠛⠓⠚⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿', color: 'dim' }] },
  { segments: [{ text: '  und Tools, die das Leben einfacher machen.     ', color: 'dim' }, { text: '⣿⣿⣿⣧⣿⣉⢹⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣠⣤⣭⣭⣉⣀⢈⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿', color: 'dim' }] },
  { segments: [{ text: '                                                 ', color: 'dim' }, { text: '⣿⣏⡹⣯⣛⡛⠂⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿', color: 'dim' }] },
  { segments: [{ text: '                                                 ', color: 'dim' }, { text: '⣿⣿⡿⠶⣭⣧⣀⢤⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿', color: 'dim' }] },
  { segments: [{ text: '                                                 ', color: 'dim' }, { text: '⣿⣾⣿⣆⠉⠳⠈⠙⢂⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⢶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿', color: 'dim' }] },
  { segments: [{ text: '                                                 ', color: 'dim' }, { text: '⣿⡸⠛⠻⣤⠐⠂⢶⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿', color: 'dim' }] },
  { segments: [{ text: '                                                 ', color: 'dim' }, { text: '⣿⣧⡦⠀⠀⣉⠀⠀⠇⠄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿', color: 'dim' }] },
  { segments: [{ text: '                                                 ', color: 'dim' }, { text: '⣿⣿⣷⣆⠀⠀⠀⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢬⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿', color: 'dim' }] },
  { segments: [{ text: '                                                 ', color: 'dim' }, { text: '⣿⣿⣿⣝⠓⠠⠤⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿', color: 'dim' }] },
  { segments: [{ text: '                                                 ', color: 'dim' }, { text: '⣿⣿⣻⢷⡈⢄⢀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿', color: 'dim' }] },
  { segments: [{ text: '                                                 ', color: 'dim' }, { text: '⣿⣿⣿⠿⢿⠂⠁⠐⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿', color: 'dim' }] },
  { segments: [{ text: '                                                 ', color: 'dim' }, { text: '⣿⣿⣽⣿⠀⠔⠂⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿', color: 'dim' }] },
  { segments: [{ text: '                                                 ', color: 'dim' }, { text: '⣿⣿⣿⣟⠖⠶⠰⠂⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿', color: 'dim' }] },
  { segments: [{ text: '                                                 ', color: 'dim' }, { text: '⣿⣿⡶⣟⡿⠊⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿', color: 'dim' }] },
  { segments: [{ text: '                                                 ', color: 'dim' }, { text: '⣿⣶⣾⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿', color: 'dim' }] },
  { segments: [{ text: '                                                 ', color: 'dim' }, { text: '⣿⣿⣿⣿⣿⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣀⣀⣤⣸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣯⣍⠈⣿⣿', color: 'dim' }] },
  { segments: [{ text: '                                                 ', color: 'dim' }, { text: '⣿⣿⣿⣿⣿⣿⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢣⣿⣿', color: 'dim' }] },
  { segments: [{ text: '                                                 ', color: 'dim' }, { text: '⣿⣿⣿⣿⣿⣿⣿⣷⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢿⣷⣿⣿⣿', color: 'dim' }] },
  { segments: [{ text: '                                                 ', color: 'dim' }, { text: '⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⣀⢀⣄⣀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⣿⣷⣿⣿⣿⣿⣿', color: 'dim' }] },
  { segments: [{ text: '                                                 ', color: 'dim' }, { text: '⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢿⣻⣵⣿⣿⣿⣿⣿⣿⣿⣿', color: 'dim' }] },
  { segments: [{ text: '                                                 ', color: 'dim' }, { text: '⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛', color: 'dim' }] },
    { text: '' },
  ],
  en: [
    { text: '┌─────────────────────────────────────┐', color: 'blue' },
    { text: '│           ABOUT ME                   │', color: 'blue' },
    { text: '└─────────────────────────────────────┘', color: 'blue' },
    { text: '' },
  { segments: [{ text: '                                               ', color: 'dim' }, { text: '⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠿⠿⣿⣿⡿⣿⣿⡿⠿⠿⣿⣽⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿', color: 'dim' }] },
  { segments: [{ text: '                                               ', color: 'dim' }, { text: '⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠛⠉⠁⠀⠀⠀⠙⠄⠀⠀⠀⠀⠀⠀⣏⣀⠁⠐⠻⢿⠛⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿', color: 'dim' }] },
  { segments: [{ text: '                                               ', color: 'dim' }, { text: '⣿⣿⣿⣿⣿⣿⣿⣿⣟⣁⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠁⡏⠀⢀⠈⠠⠀⠀⠓⠍⠙⠛⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿', color: 'dim' }] },
  { segments: [{ text: '                                               ', color: 'dim' }, { text: '⣿⣿⣿⣟⡻⠟⠋⡽⢋⠁⢠⠄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢣⠀⠀⠈⠀⠁⡄⠀⠀⠀⠀⠀⠉⠙⠿⢿⣿⣿⣿⣿⣿⣿', color: 'dim' }] },
  { segments: [{ text: '                                               ', color: 'dim' }, { text: '⡿⠛⠯⠉⠀⠀⠀⠉⠀⠀⠀⠀⡠⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡀⠀⠀⠀⠀⠀⢠⣀⣀⣀⣾⣿⣿⣿⣿⣿', color: 'dim' }] },
  { segments: [{ text: '                                               ', color: 'dim' }, { text: '⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠐⠉⠀⠀⠀⠀⠠⢠⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⠏⠀⠀⠀⠈⠉⠋⠛⠙⢍⣻⣿⣿⣿⣿⣿', color: 'dim' }] },
  { segments: [{ text: '                                               ', color: 'dim' }, { text: '⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⠀⢄⠒⠸⠞⣷⠀⡈⡹⣿⢿⣿⣿', color: 'dim' }] },
  { segments: [{ text: '                                               ', color: 'dim' }, { text: '⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠤⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠲⣾⡆⠘⣿⡄⠃⢤⢄⣿⠖⠁⠀⡹⣤⣿⣿', color: 'dim' }] },
  { segments: [{ text: '                                               ', color: 'dim' }, { text: '⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣋⣳⣶⣀⡀⢬⢀⣀⣀⣤⣄⠐⠚⠉⠉⠉⢻⣿', color: 'dim' }] },
  { segments: [{ text: '                                               ', color: 'dim' }, { text: '⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⣿⣘⣿⣿⣿⣿⣿⣿⣿⣿⣿⡆⠀⡀⠀⠀⢸⣿', color: 'dim' }] },
  { segments: [{ text: '                                               ', color: 'dim' }, { text: '⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣴⣤⡀⡀⣀⣤⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⣠⣿⡄⠀⠀⢿', color: 'dim' }] },
  { segments: [{ text: '                                               ', color: 'dim' }, { text: '⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⠀⠀⢈', color: 'dim' }] },
  { segments: [{ text: '                                               ', color: 'dim' }, { text: '⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠿⠿⠿⠿⠿⠛⠿⢿⣿⣿⣿⣿⣿⣿⣿⡇⠂⣾', color: 'dim' }] },
  { segments: [{ text: '                                               ', color: 'dim' }, { text: '⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠻⣿⣿⣿⣿⣿⣿⣿⣏⠀⠀⠀⣀⣀⣀⣤⣤⣤⣴⣿⣿⣿⣿⣿⣿⣧⡘⣾⣿', color: 'dim' }] },
  { segments: [{ text: '                                               ', color: 'dim' }, { text: '⣿⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⣿⣿⣿⣿⣿⣿⣿⠿⠛⠛⠿⠿⢿⣿⣿⣿⣿⣿⣿⣿⡟⡿⠿⠟⢹⣿', color: 'dim' }] },
  { segments: [{ text: '                                               ', color: 'dim' }, { text: '⣮⡠⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⠁⠀⠀⠀⠀⠈⣙⠲⢭⣻⣿⣿⣿⣿⣿⠁⢘⠀⣾⣿', color: 'dim' }] },
  { segments: [{ text: '                                               ', color: 'dim' }, { text: '⣟⡡⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⣿⣿⣿⣿⣿⡀⠀⠀⠀⠀⠰⣿⣧⣶⣿⣿⣿⣿⣿⣿⠀⢸⣤⣾⣿', color: 'dim' }] },
  { segments: [{ text: '                                               ', color: 'dim' }, { text: '⣿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣾⣿⣿⣿⣿⣿⣧⣄⣀⣀⣶⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⣼⣿⣿⡾', color: 'dim' }] },
  { segments: [{ text: '  Name:      Luis Gaertner                     ', color: 'text' }, { text: '⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣾⣿⣿⣿⣇', color: 'dim' }] },
  { segments: [{ text: '                                               ', color: 'dim', age: 'en' }, { text: '⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣆⠘⠛⣿', color: 'dim' }], age: 'en' },
  { segments: [{ text: '  Location:  Germany                           ', color: 'text' }, { text: '⣿⣿⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⣠⣿', color: 'dim' }] },
  { segments: [{ text: '  Focus:     Full-Stack Development            ', color: 'text' }, { text: '⣿⣿⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⢻⣿⠋⠉⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣿⣿⣿⣿', color: 'dim' }] },
  { segments: [{ text: '                                               ', color: 'dim' }, { text: '⣿⣿⣗⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠺⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿', color: 'dim' }] },
  { segments: [{ text: '  I build things for the web and beyond.       ', color: 'dim' }, { text: '⣿⣿⣿⣽⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣾⡇⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿', color: 'dim' }] },
  { segments: [{ text: '  Passionate about clean code, open source,    ', color: 'dim' }, { text: '⣿⣿⣿⣿⣷⡤⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠛⠓⠚⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿', color: 'dim' }] },
  { segments: [{ text: '  and creating tools that make life easier.    ', color: 'dim' }, { text: '⣿⣿⣿⣧⣿⣉⢹⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣠⣤⣭⣭⣉⣀⢈⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿', color: 'dim' }] },
  { segments: [{ text: '                                               ', color: 'dim' }, { text: '⣿⣏⡹⣯⣛⡛⠂⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿', color: 'dim' }] },
  { segments: [{ text: '                                               ', color: 'dim' }, { text: '⣿⣿⡿⠶⣭⣧⣀⢤⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿', color: 'dim' }] },
  { segments: [{ text: '                                               ', color: 'dim' }, { text: '⣿⣾⣿⣆⠉⠳⠈⠙⢂⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⢶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿', color: 'dim' }] },
  { segments: [{ text: '                                               ', color: 'dim' }, { text: '⣿⡸⠛⠻⣤⠐⠂⢶⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿', color: 'dim' }] },
  { segments: [{ text: '                                               ', color: 'dim' }, { text: '⣿⣧⡦⠀⠀⣉⠀⠀⠇⠄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿', color: 'dim' }] },
  { segments: [{ text: '                                               ', color: 'dim' }, { text: '⣿⣿⣷⣆⠀⠀⠀⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢬⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿', color: 'dim' }] },
  { segments: [{ text: '                                               ', color: 'dim' }, { text: '⣿⣿⣿⣝⠓⠠⠤⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿', color: 'dim' }] },
  { segments: [{ text: '                                               ', color: 'dim' }, { text: '⣿⣿⣻⢷⡈⢄⢀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿', color: 'dim' }] },
  { segments: [{ text: '                                               ', color: 'dim' }, { text: '⣿⣿⣿⠿⢿⠂⠁⠐⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿', color: 'dim' }] },
  { segments: [{ text: '                                               ', color: 'dim' }, { text: '⣿⣿⣽⣿⠀⠔⠂⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿', color: 'dim' }] },
  { segments: [{ text: '                                               ', color: 'dim' }, { text: '⣿⣿⣿⣟⠖⠶⠰⠂⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿', color: 'dim' }] },
  { segments: [{ text: '                                               ', color: 'dim' }, { text: '⣿⣿⡶⣟⡿⠊⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿', color: 'dim' }] },
  { segments: [{ text: '                                               ', color: 'dim' }, { text: '⣿⣶⣾⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿', color: 'dim' }] },
  { segments: [{ text: '                                               ', color: 'dim' }, { text: '⣿⣿⣿⣿⣿⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣀⣀⣤⣸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣯⣍⠈⣿⣿', color: 'dim' }] },
  { segments: [{ text: '                                               ', color: 'dim' }, { text: '⣿⣿⣿⣿⣿⣿⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢣⣿⣿', color: 'dim' }] },
  { segments: [{ text: '                                               ', color: 'dim' }, { text: '⣿⣿⣿⣿⣿⣿⣿⣷⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢿⣷⣿⣿⣿', color: 'dim' }] },
  { segments: [{ text: '                                               ', color: 'dim' }, { text: '⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⣀⢀⣄⣀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⣿⣷⣿⣿⣿⣿⣿', color: 'dim' }] },
  { segments: [{ text: '                                               ', color: 'dim' }, { text: '⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢿⣻⣵⣿⣿⣿⣿⣿⣿⣿⣿', color: 'dim' }] },
  { segments: [{ text: '                                               ', color: 'dim' }, { text: '⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛', color: 'dim' }] },
    { text: '' },
  ],
};

// Build ABOUT with computed age
export function getAbout(lang) {
  const age = getAge();
  const ageLabel = lang === 'de' ? '  Alter:     ' : '  Age:       ';
  const ageSuffix = lang === 'de' ? ' Jahre' : ' years';

  return ABOUT_TEMPLATE[lang].map(line => {
    if (line.age === lang && line.segments) {
      // Replace the age placeholder segment with animated age field
      const textWidth = line.segments[0].text.length;
      return {
        segments: [
          { text: (ageLabel + age + ageSuffix).padEnd(textWidth), color: 'text', ageValue: String(age), ageLabel, ageSuffix },
          line.segments[1],
        ],
        hasAge: true,
      };
    }
    return line;
  });
}

// ---- PROJECTS ----

export const PROJECTS = {
  de: [
    { text: '┌─────────────────────────────────────────────┐', color: 'purple' },
    { text: '│              PROJEKTE                        │', color: 'purple' },
    { text: '└─────────────────────────────────────────────┘', color: 'purple' },
    { text: '' },
    { text: '  [01]  Speachy', color: 'green' },
    { text: '        macOS-Menüleisten-App für Sprache-zu-Text', color: 'dim' },
    { text: '        mit OpenAI Whisper API und formellem Umschreibmodus.', color: 'dim' },
    { text: '        Stack: Swift, Whisper API', color: 'cyan' },
    { text: '        → https://github.com/luisgaertner/Speachy', color: 'blue', link: 'https://github.com/luisgaertner/Speachy' },
    { text: '' },
    { text: '  [02]  SpeachyiOS', color: 'green' },
    { text: '        Speachy für iOS — mobile Begleit-App', color: 'dim' },
    { text: '        für Sprache-zu-Text unterwegs.', color: 'dim' },
    { text: '        Stack: Swift, iOS', color: 'cyan' },
    { text: '        → https://github.com/luisgaertner/SpeachyiOS', color: 'blue', link: 'https://github.com/luisgaertner/SpeachyiOS' },
    { text: '' },
    { text: '  [03]  luisgaertner.de', color: 'green' },
    { text: '        Diese Website — ein Terminal-Portfolio', color: 'dim' },
    { text: '        gebaut mit React & Vite.', color: 'dim' },
    { text: '        Stack: React, Vite, GitHub Pages', color: 'cyan' },
    { text: '        → https://github.com/luisgaertner/luisgaertner.de', color: 'blue', link: 'https://github.com/luisgaertner/luisgaertner.de' },
    { text: '' },
    { text: "  Tipp: Klicke einen Link oder tippe 'open <nummer>'.", color: 'dim' },
    { text: '' },
  ],
  en: [
    { text: '┌─────────────────────────────────────────────┐', color: 'purple' },
    { text: '│              PROJECTS                        │', color: 'purple' },
    { text: '└─────────────────────────────────────────────┘', color: 'purple' },
    { text: '' },
    { text: '  [01]  Speachy', color: 'green' },
    { text: '        macOS menubar speech-to-text app using', color: 'dim' },
    { text: '        OpenAI Whisper API with formal rewriting mode.', color: 'dim' },
    { text: '        Stack: Swift, Whisper API', color: 'cyan' },
    { text: '        → https://github.com/luisgaertner/Speachy', color: 'blue', link: 'https://github.com/luisgaertner/Speachy' },
    { text: '' },
    { text: '  [02]  SpeachyiOS', color: 'green' },
    { text: '        Speachy on iOS — mobile companion app', color: 'dim' },
    { text: '        for speech-to-text on the go.', color: 'dim' },
    { text: '        Stack: Swift, iOS', color: 'cyan' },
    { text: '        → https://github.com/luisgaertner/SpeachyiOS', color: 'blue', link: 'https://github.com/luisgaertner/SpeachyiOS' },
    { text: '' },
    { text: '  [03]  luisgaertner.de', color: 'green' },
    { text: '        This website — a terminal-style', color: 'dim' },
    { text: '        portfolio built with React & Vite.', color: 'dim' },
    { text: '        Stack: React, Vite, GitHub Pages', color: 'cyan' },
    { text: '        → https://github.com/luisgaertner/luisgaertner.de', color: 'blue', link: 'https://github.com/luisgaertner/luisgaertner.de' },
    { text: '' },
    { text: "  Tip: Click a link or type 'open <number>' to visit.", color: 'dim' },
    { text: '' },
  ],
};

// ---- SKILLS ----

export const SKILLS = {
  de: [
    { text: '┌─────────────────────────────────────┐', color: 'yellow' },
    { text: '│           FÄHIGKEITEN                │', color: 'yellow' },
    { text: '└─────────────────────────────────────┘', color: 'yellow' },
    { text: '' },
    { text: '  Sprachen', color: 'green' },
    { text: '  ────────', color: 'dim' },
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
  ],
  en: [
    { text: '┌─────────────────────────────────────┐', color: 'yellow' },
    { text: '│           SKILLS                     │', color: 'yellow' },
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
  ],
};

// ---- CONTACT ----

export const CONTACT = {
  de: [
    { text: '┌─────────────────────────────────────┐', color: 'red' },
    { text: '│           KONTAKT                    │', color: 'red' },
    { text: '└─────────────────────────────────────┘', color: 'red' },
    { text: '' },
    { text: '  Email:    luisgaertner@icloud.com', color: 'text', link: 'mailto:luisgaertner@icloud.com' },
    { text: '  GitHub:   github.com/luisgaertner', color: 'text', link: 'https://github.com/luisgaertner' },
    { text: '  LinkedIn: linkedin.com/in/luisgaertner', color: 'text', link: 'https://linkedin.com/in/luisgaertner' },
    { text: '' },
    { text: "  Schreib mir gerne — ich byte nicht.", color: 'dim' },
    { text: '' },
  ],
  en: [
    { text: '┌─────────────────────────────────────┐', color: 'red' },
    { text: '│           CONTACT                    │', color: 'red' },
    { text: '└─────────────────────────────────────┘', color: 'red' },
    { text: '' },
    { text: '  Email:    luisgaertner@icloud.com', color: 'text', link: 'mailto:luisgaertner@icloud.com' },
    { text: '  GitHub:   github.com/luisgaertner', color: 'text', link: 'https://github.com/luisgaertner' },
    { text: '  LinkedIn: linkedin.com/in/luisgaertner', color: 'text', link: 'https://linkedin.com/in/luisgaertner' },
    { text: '' },
    { text: "  Feel free to reach out — I don't byte.", color: 'dim' },
    { text: '' },
  ],
};

// ---- HELP ----

export const HELP = {
  de: [
    { text: '' },
    { text: '  Verfügbare Befehle:', color: 'yellow' },
    { text: '' },
    { text: '  about       Über mich', color: 'green', command: 'about' },
    { text: '  projects    Meine Projekte', color: 'green', command: 'projects' },
    { text: '  skills      Mein Tech-Stack', color: 'green', command: 'skills' },
    { text: '  contact     Kontakt aufnehmen', color: 'green', command: 'contact' },
    { text: '  lang        Sprache wechseln', color: 'green', command: 'lang' },
    { text: '  clear       Terminal leeren', color: 'green', command: 'clear' },
    { text: '  help        Diese Hilfe anzeigen', color: 'green', command: 'help' },
    { text: '' },
    { text: '  Klicke auf einen Befehl um ihn auszuführen.', color: 'dim' },
    { text: '' },
  ],
  en: [
    { text: '' },
    { text: '  Available commands:', color: 'yellow' },
    { text: '' },
    { text: '  about       Who I am', color: 'green', command: 'about' },
    { text: '  projects    Things I\'ve built', color: 'green', command: 'projects' },
    { text: '  skills      My tech stack', color: 'green', command: 'skills' },
    { text: '  contact     Get in touch', color: 'green', command: 'contact' },
    { text: '  lang        Switch language', color: 'green', command: 'lang' },
    { text: '  clear       Clear the terminal', color: 'green', command: 'clear' },
    { text: '  help        Show this message', color: 'green', command: 'help' },
    { text: '' },
    { text: '  Click any command above to run it.', color: 'dim' },
    { text: '' },
  ],
};

// ---- PROJECT LINKS ----

export const PROJECT_LINKS = [
  'https://github.com/luisgaertner/Speachy',
  'https://github.com/luisgaertner/SpeachyiOS',
  'https://github.com/luisgaertner/luisgaertner.de',
];
