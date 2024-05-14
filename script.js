function diferençaEntreVariaveis() {
    const numero1 = parseFloat(document.getElementById('x').value);
    const numero2 = parseFloat(document.getElementById('y').value);

    if (numero1 > numero2) {
        document.getElementById('resultado1a').innerHTML = numero1 - numero2;

    } 
    else if (numero1 == numero2) {
        document.getElementById('resultado1a').innerHTML  = 0;
    }
    else{
        document.getElementById('resultado1a').innerHTML  = numero2 - numero1;
    }

}

function dobroXmaisTriploY() {

    const numero1 = parseFloat(document.getElementById('x').value);
    const numero2 = parseFloat(document.getElementById('y').value);
    document.getElementById('resultado1b').innerText  = (2 * numero1 + 3 * numero2);
}

function multEDivXY() {
    const numero1 = parseFloat(document.getElementById('x').value);
    const numero2 = parseFloat(document.getElementById('y').value); 

    document.getElementById('resultado1c').innerText = numero1 * numero2;

}

function colocaEmOrdem() {
    const numero1 = parseFloat(document.getElementById('x').value);
    const numero2 = parseFloat(document.getElementById('y').value);

    if (numero1 > numero2) {
        document.getElementById('resultado1d').innerHTML = numero1 + ', ' + numero2;

    } 
    else if (numero1 == numero2) {
        document.getElementById('resultado1d').innerHTML  = numero1 + ', ' + numero2;
    }
    else{
        document.getElementById('resultado1d').innerHTML  = (numero2 + ', ' + numero1);
    }

}

function calculoINSS() {
    const nome1 = document.getElementById('nome').value;
    const salario = parseFloat(document.getElementById('salarioBruto').value);
    const valorINSS = salario * 0.08;
    const salarioLiq = salario - valorINSS;

    document.getElementById('nomee').innerText = nome1;
    document.getElementById('salarioBrutoo').innerText = salario;
    document.getElementById('valorINSS').innerText = valorINSS;
    document.getElementById('salarioLiq').innerText = salarioLiq;
   
}


function descontoINSSporSalario() {
    const salario2 = parseFloat(document.getElementById('salarioBruto').value);
    const nome3 = document.getElementById('nome').value;
    console.log("Vamos calcular seu desconto do INSS baseado no quanto você ganha!")


    if (salario2 < 1000.01 ) {
        const valorDesconto = salario2 * 0.08;
        console.log("Seu nome: " + nome3)
        console.log("O valor do desconto é de: R$" + valorDesconto)
        const salarioDescontado = salario2 - valorDesconto
        console.log("O seu salário já descontado é de: R$" + salarioDescontado)

    }
    else if (salario2 > 1500 ){
        const valorDesconto = salario2 * 0.09;
        console.log("Seu nome: " + nome3)
        console.log("O valor do desconto é de: R$" + valorDesconto)
        const salarioDescontado = salario2 - valorDesconto
        console.log("O seu salário já descontado é de: R$" + salarioDescontado)
        
    }
    else {
        const valorDesconto = salario2 * 0.085;
        console.log("Seu nome: " + nome3)
        console.log("O valor do desconto é de: R$" + valorDesconto)
        const salarioDescontado = salario2 - valorDesconto
        console.log("O seu salário já descontado é de: R$" + salarioDescontado)
    }

    // document.getElementById('').innerText = salario2;
    // document.getElementById('').innerText = salarioDescontado;
    // document.getElementById('').innerText = 

}




