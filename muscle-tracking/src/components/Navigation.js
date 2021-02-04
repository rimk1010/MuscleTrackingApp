import React, { useState, useEffect } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import User from './User';

const Navigation = () => {
    return(
        <Navbar bg='light' variant='light'>
            <Navbar.Brand href='/top'>MuscleTracking</Navbar.Brand>
            {/* {   useEffect(() =>{
                    User.isLoggedIn() &&
                    <Nav>
                        <Nav.Item><Nav.Link href='/weight'>BodyWeight</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href='/big3'>BIG3</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href='/nutrition'>Nutrition</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href='/menu'>Training Menu</Nav.Link></Nav.Item>
                    </Nav>
                })
            } */}
            <Nav>
                <Nav.Item><Nav.Link href='/weight'>BodyWeight</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href='/big3'>BIG3</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href='/nutrition'>Nutrition</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href='/menu'>Training Menu</Nav.Link></Nav.Item>
            </Nav>
        </Navbar>
    );
}
export default Navigation;