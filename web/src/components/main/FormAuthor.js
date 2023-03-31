import Input from "./Input";

function FormAuthor({ data, setDataInput }) {
  return (
    <fieldset className="project">
        <Input
          label='Nombre del autor'
          className="autor__input"
          value={data.autor}
          name="autor"
          id="autor"
          placeholder="Ej: Maria"
          setDataInput={setDataInput}
        />

        <Input
          label='Puesto de trabajo'
          className="autor__input"
          value={data.job}
          name="job"
          id="job"
          placeholder="Ej: Front-end"
          setDataInput={setDataInput}
        />
    </fieldset>
  );
}

export default FormAuthor;
