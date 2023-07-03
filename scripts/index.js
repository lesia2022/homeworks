'use strict';
const levelSet = new WeakSet();

function addPlayerToLevelSet(player) {
    if (typeof player !== 'object' || player === null) {
        throw new TypeError('The player argument must be an object.');
    }

    if (!('id' in player && 'name' in player && 'level' in player)) {
        throw new Error('The player object must contain the id, name and level properties.');
    }

    levelSet.add(player);
}


const player1 = { id: 1, name: 'Olesia', level: 10 };
const player2 = { name: 'Vlad', level: 5 };

function processPlayer(player) {
    try {
        addPlayerToLevelSet(player);
        alert(`Player ${player.name} successfully added to LevelSet.`);
    } catch (error) {
        alert(`Error when adding a player ${player.name}: ${error.message}`);
    }
}


processPlayer(player1);
processPlayer(player2);
