import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import User from './User';

const Auth = props => {
    console.log(props.displayName);
    return (
        props.displayName ? props.children : <Redirect to={'/login'} />
    )
}

const mapStateToProps = (state) => {
    return {
        displayName:state.auth.displayName,
    }
}


export default connect(mapStateToProps)(Auth);