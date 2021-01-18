const PONTEIROHORA = document.querySelector("#hour");
const PONTEIROMINUTO = document.querySelector("#minute");
const PONTEIROSEGUNDO = document.querySelector("#second");

var date = new Date()
//console.log(data)

let hour = date.getHours()
let minutes = date.getMinutes()
let seconds =  date.getSeconds()


let posicaoHr = (hour * 360) / 12 + ((minutes * 360) / 60) / 12
let posicaoMin = (minutes * 360) / 60 + ((seconds * 360) / 60) / 60
let posicaoSeg = (seconds * 360) / 60



PONTEIROHORA.style.transform = "rotate(" + posicaoHr + "deg)"
PONTEIROMINUTO.style.transform = "rotate(" + posicaoMin + "deg)"
PONTEIROSEGUNDO.style.transform =  "rotate(" + posicaoSeg + "deg)"