import Card from "../Card/Card";
import styles from "./Cards.module.css";
// import medias from '../style/Medias.module.css'

export default function Cards(props) {
  const { characters } = props;

  return (
    <div className={styles.d_grid}>
      {Array.isArray(characters) ? (
        characters.map((e, i) => (
          <Card
            e={e}
            id={e.id}
            key={i}
            name={e.name}
            species={e.species}
            gender={e.gender}
            image={e.image}
            onClose={props.onClose}
          />
        ))
      ) : (
        <h2>No se encuentra niguna card abierta</h2>
      )}
    </div>
  );
}
