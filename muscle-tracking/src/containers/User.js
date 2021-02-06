import firebase from 'firebase/app';
import { connect } from 'react-redux';
import { loginAction, logoutAction } from '../actions/Auth';
import Login from '../components/Login';

const mapStateToProps = (state) => {
    return {
        displayName:state.auth.displayName,
    }
}

//Dispatcher
const mapDispatchToProps = (dispatch) => {
    return {
        Login() {
            let provider = new firebase.auth.GoogleAuthProvider();
            firebase.auth().signInWithPopup(provider);
        },
        refLogin() {
            firebase.auth().onAuthStateChanged(user => {
                if(!user) {
                    return
                }
                dispatch(loginAction(user));
            })
        },
        Logout() {
            firebase.auth().signOut();
            dispatch(logoutAction());
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Login);