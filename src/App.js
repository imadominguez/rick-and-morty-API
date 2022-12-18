import { useEffect, useState } from "react";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav";
import About from "./components/About/About.jsx";
import Detail from "./components/Detail/Detail.jsx";
import Form from "./components/Form/Form.jsx";
import Favorites from "./components/Favorites/Favorites";
import styles from "./style/App.module.css";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";

function App() {
  const [characters, setCharacters] = useState([]);
  const [existe, setExiste] = useState(false);
  const [access, setAcces] = useState(false);
  const navigate = useNavigate();

  const login = (userData) => {
    const user = { username: userData.username, password: userData.password };

    window.localStorage.setItem("username", JSON.stringify(user));

    // if (username === userData.username && password === userData.password) {
    setAcces(true);
    navigate("/home");

    // }
  };
  const logOut = () => {
    setAcces(false);
  };
  useEffect(() => {
    if (!access) return navigate("/");
  }, [access]);
  const onSearch = (id) => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          if (characters.filter((e) => e.id === data.id).length) {
            setExiste(true);
          } else {
            setCharacters((oldChars) => [...oldChars, data]);
            setExiste(false);
          }
        } else {
          window.alert("No hay personajes con ese ID");
        }
      });
  };

  const onClose = (id) => {
    setCharacters(characters.filter((e) => e.id !== id));
  };

  const search = useLocation();

  return (
    <div className={styles.App}>
      {search.pathname === "/" ? null : (
        <Nav onSearch={onSearch} logout={logOut} />
      )}

      {existe && search.pathname === "/home" ? (
        <h4 style={{ color: "white" }}>¡¡¡ YA EXISTE !!!</h4>
      ) : (
        false
      )}

      <Routes>
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/" element={<Form login={login} />} />

        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />

        <Route path="/about" element={<About />} />

        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
