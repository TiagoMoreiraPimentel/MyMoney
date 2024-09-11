// Função para lidar com o envio do formulário
document.getElementById('transacao-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Obtém os dados do formulário
    const tipoTransacao = document.getElementById('tipo-transacao').value;
    const descricao = document.getElementById('descricao').value;
    const valor = parseFloat(document.getElementById('valor').value);
    const data = document.getElementById('data').value;

    // Exemplo de validação e envio de dados
    if (descricao && valor > 0 && data) {
        // Aqui você pode adicionar a lógica para enviar os dados para um backend
        console.log(`Tipo: ${tipoTransacao}, Descrição: ${descricao}, Valor: R$ ${valor.toFixed(2)}, Data: ${data}`);
        alert('Transação registrada com sucesso!');

        // Limpar o formulário após o envio
        document.getElementById('transacao-form').reset();
    } else {
        alert('Por favor, preencha todos os campos corretamente.');
    }
});
