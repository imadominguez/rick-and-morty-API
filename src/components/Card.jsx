import styles from "../style/Card.module.css";

export default function Card(props) {
  return (
    <div className={styles.card}>
      <div className={styles.card__container__img}>
        <img src={props.image} alt={props.name} className={styles.card__img} />
        <h2 className={styles.card__name}>{props.name}</h2>
      </div>
      <div className={styles.d__flex}>
        <h2 className={styles.h2}>{props.species}</h2>
        <h2 className={styles.h2}>{props.gender}</h2>
      </div>
      <button className={styles.card__btn} onClick={props.onClose}>
        Cerrar card
      </button>
    </div>
  );
}
