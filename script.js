/* =========================
   PREGUNTAS
========================= */

const preguntas = [

{
pregunta: "Cuando entras a un lugar nuevo, tu atención se va primero a…",
opciones: [
{texto:"El ambiente general del lugar", ministerio:"alabanzas"},
{texto:"Las personas y cómo interactúan entre sí", ministerio:"pastores"},
{texto:"Si hay calma o tensión en el ambiente", ministerio:"espiritualidad"},
{texto:"Si todo parece tener un orden claro", ministerio:"tesoreria"},
{texto:"Las ideas o posibilidades que podría tener ese lugar", ministerio:"mercadotecnia"},
{texto:"Lo que no se dice, pero se siente", ministerio:"caridad"},
{texto:"Las conversaciones y lo que significan", ministerio:"predicadores"}
]
},

{
pregunta: "Te incomoda más cuando…",
opciones: [
{texto:"No hay claridad en lo que está pasando", ministerio:"tesoreria"},
{texto:"Las personas se sienten distantes entre sí", ministerio:"pastores"},
{texto:"El ambiente se siente frío o vacío", ministerio:"alabanzas"},
{texto:"Nadie parece escuchar realmente", ministerio:"caridad"},
{texto:"No se entiende el sentido de lo que ocurre", ministerio:"espiritualidad"},
{texto:"Todo parece superficial", ministerio:"predicadores"},
{texto:"No hay nuevas ideas o movimiento", ministerio:"mercadotecnia"}
]
},

{
pregunta: "En momentos de silencio, tú…",
opciones: [
{texto:"Observas lo que te rodea sin juzgar", ministerio:"espiritualidad"},
{texto:"Piensas en las personas que te importan", ministerio:"caridad"},
{texto:"Recuerdas conversaciones o momentos", ministerio:"pastores"},
{texto:"Imaginás cosas nuevas o diferentes escenarios", ministerio:"mercadotecnia"},
{texto:"Ordenas mentalmente tus ideas", ministerio:"tesoreria"},
{texto:"Analizas lo que ocurrió recientemente", ministerio:"predicadores"},
{texto:"Te dejas llevar por lo que sientes", ministerio:"alabanzas"}
]
},

{
pregunta: "Cuando alguien está mal, tú tiendes a…",
opciones: [
{texto:"Quedarte cerca sin decir mucho", ministerio:"pastores"},
{texto:"Buscar aliviar lo que siente", ministerio:"caridad"},
{texto:"Intentar cambiar el ambiente emocional", ministerio:"alabanzas"},
{texto:"Pensar en nuevas formas de ver la situación", ministerio:"mercadotecnia"},
{texto:"Tratar de entender el fondo del problema", ministerio:"predicadores"},
{texto:"Reflexionar sobre lo que significa esa situación", ministerio:"espiritualidad"},
{texto:"Intentar que todo tenga claridad", ministerio:"tesoreria"}
]
},

{
pregunta: "En un grupo, te sientes más tú cuando…",
opciones: [
{texto:"Puedes escuchar sin presión", ministerio:"caridad"},
{texto:"Sientes conexión con las personas", ministerio:"pastores"},
{texto:"El ambiente es tranquilo o significativo", ministerio:"espiritualidad"},
{texto:"Puedes expresar ideas libremente", ministerio:"mercadotecnia"},
{texto:"Hay estructura o claridad", ministerio:"tesoreria"},
{texto:"Hay conversaciones profundas", ministerio:"predicadores"},
{texto:"Hay energía o emoción compartida", ministerio:"alabanzas"}
]
},

{
pregunta: "Cuando ves que algo cambia de repente, tú…",
opciones: [
{texto:"Te adaptas observando primero", ministerio:"espiritualidad"},
{texto:"Piensas en cómo afecta a otros", ministerio:"caridad"},
{texto:"Buscas mantener estabilidad en las personas", ministerio:"pastores"},
{texto:"Piensas en nuevas posibilidades", ministerio:"mercadotecnia"},
{texto:"Reorganizas mentalmente la situación", ministerio:"tesoreria"},
{texto:"Intentas entender la causa", ministerio:"predicadores"},
{texto:"Sientes el impacto emocional del cambio", ministerio:"alabanzas"}
]
},

{
pregunta: "Te describe más la forma en que…",
opciones: [
{texto:"Procesas lo que sientes internamente", ministerio:"espiritualidad"},
{texto:"Te conectas con las personas", ministerio:"pastores"},
{texto:"Te involucras con el bienestar de otros", ministerio:"caridad"},
{texto:"Imaginas cosas nuevas", ministerio:"mercadotecnia"},
{texto:"Organizas tus pensamientos", ministerio:"tesoreria"},
{texto:"Buscas entender profundamente", ministerio:"predicadores"},
{texto:"Expresas emociones con facilidad", ministerio:"alabanzas"}
]
},

{
pregunta: "En una conversación, sueles…",
opciones: [
{texto:"Escuchar más de lo que hablas", ministerio:"caridad"},
{texto:"Leer el ambiente entre las personas", ministerio:"pastores"},
{texto:"Reflexionar antes de responder", ministerio:"espiritualidad"},
{texto:"Pensar en nuevas ideas mientras escuchas", ministerio:"mercadotecnia"},
{texto:"Ordenar mentalmente lo que se dice", ministerio:"tesoreria"},
{texto:"Analizar lo que significa cada cosa", ministerio:"predicadores"},
{texto:"Reaccionar emocionalmente al momento", ministerio:"alabanzas"}
]
},

{
pregunta: "Cuando algo te inspira, normalmente…",
opciones: [
{texto:"Lo piensas profundamente", ministerio:"espiritualidad"},
{texto:"Lo compartes con personas cercanas", ministerio:"pastores"},
{texto:"Te motiva a ayudar a alguien", ministerio:"caridad"},
{texto:"Te da ideas nuevas", ministerio:"mercadotecnia"},
{texto:"Quieres organizarlo o estructurarlo", ministerio:"tesoreria"},
{texto:"Buscas entenderlo a fondo", ministerio:"predicadores"},
{texto:"Lo expresas emocionalmente", ministerio:"alabanzas"}
]
},

{
pregunta: "Cuando estás bajo presión, tú…",
opciones: [
{texto:"Te centras en lo interno", ministerio:"espiritualidad"},
{texto:"Buscas apoyo en personas cercanas", ministerio:"pastores"},
{texto:"Intentas mantener la calma emocional del entorno", ministerio:"alabanzas"},
{texto:"Piensas en soluciones creativas", ministerio:"mercadotecnia"},
{texto:"Ordenas lo urgente primero", ministerio:"tesoreria"},
{texto:"Analizas el problema", ministerio:"predicadores"},
{texto:"Te enfocas en ayudar a otros", ministerio:"caridad"}
]
},

{
pregunta: "Te resulta más natural…",
opciones: [
{texto:"Reflexionar sobre la vida", ministerio:"espiritualidad"},
{texto:"Acompañar a personas", ministerio:"pastores"},
{texto:"Cuidar a quienes lo necesitan", ministerio:"caridad"},
{texto:"Crear o imaginar cosas nuevas", ministerio:"mercadotecnia"},
{texto:"Mantener el orden", ministerio:"tesoreria"},
{texto:"Explicar ideas", ministerio:"predicadores"},
{texto:"Expresar emociones", ministerio:"alabanzas"}
]
},

{
pregunta: "Cuando alguien te cuenta algo importante, tú…",
opciones: [
{texto:"Escuchas con atención real", ministerio:"caridad"},
{texto:"Notas cómo se siente", ministerio:"pastores"},
{texto:"Piensas en el significado detrás", ministerio:"espiritualidad"},
{texto:"Analizas lo que está diciendo", ministerio:"predicadores"},
{texto:"Imaginas nuevas perspectivas", ministerio:"mercadotecnia"},
{texto:"Ordenas la información mentalmente", ministerio:"tesoreria"},
{texto:"Respondes desde la emoción", ministerio:"alabanzas"}
]
},

{
pregunta: "En tu día a día, sueles…",
opciones: [
{texto:"Reflexionar sin darte cuenta", ministerio:"espiritualidad"},
{texto:"Pensar en los demás", ministerio:"caridad"},
{texto:"Conectar con personas cercanas", ministerio:"pastores"},
{texto:"Tener ideas nuevas constantemente", ministerio:"mercadotecnia"},
{texto:"Buscar orden en las cosas", ministerio:"tesoreria"},
{texto:"Analizar lo que ocurre", ministerio:"predicadores"},
{texto:"Vivir lo emocional intensamente", ministerio:"alabanzas"}
]
},

{
pregunta: "Lo que más valoras en un grupo es…",
opciones: [
{texto:"La paz interior", ministerio:"espiritualidad"},
{texto:"La cercanía entre personas", ministerio:"pastores"},
{texto:"El apoyo mutuo", ministerio:"caridad"},
{texto:"La creatividad", ministerio:"mercadotecnia"},
{texto:"La organización", ministerio:"tesoreria"},
{texto:"La comprensión", ministerio:"predicadores"},
{texto:"La energía emocional", ministerio:"alabanzas"}
]
},

{
pregunta: "Cuando piensas en el futuro, tú…",
opciones: [
{texto:"Reflexionas sobre su sentido", ministerio:"espiritualidad"},
{texto:"Piensas en las personas que te rodean", ministerio:"caridad"},
{texto:"Imaginas cómo cambiarán las relaciones", ministerio:"pastores"},
{texto:"Visualizas ideas nuevas", ministerio:"mercadotecnia"},
{texto:"Planeas de forma estructurada", ministerio:"tesoreria"},
{texto:"Buscas entenderlo profundamente", ministerio:"predicadores"},
{texto:"Lo sientes emocionalmente", ministerio:"alabanzas"}
]
},

{
pregunta: "En general, tú eres alguien que…",
opciones: [
{texto:"Reflexiona mucho", ministerio:"espiritualidad"},
{texto:"Cuida a los demás", ministerio:"caridad"},
{texto:"Acompaña a personas", ministerio:"pastores"},
{texto:"Crea ideas", ministerio:"mercadotecnia"},
{texto:"Organiza", ministerio:"tesoreria"},
{texto:"Analiza", ministerio:"predicadores"},
{texto:"Siente intensamente", ministerio:"alabanzas"}
]
}

];

