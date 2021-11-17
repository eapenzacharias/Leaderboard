import 'bootstrap/dist/css/bootstrap.min.css';
import './style/style.scss';
import { createForm, recentScores } from './scripts/printUI.js';
import { checkGame, getScores } from './scripts/gameManager.js';

const scores = [
  {
    name: 'Player1',
    score: 80,
  },
  {
    name: 'Player2',
    score: 80,
  },
  {
    name: 'Player3',
    score: 80,
  },
  {
    name: 'Player4',
    score: 80,
  },
];

createForm();
checkGame();
recentScores(scores);
console.log(`Here: ${getScores('UQ2vLaU6BCVL1qUR5Bjl')}`);