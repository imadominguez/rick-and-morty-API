import { useState } from "react";
import StyleForm from "./Form.module.css";
import Validation from "./validation";

export default function Form(props) {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const [errores, setErrores] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (e) => {
    console.log(e);
    if (e.target.value) {
      setUserData({
        ...userData,
        [e.target.name]: e.target.value,
      });
      setErrores({
        ...errores,
        ...Validation({
          [e.target.name]: e.target.value,
        }),
      });
      console.log(errores);
    } else {
      setUserData({
        ...userData,
        [e.target.name]: e.target.value,
      });
      setErrores({
        ...errores,
        [e.target.name]: "",
      });
    }
    // console.log(errores);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (errores.username === "" && errores.password === "") {
      console.log("datos completados");
      setUserData({
        username: "",
        password: "",
      });
      props.login({
        [e.target[0].name]: e.target[0].value,
        [e.target[1].name]: e.target[1].value,
      });
    } else {
      console.log("Tienes errores en el formulario");
    }
  };

  return (
    <form
      className={`${StyleForm.form__container} ${StyleForm.d_flex}`}
      onSubmit={handleSubmit}
    >
      <img
        src="https://1000marcas.net/wp-content/uploads/2022/04/Rick-and-Morty.png"
        alt=""
        style={{ width: "300px" }}
      />
      <div className={`${StyleForm.d_flex} ${StyleForm.form__username}`}>
        <input
          name="username"
          className={`${StyleForm.form__input} ${
            errores.username && StyleForm.warning
          }`}
          type="text"
          placeholder="Escribe un usuario..."
          value={userData.username}
          onChange={handleInputChange}
        ></input>
        <label
          className={`${StyleForm.form__label} ${
            errores.username && StyleForm.warning
          }`}
        >
          Usuario:
        </label>
        <span className={StyleForm.span}>{errores.username}</span>
      </div>
      <div className={`${StyleForm.d_flex} ${StyleForm.form__username}`}>
        <input
          name="password"
          className={`${StyleForm.form__input} ${
            errores.password && StyleForm.warning
          }`}
          type="password"
          placeholder="Escribe una contraseña"
          value={userData.password}
          onChange={handleInputChange}
        />
        <label
          className={`${StyleForm.form__label} ${
            errores.password && StyleForm.warning
          }`}
        >
          Contraseña:
        </label>
        <span className={StyleForm.span}>{errores.password}</span>
      </div>
      <div>
        <button className={StyleForm.form__btn} type="submit">
          ingresar
        </button>
      </div>
    </form>
  );
}
