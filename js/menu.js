// Função para simular o saldo disponível (pode ser substituída por uma função que consulte um backend)
function obterSaldo() {
    // Aqui você pode conectar com um backend ou banco de dados para pegar o saldo real
    return 0.00;  // Exemplo: R$ 1500,75
}

// Função para atualizar o saldo na tela
function atualizarSaldo() {
    const saldoElemento = document.getElementById('saldo-value');
    const saldo = obterSaldo();
    saldoElemento.textContent = `R$ ${saldo.toFixed(2)}`;
}

// Função para abrir o formulário de registro de gastos (futuramente pode abrir um modal ou redirecionar)
function abrirFormularioRegistro() {
    window.location.href = 'formulario.html'; // Redireciona para a página do formulário
}

// Função para exibir o modal de alerta personalizado
function MSGdesenvolvimento() {
    const modal = document.getElementById('alert-modal');
    const modalMessage = document.getElementById('modal-message');
    
    // Definir a mensagem personalizada
    modalMessage.textContent = "Em desenvolvimento";
    
    // Mostrar o modal
    modal.style.display = "flex"; // Use 'flex' para garantir que o modal seja exibido centralizado
}

// Fechar o modal quando o botão "OK" for clicado
document.getElementById('close-modal').addEventListener('click', function() {
    document.getElementById('alert-modal').style.display = "none";
});

window.onload = function() {
    atualizarSaldo();

    // Adiciona os eventos de clique apenas depois que a página carregar
    document.getElementById('btn-resumo').addEventListener('click', MSGdesenvolvimento);
    document.getElementById('btn-entradas').addEventListener('click', MSGdesenvolvimento);
    document.getElementById('btn-saidas').addEventListener('click', MSGdesenvolvimento);
    document.getElementById('btn-investimentos').addEventListener('click', MSGdesenvolvimento);
    document.getElementById('btn-configuracoes').addEventListener('click', MSGdesenvolvimento);

    // Evento do botão de registrar gasto
    document.getElementById('btn-registrar-gasto').addEventListener('click', abrirFormularioRegistro);
};
