function Calculadora() {
    // let $btnCalcular = document.getElementByI("#btn-calcular")
    let $form = document.getElementById("formCal")


    document.addEventListener("submit", (e) => {
        e.preventDefault();
        if ($form) {

            let select = document.getElementById('select1');
            let n1 = document.getElementById("n1").value
            let n2 = document.getElementById('n2').value;
            numero1 = parseInt(n1)
            numero2 = parseInt(n2)
            let $inputresultado = document.getElementById("total1")

            console.log(select)

            if (select.value === 'Suma') {
                let resultado = numero1 + numero2;
                let total = resultado.toString()
                $inputresultado.value = total;
            } else if (select.value === 'Resta') {
                let resultado = numero1 - numero2;
                let total = resultado.toString()
                $inputresultado.value = total;
            } else if (select.value === 'Multiplicacion') {
                let resultado = numero1 * numero2;
                let total = resultado.toString()
                $inputresultado.value = total;
            } else if (select.value === 'Division') {
                let resultado = numero1 / numero2;
                let total = resultado.toString()
                $inputresultado.value = total;
            } else if (select.value === 'Encontrar-Modulo') {
                let resultado = numero1 % numero2;
                let total = resultado.toString()
                $inputresultado.value = total;
            }
        }
    })

}

Calculadora()

