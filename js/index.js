/* Toggles Menu */

const calculatorToggle = document.getElementById("calculatorToggle");

calculatorToggle.addEventListener("change", ()=>{
  if (calculatorToggle.checked) {
    document.getElementById("sectionCalculator").className = "show-section"
  } else {
    document.getElementById("sectionCalculator").className = ""
  }
})

const arrayToggle = document.getElementById("arrayToggle");

arrayToggle.addEventListener("change", ()=>{
  if (arrayToggle.checked) {
    document.getElementById("sectionArray").classList.add("show-section");
  } else {
    document.getElementById("sectionArray").classList.remove("show-section");
  }
})



/* Calculator section */
function sumarNumeros() {
  const num1 = parseFloat(document.getElementById("number1").value);
  const num2 = parseFloat(document.getElementById("number2").value);
  
  const resultado = num1 + num2;
  if (resultado || resultado === 0) {
    document.getElementById("resultadoCalculadora").innerText = resultado;
  }
}

const restarNumeros = () => {
  const num1 = parseFloat(document.getElementById("number1").value);
  const num2 = parseFloat(document.getElementById("number2").value);
  const resultado = num1 - num2;
  
  if (resultado || resultado === 0) {
    document.getElementById("resultadoCalculadora").innerText = resultado;
  }
}

const botonRestar = document.getElementById("botonRestar");

botonRestar.addEventListener("click", restarNumeros)


/* Array Section */

let arrayTexto = ["a", "b", "c"];

const lista = document.getElementById("lista-array");

function mostrarArray(array) {
  lista.innerHTML = ""
  console.log(array);

  array.forEach(element => {
    const li = document.createElement("li"); // Crea un nuevo elemento li
    li.textContent = element
    lista.appendChild(li)
  });
}

mostrarArray(arrayTexto)

const agregarAlFinal = () => {
  const inputText = document.getElementById("text").value;
  
  if (inputText) {
    arrayTexto.push(inputText)
  }

  mostrarArray(arrayTexto)
}

const quitarDelFinal = () => {
  arrayTexto.pop();
  mostrarArray(arrayTexto)
}