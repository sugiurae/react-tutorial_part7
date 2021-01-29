import { connect } from 'react-redux';
import * as actions from '../actions';
import App from '../App';

const mapStateToProps = state => {
    const  {conditions} = state;
    return {conditions}
}

const mapDispatchToProps = dispatch => {
    return {
        didMnt: (id,name,address) => dispatch(actions.didMnt(id,name,address)),

        updateFormId: (value) => dispatch(actions.updateFormId(value)),
        updateFormName: (value) => dispatch(actions.updateFormName(value)),
        updateFormAddress: (value) => dispatch(actions.updateFormAddress(value))

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
