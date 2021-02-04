import React, { useState } from 'react';
import { Form, Button, Container, Row, Alert } from 'react-bootstrap';
import { withRouter, useHistory } from 'react-router-dom';
import User from './User';
import firebase from 'firebase';

const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [errMsg, setErrMsg] = useState();
    const history = useHistory();

    const click = () => {
        try{
            User.login(email,password).then((loginState) => {
               if(loginState) {
                   firebase.auth().signInWithEmailAndPassword(email, password)
                   .then(res => {
                    history.push('/list1');
                   })
                   .catch(error => {
                       setErrMsg(error.message);
                   })
               }else {
                   setErrMsg('入力情報に誤りがあります')
               }
            });
        }catch(e) {
            setErrMsg('入力情報に誤りがあります');
        }
    };

    const handleChangeEmail = e => {
        setEmail(e.target.value);
    }
    const handleChangePassword = e => {
        setPassword(e.target.value);
    }

    return(
        <Container className='center'>
            <Row className='justify-content-md-center'>
                <Form>
                    {errMsg && (<Alert variant='danger'>{errMsg}</Alert>)}
                    <h2>ログイン</h2>
                    <Form.Group controlId='email'>
                        <Form.Label>メールアドレス</Form.Label>
                        <Form.Control type='email' placeholder='Enter your Email' onChange={handleChangeEmail} value={email}/>
                    </Form.Group>
                    <Form.Group controlId='password'>
                        <Form.Label>パスワード</Form.Label>
                        <Form.Control type='password' placeholder='Enter your Password' onChange={handleChangePassword} value={password}/>
                    </Form.Group>
                    <Button variant='primary' type='button' onClick={click}>ログイン</Button>
                </Form>
            </Row>
        </Container>
    );
}
export default Login;