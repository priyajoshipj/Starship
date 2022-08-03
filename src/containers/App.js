
import { connect } from "react-redux";
import App from "../App";

const mapStateToProps = state => {
    return {
        getIsPopupOpen: state.getIsPopupOpen,
    };
};


export default connect(
    mapStateToProps,
    ""
)(App);
