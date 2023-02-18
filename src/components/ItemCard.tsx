import {useState, useEffect} from 'react';
import {Card, ListGroup, Button} from 'react-bootstrap';
import {Request, Response} from 'express'
import axios from "axios";

const ItemCard = () => {

  const [name, setName] = useState("");
  const [serving, setServing] = useState("");
  const [calories, setCalories] = useState(0);

    useEffect(() => {
      axios.get('/food')
      .then(function (response: any) {
        // handle success
        console.log(response);
      })
      // .catch(function (err) {
      //   // handle error
      //   console.log(error);
      // })
    }, [])

  return (
    <div>
      <Card style={{ width: '18rem', border: "1px solid black" }}>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
          </ListGroup>
          <Card.Body className="d-flex w-full justify-content-around">
            <Button>Edit</Button>
            <Button variant="danger">Delete</Button>
          </Card.Body>
      </Card>
    </div>
  )
}

export default ItemCard