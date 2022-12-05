import styles from "./Card.module.css";
import { Link } from "react-router-dom";
export default function Card(props) {
  return (
    <div className={styles.card}>
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
