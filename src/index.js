import Gameboard from './gameboard';

const gb = new Gameboard();
gb.addShips();
console.log(gb.ships);
console.log(gb.receiveAttack([5, 6]));
