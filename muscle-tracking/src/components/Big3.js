import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const Big3 = () => {
    const history = useHistory();
    return (
        <div>
            <Container className='center'>
                <h1 className='text-center'>BIG3</h1>
            </Container>
        </div>
    )
    }
export default Big3;