import React, { useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import User from './User';
import firebase from 'firebase';

const Logout = () => {
     useEffect(() => {
        User.logout();
        firebase.auth().signOut();
      });

      return(
          <Container className='center'>
              <Row className='justify-content-md-center'>
                  <div>
                      <h2>You are Logout</h2>
                      <div className='text-center'>
                          <Link to='/login'>ログイン画面</Link>
                      </div>
                  </div>
              </Row>
          </Container>
      );
}

export default Logout;