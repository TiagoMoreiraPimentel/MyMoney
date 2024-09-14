const scriptURL = 'https://script.google.com/macros/s/AKfycbwZD2sToyUOpmZqJ739m4IsuNsE6H3n8A7OiKhsUEV6NTaFY-3Ph9pNBmCGDNrVi93F/exec';

document.getElementById('transacao-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const tipoTransacao = document.getElementById('tipo-transacao').value;
    const descricao = document.getElementById('descricao').value;
    const valor = parseFloat(document.getElementById('valor').value);
    const data = document.getElementById('data').value;

    if (descricao && valor > 0 && data) {
        const transacao = {
            tipoTransacao,
            descricao,
            valor,
            data
        };

        fetch(scriptURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(transacao),
        })
        .then(response => response.text())
        .then(message => {
            alert(message);
            document.getElementById('transacao-form').reset();
        })
        .catch(error => {
            console.error('Erro ao registrar a transação:', error);
            alert('Erro ao registrar a transação.');
        });
    } else {
        alert('Por favor, preencha todos os campos corretamente.');
    }
});
