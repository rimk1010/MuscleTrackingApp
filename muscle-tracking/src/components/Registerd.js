import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const Registerd = () => {
    const history = useHistory();
    const click = () => {
        history.push('/login');
    }
    return (
        <div>
            <Container className='center'>Registerd</Container>
            <Button variant='primary' type='button' onClick={click}>ログインする</Button>
        </div>
    )
}

export default Registerd;