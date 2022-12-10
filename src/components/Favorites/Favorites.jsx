import React from "react";
import { connect } from "react-redux";
import { orderCards, filterGender } from "../../redux/actions";
import Card from "../Card/Card";
function Favorites(props) {
  const orderList = (e) => {
    console.log("estoy en orderList");
    console.log(e.target.value);

    props.orderCards(e.target.value);
  };

  const filterGender = (e) => {
    props.filterGender(e.target.value);
  };

  return (
    <div>
      <div>
        <select onChange={orderList}>
          <option hidden>Ordenar</option>
          <option value="Ascendente">Ascendente</option>
          <option value="Descendente">Descendente</option>
        </select>
        <select onChange={filterGender}>
          <option hidden>Filtrar</option>
          <option value="all">Todos</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">unknown</option>
        </select>
      </div>
      {props.myFavorites.map((e) => (
        <Card character={e} key={e.id} />
      ))}
    </div>
  );
}

export const mapStateToProps = (state) => {
  console.log(state);
  return {
    myFavorites: state.myFavorites,
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    orderCards: (id) => {
      return dispatch(orderCards(id));
    },
    filterGender: (gender) => {
      return dispatch(filterGender(gender));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
