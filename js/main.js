let respuestaA = 0, respuestaB = 0, respuesta, resultRespuesta = 0, cont = 1,
    pregunta,reintentos = 1



cuestionario(5)


// funciones


function cuestionario(nroDePreguntas) {
    alert("Como saber si sos un o una psicopata con tan solo con 5 preguntas")
    do {
        console.log("nro de pregunta ", cont)
        preguntas(cont)
        manejarRespuesta(respuesta)
        cont++
        console.log("Respuesta despues de validar", respuesta)
        console.log("variable resultRespuesta =", resultRespuesta)
    } while ((resultRespuesta == 1) && (cont <= nroDePreguntas))
    resultadoPreguntas(respuestaA, respuestaB)
}

function manejarRespuesta(valor) {
    if ((valor) && (valor.toLowerCase() == "a" | valor.toLowerCase() == "b")) {
        if (valor.toLowerCase() == "a") {
            respuestaA++
            console.log("respuesta A = " + respuestaA + "\n" + "respuesta B =" + respuestaB);
            return resultRespuesta = 1,reintentos = 1
        }
        else {
            respuestaB++
            console.log("respuesta A = " + respuestaA + "\n" + "respuesta B =" + respuestaB);
            return resultRespuesta = 1,reintentos = 1
        }
    }
    else {
        resultRespuesta = 0
        manejoErrorIngreso()
    }
}


function preguntas(numeroPregunta) {
    pregunta = "¿Qué Prefieres?:\n"
    switch (numeroPregunta) {
        case 1: pregunta += "A. Qué te encarcelen por algo que no hiciste\nB. Que encarcelen a tu mejor amigo por algo que hiciste vos"
            break
        case 2: pregunta += "A. Olvidar a las poersonas que conoces\nB. olvidar quien sos"
            break
        case 3: pregunta += "A. Volar?\nB. Ser invisible"
            break
        case 4: pregunta += "A. Que tu jefe te encuentre masturbandote\nB. Encontrar a tu abuela/o masturbandose"
            break
        case 5: pregunta += "A. Despertarte desnudo en un bosque a 8 km de tu casa\nB. Ir todos los días en ropa interior al trabajo"
            break
    }
    respuesta = prompt(pregunta)
    console.log("Respuesta ingresada", respuesta)
}

function manejoErrorIngreso() {
    console.log("reintento x mal ingreso  nro " + reintentos)
    while ((resultRespuesta == 0)&&(reintentos < 3)) {              
            reintentos++        
            alert("Ingresaste mal, las opciones son A o B")
            preguntas(cont)
            manejarRespuesta(respuesta)
        }              
}


function resultadoPreguntas(respuestaA, respuestaB) {
    if ((respuestaA > respuestaB) && (respuestaA + respuestaB === 5)) {
        switch (respuestaA) {
            case 3: alert("Safaste no sos un/a psicopata")
                break
            case 4: alert("Bajo autoestima, pero psicopata no")
                break
            case 5: alert("Hábil declarante sos un/a psicópata")
                break
        }

    }
    else {


        if ((respuestaB > respuestaA) && (respuestaA + respuestaB === 5)) {
            switch (respuestaB) {
                case 3: alert("Safaste no sos un/a psicopata")
                    break
                case 4: alert("Estas en plan de matar a tu mascota")
                    break
                case 5: alert("Tenes 2 cadáveres en el sótano")
                    break
            }
        }
        else {
            alert("Muchos errores sos un/a psicopata")
        }
    }

}

