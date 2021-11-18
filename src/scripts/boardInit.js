import { checkGame, getScores } from './gameManager.js';
import { employForm, recentScores } from './printUI.js';
import { getElement } from './querySelectors.js';

const initialize = async () => {
  const game = await checkGame();
  const scores = getScores(game);
  if (scores) recentScores(scores);
  employForm();
  const refreshBtn = getElement('#refresh-btn');
  refreshBtn.addEventListener('click', async (e) => {
    const scores = await getScores(game);
    if (scores) recentScores(scores);
    e.preventDefault();
  });
};

export default initialize;