/* =========================
   VARIABLES
========================= */

let i=0;
let sel=null;

let puntos={
espiritualidad:0,
pastores:0,
caridad:0,
alabanzas:0,
mercadotecnia:0,
tesoreria:0,
predicadores:0
};

const coloresMinisterio = {
espiritualidad: "#3a7bd5",
pastores: "#4cd137",
caridad: "#e84118",
alabanzas: "#fbc531",
mercadotecnia: "#9c88ff",
tesoreria: "#00a8ff",
predicadores: "#8c7ae6"
};

let colorActual = "#7b2ff7";

/* =========================
   INICIO
========================= */

function iniciarTest(){
document.getElementById("inicio").style.display="none";
document.getElementById("test").style.display="block";
mostrar();
}

/* =========================
   MOSTRAR PREGUNTA
========================= */

function mostrar(){

let p=preguntas[i];

document.getElementById("pregunta").innerText=p.pregunta;

let cont=document.getElementById("opciones");
cont.innerHTML="";

p.opciones.forEach(op=>{
let div=document.createElement("div");
div.classList.add("opcion");
div.innerText=op.texto;

div.onclick=()=>{
sel=op.ministerio;

document.querySelectorAll(".opcion")
.forEach(o=>o.classList.remove("seleccionada"));

div.classList.add("seleccionada");
};

cont.appendChild(div);
});
}

