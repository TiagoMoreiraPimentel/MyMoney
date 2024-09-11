document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Previne o envio padrão do formulário

        const username = document.getElementById('login').value.trim();
        const password = document.getElementById('senha').value.trim();

        // Validação básica
        if (username === "" || password === "") {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        // Validação adicional (exemplo: comprimento mínimo)
        if (username.length < 3) {
            alert("O nome de usuário deve ter pelo menos 3 caracteres.");
            return;
        }

        if (password.length < 6) {
            alert("A senha deve ter pelo menos 6 caracteres.");
            return;
        }

        // Credenciais válidas definidas no código
        const validUsername = 'admin';
        const validPassword = '123456';

        // Verificação das credenciais
        if (username === validUsername && password === validPassword) {
            console.log("Usuário:", username);
            console.log("Senha:", password);
            // Redirecionar para outra página, se necessário
            window.location.href = 'graficos.html';
        } else {
            alert("Nome de usuário ou senha inválidos.");
        }
    });
});
