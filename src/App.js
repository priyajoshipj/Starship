import React from "react";
import Main from "./containers/Main.js";
import Search from "./containers/Search.js";
import Popup from "./containers/Popup.js";
import { connect } from "react-redux";


function App(props) {
  return (
    <>
      <div className={props.getIsPopupOpen ? `openPopup` : `closePopup`}>
        <center><b> <u> <h1>Star Ship</h1></u> </b></center>
        <Search />
        <Main />
      </div>
      {props.getIsPopupOpen && <div className="popup-area"> <Popup />   </div>}
    </>
  );
}


const mapStateToProps = state => {
  return {
    getIsPopupOpen: state.getIsPopupOpen,
  };
};
export default connect(
  mapStateToProps,
  ""
)(App);
