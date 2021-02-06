import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { connect } from 'react-redux';

const Navigation = (props) => {
    return(
        <Navbar bg='light' variant='light'>
            <Navbar.Brand href='/top'>MuscleTracking</Navbar.Brand>
            {
                props.displayName &&
                <Nav>
                    <Nav.Item><Nav.Link href='/weight'>BodyWeight</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href='/big3'>BIG3</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href='/nutrition'>Nutrition</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href='/menu'>Training Menu</Nav.Link></Nav.Item>
                </Nav>
            }
        </Navbar>
    );
}

const mapStateToProps = (state) => {
    return {
        displayName:state.auth.displayName,
    }
}
export default connect(mapStateToProps)(Navigation);