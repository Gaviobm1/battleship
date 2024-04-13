/* eslint-disable no-undef */
import Gameboard from './gameboard';

test('Gameboard initialises empty array of ships', () => {
  expect(new Gameboard().ships).toEqual([]);
});

test('Gameboard can make move', () => {
  const gb = new Gameboard();
  gb.makeMove([6, 5]);
  expect(gb.moves).toContain('65');
});

test('Gameboard rejects invalid moves: x', () => {
  const gb = new Gameboard();
  expect(() => {
    gb.makeMove([0, 9]);
  }).toThrow('Invalid move');
});

test('Gameboard rejects invalid moves: y', () => {
  const gb = new Gameboard();
  expect(() => {
    gb.makeMove([2, 11]);
  }).toThrow('Invalid move');
});

test('Gameboard rejects duplicate moves', () => {
  const gb = new Gameboard();
  expect(() => {
    gb.makeMove([6, 6]);
    gb.makeMove([6, 6]);
  }).toThrow('Move already made');
});

test('Adds occupied spaces to occupied Set', () => {
  const gb = new Gameboard();
  gb.addOccupiedSpaces([[6, 7], [8, 9]]);
  expect(gb.occupied).toContain('67');
  expect(gb.occupied).toContain('89');
});

test('Checks board for occupied starting space', () => {
  const gb = new Gameboard();
  gb.addOccupiedSpaces([[6, 7], [9, 4]]);
  expect(gb.spaceOccupied([9, 4])).toBeTruthy();
});

test('Checks legal starting position: true', () => {
  const gb = new Gameboard();
  gb.addOccupiedSpaces([[7, 6], [2, 5]]);
  expect(gb.legalStart([7, 4])).toBeTruthy();
});

test('Checks legal starting position: false', () => {
  const gb = new Gameboard();
  gb.addOccupiedSpaces([[7, 6], [2, 5]]);
  expect(gb.legalStart([2, 5])).toBeFalsy();
});

test('Returns ship spaces are based on ship length', () => {
  const gb = new Gameboard();
  expect(gb.findLegalSpaces(2).length).toBe(2);
});

test('Spaces ship occupies added to occupied set', () => {
  const gb = new Gameboard();
  const spaces = gb.findLegalSpaces(2);
  const arr = [spaces[0].join(''), spaces[1].join('')];
  expect(gb.occupied).toContain(arr[0]);
  expect(gb.occupied).toContain(arr[1]);
});

test('Adds ships to board', () => {
  const gb = new Gameboard();
  gb.addShips();
  expect(gb.ships.length).toBe(5);
});
