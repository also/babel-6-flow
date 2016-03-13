class C {
  s : string; // allowed
  constructor() {
    this.s = '';
  }

  split() {
    return this.s.split('');
  }
}
