import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Element } from 'react-scroll';
import { VscAccount } from "react-icons/vsc";

function ReviewCards() {
  return (
    <Element name="products" className="element">
    <Card className='d-flex align-items-center justify-content-center bg-warning' style={{ width: '30rem' }}>
      <VscAccount className='display-1' />
      <Card.Body>
        <Card.Title className='text-center'>Card Title</Card.Title>
        <Card.Text className='text-center'>
          Some quick example text to build on the card title and make up the
          bulk of the card&apos;s content.
        </Card.Text>
        <Button className='d-block mx-auto'  variant="success">Buy Now</Button>
      </Card.Body>
    </Card>
    </Element>
  );
}

export default ReviewCards;