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

// Inicializar o script quando a página estiver carregada
window.onload = function() {
    atualizarSaldo();  // Atualizar saldo na tela assim que a página carregar

    // Evento do botão de registrar gasto
    document.getElementById('btn-registrar-gasto').addEventListener('click', abrirFormularioRegistro);
};
