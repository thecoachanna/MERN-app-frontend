import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

// api function from our api file
import { getAllItems } from "../../api/items";

// need messages from autodismissalert directory
import messages from "../shared/AutoDismissAlert/messages";

const cardContainerStyle = {
    display: 'flex',
    flexFlow: 'row-wrap',
    justifyContent: 'center'
}

// ItemsIndex will make a request to the API for all items
// once it receives a response, display a card for each item
const ItemsIndex = (props) => {

  const [items, setItems] = useState(null);
  const [error, setError] = useState(false);

  // pull the message (msgAlert) alert from props
    const { msgAlert } = props;
    
    // get our items from the api when the component mounts
    useEffect(() => {
        getAllItems()
            .then(res => setItems(res.data.items))
            .catch(error => {
                msgAlert({
                    heading: 'Error getting items.',
                    message: 'Could not find any items.',
                    variant: 'danger'
                })
                setError(true)
            })
    }, [])

  // if error, display an error
  if (error) {
    return <p>Error!</p>;
  }

  // if no items loaded yet, display 'loading'
  if (!items) {
    return <p>...loading ...please wait</p>;
  } else if (items.length === 0) {
    // otherwise if there are no items, display that message
    return <p>No items yet, go add some!</p>;
  }

  // once we have an array of items, loop over them
  // produce one card for every item
    const itemCards = items.map(item => (
        <Card key={ item.id } style= {{ width: '30%', margin: 5}}>
            <Card.Header>{ item.fullTitle }</Card.Header>
            <Card.Body>
                <Card.Text>
                    <Link to={`/items/${item.id}`} className='btn btn-info'>View { item.name }</Link>
                </Card.Text>
            </Card.Body>
        </Card>
    ))
    // return some jsx, a container with all of the itemCards
    return (
        <div className="container-md" style={ cardContainerStyle }>
            { itemCards }
        </div>
    )
};

export default ItemsIndex;
