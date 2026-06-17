alert("SCRIPT CARGADO");
const preguntas = [
{
pregunta: "Cuando entras a un lugar nuevo, normalmente te fijas en...",
opciones: [
{texto:"Cómo se sienten las personas entre sí.", ministerio:"pastores"},
{texto:"Si alguien necesita ayuda o apoyo.", ministerio:"caridad"},
{texto:"La energía general del ambiente.", ministerio:"alabanzas"},
{texto:"Detalles que podrían mejorarse o comunicarse mejor.", ministerio:"mercadotecnia"},
{texto:"Cómo está organizado todo.", ministerio:"tesoreria"},
{texto:"El significado o propósito del lugar.", ministerio:"espiritualidad"},
{texto:"Lo que está pasando en general para entenderlo.", ministerio:"predicadores"}
]
},
{
pregunta: "Si tienes un día libre sin planes, tú prefieres...",
opciones: [
{texto:"Estar con personas cercanas.", ministerio:"pastores"},
{texto:"Ayudar en algo útil.", ministerio:"caridad"},
{texto:"Escuchar música o crear ambiente.", ministerio:"alabanzas"},
{texto:"Crear algo nuevo.", ministerio:"mercadotecnia"},
{texto:"Poner en orden tus cosas.", ministerio:"tesoreria"},
{texto:"Reflexionar o pensar en cosas profundas.", ministerio:"espiritualidad"},
{texto:"Aprender algo nuevo.", ministerio:"predicadores"}
]
},
{
pregunta: "Cuando alguien te cuenta un problema, tú sueles...",
opciones: [
{texto:"Escuchar con atención.", ministerio:"pastores"},
{texto:"Buscar ayudar de forma práctica.", ministerio:"caridad"},
{texto:"Animarlo.", ministerio:"alabanzas"},
{texto:"Pensar en ideas para solucionarlo.", ministerio:"mercadotecnia"},
{texto:"Ver qué se puede organizar mejor.", ministerio:"tesoreria"},
{texto:"Tratar de entender el fondo del problema.", ministerio:"espiritualidad"},
{texto:"Explicarle la situación con claridad.", ministerio:"predicadores"}
]
},
{
pregunta: "¿Qué tipo de actividad disfrutas más?",
opciones: [
{texto:"Convivir con otros.", ministerio:"pastores"},
{texto:"Hacer algo significativo por alguien.", ministerio:"caridad"},
{texto:"Participar en algo lleno de energía.", ministerio:"alabanzas"},
{texto:"Diseñar o crear algo.", ministerio:"mercadotecnia"},
{texto:"Organizar eventos o actividades.", ministerio:"tesoreria"},
{texto:"Momentos de reflexión.", ministerio:"espiritualidad"},
{texto:"Actividades donde aprendes algo.", ministerio:"predicadores"}
]
},
{
pregunta: "Cuando ves algo que necesita mejorar, tú...",
opciones: [
{texto:"Pienso en cómo afecta a las personas.", ministerio:"pastores"},
{texto:"Actúo para ayudar.", ministerio:"caridad"},
{texto:"Intento motivar a otros.", ministerio:"alabanzas"},
{texto:"Busco una idea creativa.", ministerio:"mercadotecnia"},
{texto:"Organizo un plan.", ministerio:"tesoreria"},
{texto:"Reflexiono sobre el sentido de eso.", ministerio:"espiritualidad"},
{texto:"Analizo la situación.", ministerio:"predicadores"}
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

const perfiles = {
espiritualidad:{
arquetipo:"🕊️ EL PEREGRINO",
ministerio:"Ministerio de Espiritualidad",
santo:"San Ignacio de Loyola",
simbolo:"🕊️ Paloma",
frase:"Buscas sentido más allá de lo visible.",
descripcion:"Reflexionas profundamente sobre la vida y la fe."
},
pastores:{
arquetipo:"🐑 EL GUÍA",
ministerio:"Ministerio de Pastores",
santo:"San Juan Bosco",
simbolo:"🐑 Cayado",
frase:"Acompañas a otros en su camino.",
descripcion:"Eres apoyo emocional para los demás."
},
caridad:{
arquetipo:"❤️ EL SERVIDOR",
ministerio:"Ministerio de Caridad",
santo:"Santa Teresa de Calcuta",
simbolo:"❤️ Corazón",
frase:"Sirves sin esperar nada a cambio.",
descripcion:"Te mueve ayudar a los demás."
},
alabanzas:{
arquetipo:"🎵 EL CANTOR",
ministerio:"Ministerio de Alabanzas",
santo:"Santa Cecilia",
simbolo:"🎵 Nota musical",
frase:"Transmitir alegría es tu forma de servir.",
descripcion:"Eres energía y expresión."
},
mercadotecnia:{
arquetipo:"🎨 EL CREADOR",
ministerio:"Ministerio de Mercadotecnia",
santo:"San Carlo Acutis",
simbolo:"🎨 Pincel",
frase:"La creatividad es tu lenguaje.",
descripcion:"Tienes ideas innovadoras."
},
tesoreria:{
arquetipo:"📊 EL ORGANIZADOR",
ministerio:"Ministerio de Tesorería",
santo:"San Mateo",
simbolo:"📊 Documento",
frase:"El orden es tu fortaleza.",
descripcion:"Eres responsable y estructurado."
},
predicadores:{
arquetipo:"📖 EL SABIO",
ministerio:"Ministerio de Predicadores",
santo:"Santo Tomás de Aquino",
simbolo:"📖 Libro",
frase:"El conocimiento es tu camino.",
descripcion:"Te gusta comprender y enseñar."
}
};

function iniciarTest(){
document.getElementById("inicio").style.display = "none";
document.getElementById("test").style.display = "block";
mostrarPregunta();
}

function mostrarPregunta(){

const pregunta = preguntas[preguntaActual];

document.getElementById("pregunta").innerText =
`Pregunta ${preguntaActual + 1} de ${preguntas.length}\n\n${pregunta.pregunta}`;

const opcionesDiv = document.getElementById("opciones");
opcionesDiv.innerHTML = "";
respuestaSeleccionada = null;

pregunta.opciones.forEach(opcion => {
const div = document.createElement("div");
div.classList.add("opcion");
div.innerText = opcion.texto;

div.onclick = () => {
document.querySelectorAll(".opcion").forEach(o => o.classList.remove("seleccionada"));
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

const ordenados = Object.entries(puntos).sort((a,b)=>b[1]-a[1]);

const principal = perfiles[ordenados[0][0]];
const segundo = perfiles[ordenados[1][0]];
const tercero = perfiles[ordenados[2][0]];

document.getElementById("arquetipoTitulo").innerText = principal.arquetipo;
document.getElementById("fraseArquetipo").innerText = principal.frase;
document.getElementById("descripcionArquetipo").innerText = principal.descripcion;
document.getElementById("ministerioResultado").innerText = principal.ministerio;
document.getElementById("santoResultado").innerText = "🙏 " + principal.santo;
document.getElementById("simboloResultado").innerText = "✨ " + principal.simbolo;

document.getElementById("segundoLugar").innerText = "🥈 " + segundo.arquetipo;
document.getElementById("tercerLugar").innerText = "🥉 " + tercero.arquetipo;
}
