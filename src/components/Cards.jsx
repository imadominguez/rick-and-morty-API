import Card from './Card';
import styles from '../style/Cards.module.css'
// import medias from '../style/Medias.module.css'
const close = () => alert("Emulamos que se cierra la card")
export default function Cards(props) {
   const { characters } = props;
   return <div className={ styles.d_grid}>{
      characters.map(e => <Card
         name={e.name}
         species={e.species}
         gender={e.gender}
         image={e.image}
         onClose={close}
       />)
   }</div>;
}  
