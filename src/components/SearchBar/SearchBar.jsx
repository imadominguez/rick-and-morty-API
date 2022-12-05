import { useState } from "react";
import styles from "./SearchBar.module.css";
// import cardStyle from "../style/Card.module.css";
export default function SearchBar(props) {
  const [state, setState] = useState("");

  const handleChange = (e) => {
    setState(e.target.value);
  };

  const handleSubmit = () => {
    props.onsearch(state);
    setState("");
  };

  return (
    <div className={styles.search__container}>
      <input
        placeholder="Ingresar ID"
        className={styles.input}
        type="search"
        onChange={handleChange}
        value={state}
      />
      <button className={styles.search__btn} onClick={handleSubmit}>
        Agregar
      </button>
    </div>
  );
}
