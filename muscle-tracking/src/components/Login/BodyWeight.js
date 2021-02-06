import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const BodyWeight = () => {
    const history = useHistory();
    return (
        <div>
            <Container className='center'>
                <h1 className='text-center'>BODYWEIGHT</h1>
            </Container>
        </div>
    )
    }
export default BodyWeight;