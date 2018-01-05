const sum = (numOne, numTwo) => numOne + numTwo;

const renderSum = () => {
  const spamEl = document.createElement('span');
  spamEl.innerHTML = `The result of 10 + 15 is ${sum(10, 15)}`;
  document.body.appendChild(spamEl);
};

export default renderSum; 