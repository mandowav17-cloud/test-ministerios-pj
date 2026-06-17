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

const perfiles = {

espiritualidad:{
arquetipo:"🕊️ EL PEREGRINO",
ministerio:"Ministerio de Espiritualidad",
santo:"San Ignacio de Loyola",
simbolo:"🕊️ Paloma",
frase:"No buscas solo respuestas; buscas significado.",
descripcion:"Buscas profundidad, significado y espacios para crecer interiormente."
},

pastores:{
arquetipo:"🐑 EL GUÍA",
ministerio:"Ministerio de Pastores",
santo:"San Juan Bosco",
simbolo:"🐑 Cayado",
frase:"Tu presencia ayuda a otros a encontrar el camino.",
descripcion:"Tienes facilidad para acompañar y hacer sentir bienvenidas a las personas."
},

caridad:{
arquetipo:"❤️ EL SERVIDOR",
ministerio:"Ministerio de Caridad",
santo:"Santa Teresa de Calcuta",
simbolo:"❤️ Corazón",
frase:"Ves oportunidades para amar donde otros ven problemas.",
descripcion:"Te mueve ayudar y servir a quienes más lo necesitan."
},

alabanzas:{
arquetipo:"🎵 EL CANTOR",
ministerio:"Ministerio de Alabanzas",
santo:"Santa Cecilia",
simbolo:"🎵 Nota Musical",
frase:"La alegría es uno de tus lenguajes.",
descripcion:"Te gusta transmitir entusiasmo, alegría y esperanza."
},

mercadotecnia:{
arquetipo:"🎨 EL CREADOR",
ministerio:"Ministerio de Mercadotecnia",
santo:"San Carlo Acutis",
simbolo:"🎨 Pincel",
frase:"La creatividad también puede ser un camino de evangelización.",
descripcion:"Te gusta imaginar nuevas ideas y formas de comunicar."
},

tesoreria:{
arquetipo:"📊 EL GUARDIÁN",
ministerio:"Ministerio de Tesorería",
santo:"San Mateo",
simbolo:"📊 Llave",
frase:"Los grandes proyectos necesitan manos responsables.",
descripcion:"Tienes facilidad para organizar y administrar recursos."
},

predicadores:{
arquetipo:"📖 EL SABIO",
ministerio:"Ministerio de Predicadores",
santo:"Santo Tomás de Aquino",
simbolo:"📖 Libro",
frase:"Compartir la verdad es una forma de servir.",
descripcion:"Te gusta aprender, comprender y enseñar."
}

};

function mostrarResultado(){

document.getElementById("test").style.display = "none";
document.getElementById("resultado").style.display = "block";

const ordenados = Object.entries(puntos)
.sort((a,b)=>b[1]-a[1]);

const principal = perfiles[ordenados[0][0]];
const segundo = perfiles[ordenados[1][0]];
const tercero = perfiles[ordenados[2][0]];

document.getElementById("arquetipoTitulo").innerText =
principal.arquetipo;

document.getElementById("fraseArquetipo").innerText =
principal.frase;

document.getElementById("descripcionArquetipo").innerText =
principal.descripcion;

document.getElementById("ministerioResultado").innerText =
principal.ministerio;

document.getElementById("santoResultado").innerText =
"🙏 Santo inspirador: " + principal.santo;

document.getElementById("simboloResultado").innerText =
"✨ Símbolo: " + principal.simbolo;

document.getElementById("segundoLugar").innerText =
"🥈 " + segundo.arquetipo;

document.getElementById("tercerLugar").innerText =
"🥉 " + tercero.arquetipo;

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
