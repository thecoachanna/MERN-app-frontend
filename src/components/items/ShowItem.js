import { useState, useEffect } from 'react'

// useParams from react-router-dom allows us to see our route parameters
import { useParams } from 'react-router-dom'
import { Container, Card, Button } from 'react-bootstrap'
import { getOneItem } from '../../api/items'
import messages from '../shared/AutoDismissAlert/messages'
import LoadingScreen from '../shared/LoadingScreen'

// get item's ID from route parameter then make a request to the API when
// we retrieve a item from the api, we'll then render the data on the screen

const ShowItem = (props) => {

    const [item, setItem] = useState(null)
    const { id } = useParams()
    
    const { user, msgAlert } = props
    console.log('user in showItems props', user)
    console.log('msgAlert in showItems props', msgAlert)

    useEffect(() => {
        getOneItem(id)
            .then(res => setItem(res.data.item))
            .catch(error => {
                msgAlert({
                    heading: 'Error getting items.',
                    message: 'Could not find any items.',
                    variant: 'danger'
                })
            })
    }, [])

    if (!item) {
        return <LoadingScreen />
    }
    return (
        <>
            <Container>
                <Card>
                    <Card.Header>{item.fullTitle}</Card.Header>
                    <Card.Body>
                        <Card.Text>
                            <div><small>Age: {item.age} </small></div>
                            <div><small>Type: {item.type} </small></div>
                            <div>
                                <small>Description: {item.description}</small>
                            </div>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
        </>
    )
}

export default ShowItem