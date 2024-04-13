/* eslint-disable no-undef */
import Ship from './ship';

test('Ship has a length', () => {
  expect(new Ship(4).length).toBe(4);
});

test('Ship can have varying lengths', () => {
  expect(new Ship(6).length).toBe(6);
});

test('Ship starts with 0 hits', () => {
  expect(new Ship().hits).toBe(0);
});

test('Ship status sunk starts false', () => {
  expect(new Ship().sunk).toBe(false);
});

test('Hits increase', () => {
  const ship = new Ship(2);
  ship.hit();
  expect(ship.hits).toBe(1);
});

test('Ship status sunk changes to true if hits === length', () => {
  const ship = new Ship(2);
  ship.hit();
  ship.hit();
  expect(ship.sunk).toBe(true);
});
