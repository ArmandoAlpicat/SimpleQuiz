let respuesta = ''
let corretas = ''
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

function getAnswer(){
    let answer=document.querySelector('input[name="respuestas"]:checked');
    if (answer == null){
        return;
    }else{
        let answerV=answer.value;
        if (answerV === respuesta){
            alert("Correct!")
            corretas++
        }else{
            alert("Wrong!")
        }
    }
    
}



for (let i =0;i < preguntas.length; i++){
    document.getElementById('opciones').innerHTML="" // resetear opciones
    document.getElementById("pregunta").innerHTML = preguntas[i].pregunta; // mostrar pregunta
    for (letra in preguntas[i].opciones){
        let radio_label = document.createElement('label'); 
        radio_label.innerHTML = "<input type='radio' id="+letra+"_id"+" name='respuestas'"+" value="+letra+">" + letra + ": " + preguntas[i].opciones[letra]
        document.getElementById('opciones').appendChild(radio_label);  // agregar opciones
        respuesta =  preguntas[i].respuesta;
    }
}   