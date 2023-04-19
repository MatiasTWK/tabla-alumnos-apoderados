const input = document.querySelector("#input");
const button = document.querySelector("#button");

function traerAlumno() {
  fetch("https://repositoriomm-production.up.railway.app/alumnos")
    .then((res) => res.json())
    .then((data) => {
      crearAlumno(data);
    });
}

traerAlumno();

function crearAlumno(alumno) {
  const input = document.querySelector("#input");
  const option = document.createElement("option");
  option.value = alumno.id;
  option.textContent = alumno.nombre;
  input.appendChild(option);
  input.value = "";
  input.focus();
  input.select();
  button.disabled = false;
  button.textContent = "Guardar";
  button.addEventListener("click", guardarAlumno);
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      guardarAlumno();
    }
  });
  input.addEventListener("blur", () => {
    button.disabled = true;
    button.textContent = "Guardar";
  });
  input.addEventListener("change", () => {
    button.disabled = true;
    button.textContent = "Guardar";
  });
  input.addEventListener("focus", () => {
    button.disabled = false;
    button.textContent = "Guardar";
  });
  input.addEventListener("keyup", () => {
    button.disabled = true;
    button.textContent = "Guardar";
  });
  input.addEventListener("paste", () => {
    button.disabled = true;
    button.textContent = "Guardar";
  });
  input.addEventListener("cut", () => {
    button.disabled = true;
    button.textContent = "Guardar";
  });
  input.addEventListener("input", () => {
    button.disabled = true;
    button.textContent = "Guardar";
  });

  function guardarAlumno() {
    const alumno = {
      id: input.value,
      nombre: input.value,
      apellido: input.value,
      curso: input.value,
      email: input.value,
      date: input.date,
    };
    fetch("https://repositoriomm-production.up.railway.app/alumnos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(alumno),
    })
      .then((res) => res.json())
      .then((data) => {
        crearAlumno(data);
      });
  }
  crearAlumno(alumno);
}

function crearAlumno(alumno) {
  const option = document.createElement("option");
  option.value = alumno.id;
  option.textContent = alumno.nombre;
  const select = document.querySelector("#select");
  select.appendChild(option);
  select.value = "";
  select.focus();
  select.select();
  button.disabled = false;
  button.textContent = "Guardar";
  button.addEventListener("click", guardarAlumno);
  select.addEventListener("change", () => {
    button.disabled = true;
    button.textContent = "Guardar";
  });
  select.addEventListener("focus", () => {
    button.disabled = false;
    button.textContent = "Guardar";
  });
  select.addEventListener("keyup", () => {
    button.disabled = true;
    button.textContent = "Guardar";
  });
  select.addEventListener("paste", () => {
    button.disabled = true;
    button.textContent = "Guardar";
  });
  select.addEventListener("cut", () => {
    button.disabled = true;
    button.textContent = "Guardar";
  });
  select.addEventListener("input", () => {
    button.disabled = true;
    button.textContent = "Guardar";
  });
  select.addEventListener("blur", () => {
    button.disabled = true;
    button.textContent = "Guardar";
  });
}
