import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const Nutrition = () => {
    const history = useHistory();
    return (
        <div>
            <Container className='center'>
                <h1 className='text-center'>NUTRITION</h1>
            </Container>
        </div>
    )
    }
export default Nutrition;