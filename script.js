console.log('Script carregado!')

function validaCPF(cpf) {

    console.log(cpf.length)

    if(cpf.length != 11) {
        return false
    } else {
        var numeros = cpf.substring(0, 9)
        var digitos = cpf.substring(9)

        console.log(`Números do CPF: ${numeros}\nDígitos do CPF: ${digitos}`)

        var soma = 0

        for (var i = 10; i > 1; i--) {
            soma += numeros.charAt(10 - i) * i
        }

        //console.log(`Soma: ${soma}`)

        var resultado = (soma % 11) < 2 ? 0 : 11 - (soma % 11)
        
        //console.log(`Resultado: ${resultado}`)

        // Validação do primeiro dígito
        if (resultado != digitos.charAt(0)) {
            return false
        }

        //console.log(`Primeira posição da variável soma: ${digitos.toString().charAt(0)}`)

        soma = 0
        numeros = cpf.substring(0, 10)

        for (var k = 10; k > 1; k--) {
            soma += numeros.charAt(11 - k) * k
        }

        var resultado = (soma % 11) < 2 ? 0 : 11 - (soma % 11)

        // Validação do segundo dígito
        if (resultado != digitos.charAt(1)) {
            return false
        }


        return true
    }

}

function validacao() {

    document.getElementById('success').style.display = 'none'
    document.getElementById('error').style.display = 'none'

    console.log('Iniciando validação de CPF')
    var cpf = document.getElementById('cpf_digitado').value
    
    var resultadoValidacao = validaCPF(cpf)

    document.getElementById('cpf_digitado').value = ''

    if (resultadoValidacao) {
        document.getElementById('success').style.display = 'block'
    } else {
        document.getElementById('error').style.display = 'block'
    }

}