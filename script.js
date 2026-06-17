const preguntas = [
{
pregunta: "Cuando un grupo tiene un problema, normalmente tú...",
opciones: [
{texto:"Intento entender qué está pasando en el corazón de las personas.", ministerio:"pastores"},
{texto:"Busco una solución práctica.", ministerio:"caridad"},
{texto:"Trato de animar el ambiente.", ministerio:"alabanzas"},
{texto:"Propongo ideas nuevas.", ministerio:"mercadotecnia"},
{texto:"Organizo lo necesario para resolverlo.", ministerio:"tesoreria"},
{texto:"Reflexiono sobre lo que podemos aprender.", ministerio:"espiritualidad"},
{texto:"Ayudo a que todos entiendan la situación.", ministerio:"predicadores"}
]
},

{
pregunta: "¿Qué suele darte más satisfacción?",
opciones: [
{texto:"Ver a alguien acercarse más a Dios.", ministerio:"espiritualidad"},
{texto:"Saber que alguien se sintió acompañado.", ministerio:"pastores"},
{texto:"Ayudar a quien lo necesitaba.", ministerio:"caridad"},
{texto:"Compartir alegría con otros.", ministerio:"alabanzas"},
{texto:"Crear algo que inspire.", ministerio:"mercadotecnia"},
{texto:"Lograr que todo salga bien.", ministerio:"tesoreria"},
{texto:"Enseñar algo útil.", ministerio:"predicadores"}
]
},

{
pregunta: "Tus amigos normalmente te buscan porque...",
opciones: [
{texto:"Escucho sin juzgar.", ministerio:"pastores"},
{texto:"Doy buenos consejos.", ministerio:"predicadores"},
{texto:"Sé organizar cosas.", ministerio:"tesoreria"},
{texto:"Soy creativo.", ministerio:"mercadotecnia"},
{texto:"Transmito entusiasmo.", ministerio:"alabanzas"},
{texto:"Me preocupo por los demás.", ministerio:"caridad"},
{texto:"Tengo una vida espiritual sólida.", ministerio:"espiritualidad"}
]
}
];

let preguntaActual = 0;
let respuestaSeleccionada = null;

let puntos = {
espiritualidad:0,
pastores:0,
caridad:0,
alabanzas:0,
mercadotecnia:0,
tesoreria:0,
predicadores:0
};

function iniciarTest(){
document.getElementById("inicio").style.display = "none";
document.getElementById("test").style.display = "block";
mostrarPregunta();
}

function mostrarPregunta(){

const pregunta = preguntas[preguntaActual];

document.getElementById("pregunta").innerText =
`Pregunta ${preguntaActual + 1} de ${preguntas.length}

${pregunta.pregunta}`;

const opcionesDiv = document.getElementById("opciones");

opcionesDiv.innerHTML = "";

respuestaSeleccionada = null;

pregunta.opciones.forEach(opcion => {

const div = document.createElement("div");

div.classList.add("opcion");

div.innerText = opcion.texto;

div.onclick = () => {

document.querySelectorAll(".opcion")
.forEach(o => o.classList.remove("seleccionada"));

div.classList.add("seleccionada");

respuestaSeleccionada = opcion.ministerio;

};

opcionesDiv.appendChild(div);

});

}

function siguientePregunta(){

if(!respuestaSeleccionada){
alert("Selecciona una respuesta.");
return;
}

puntos[respuestaSeleccionada]++;

preguntaActual++;

if(preguntaActual < preguntas.length){

mostrarPregunta();

}else{

mostrarResultado();

}

}

function mostrarResultado(){

document.getElementById("test").style.display = "none";
document.getElementById("resultado").style.display = "block";

const ordenados = Object.entries(puntos)
.sort((a,b)=>b[1]-a[1]);

document.getElementById("primerLugar").innerText =
"🥇 " + nombreBonito(ordenados[0][0]);

document.getElementById("segundoLugar").innerText =
"🥈 " + nombreBonito(ordenados[1][0]);

document.getElementById("tercerLugar").innerText =
"🥉 " + nombreBonito(ordenados[2][0]);

}

function nombreBonito(nombre){

const nombres = {
espiritualidad:"Espiritualidad 🕊️",
pastores:"Pastores 🐑",
caridad:"Caridad ❤️",
alabanzas:"Alabanzas 🎵",
mercadotecnia:"Mercadotecnia 🎨",
tesoreria:"Tesorería 📊",
predicadores:"Predicadores 📖"
};

return nombres[nombre];

}
