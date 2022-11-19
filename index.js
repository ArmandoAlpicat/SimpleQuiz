let respuesta = ''
let corretas = ''
let preguntaNum= '0'
let preguntas = [
    {
        pregunta: 'cuanto es 2+2?',
        opciones: {
            a: '2',
            b: '5',
            c: '4',
        },
        respuesta:'c',
    },
    {
        pregunta: 'cuanto es 3+2?',
        opciones: {
            a: '2',
            b: '5',
            c: '4',
        },
        respuesta:'b',
    },
    {
        pregunta: 'cuanto es 5-3?',
        opciones: {
            a: '2',
            b: '5',
            c: '4',
        },
        respuesta:'a',
    },
];


function finalscore(){
    let score = ((corretas/preguntas.length)*100).toFixed(2)
    let final_S = document.getElementById('resultado');
    if (score>70){
        final_S.innerHTML="<div style='background-color:#48C9B0; border-radius: 10px; padding:10px'>"+"Nota: "+score +"</div>"
    }else{
        final_S.innerHTML="<div style='background-color:#EC7063; border-radius: 10px; padding:10px'>"+"Nota: "+score +"</div>"
    }
}

function getAnswer(){
    let answer=document.querySelector('input[name="respuestas"]:checked');
    let correctoSN = document.getElementById('respuesta');
    correctoSN.innerHTML = ""
    if (answer == null){
        return;
    }else{
        let answerV=answer.value;
        if (answerV === respuesta){
            correctoSN.innerHTML="<div style='background-color:#48C9B0; border-radius: 10px; padding:10px'>Correcto</div>"
            corretas++
        }else{
            correctoSN.innerHTML="<div style='background-color:#EC7063; border-radius: 10px; padding:10px'>Incorrecto</div>"
        }
    }
    if (preguntaNum == preguntas.length){
        finalscore()
    }else{
        crearPreguntas()
    }
    setTimeout(()=>{correctoSN.innerHTML = ""},1000);
}

function crearPreguntas(){
    document.getElementById('opciones').innerHTML="" // resetear opciones
    document.getElementById("pregunta").innerHTML = preguntas[preguntaNum].pregunta;
   
    for (letra in preguntas[preguntaNum].opciones){
        let radio_label = document.createElement('label'); 
        radio_label.innerHTML = "<input type='radio' id="+letra+"_id"+" style='margin-top: 25px'"+" name='respuestas'"+" value="+letra+">" + letra + ": " + preguntas[preguntaNum].opciones[letra]
        document.getElementById('opciones').appendChild(radio_label);  // agregar opciones
        respuesta =  preguntas[preguntaNum].respuesta;
    }
    preguntaNum++
}

crearPreguntas();