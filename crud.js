// Função para alternar entre Aluno e Professor
function toggleRole() {
    const isLoginFormVisible = !document.getElementById("loginForm").classList.contains("hidden");
    const switchRole = isLoginFormVisible ? document.getElementById("switchRole") : document.getElementById("registerSwitchRole");
    const title = isLoginFormVisible ? document.getElementById("loginTitle") : document.getElementById("registerTitle");

    if (switchRole.checked) {
        title.innerText = isLoginFormVisible ? "Login de Professor" : "Registro de Professor";
    } else {
        title.innerText = isLoginFormVisible ? "Login de Aluno" : "Registro de Aluno";
    }
}

// Alternar entre os formulários de Login e Registro
function toggleRegister() {
    document.getElementById("loginForm").classList.add("hidden");
    document.getElementById("registerForm").classList.remove("hidden");
    document.getElementById("registerTitle").innerText = "Registro de Aluno";
    document.getElementById("registerSwitchRole").checked = false;
}

function toggleLogin() {
    document.getElementById("registerForm").classList.add("hidden");
    document.getElementById("loginForm").classList.remove("hidden");
    document.getElementById("loginTitle").innerText = "Login de Aluno";
    document.getElementById("switchRole").checked = false;
}

// Alternar entre Esqueceu a Senha e Login
function toggleForgotPassword() {
    document.getElementById("loginForm").classList.add("hidden");
    document.getElementById("forgotPasswordForm").classList.remove("hidden");
}

// Funções de Registro, Login, etc (continuam iguais)
function register() {
    const email = document.getElementById("registerEmail").value;
    const password = document.getElementById("registerPassword").value;
    const role = document.getElementById("registerSwitchRole").checked ? "professor" : "aluno";

    if (!email || !password) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];

    const userExists = users.some(user => user.email === email && user.role === role);

    if (userExists) {
        alert("Usuário já registrado.");
    } else {
        users.push({ email, password, role });
        localStorage.setItem("users", JSON.stringify(users));
        alert("Registrado com sucesso!");
        toggleLogin();
    }
}

function login() {
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;
    const role = document.getElementById("switchRole").checked ? "professor" : "aluno";

    let users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(user => user.email === email && user.password === password && user.role === role);

    if (user) {
        alert("Login bem-sucedido!");
        // Redirecionar para outra página se necessário
    } else {
        alert("Credenciais inválidas.");
    }
}

function revealPassword() {
    const email = document.getElementById("forgotEmail").value;
    const role = document.getElementById("switchRole").checked ? "professor" : "aluno";

    let users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(user => user.email === email && user.role === role);

    if (user) {
        alert(`Sua senha é: ${user.password}`);
    } else {
        alert("Usuário não encontrado.");
    }
}

function resetPassword() {
    const email = document.getElementById("forgotEmail").value;
    const newPassword = prompt("Digite a nova senha:");

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let userIndex = users.findIndex(user => user.email === email);

    if (userIndex !== -1) {
        users[userIndex].password = newPassword;
        localStorage.setItem("users", JSON.stringify(users));
        alert("Senha alterada com sucesso!");
        toggleLogin();
    } else {
        alert("Usuário não encontrado.");
    }
}


// Função para abrir o modal
function openModal() {
    document.getElementById('modal').style.display = 'flex'; // Abre o modal
}

// Função para fechar o modal
function closeModal() {
    document.getElementById('modal').style.display = 'none'; // Fecha o modal
}

// Fecha o modal se o usuário clicar fora do conteúdo do modal
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
