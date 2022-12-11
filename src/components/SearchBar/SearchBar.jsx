import { useState } from "react";
import styles from "./SearchBar.module.css";

const arr = [];

for (let i = 0; i < 827; i++) {
  arr.push(i);
}
const randomCharacterId = (array) => {
  return Math.floor(Math.random() * array.length);
};
export default function SearchBar(props) {
  const [state, setState] = useState("");
  const [random, setRandom] = useState(arr);
  const handleChange = (e) => {
    setState(e.target.value);
  };

  const handleSubmit = () => {
    props.onsearch(state);
    setRandom(random.filter((e) => e !== state));
    setState("");
  };

  const numAleatorio = () => {
    const indiceRandom = randomCharacterId(arr);
    const valorRandom = random[indiceRandom];

    props.onsearch(valorRandom);
    setRandom(random.filter((e) => e !== valorRandom));
  };

  return (
    <div className={styles.search__container}>
      <button className={styles.search__aleatorio} onClick={numAleatorio}>
        Aleatorio
      </button>
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
