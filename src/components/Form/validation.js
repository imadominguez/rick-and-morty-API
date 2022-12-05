export default function Validation(userData) {
  let emailRegex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

  let passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){6,10}$/;

  let errores = {};
  if (userData.username) {
    if (!emailRegex.test(userData.username)) {
      errores.username = "Debe ser un email válido";
    } else {
      errores.username = "";
    }
  } else {
    if (!passwordRegex.test(userData.password)) {
      errores.password = "Contraseña incorrecta";
    } else {
      errores.password = "";
    }
  }

  return errores;
}
