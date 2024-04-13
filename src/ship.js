class Ship {
  constructor(length) {
    this.length = length;
    this.hits = 0;
    this.sunk = false;
    this.maxLength = 5;
    this.minLength = 2;
  }

  hit() {
    this.hits += 1;
    this.isSunk();
  }

  isSunk() {
    if (this.length === this.hits) {
      this.sunk = true;
    }
  }
}

export default Ship;
