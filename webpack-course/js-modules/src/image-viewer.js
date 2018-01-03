import '../styles/image-viewer.css';
import bigImage from '../assets/big.jpeg';
import smallImage from '../assets/small.jpeg';

const renderImages = () => {
  const small = document.createElement('img');
  small.src = smallImage;
  document.body.appendChild(small);

  const big = document.createElement('img');
  big.src = bigImage;
  document.body.appendChild(big);
};

export default renderImages;