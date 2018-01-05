import '../styles/renderImages.css';
import smallImage from '../assets/small.jpeg';

const renderImages = () => {
  const small = document.createElement('img');
  small.src = smallImage;
  document.body.appendChild(small);
};

export default renderImages;