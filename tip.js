let btncalcular = document.getElementById('btn');



function calcular() {

    let soles = (+document.getElementById("soles").value || 0);
    let personas = (+document.getElementById("personas").value || 0);
    let porciento = (+document.getElementById("porciento").value || 0);


    let plata = parseFloat(soles);
    let porcentaje = parseFloat(porciento);
    let people = parseInt(personas);


    document.getElementById('tip').innerHTML = " s/.  " + (porcentaje * plata / 100).toFixed(1);

    document.getElementById('resultado').innerHTML = " s/.  " + (plata + porcentaje).toFixed(2);

    document.getElementById('cadauno').innerHTML = " s/.  " + (porcentaje * plata / 100 / people).toFixed(2);




}


btncalcular.addEventListener('click', calcular, true);