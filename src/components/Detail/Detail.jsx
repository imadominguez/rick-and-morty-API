import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Style from "./Detail.module.css";

export default function Detail() {
  const { id } = useParams();
  const [character, setCharacter] = useState({});
  console.log(character);
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
          console.log(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  }, [id]);

  return (
    <article className={Style.detail__article}>
      <div className={Style.article__container__img}>
        <img src={character.image} alt={character.name} />
      </div>
      <div className={Style.article__container__info}>
        <div className={Style.info__section}>
          <a
            href={`https://rickandmortyapi.com/api/character/${id}`}
            className={Style.name}
          >
            {character.name}
          </a>
          <span className="">
            <span className={Style.icon}></span>
            {character.status} - {character.species}
          </span>
        </div>
        <div className={Style.info__section}>
          <span className={Style.info__span}>Última ubicación conocida:</span>
          <a href={`https://rickandmortyapi.com/api/character/${id}`}>
            {character.location?.name}
          </a>
        </div>
        <div className={Style.info__section}>
          <span className={Style.info__span}>Visto por primera vez en:</span>
          <a href={`https://rickandmortyapi.com/api/character/${id}`}>
            {character.origin?.name}
          </a>
        </div>
      </div>
    </article>
  );
}
