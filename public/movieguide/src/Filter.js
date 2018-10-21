import { connect } from 'react-redux';
import { FILTER_CHANGED } from './actions';
import CheckBox from './CheckBox';

function mapStateToProps(state) {
    return {
        checked: state.filter
    };
}

function mapDespatchToProps(dispatch) {
    return {
        onChange: filter => {
            dispatch({ type: FILTER_CHANGED, filter });
        }
    };
}

export default connect(mapStateToProps, mapDespatchToProps)(CheckBox);
