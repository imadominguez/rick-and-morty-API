import Cards from "./components/Cards.jsx";
import SearchBar from "./components/SearchBar.jsx";
import characters from "./data.js";
import styles from "./style/App.module.css";

function App() {
  return (
    <div className={styles.App}>
      <SearchBar onSearch={(characterID) => window.alert(characterID)} />

      <Cards characters={characters} />
    </div>
  );
}

export default App;
