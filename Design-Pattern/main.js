// main.js
const Subject = require('./subject');
const ConcreteObserver = require('./concreteObserver');

// Inisialisasi subject
const subject = new Subject();

// Inisialisasi observers (perlu kirim subject ke constructor)
const observer1 = new ConcreteObserver('Observer 1', subject);
const observer2 = new ConcreteObserver('Observer 2', subject);

// Menambahkan observer ke subject
subject.attach(observer1);
subject.attach(observer2);

// Kirim beberapa notifikasi contoh
const messages = [
  'Update terbaru: Versi 1.0',
  'Bug fix: #123',
  'Fitur baru: Dark Mode',
  'Pengumuman maintenance',
  'Versi 2.0 rilis',
];

messages.forEach(msg => {
  console.log('\n➜ notifyAll:', msg);
  subject.notify(msg);
});