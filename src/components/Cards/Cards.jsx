import Card from "../Card/Card";
import styles from "./Cards.module.css";
// import medias from '../style/Medias.module.css'

export default function Cards(props) {
  const { characters } = props;

  return (
    <>
      {/* <div>
        <select className={styles.select} onChange={2}>
          <option hidden>Ordenar</option>
          <option value="Ascendente">Ascendente</option>
          <option value="Descendente">Descendente</option>
        </select>
        <select className={styles.select} onChange={2}>
          <option hidden>Filtrar</option>
          <option value="all">Todos</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">unknown</option>
        </select>
      </div> */}
      <div className={styles.d_grid}>
        {Array.isArray(characters) ? (
          characters.map((e, i) => (
            <Card
              character={e}
              // id={e.id}
              key={e.id}
              // name={e.name}
              // species={e.species}
              // gender={e.gender}
              // image={e.image}
              onClose={props.onClose}
            />
          ))
        ) : (
          <h2>No se encuentra niguna card abierta</h2>
        )}
      </div>
    </>
  );
}
