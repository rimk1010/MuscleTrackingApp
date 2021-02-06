import { connect } from 'react-redux';
import App from '../App';

const mapStateToProps = (state) => {
    return {
        displayName: state.auth.displayName,
    }
}

export default connect(mapStateToProps)(App);