/* =========================
   SIGUIENTE
========================= */

function siguientePregunta(){

if(!sel){
alert("Selecciona una opción");
return;
}

puntos[sel]++;
i++;
sel=null;

if(i<preguntas.length){
mostrar();
}else{
mostrarResultado();
}
}

/* =========================
   RESULTADO
========================= */

function mostrarResultado(){

document.getElementById("test").style.display = "none";
document.getElementById("resultado").style.display = "flex";

let ordenados = Object.entries(puntos).sort((a,b)=>b[1]-a[1]);

let principal = ordenados[0][0];

let perfiles = {

espiritualidad:{
arquetipo:"Peregrino Espiritual",
ministerio:"Espiritualidad",
santo:"San Ignacio de Loyola",
simbolo:"🕊️",
descripcion:"Buscas profundidad y sentido."
},

pastores:{
arquetipo:"Guía del Corazón",
ministerio:"Pastores",
santo:"San Juan Bosco",
simbolo:"🐑",
descripcion:"Acompañas a las personas."
},

caridad:{
arquetipo:"Servidor del Amor",
ministerio:"Caridad",
santo:"Santa Teresa de Calcuta",
simbolo:"❤️",
descripcion:"Sirves con amor."
},

alabanzas:{
arquetipo:"Mensajero de Alegría",
ministerio:"Alabanzas",
santo:"Santa Cecilia",
simbolo:"🎵",
descripcion:"Expresas alegría."
},

mercadotecnia:{
arquetipo:"Creador de Visión",
ministerio:"Mercadotecnia",
santo:"San Carlo Acutis",
simbolo:"🎨",
descripcion:"Creas ideas."
},

tesoreria:{
arquetipo:"Constructor de Orden",
ministerio:"Tesorería",
santo:"San Mateo",
simbolo:"📊",
descripcion:"Organizas todo."
},

predicadores:{
arquetipo:"Portador de Sabiduría",
ministerio:"Predicadores",
santo:"Santo Tomás de Aquino",
simbolo:"📖",
descripcion:"Enseñas la fe."
}

};

let p = perfiles[principal];

document.getElementById("arquetipoTitulo").innerText =
p.arquetipo;

document.getElementById("fraseArquetipo").innerText =
p.descripcion;

document.getElementById("simboloGrande").innerText =
p.simbolo;

document.getElementById("ministerioResultado").innerText =
p.ministerio;

document.getElementById("santoResultado").innerText =
p.santo;

document.getElementById("simboloResultado").innerText =
p.simbolo;

document.getElementById("segundoLugar").innerText =
"2° Afinidad: " + ordenados[1][0];

document.getElementById("tercerLugar").innerText =
"3° Afinidad: " + ordenados[2][0];

/* COLORES AUTOMÁTICOS */

let color = coloresMinisterio[principal];


colorActual = color;

document.getElementById("wrappedCard").style.border =
`2px solid ${color}`;

document.getElementById("simboloGrande").style.color =
color;

const label = document.querySelector(".wrapped-label");

if(label){
label.style.color = color;
}

document.body.style.background =
`radial-gradient(circle at top,
${color} 0%,
#1a0f2e 60%,
#0b0b12 100%)`;

}

