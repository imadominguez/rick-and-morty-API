import styles from "./Card.module.css";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { addFavorites, deleteFavorites } from "../../redux/actions";
import { useState, useEffect } from "react";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";

function Card({
  character,
  addFavorites,
  deleteFavorites,
  onClose,
  myFavorites,
}) {
  const [isFav, setisFav] = useState(false);

  // eslint-disable-next-line
  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === character.id) {
        setisFav(true);
      }
    });
  }, [myFavorites]);
  const handleFavorite = () => {
    if (isFav) {
      setisFav(false);
      deleteFavorites(character.id);
    } else {
      setisFav(true);
      addFavorites(character);
    }
  };

  return (
    <div className={styles.card}>
      {isFav ? (
        <button className={styles.btn__fav} onClick={handleFavorite}>
          <MdFavorite style={{ color: "red" }} />
        </button>
      ) : (
        <button className={styles.btn__fav} onClick={handleFavorite}>
          <MdFavoriteBorder style={{ color: "white" }} />
        </button>
      )}
      {onClose && (
        <button
          className={styles.card__btn}
          onClick={() => onClose(character.id)}
        >
          Cerrar card
        </button>
      )}

      <div className={styles.card__container__img}>
        <img
          src={character.image}
          alt={character.name}
          className={styles.card__img}
          onDoubleClick={handleFavorite}
        />
        <h2 className={styles.card__name}>{character.name}</h2>
      </div>
      <div className={styles.d__flex}>
        <h2 className={styles.h2}>{character.species}</h2>
        <h2 className={styles.h2}>{character.gender}</h2>
      </div>

      <NavLink className={styles.btn__detail} to={`/detail/${character.id}`}>
        Detalles
      </NavLink>
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
    addFavorites: (personaje) => {
      return dispatch(addFavorites(personaje));
    },
    deleteFavorites: (id) => {
      return dispatch(deleteFavorites(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
