import React from 'react';
import { Container, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { withRouter, useHistory } from 'react-router-dom';

const Top = () => {
    return(
        <Container className='center'>
            <Row className='justify-content-md-center'>
                <div>
                    <h1 className='text-center'>MuscleTracking</h1>
                    <div className='text-center'>
                        <Button variant='default'>
                            <Link to='/register'>新規登録はこちら</Link>
                        </Button>
                        <Button variant='default'>
                            <Link to='/login'>ログインはこちら</Link>
                        </Button>
                        <Button variant='default'>
                            <Link to='/guest'>ゲストとして試す</Link>
                        </Button>
                    </div>
                </div>
            </Row>
        </Container>
    );
}
export default withRouter(Top);