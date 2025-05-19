// ConcreteObserver.js
const Observer = require('./observer');

class ConcreteObserver extends Observer {
  /**
   * @param {string} name   – nama observer, sekadar untuk log
   * @param {Subject} subject – referensi ke subject supaya bisa detach diri sendiri
   */
  constructor(name, subject) {
    super();
    this.name = name;
    this.subject = subject;
    this.notifCount = 0;        // counter notifikasi pribadi
  }

  update(data) {
    this.notifCount += 1;
    console.log(`${this.name} menerima data: ${data} (ke-${this.notifCount})`);

    // === autopilot: lepas setelah 3 kali ===
    if (this.notifCount >= 3) {
      console.log(`${this.name} sudah 3× menerima notifikasi, berhenti berlangganan…`);
      this.subject.detach(this);   // panggil method detach milik Subject
    }
  }
}

module.exports = ConcreteObserver;