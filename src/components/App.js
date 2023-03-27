/* IMPORT */
import "../styles/App.scss";
import ls from "../service/localstorage";
import translate from "../service/translate";
import { useState, useEffect } from "react";
import dataApi from "../service/api";
import Header from "./Header";
import Preview from "./main/Preview";
import FormAuthor from "./main/FormAuthor";
import FormProject from "./main/FormProject";
import GetAvatar from "./avatar/GetAvatar";
import { Routes, Route } from "react-router-dom";
import Landing from "./landing/Landing";

function App() {
  const [urlCard, setUrlCard] = useState("");
  const [data, setData] = useState({
    name: ls.get("url", {}).name || "",
    slogan: ls.get("url", {}).slogan || "",
    repo: ls.get("url", {}).repo || "",
    demo: ls.get("url", {}).demo || "",
    technologies: ls.get("url", {}).technologies || "",
    desc: ls.get("url", {}).desc || "",
    autor: ls.get("url", {}).autor || "",
    job: ls.get("url", {}).job || "",
    image: ls.get("url", {}).photo || "",
    photo: ls.get("url", {}).image || "",
  });

  const avatar = "";
  const autor = "";

  useEffect(() => {
    ls.set("url", {
      name: data.name,
      slogan: data.slogan,
      repo: data.repo,
      demo: data.demo,
      technologies: data.technologies,
      desc: data.desc,
      autor: data.autor,
      job: data.job,
      photo: data.image,
      image: data.photo,
    });
  }, [data]);
  const [errorEmptyFields, setErrorEmptyFields] = useState("");
  const [errorValidationRepo, setErrorValidationRepo] = useState("");
  const [errorValidationDemo, setErrorValidationDemo] = useState("");
  const [errorDatabase, setErrorDatabase] = useState("");

  /* EFECTOS */
  /* FUNCIONES HANDLER */
  const setDataInput = (inputValue, inputName) => {
    setData({ ...data, [inputName]: inputValue });
  };

  const handleClickCreate = (ev) => {
    ev.preventDefault();

  let mesaggeError = "";
    setUrlCard("");
    //Error campo requerido vacío
    for (const field in data) {
      if (!data[field]) {
        mesaggeError += `${translate(field)}, `;
      } else if (field === "repo" && errorValidationRepo)
        mesaggeError += `${translate(field)}, `;
      else if (field === "demo" && errorValidationDemo)
        mesaggeError += `${translate(field)}, `;
    }

  if (mesaggeError) {
    mesaggeError = mesaggeError.substring(0, mesaggeError.length - 2);
    setErrorEmptyFields(`Debe rellenar todos los campos requeridos: ${mesaggeError}`);
  } else {
    dataApi(data).then((info) => {
      if (info.success) {
        setUrlCard(info.cardURL);
        setErrorDatabase("");
      } else {
        setUrlCard("");
        setErrorDatabase(translate(info.error));
      }
    });
      setErrorEmptyFields("");
    }
  };

  const updateAvatar = (avatar) => {
    setData({ ...data, image: avatar });
  };

  const updateAutor = (autor) => {
    setData({ ...data, photo: autor });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  /* FUNCIONES Y VARIABLES AUXILIARES PARA PINTAR EL HTML */
  /* HTML */
  return (
    <div className="container">
      <Header />

      <main className="main">
        <Routes>
          <Route path="/" element={<Landing/>}></Route>
          <Route path='/create-card' element={
          <>
            <Preview data={data}/>
            <form className="form" onSubmit={handleSubmit}>
            <h2 className="form__title">Información</h2>
              <section className="ask-info">
                <p className="ask-info__subtitle">Cuéntanos sobre el proyecto</p>
                  <hr className="line" />
              </section>

              <FormProject
                data={data}
                setDataInput={setDataInput}
                setErrorValidationRepo={setErrorValidationRepo}
                setErrorValidationDemo={setErrorValidationDemo}
                errorValidationRepo={errorValidationRepo}
                errorValidationDemo={errorValidationDemo}
              />

              <section className="ask-info">
                <p className="ask-info__subtitle">Cuéntanos sobre la autora</p>
                  <hr className="line" />
              </section>

              <FormAuthor data={data} setDataInput={setDataInput} />

              <section className="buttons-img">
                <GetAvatar
                  avatar={avatar}
                  updateAvatar={updateAvatar}
                  value="Subir foto autora"
                  className="buttons-img__btn"/>

                <GetAvatar
                  avatar={autor}
                  updateAvatar={updateAutor}
                  value="Subir foto del proyecto"
                  className="buttons-img__btn"/>
              </section>

              <section className="buttons-img">
                <button
                  type="submit"
                  className="buttons-img__btn"
                  onClick={handleClickCreate}>Crear Tarjeta</button>
              </section>

              <section className={"text--error " + (!errorEmptyFields &&      !errorDatabase ? "hidden" : "")}>
                <span className="">{errorEmptyFields || errorDatabase}</span>
              </section>

              <section className={"card " + (!urlCard ? "hidden" : "")}>
                <span className=""> La tarjeta ha sido creada:</span>
                <a href={urlCard} className="card" target="_blank" rel="noreferrer">
                  {urlCard}</a>
              </section>
            </form>
          </>}>
          </Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
