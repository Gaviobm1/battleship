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
  coord.generateRandomCoords(10, 10, 1, 1);
  expect(coord.x).toBeLessThanOrEqual(10);
  expect(coord.y).toBeLessThanOrEqual(10);
});

test('Generates a range of coordinates horizontally', () => {
  const coord = new Coordinate(4, 6);
  expect(coord.getHorizontalRange(10, 5)).toEqual([[8, 6], [7, 6], [6, 6], [5, 6], [4, 6]]);
});

test('Generates a range of coordinates vertically', () => {
  const coord = new Coordinate(4, 6);
  expect(coord.getVerticalRange(10, 5)).toEqual([[4, 10], [4, 9], [4, 8], [4, 7], [4, 6]]);
});
