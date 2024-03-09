document.getElementById('cadastroForm').onsubmit = function(event) {
    event.preventDefault();
    var form = document.getElementById('cadastroForm');
    var data = {
        nome: form.nome.value,
        cpf: form.cpf.value,
        idade: form.idade.value,
        telefone: form.telefone.value,
        dataNascimento: form.dataNascimento.value,
        email: form.email.value,
        senha: form.senha.value,
        confirmSenha: form.confirmSenha.value
    };

    // Validação do formulário
    var erros = validarFormulario(data);
    if (erros.length > 0) {
        mostrarErros(erros);
        return;
    }

    // Negocio do JSON
    var resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
    var textarea = document.createElement('textarea');
    textarea.value = JSON.stringify(data, null, 4);
    textarea.readOnly = true;
    resultado.appendChild(textarea);
};

function validarFormulario(data) {
    var erros = [];
    // Validação
    if (data.senha !== data.confirmSenha) {
        erros.push('As senhas não coincidem.');
    }
    return erros;
}

function mostrarErros(erros) {
    var resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
    erros.forEach(function(erro) {
        var p = document.createElement('p');
        p.innerText = erro;
        p.className = 'error';
        resultado.appendChild(p);
    });
}

function limparFormulario() {
    document.getElementById('cadastroForm').reset();
    document.getElementById('resultado').innerHTML = '';
}