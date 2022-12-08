import React from "react";
import { connect } from "react-redux";
import Card from "../Card/Card";
function Favorites({ myFavorites }) {
  console.log(myFavorites);
  return (
    <div>
      {myFavorites.map((e) => (
        <Card
          e={e}
          id={e.id}
          key={e.id}
          name={e.name}
          species={e.species}
          gender={e.gender}
          image={e.image}
        />
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
