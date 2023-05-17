

let res = document.querySelector("#res")

const suma = () => {
  let n1 = parseInt(document.querySelector("#n1").value);
  let n2 = parseInt(document.querySelector("#n2").value);
  csuma = n1 + n2;
  res.innerHTML = ` <h1>Resultados</h1>
    <h2>Suma: ${csuma}</h2>`
}

const resta=()=>{
  let n1=parseInt(document.querySelector("#n1").value);
  let n2=parseInt(document.querySelector("#n2").value);
  restas=n1-n2;
   res.innerHTML = ` <h1>Resultados</h1>
    <h2>Resta: ${restas}</h2>`
}

const multi=()=>{
  let n1=parseInt(document.querySelector("#n1").value);
  let n2=parseInt(document.querySelector("#n2").value);
multis=n1*n2;
   res.innerHTML = ` <h1>Resultados</h1>
    <h2>Multiplicación: ${multis}</h2>`
}

const divi=()=>{
  let n1=parseInt(document.querySelector("#n1").value);
  let n2=parseInt(document.querySelector("#n2").value);
divis=n1/n2;
   res.innerHTML = ` <h1>Resultados</h1>
    <h2>División: ${divis}</h2>`
}