import { connect } from 'react-redux';
import * as actions from '../actions';
import App from '../App';

const mapStateToProps = state => {
    const  {conditions} = state;
    return {conditions}
}

const mapDispatchToProps = dispatch => {
    return {
        selectLang: (value) => dispatch(actions.selectLang(value)),

        didMnt: (dataList) => dispatch(actions.didMnt(dataList))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
