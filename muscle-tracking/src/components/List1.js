import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const List1 = () => {
    const history = useHistory();
    const click = () => {
        history.push('/logout');
    }
    return(
        <div>
            <Container className='center'>Hello Login List1</Container>
            <Button variant='primary' type='button' onClick={click}>ログアウト</Button>
        </div>
        
    )
}

export default List1;