const renderButton = () => {
  const buttonEl = document.createElement('button');
  buttonEl.innerText = 'Render images';
  buttonEl.onclick = () => {
    System.import('./renderImages').then(module => {
      module.default();
    });
  };
  
  document.body.appendChild(buttonEl);
};

export default renderButton;