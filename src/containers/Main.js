
import { connect } from "react-redux";
import Main from "../components/Main";
import { setAPIData, setFavData, setUnFavData, setIsPopupOpen } from "../actions/index";

const mapStateToProps = state => {
    return {
        searchData: state.data1.toLowerCase(),
        apiData: state.getAllApiData,
        favData: state.getAllFavData
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setAPIData: (c) => dispatch(setAPIData(c)),
        setFavData: (c) => dispatch(setFavData(c)),
        setUnFavData: (c) => dispatch(setUnFavData(c)),
        setIsPopupOpen: (c) => dispatch(setIsPopupOpen(c)),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Main);
