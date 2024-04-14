import Ship from './ship';
import Coordinate from './corrdinate';

class Gameboard {
  constructor(xMax = 10, xMin = 1, yMax = 10, yMin = 1) {
    this.xMax = xMax;
    this.xMin = xMin;
    this.yMax = yMax;
    this.yMin = yMin;
    this.moves = new Set();
    this.occupied = new Set();
    this.missed = [];
    this.hits = [];
    this.ships = [];
  }

  addShips() {
    for (let i = 0; i < 5; i += 1) {
      const obj = {};
      const length = Math.floor(Math.random() * 4 + 2);
      const ship = new Ship(length);
      obj.ship = ship;
      obj.coordinates = this.findLegalSpaces(ship.length);
      this.ships.push(obj);
    }
  }

  legalStart(coord) {
    if (!this.occupied.has(coord.join(''))) {
      return true;
    }
    return false;
  }

  findLegalSpaces(length, coords = new Coordinate()) {
    coords.generateRandomCoords();
    const start = coords.coordinateArray();
    const n = Math.floor(Math.random() * 2);
    if (n === 0) {
      if (this.legalStart(start)) {
        const results = coords.getVerticalRange(this.xMax, length);
        if (results.some(this.spaceOccupied, this)) {
          return this.findLegalSpaces(length);
        }
        this.addOccupiedSpaces(results);
        return results;
      }
      return this.findLegalSpaces(length);
    }
    if (n === 1) {
      if (this.legalStart(start)) {
        const results = coords.getHorizontalRange(this.xMax, length);
        if (results.some(this.spaceOccupied, this)) {
          return this.findLegalSpaces(length);
        }
        this.addOccupiedSpaces(results);
        return results;
      }
      return this.findLegalSpaces(length);
    }
  }

  addOccupiedSpaces(arr) {
    arr.forEach((coord) => {
      this.occupied.add(coord.join(''));
    });
  }

  spaceOccupied(coord) {
    if (this.occupied.has(coord.join(''))) {
      return true;
    }
    return false;
  }

  makeMove(arr) {
    if (arr[0] > this.xMax || arr[0] < this.xMin || arr[1] > this.yMax || arr[1] < this.yMin) {
      throw new Error('Invalid move');
    }
    if (this.moves.has(String(arr[0]) + String(arr[1]))) {
      throw new Error('Move already made');
    }
    this.moves.add(String(arr[0]) + String(arr[1]));
  }

  receiveAttack(attack) {
    this.ships.forEach((ship) => {
      ship.coordinates.forEach((coord) => {
        if (coord.join('') === attack.join('')) {
          return true;
        }
      });
    });
    return false;
  }
}

export default Gameboard;
