const btncalcular = document.getElementById('btn');

function calcular() {

    let soles = (document.getElementById("soles").value || 0);
    let personas = (document.getElementById("personas").value || 0);
    let porciento = (document.getElementById("porciento").value || 0);


    let plata = parseFloat(soles);
    let porcentaje = parseFloat(porciento);
    let people = parseInt(personas);




    let tip = calcularTip(porcentaje, plata);

    document.getElementById('tip').innerHTML = " s/. " + tip.toFixed(1);




    let eachPerson = calculateAmountForEachPerson(tip, people);

    document.getElementById('cadauno').innerHTML = " s/.  " + eachPerson.toFixed(2);



    let todo = total(plata, tip);

    document.getElementById('resultado').innerHTML = " s/.  " + todo.toFixed(1);





};




btncalcular.addEventListener('click', calcular, true);