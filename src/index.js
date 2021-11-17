import 'bootstrap/dist/css/bootstrap.min.css';
import './style/style.scss';
import { createForm, recentScores } from './scripts/printUI.js';
import { addScores, checkGame, getScores } from './scripts/gameManager.js';

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
getScores('2QfBSD9yjN2GQ8kmnx3a');
