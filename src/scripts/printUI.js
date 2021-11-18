import { addScores } from './gameManager.js';
import { getLocal } from './localStorage.js';
import { createElement, getElement } from './querySelectors.js';

const recentScores = async (scores) => {
  scores = await scores;
  let count = 1;
  if (scores.length > 0) {
    const table = getElement('#scores-data');
    table.innerHTML = '';
    scores.forEach((e) => {
      const row = createElement('tr');
      row.scope = 'row';
      const position = createElement('th');
      position.innerHTML = count;
      const name = createElement('td');
      name.innerHTML = e.user;
      const score = createElement('td');
      score.innerHTML = e.score;
      row.appendChild(position);
      row.appendChild(name);
      row.appendChild(score);
      table.appendChild(row);
      count += 1;
    });
  }
};

const createForm = () => {
  const form = `
  <form id="form-id">
    <div id="message"></div>
    <div class="input-group mb-3">
      <input type="text" class="form-control" placeholder="Your name" id="name-field" required>
    </div>
    <div class="input-group mb-3">
      <input type="number" class="form-control" placeholder="Score" id="score-field" required>
    </div>
    <input type="button" class="btn btn-light btn-sm" id="submit-btn" value="Submit">
  </form>
  `;
  getElement('#form-div').innerHTML = form;
};

const employForm = () => {
  createForm();
  const game = localStorage.getItem('gameID');
  const user = getElement('#name-field');
  const score = getElement('#score-field');
  const submitBtn = getElement('#submit-btn');
  submitBtn.addEventListener('click', async (e) => {
    if (user.value.length > 0 && score.value.length > 0) {
      addScores(game, user.value, score.value);
    }
    user.value = '';
    score.value = '';
    recentScores(getLocal());
    e.preventDefault();
  });
};

export { recentScores, employForm };
