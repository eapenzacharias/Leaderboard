import { createElement, getElement } from './querySelectors.js';

const recentScores = (scores) => {
  const table = getElement('#scores-data');
  table.innerHTML = '';
  let count = 1;
  scores.forEach((e) => {
    const row = createElement('tr');
    row.scope = 'row';
    const position = createElement('th');
    position.innerHTML = count;
    const name = createElement('td');
    name.innerHTML = e.name;
    const score = createElement('td');
    score.innerHTML = e.score;
    row.appendChild(position);
    row.appendChild(name);
    row.appendChild(score);
    table.appendChild(row);
    count += 1;
  });
};

function createForm() {
  const form = `
  <form id="form-id">
    <div class="input-group mb-3">
      <input type="text" class="form-control" placeholder="Your name" id="name-field">
    </div>
    <div class="input-group mb-3">
      <input type="text" class="form-control" placeholder="Score" id="score-field">
    </div>
    <button type="submit" value="Submit" class="btn btn-dark btn-sm" id="submit-btn">Submit</button>
  </form>
  `;
  getElement('#form-div').innerHTML = form;
}

export { recentScores, createForm };
