import { connect } from 'react-redux';
import * as actions from '../actions';
import App from '../App';

const mapStateToProps = state => {
    const  {conditions} = state;
    return {conditions}
}

const mapDispatchToProps = dispatch => {
    return {
        // ex)
        formID: (value) => dispatch(actions.formID(value)),

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
