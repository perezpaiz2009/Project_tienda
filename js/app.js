//Se ejecuta hasta que todo el codigo haya sido descargado
document.addEventListener("DOMContentLoaded", function () {
  const email = {
    email: "",
    asunto: "",
    mensaje: "",
  };

  //Seleccionar elemtos de interfaz
  const inputEmail = document.querySelector("#email");
  const inputAsunto = document.querySelector("#asunto");
  const inputMensaje = document.querySelector("#mensaje");
  const formulario = document.querySelector("#formulario");
  const btnSubmit = document.querySelector('#formulario button[type="submit"]');
  const btnReset = document.querySelector('#formulario button[type="reset"]');
  const spinner = document.querySelector("#spinner");

  //Asignar eventos para validar formulario input, input
  inputEmail.addEventListener("blur", validar);

  inputAsunto.addEventListener("blur", validar);

  inputMensaje.addEventListener("blur", validar);

  formulario.addEventListener("submit", enviarEmail);

  btnReset.addEventListener("click", function (e) {
    e.preventDefault();

    //reiniciando objeto
    resetFormulario();
  });

  function enviarEmail(e) {
    e.preventDefault();

    spinner.classList.add("flex");
    spinner.classList.remove("hidden");

    setTimeout(() => {
      spinner.classList.add("hidden");
      spinner.classList.remove("flex");
      formulario.submit();

      //Creando Alerta
      const alertaExito = document.createElement("P");
      alertaExito.classList.add(
        "bg-green-500",
        "text-white",
        "p-3",
        "text-center",
        "rounded-lg",
        "mt-10",
        "font-bold",
        "uppercase",
        "font-medium"
      );

      alertaExito.textContent = "Mensaje enviado con exito";

      formulario.appendChild(alertaExito);

      setTimeout(() => {
        resetFormulario();
        alertaExito.remove();
      }, 3000);
    }, 3000);
  }

  function validar(e) {
    if (e.target.value.trim() === "") {
      mostrarAlerta(
        `El campo ${e.target.id} es obligatorio `,
        e.target.parentElement
      );
      email[e.target.name] = "";
      comprobarEmail();
      return;
    }

    if (e.target.id === "email" && !validarEmail(e.target.value)) {
      mostrarAlerta("El Email no es valido", e.target.parentElement);
      email[e.target.name] = "";
      comprobarEmail();
      return;
    }

    limpiarAlerta(e.target.parentElement);

    //asignando valores
    email[e.target.name] = e.target.value.trim().toLowerCase();

    //Comprobar el objeto EMail
    comprobarEmail();
  }

  function mostrarAlerta(mensaje, referencia) {
    limpiarAlerta(referencia);

    //Generar alerta en HTML
    const error = document.createElement("P");
    error.textContent = mensaje;
    error.classList.add("bg-red-600", "text-white", "p-2", "text-center");

    //renderizar error en formulario
    referencia.appendChild(error);
  }

  function limpiarAlerta(referencia) {
    //Comprueba si existe una alerta
    const alerta = referencia.querySelector(".bg-red-600");
    if (alerta) {
      alerta.remove();
    }
  }

  function validarEmail(email) {
    const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    const resultado = regex.test(email);
    return resultado;
  }

  function comprobarEmail() {
    if (Object.values(email).includes("")) {
      btnSubmit.classList.add("opacity-50");
      btnSubmit.disabled = true;
      return;
    }
    btnSubmit.classList.remove("opacity-50");
    btnSubmit.disabled = false;
  }

  function resetFormulario() {
    //limpiando objeto

    email.asunto = "";
    email.email = "";
    email.mensaje = "";
    formulario.reset();
    comprobarEmail();
  }
});

/* Barras animadas  */
document.querySelector(".bars__menu").addEventListener("click", animateBars);
var line1__bars = document.querySelector(".line1__bars-menu");
var line2__bars = document.querySelector(".line2__bars-menu");
var line3__bars = document.querySelector(".line3__bars-menu");

function animateBars() {
  line1__bars.classList.toggle("activeline1__bars-menu");
  line2__bars.classList.toggle("activeline2__bars-menu");
  line3__bars.classList.toggle("activeline3__bars-menu");
  console.log(line1__bars);
}

const nav = document.querySelector("#nav");
const btnabrircerrar = document.querySelector("#boton_menu-burguer");

btnabrircerrar.addEventListener("click", () => {
  if (nav.classList.contains("visible")) {
    nav.classList.remove("visible");
  }
  else
  nav.classList.add("visible");
});

// ... Tu código JavaScript existente ...

// Agrega esta parte para cerrar el menú cuando se hace clic en un enlace dentro del menú responsivo
const enlacesMenu = document.querySelectorAll('.contenedor-navegacion a');

enlacesMenu.forEach(enlace => {
  enlace.addEventListener('click', () => {
    nav.classList.remove('visible');
    animateBars();
  });
});
