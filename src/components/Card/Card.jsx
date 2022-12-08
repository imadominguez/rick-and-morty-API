import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addFavorites, deleteFavorites } from "../../redux/actions";
import { useState } from "react";
// import { useEffect } from "react";
function Card(props) {
  const [isFav, setisFav] = useState(false);
  const { id } = props;
  const handleFavorite = () => {
    if (isFav) {
      setisFav(false);
      props.deleteFavorites(id);
    } else {
      setisFav(true);
      props.addFavorites(props.e);
    }
  };

  // useEffect(() => {
  //   props.myFavorites.forEach((fav) => {
  //     if (fav.id === props.id) {
  //       setisFav(true);
  //     }
  //   });
  // });
  return (
    <div className={styles.card}>
      {isFav ? (
        <button onClick={handleFavorite}>❤️</button>
      ) : (
        <button onClick={handleFavorite}>🤍</button>
      )}
      <button
        className={styles.card__btn}
        onClick={() => props.onClose(props.id)}
      >
        Cerrar card
      </button>
      <div className={styles.card__container__img}>
        <img src={props.image} alt={props.name} className={styles.card__img} />
        <h2 className={styles.card__name}>{props.name}</h2>
      </div>
      <div className={styles.d__flex}>
        <h2 className={styles.h2}>{props.species}</h2>
        <h2 className={styles.h2}>{props.gender}</h2>
      </div>

      <Link to={`/detail/${props.id}`}>Detalles</Link>
    </div>
  );
}

export const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

// eslint-disable-next-line
// eslint-disable-next-line
export const mapDispatchToProps = (dispatch) => {
  return {
    addFavorites: (id) => {
      return dispatch(addFavorites(id));
    },
    deleteFavorites: (id) => {
      return dispatch(deleteFavorites(id));
    },
  };
};

export default connect(null, mapDispatchToProps)(Card);
