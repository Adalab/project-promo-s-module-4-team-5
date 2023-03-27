import Input from "./Input";
import TextArea from "./TextArea";

function FormProject({
  data,
  setDataInput,
  setErrorValidationDemo,
  setErrorValidationRepo,
  errorValidationRepo,
  errorValidationDemo,
}) {
  return (
    <fieldset className="project">
      <Input
        label='Nombre del proyecto'
        className="project__input"
        value={data.name}
        name="name"
        id="name"
        placeholder="Ej: Proyecto molón"
        setDataInput={setDataInput}
      />
      <Input
        label='Eslogan'
        className="project__input"
        value={data.slogan}
        name="slogan"
        id="slogan"
        placeholder="Escaparate en línea para recoger ideas"
        setDataInput={setDataInput}
      />
      <Input
        label='Repositorio'
        className="project__input"
        value={data.repo}
        name="repo"
        setErrorValidationRepo={setErrorValidationRepo}
        id="repo"
        pattern="((https?|ftp|file):\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$"
        placeholder="Ej. https://github.com/mi-proyecto"
        setDataInput={setDataInput}
      />
      <p className={"text--error " + (!errorValidationRepo ? "hidden" : "")}>
        {errorValidationRepo}</p>
      <Input
        label='Demo'
        className="project__input"
        value={data.demo}
        name="demo"
        id="demo"
        setErrorValidationDemo={setErrorValidationDemo}
        pattern="(http:\\/\\/www\\.|https:\\/\\/www\\.|http:\\/\\/|https:\\/\\/)?[a-zA-Z0-9]+([\\-\\.]{1}[a-zA-Z0-9]+)*\\.[a-zA-Z]{2,5}(:[0-9]{1,5})?(\\/\\/.*)?$"
        placeholder="Ej. http://beta.adalab.es/mi-proyecto"
        setDataInput={setDataInput}
      />
      <p className={"text--error " + (!errorValidationDemo ? "hidden" : "")}>
        {errorValidationDemo}</p>
      <Input
        label='Tecnologías'
        className="project__input"
        value={data.technologies}
        name="technologies"
        id="technologies"
        placeholder="Ej: HTML, JS, React"
        setDataInput={setDataInput}
      />
      <TextArea
        label='Descripción'
        className="project__textarea"
        type="text"
        placeholder="Haz una breve descripción de tu proyecto"
        name="desc"
        id="desc"
        value={data.desc}
        setDataInput={setDataInput}>
      </TextArea>
    </fieldset>
  );
}

export default FormProject;
