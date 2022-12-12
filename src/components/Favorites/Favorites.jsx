import React from "react";
import { connect } from "react-redux";
import { orderCards, filterGender } from "../../redux/actions";
import Card from "../Card/Card";
import style from "./Favorites.module.css";
function Favorites(props) {
  const orderList = (e) => {
    props.orderCards(e.target.value);
  };

  const filterGender = (e) => {
    props.filterGender(e.target.value);
  };

  return (
    <div>
      <div>
        <select className={style.select} onChange={orderList}>
          <option hidden>Ordenar</option>
          <option value="Ascendente">Ascendente</option>
          <option value="Descendente">Descendente</option>
        </select>
        <select className={style.select} onChange={filterGender}>
          <option hidden>Filtrar</option>
          <option value="all">Todos</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">unknown</option>
        </select>
      </div>
      <div className={style.fav__grid}>
        {props.myFavorites.map((e) => (
          <Card character={e} key={e.id} />
        ))}
      </div>
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
