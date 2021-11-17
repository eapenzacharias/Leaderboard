import { result } from "lodash";

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

const checkGame = () => {
  let game;
  if (localStorage) {
    game = localStorage.getItem('gameID');
  }
  if (game === null) {
    createGame().then((result) => {
      game = result;
      console.log(game);
    });
  }
  return game;
};
export { checkGame };