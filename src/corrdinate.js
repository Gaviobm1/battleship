class Coordinate {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  generateRandomCoords(maxX = 10, maxY = 10, minX = 1, minY = 1) {
    this.x = Math.floor(Math.random() * (maxX) + minX);
    this.y = Math.floor(Math.random() * (maxY) + minY);
  }

  getHorizontalRange(max, length) {
    const coords = [];
    let xLimit;
    if (this.x + length > max) {
      xLimit = this.x - (length - 1);
      for (let i = 0; i < length; i += 1) {
        coords[i] = [];
        coords[i].push(xLimit);
        coords[i].push(this.y);
        xLimit += 1;
      }
    } else {
      xLimit = this.x + (length - 1);
      for (let i = 0; i < length; i += 1) {
        coords[i] = [];
        coords[i].push(xLimit);
        coords[i].push(this.y);
        xLimit -= 1;
      }
    }
    return coords;
  }

  getVerticalRange(max, length) {
    const coords = [];
    let yLimit;
    if (this.y + length > max) {
      yLimit = this.y - (length - 1);
      for (let i = 0; i < length; i += 1) {
        coords[i] = [];
        coords[i].push(this.x);
        coords[i].push(yLimit);
        yLimit += 1;
      }
    } else {
      yLimit = this.y + (length - 1);
      for (let i = 0; i < length; i += 1) {
        coords[i] = [];
        coords[i].push(this.x);
        coords[i].push(yLimit);
        yLimit -= 1;
      }
    }
    return coords;
  }

  coordinateArray() {
    return [this.x, this.y];
  }
}

export default Coordinate;
