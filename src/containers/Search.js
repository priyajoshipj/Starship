
import { connect } from "react-redux";
import Search from "../components/Search.js";
import { setSearchContent } from "../actions/index";

const mapStateToProps = state => {
    return {
        searchData: state.data1
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        searchContent: (c) => dispatch(setSearchContent(c)),
    };
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Search);
