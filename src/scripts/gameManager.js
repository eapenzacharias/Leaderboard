import { getLocal, updateLocal } from './localStorage.js';

const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games';

const createGame = async () => {
  let newGame = '';
  await fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      name: 'My game',
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((res) => res.json())
    .then((data) => {
      [, , , newGame] = data.result.split(' ');
    });
  window.localStorage.setItem('gameID', newGame);
  return newGame;
};

const checkGame = async () => {
  let game;
  if (localStorage) {
    game = localStorage.getItem('gameID');
  }
  if (game === null) {
    createGame().then((result) => {
      game = result;
      window.location.reload();
    });
  }
  return game;
};

const getScores = async (game) => {
  game = await game;
  let scores = null;
  if (game) {
    const response = await fetch(`${url}/${game}/scores`);
    scores = await response.json();
    scores = scores.result;
  }
  localStorage.setItem('allScores', JSON.stringify(scores));
  return scores;
};

const addScores = async (game, user, score) => {
  const data = JSON.stringify({
    user,
    score,
  });
  const allScores = getLocal();
  allScores.unshift({ user, score });
  updateLocal(allScores);
  await fetch(`${url}/${game}/scores`, {
    method: 'POST',
    body: data,
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
};

export { checkGame, getScores, addScores };
