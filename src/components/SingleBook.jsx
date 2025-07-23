import { Component } from 'react';
import { Card } from 'react-bootstrap';

class SingleBook extends Component {
  state = {
    selected: false,
  };

  handleClick = () => {
    this.setState(prevState => ({
      selected: !prevState.selected
    }));
  };

  render() {
    const { book } = this.props;
    const { selected } = this.state;

    return (
      <Card
        onClick={this.handleClick}
        className={`h-100 ${selected ? 'border border-danger border-3' : ''}`}
        style={{ cursor: 'pointer' }}
      >
        <Card.Img variant="top" src={book.img} />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;

