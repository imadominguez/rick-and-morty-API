import styles from "../style/SearchBar.module.css";
import cardStyle from "../style/Card.module.css";
export default function SearchBar(props) {
  return (
    <div>
      <input placeholder="Ingresar ID" className={styles.input} type="search" />
      <button className={cardStyle.card__btn} onClick={props.onSearch}>
        Agregar
      </button>
    </div>
  );
}
