
import { connect } from "react-redux";
import Popup from "../components/Popup";
import { setIsPopupOpen, setUnFavData, setFavData } from "../actions/index";

const mapStateToProps = state => {
    return {
        getIsPopupOpen: state.getIsPopupOpen,
        apiData: state.getAllApiData,
        favData: state.getAllFavData
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setIsPopupOpen: (c) => dispatch(setIsPopupOpen(c)),
        setUnFavData: (c) => dispatch(setUnFavData(c)),
        setFavData: (c) => dispatch(setFavData(c)),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Popup);