/* =========================
   DESCARGA WRAPPED
========================= */

function compartirImagen() {

const botones =
document.querySelectorAll("button");

const selector =
document.querySelector(".selector-colores");

botones.forEach(b=>{
b.style.display="none";
});

if(selector){
selector.style.display="none";
}

const card =
document.getElementById("wrappedCard");

html2canvas(card,{
scale:4,
useCORS:true,
backgroundColor:null
})
.then(canvas=>{

const link =
document.createElement("a");

link.download="PJ-Wrapped.png";

link.href =
canvas.toDataURL("image/png");

link.click();

botones.forEach(b=>{
b.style.display="";
});

if(selector){
selector.style.display="flex";
}
 const disclaimer =
document.querySelector(".disclaimer");

if(disclaimer){
disclaimer.style.display="none";
}

});

}

/* =========================
   COPIAR
========================= */

function copiarResultado(){

const texto=
`✨ PJ WRAPPED ✨\n\n`+
document.getElementById("arquetipoTitulo").innerText+"\n"+
document.getElementById("fraseArquetipo").innerText;

navigator.clipboard.writeText(texto);
alert("Copiado");
}

function cambiarColor(color){

colorActual = color;

document.getElementById("wrappedCard").style.border =
`2px solid ${color}`;

document.getElementById("simboloGrande").style.color =
color;

document.getElementById("wrappedCard").style.background =
`linear-gradient(
180deg,
${color}22 0%,
#24133a 100%
)`;

const label =
document.querySelector(".wrapped-label");

if(label){
label.style.color = color;
}

document.body.style.background =
`radial-gradient(circle at top,
${color} 0%,
#1a0f2e 60%,
#0b0b12 100%)`;
}
