import Carousel from 'react-bootstrap/Carousel';
import NewImage1 from '../assets/paint.png';
import NewImage2 from '../assets/paint2.png';
import NewImage3 from '../assets/paint3.png';
import { Element } from 'react-scroll';
import '../custom.scss'; // Import the CSS file

function HeroCarousel() {
  return (
    <Element name="home" className="element">
    <Carousel>
      <Carousel.Item>
        <div className="image-container">
          <img src={NewImage1} alt="First slide" className="img-fluid d-block mx-auto" />
        </div>
        <Carousel.Caption>
          <h3 className='display-3 bg-info'>Suncoat Oil Primers</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="image-container">
          <img src={NewImage2} alt="Second slide" className="img-fluid d-block mx-auto" />
        </div>
        <Carousel.Caption>
          <h3 className='display-3 bg-danger'>Suncoat Water Base Primers</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="image-container">
          <img src={NewImage3} alt="Third slide" className="img-fluid d-block mx-auto" />
        </div>
        <Carousel.Caption>
          <h3 className='display-3 bg-success'>Suncoat Emulsion Paints</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </Element>
  );
}

export default HeroCarousel;
