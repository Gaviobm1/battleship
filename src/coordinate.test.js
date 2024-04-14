/* eslint-disable no-undef */
import Coordinate from './corrdinate';

test('Generates random coordinates within lower bound', () => {
  const coord = new Coordinate();
  coord.generateRandomCoords(10, 10, 1, 1);
  expect(coord.x).toBeGreaterThanOrEqual(1);
  expect(coord.y).toBeGreaterThanOrEqual(1);
});

test('Generates random coordinates within upper bound', () => {
  const coord = new Coordinate();
  coord.generateRandomCoords();
  expect(coord.x).toBeLessThanOrEqual(10);
  expect(coord.y).toBeLessThanOrEqual(10);
});

test('Generates a range of coordinates horizontally', () => {
  const coord = new Coordinate(4, 6);
  expect(coord.getHorizontalRange(10, 5)).toEqual([[8, 6], [7, 6], [6, 6], [5, 6], [4, 6]]);
});

test('Generates a range of coordinates vertically', () => {
  const coord = new Coordinate(4, 6);
  expect(coord.getVerticalRange(10, 5)).toEqual([[4, 2], [4, 3], [4, 4], [4, 5], [4, 6]]);
});

test('All occupied coordinates from horizontal random start are within board range', () => {
  for (let i = 0; i < 100; i += 1) {
    const coord = new Coordinate();
    coord.generateRandomCoords();
    const genCoords = coord.getVerticalRange(10, 5);
    genCoords.forEach((arr) => {
      expect(arr[0]).toBeGreaterThanOrEqual(1);
      expect(arr[0]).toBeLessThanOrEqual(10);
      expect(arr[1]).toBeGreaterThanOrEqual(1);
      expect(arr[1]).toBeLessThanOrEqual(10);
    });
  }
});

test('All occupied coordinates from vertical random start are within board range', () => {
  for (let i = 0; i < 100; i += 1) {
    const coord = new Coordinate();
    coord.generateRandomCoords();
    const genCoords = coord.getHorizontalRange(10, 5);
    genCoords.forEach((arr) => {
      expect(arr[0]).toBeGreaterThanOrEqual(1);
      expect(arr[0]).toBeLessThanOrEqual(10);
      expect(arr[1]).toBeGreaterThanOrEqual(1);
      expect(arr[1]).toBeLessThanOrEqual(10);
    });
  }
});
