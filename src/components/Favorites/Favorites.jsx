import React from "react";
import { connect } from "react-redux";
function Favorites({ myFavorites }) {
  return (
    <div style={{ height: "90vh" }}>
      {myFavorites.map((e) => (
        <div>{e}</div>
      ))}
    </div>
  );
}

export const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, null)(Favorites);
