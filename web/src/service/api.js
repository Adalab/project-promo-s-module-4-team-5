const dataApi = (data) => {
  return fetch(
    "https://proyectos-molones-code-queens.onrender.com/api/projects/add",
    {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-type": "application/json" },
    }
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data;
    });
};

const listProjectApi = () => {
  return fetch(
    "https://proyectos-molones-code-queens.onrender.com/api/projects/all"
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data;
    });
};

export default { dataApi, listProjectApi };
