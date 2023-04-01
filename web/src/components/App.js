/* IMPORT */
import "../styles/App.scss";
import ls from "../service/localstorage";
import translate from "../service/translate";
import { useState, useEffect } from "react";
import api from "../service/api";
import Header from "./Header";
import Preview from "./main/Preview";
import FormAuthor from "./main/FormAuthor";
import FormProject from "./main/FormProject";
import GetAvatar from "./avatar/GetAvatar";
import { Routes, Route } from "react-router-dom";
import Landing from "./landing/Landing";
import DetailCard from "./main/DetailCard";
import { useLocation, matchPath } from "react-router-dom";
//import Maria from "../images/Maria-Araujo.jpeg";

function App() {
  const [projectsList, setProjectsList] = useState(ls.get("projects", []));
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

  useEffect(() => {
    api.listProjectApi()
    .then((cleanData) => {
      setProjectsList(cleanData);
      ls.set("projects", cleanData);
    });
  }, []);
console.log(projectsList);

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
      setErrorEmptyFields(
        `Debe rellenar todos los campos requeridos: ${mesaggeError}`
      );
    } else {
      api.dataApi(data).then((info) => {
        if (info.success) {
          setUrlCard(info.cardURL);
          setErrorDatabase("");
          data.id = crypto.randomUUID();
          const newList = [...projectsList, data];
          setProjectsList([...newList]);
          ls.set("projects", newList);
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

  //id para cada card
  const { pathname } = useLocation();
  const routeData = matchPath("detail/:id", pathname);
  const cardId = routeData === null ? null : routeData.params.id;
  const cardFound = projectsList.find((obj) => obj.id === cardId);

  /* FUNCIONES Y VARIABLES AUXILIARES PARA PINTAR EL HTML */

  // const obj1 = {
  //   name: "SinEntrada.es",
  //   slogan: "Disfruta del partido estés donde estés",
  //   repo: "https://github.com",
  //   demo: "https://github.com",
  //   technologies: "HTML, CSS, JavaScript, React",
  //   desc: "En SinEntrada.com descubrirás lugares donde disfrutar de los partido de tus equipos favoritos. Informarte y comparte dónde ver el próximo evento junt@/es.",
  //   autor: "María Araujo",
  //   job: "Front-end developer",
  //   photo:
  //     "https://www.funcion.info/wp-content/uploads/2021/03/funcion-de-las-imagenes.jpg",
  //   image: Maria,
  //   id: "46546d5",
  // };

  // setProjectsList([...projectsList, obj1]);
  /* HTML */
  return (
    <div className='container'>
      <Header />

      <main className='main'>
        <Routes>
          <Route
            path='/detail/:id'
            element={<DetailCard cardFound={cardFound} />}
          ></Route>
          <Route
            path='/'
            element={<Landing projectsList={projectsList} />}
          ></Route>
          <Route
            path='/create-card'
            element={
              <>
                <Preview data={data} />
                <form className='form' onSubmit={handleSubmit}>
                  <h2 className='form__title'>Información</h2>
                  <section className='ask-info'>
                    <p className='ask-info__subtitle'>
                      Cuéntanos sobre el proyecto
                    </p>
                    <hr className='line' />
                  </section>

                  <FormProject
                    data={data}
                    setDataInput={setDataInput}
                    setErrorValidationRepo={setErrorValidationRepo}
                    setErrorValidationDemo={setErrorValidationDemo}
                    errorValidationRepo={errorValidationRepo}
                    errorValidationDemo={errorValidationDemo}
                  />

                  <section className='ask-info'>
                    <p className='ask-info__subtitle'>
                      Cuéntanos sobre la autora
                    </p>
                    <hr className='line' />
                  </section>

                  <FormAuthor data={data} setDataInput={setDataInput} />

                  <section className='buttons-img'>
                    <GetAvatar
                      avatar={avatar}
                      updateAvatar={updateAvatar}
                      value='Subir foto autora'
                      className='buttons-img__btn'
                    />

                    <GetAvatar
                      avatar={autor}
                      updateAvatar={updateAutor}
                      value='Subir foto del proyecto'
                      className='buttons-img__btn'
                    />
                  </section>

                  <section className='buttons-img'>
                    <button
                      type='submit'
                      className='buttons-img__btn'
                      onClick={handleClickCreate}
                    >
                      Crear Tarjeta
                    </button>
                  </section>

                  <section
                    className={
                      "text--error " +
                      (!errorEmptyFields && !errorDatabase ? "hidden" : "")
                    }
                  >
                    <span className=''>
                      {errorEmptyFields || errorDatabase}
                    </span>
                  </section>

                  <section className={"card " + (!urlCard ? "hidden" : "")}>
                    <p className='textCreate'> La tarjeta ha sido creada:</p>
                    <a
                      href={urlCard}
                      className='cardLink'
                      target='_blank'
                      rel='noreferrer'
                    >
                      {urlCard}
                    </a>
                  </section>
                </form>
              </>
            }
          ></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
