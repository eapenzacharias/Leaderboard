const updateLocal = (tasks) => {
  localStorage.setItem('allScores', JSON.stringify(tasks));
};

const getLocal = () => {
  let local = [];
  if (localStorage) {
    local = JSON.parse(localStorage.getItem('allScores'));
  }
  return local;
};

export { updateLocal, getLocal };