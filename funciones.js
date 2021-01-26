function calcularTip(percent, money) {

    return (percent * money / 100)
};


function calculateAmountForEachPerson(propina, person) {

    if (propina == 0) {
        return (0)

    } else if (person == 0) {
        return (0)

    }

    return (propina / person);



};


function total(tPropina, mCu) {

    return (tPropina + mCu)
};