function translate(value) {
  switch (value) {
    case "name": {
      return "Nombre del proyeto";
    }
    case "slogan": {
      return "eslogan";
    }
    case "technologies": {
      return "tecnologías";
    }
    case "desc": {
      return "descripción";
    }
    case "job": {
      return "trabajo";
    }
    case "image": {
      return "imagen";
    }
    case "photo": {
      return "foto";
    }
    case "Database error: ER_DATA_TOO_LONG": {
      return "Error de base de datos: IMAGEN DEMASIADO PESADA";
    }
    default:
      return value;
  }
}
export default translate;
