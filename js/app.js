document
  .getElementById("formRegistros")
  .addEventListener("submit", guardarRegistros);
  // HTMLFormElement.reset();

function guardarRegistros(e) {
  let codigo = document.getElementById("codigo").value;
  let nombre = document.getElementById("nombre").value;
  let apellido = document.getElementById("apellido").value;
  let edad = document.getElementById("edad").value;

  const alumno = {
    codigo,
    nombre,
    apellido,
    edad,
  };

  if (localStorage.getItem("alumnos") === null) {
    let alumnos = [];
    alumnos.push(alumno);
    localStorage.setItem("alumnos", JSON.stringify(alumnos));
  } else {
    let alumnos = JSON.parse(localStorage.getItem("alumnos"));
    alumnos.push(alumno);
    localStorage.setItem("alumnos", JSON.stringify(alumnos));
  }

  mostrarRegistros();
  document.getElementById('formRegistros').reset();
  document.getElementById('inputP').reset();
  e.preventDefault();
}

function mostrarRegistros() {
  let alumnos = JSON.parse(localStorage.getItem("alumnos"));
  let alumnoView = document.getElementById('Alumnos');
  alumnoView.innerHTML = '';
  
  for(let i = 0; i < alumnos.length; i++){
      let codigo = alumnos[i].codigo;
      let nombre = alumnos[i].nombre;
      let apellido = alumnos[i].apellido;
      let edad = alumnos[i].edad;

      alumnoView.innerHTML += `<div class="card mb-3">
      
        <div class="card-body">
        <table class="table text-center">
            <thead>
              <tr>
                <th scope="col">Codigo</th>
                <th scope="col">Nombre</th>
                <th scope="col">Apellido</th>
                <th scope="col">Edad</th>
                <th scope="col">Opcion</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>${codigo}</td>
                <td>${nombre}</td>
                <td>${apellido}</td>
                <td>${edad}</td>
                <td class="opcion">
                  <div class="container-btn">
                    <a href="#" onclick="eliminarRegistro('${codigo}')" class="btn-1">Eliminar</a>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>`;
  }
};

function eliminarRegistro(codigo){
    let alumnos = JSON.parse(localStorage.getItem("alumnos"));
    for(let i = 0; i < alumnos.length; i++){
        if(alumnos[i].codigo == codigo){
            alumnos.splice(i, 1);
        }
    }
    localStorage.setItem('alumnos', JSON.stringify(alumnos));
    mostrarRegistros();
}

mostrarRegistros();