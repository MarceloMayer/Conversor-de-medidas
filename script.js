//comprimento

function transformar() {
    //seleções
    let valorInformado = document.getElementById('valor')
    let valor1 = document.getElementById('primeiro-valor')
    let valor2 = document.getElementById('segundo-valor')
    let resposta = document.getElementById('resultado')

    //manipulação de dados selecionados
    //valorNumerico é o número informado no input
    valorNumerico = parseFloat(valorInformado.value)


    v1 = valor1.value
    v2 = valor2.value
    console.log(v1)//metro, kilometro, milimetro 
    console.log(v2)

    //lógica da conversão 

    //condição p/ fazer a transformação.. deve informar um valor
    if (valorInformado.value === '') {
        resposta.innerHTML = 'informe um valor'
        console.log('informe um valor')
    } else {
        //metro p/ milimetro
        if (v1 == "metro" && v2 == "milimetro") {
            resposta.innerHTML = (valorNumerico * 100) + 'mm'
            //milimetro p/ metro  
        } else if (v1 == "milimetro" && v2 == "metro") {
            resposta.innerHTML = (valorNumerico / 100) + 'm'
            //metro p/ kilometro
        } else if (v1 == "metro" && v2 == "kilometro") {
            resposta.innerHTML = (valorNumerico / 1000) + 'km'
            //kilometro p/ metro
        } else if (v1 == "kilometro" && v2 == "metro") {
            resposta.innerHTML = (valorNumerico * 1000) + 'm'
            //milimetro p/ kilometro
        } else if (v1 == "milimetro" && v2 == "kilometro") {
            resposta.innerHTML = (valorNumerico / 1000000) + 'km'
            //kilometro p/ milimetro
        } else if (v1 == "kilometro" && v2 == "milimetro") {
            resposta.innerHTML = (valorNumerico * 1000000) + 'mm'

            //casos em que não há conversão ex: metro para metro
        } else if (v1 == v2 && v1 == "metro") {
            resposta.innerHTML = (valorNumerico) + 'm'
        } else if (v1 == v2 && v1 == "kilometro") {
            resposta.innerHTML = (valorNumerico) + 'km'
        } else if (v1 == v2 && v1 == "milimetro") {
            resposta.innerHTML = (valorNumerico) + 'mm'
        }
    }
}

//temperatura

function transformar2() {
    //seleções
    let valorInformado2 = document.getElementById('valor2')
    let valor3 = document.getElementById('primeiro-valor2')
    let valor4 = document.getElementById('segundo-valor2')
    let resposta2 = document.getElementById('resultado2')

    //manipulação de dados selecionados
    //valorNumerico é o número informado no input
    valorNumerico2 = parseFloat(valorInformado2.value)


    v3 = valor3.value
    v4 = valor4.value
    console.log(v3)//celsius kelvin, fahrenheit
    console.log(v4)

    //lógica da conversão 

    //condição p/ fazer a transformação.. deve informar um valor
    if (valorInformado2.value === '') {
        resposta2.innerHTML = 'informe um valor'
        console.log('informe um valor')
    } else {
        //celsius p/ kelvin    ok
        if (v3 == "celsius" && v4 == "kelvin") {
            resposta2.innerHTML = (valorNumerico2 + 273.15).toFixed(2) + 'K'


            //celsius p/ fahrenheit    ok
        } else if (v3 == "celsius" && v4 == "fahrenheit") {
            resposta2.innerHTML = ((valorNumerico2 * 1.8) + 32).toFixed(2) + '°F'



            //kelvin p/ celsius    ok
        } else if (v3 == "kelvin" && v4 == "celsius") {
            resposta2.innerHTML = (valorNumerico2 - 273.15).toFixed(2) + '°C'



            //kelvin p/ fahrenheit    ok
        } else if (v3 == "kelvin" && v4 == "fahrenheit") {
            resposta2.innerHTML = ((valorNumerico2-273.15 )*1.8 +32).toFixed(2) + '°F'



            //fahrenheit  p/ celsius      ok
        } else if (v3 == "fahrenheit" && v4 == "celsius") {
            resposta2.innerHTML = ((valorNumerico2 - 32) / 1.8).toFixed(2) + '°C'



            //fahrenheit  p/ kelvin
        } else if (v3 == "fahrenheit" && v4 == "kelvin") {
            resposta2.innerHTML = ((valorNumerico2 - 32) * 0.55 +273).toFixed(2) + 'K'
        }

        //casos em que não há conversão ex: metro para metro
        
     else if (v3 == v4 && v3 == "celsius") {
        resposta2.innerHTML = (valorNumerico2) + '°C'
    } else if (v3 == v4 && v3 == "fahrenheit") {
        resposta2.innerHTML = (valorNumerico2) + '°F'
    } else if (v3 == v4 && v3 == "kelvin") {
        resposta2.innerHTML = (valorNumerico2) + 'K'
    }

    }

}