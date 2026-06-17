alert("SCRIPT CARGADO");
const preguntas = [
{
pregunta: "Cuando llegas a un lugar nuevo, normalmente tú...",
opciones: [
{texto:"Observas cómo se sienten las personas.", ministerio:"pastores"},
{texto:"Detectas si alguien necesita ayuda.", ministerio:"caridad"},
{texto:"Sientes la energía del ambiente.", ministerio:"alabanzas"},
{texto:"Piensas en ideas o mejoras.", ministerio:"mercadotecnia"},
{texto:"Notas si todo está en orden.", ministerio:"tesoreria"},
{texto:"Reflexionas sobre el propósito del lugar.", ministerio:"espiritualidad"},
{texto:"Intentas entender la situación general.", ministerio:"predicadores"}
]
},

{
pregunta: "En un grupo, normalmente tú eres quien...",
opciones: [
{texto:"Escucha cuando alguien necesita hablar.", ministerio:"pastores"},
{texto:"Ayuda sin que se lo pidan.", ministerio:"caridad"},
{texto:"Motiva al grupo.", ministerio:"alabanzas"},
{texto:"Propone ideas nuevas.", ministerio:"mercadotecnia"},
{texto:"Organiza lo necesario.", ministerio:"tesoreria"},
{texto:"Reflexiona sobre lo que está pasando.", ministerio:"espiritualidad"},
{texto:"Aclara dudas o explica.", ministerio:"predicadores"}
]
},

{
pregunta: "Te sientes más cómodo cuando...",
opciones: [
{texto:"Hay armonía entre las personas.", ministerio:"pastores"},
{texto:"Puedes ayudar a alguien.", ministerio:"caridad"},
{texto:"Hay energía positiva.", ministerio:"alabanzas"},
{texto:"Puedes crear algo.", ministerio:"mercadotecnia"},
{texto:"Todo está organizado.", ministerio:"tesoreria"},
{texto:"Puedes pensar con calma.", ministerio:"espiritualidad"},
{texto:"Puedes aprender o enseñar algo.", ministerio:"predicadores"}
]
},

{
pregunta: "Cuando alguien tiene un problema, tú...",
opciones: [
{texto:"Lo escuchas con atención.", ministerio:"pastores"},
{texto:"Intentas ayudar directamente.", ministerio:"caridad"},
{texto:"Lo animas.", ministerio:"alabanzas"},
{texto:"Piensas en soluciones creativas.", ministerio:"mercadotecnia"},
{texto:"Organizas un plan.", ministerio:"tesoreria"},
{texto:"Tratas de entender la raíz del problema.", ministerio:"espiritualidad"},
{texto:"Le explicas la situación.", ministerio:"predicadores"}
]
},

{
pregunta: "Cuando trabajas en equipo, prefieres...",
opciones: [
{texto:"Apoyar emocionalmente.", ministerio:"pastores"},
{texto:"Hacer tareas de ayuda.", ministerio:"caridad"},
{texto:"Mantener el ambiente activo.", ministerio:"alabanzas"},
{texto:"Aportar ideas creativas.", ministerio:"mercadotecnia"},
{texto:"Coordinar el trabajo.", ministerio:"tesoreria"},
{texto:"Analizar el objetivo.", ministerio:"espiritualidad"},
{texto:"Explicar lo que hay que hacer.", ministerio:"predicadores"}
]
},

{
pregunta: "Cuando tienes tiempo libre, prefieres...",
opciones: [
{texto:"Estar con personas cercanas.", ministerio:"pastores"},
{texto:"Ayudar en algo útil.", ministerio:"caridad"},
{texto:"Escuchar música o expresarte.", ministerio:"alabanzas"},
{texto:"Crear o diseñar algo.", ministerio:"mercadotecnia"},
{texto:"Organizar tus cosas.", ministerio:"tesoreria"},
{texto:"Reflexionar o pensar.", ministerio:"espiritualidad"},
{texto:"Aprender algo nuevo.", ministerio:"predicadores"}
]
},

{
pregunta: "Te motiva más...",
opciones: [
{texto:"Acompañar a otros.", ministerio:"pastores"},
{texto:"Servir a quien lo necesita.", ministerio:"caridad"},
{texto:"Transmitir alegría.", ministerio:"alabanzas"},
{texto:"Crear ideas nuevas.", ministerio:"mercadotecnia"},
{texto:"Lograr orden y estructura.", ministerio:"tesoreria"},
{texto:"Buscar sentido profundo.", ministerio:"espiritualidad"},
{texto:"Comprender la verdad.", ministerio:"predicadores"}
]
},

{
pregunta: "En situaciones difíciles, tú...",
opciones: [
{texto:"Te preocupas por las personas.", ministerio:"pastores"},
{texto:"Actúas para ayudar.", ministerio:"caridad"},
{texto:"Buscas mantener ánimo.", ministerio:"alabanzas"},
{texto:"Buscas soluciones creativas.", ministerio:"mercadotecnia"},
{texto:"Organizas lo necesario.", ministerio:"tesoreria"},
{texto:"Reflexionas antes de actuar.", ministerio:"espiritualidad"},
{texto:"Analizas la situación.", ministerio:"predicadores"}
]
},

{
pregunta: "Cuando aprendes algo nuevo, prefieres...",
opciones: [
{texto:"Entender cómo afecta a las personas.", ministerio:"pastores"},
{texto:"Aplicarlo ayudando a otros.", ministerio:"caridad"},
{texto:"Expresarlo de forma creativa.", ministerio:"alabanzas"},
{texto:"Transformarlo en ideas nuevas.", ministerio:"mercadotecnia"},
{texto:"Ordenarlo paso a paso.", ministerio:"tesoreria"},
{texto:"Profundizar su significado.", ministerio:"espiritualidad"},
{texto:"Explicarlo claramente.", ministerio:"predicadores"}
]
},

{
pregunta: "En un proyecto, tú eres quien...",
opciones: [
{texto:"Apoya emocionalmente.", ministerio:"pastores"},
{texto:"Ayuda en lo necesario.", ministerio:"caridad"},
{texto:"Mantiene motivación.", ministerio:"alabanzas"},
{texto:"Aporta creatividad.", ministerio:"mercadotecnia"},
{texto:"Organiza tareas.", ministerio:"tesoreria"},
{texto:"Reflexiona sobre el sentido.", ministerio:"espiritualidad"},
{texto:"Explica procesos.", ministerio:"predicadores"}
]
},

{
pregunta: "Cuando ves a alguien solo, tú...",
opciones: [
{texto:"Te acercas a acompañarlo.", ministerio:"pastores"},
{texto:"Intentas ayudarlo.", ministerio:"caridad"},
{texto:"Le das ánimo.", ministerio:"alabanzas"},
{texto:"Piensas cómo integrarlo.", ministerio:"mercadotecnia"},
{texto:"Evalúas la situación.", ministerio:"tesoreria"},
{texto:"Reflexionas sobre su estado.", ministerio:"espiritualidad"},
{texto:"Le hablas o explicas algo.", ministerio:"predicadores"}
]
},

{
pregunta: "Tu forma de pensar suele ser más...",
opciones: [
{texto:"Empática.", ministerio:"pastores"},
{texto:"Práctica.", ministerio:"caridad"},
{texto:"Expresiva.", ministerio:"alabanzas"},
{texto:"Creativa.", ministerio:"mercadotecnia"},
{texto:"Organizada.", ministerio:"tesoreria"},
{texto:"Profunda.", ministerio:"espiritualidad"},
{texto:"Analítica.", ministerio:"predicadores"}
]
},

{
pregunta: "Te sientes útil cuando...",
opciones: [
{texto:"Acompañas a alguien.", ministerio:"pastores"},
{texto:"Ayudas directamente.", ministerio:"caridad"},
{texto:"Animás a otros.", ministerio:"alabanzas"},
{texto:"Creas algo nuevo.", ministerio:"mercadotecnia"},
{texto:"Organizas algo.", ministerio:"tesoreria"},
{texto:"Reflexionas sobre algo importante.", ministerio:"espiritualidad"},
{texto:"Explicas o enseñas.", ministerio:"predicadores"}
]
},

{
pregunta: "Cuando algo no está funcionando, tú...",
opciones: [
{texto:"Te enfocas en las personas.", ministerio:"pastores"},
{texto:"Buscas ayudar.", ministerio:"caridad"},
{texto:"Intentas mantener el ánimo.", ministerio:"alabanzas"},
{texto:"Piensas en ideas nuevas.", ministerio:"mercadotecnia"},
{texto:"Reorganizas todo.", ministerio:"tesoreria"},
{texto:"Reflexionas antes de actuar.", ministerio:"espiritualidad"},
{texto:"Analizas el problema.", ministerio:"predicadores"}
]
},

{
pregunta: "Cuando trabajas bajo presión, tú...",
opciones: [
{texto:"Apoyas al equipo.", ministerio:"pastores"},
{texto:"Ayudas en lo necesario.", ministerio:"caridad"},
{texto:"Mantienes energía positiva.", ministerio:"alabanzas"},
{texto:"Buscas soluciones creativas.", ministerio:"mercadotecnia"},
{texto:"Te organizas rápidamente.", ministerio:"tesoreria"},
{texto:"Te tomas un momento para pensar.", ministerio:"espiritualidad"},
{texto:"Analizas con calma.", ministerio:"predicadores"}
]
},

{
pregunta: "Lo que más valoras en un grupo es...",
opciones: [
{texto:"La unión emocional.", ministerio:"pastores"},
{texto:"El servicio.", ministerio:"caridad"},
{texto:"La alegría.", ministerio:"alabanzas"},
{texto:"La creatividad.", ministerio:"mercadotecnia"},
{texto:"El orden.", ministerio:"tesoreria"},
{texto:"La profundidad.", ministerio:"espiritualidad"},
{texto:"La claridad.", ministerio:"predicadores"}
]
},

{
pregunta: "Al final del día, tú sientes que...",
opciones: [
{texto:"Acompañaste a alguien.", ministerio:"pastores"},
{texto:"Ayudaste a alguien.", ministerio:"caridad"},
{texto:"Animaste a otros.", ministerio:"alabanzas"},
{texto:"Creaste algo.", ministerio:"mercadotecnia"},
{texto:"Organizaste algo.", ministerio:"tesoreria"},
{texto:"Reflexionaste sobre tu día.", ministerio:"espiritualidad"},
{texto:"Aprendiste algo.", ministerio:"predicadores"}
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
