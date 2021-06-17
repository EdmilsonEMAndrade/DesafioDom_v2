// ID/Classes para carregar a página
const landPage = document.getElementById("landPage");
const registerPage = document.getElementsByClassName("register");
const recoverPage = document.getElementsByClassName("recover");
const loginPage = document.getElementsByClassName("login");
const span = document.getElementsByClassName("span")
const page = document.getElementById(`page`);
//Botao Mostrar/Ocultar
const buttonShow = document.getElementById("show");
const fieldPassword = document.getElementById("password");
//input
const userInput = document.getElementById(`userInput`)
const emailUser = document.getElementById("email");

const confirmPassword = document.getElementById(`confirmPassword`);

//innerHtml Page
const pageH1 = document.getElementsByClassName(`nameUser`);
const janela = document.getElementById(`logout`);

//Variaveis Globais
let mostrar = true;
let showJanela = false





function mudar() {
    //Muda o innerHTML e o type
    mostrar = !mostrar;

    if (mostrar) {
        //Ocultar => Mostrar
        buttonShow.innerHTML = "Mostrar";
        fieldPassword.setAttribute('type', 'password')
    }
    else {
        //Mostrar => Ocultar
        buttonShow.innerHTML = "Ocultar";
        fieldPassword.setAttribute('type', 'text')
    };

};

function hideRecover() {

    for (site of recoverPage) {
        site.style.display = `none`;
    }

}
function hideLogin() {

    for (site of loginPage) {
        site.style.display = `none`;
    }
    for (site of span) {
        site.style.display = `none`;
    }

}
function hideRegister() {

    for (site of registerPage) {
        site.style.display = `none`;
    }

}
function registerNewUser() {

    hideRecover();
    hideLogin();
    for (site of registerPage) {
        site.style.display = `flex`;
    };

}
function recoverPassword() {

    hideRegister();
    hideLogin();
    for (site of recoverPage) {
        site.style.display = `flex`;
    }

}
function showLogin() {

    landPage.style.display = `flex`;
    hideRegister();
    hideRecover();
    for (site of loginPage) {
        site.style.display = `flex`;
    }
    for (site of span) {
        site.style.display = `block`;
    }

}

function login() {
    for (const index in user) {

        if (emailUser.value == user[index].email && fieldPassword.value == user[index].password) {

            landPage.style.display = `none`;
            page.style.display = `flex`;
            inicializarPage(index)
            return
        }

    }

    alert(`Verifique seu e-mail ou senha.`)

}

function open() {

    if (localStorage.getItem(`email`)) {
        for (const index in user) {

            if (user[index].email == localStorage.getItem(`email`)) {

                landPage.style.display = `none`;
                page.style.display = `flex`;
                inicializarPage(index)
                return

            }

        }

    }
}

function inicializarPage(n) {

    localStorage.setItem("index", n)
    localStorage.setItem("email", user[n].email)
    pageH1[0].innerHTML = `Olá ${user[n].usuario}`

}
function record(n) {

    user[localStorage.getItem("index")].record = n;
    console.log(user[localStorage.getItem("index")])

}
function openJanela() {

    showJanela = !showJanela;
    if (showJanela) {
        janela.style.display = `flex`
    } else {
        janela.style.display = `none`
    }

}
function logout() {

    showJanela = !showJanela;
    page.style.display = `none`
    janela.style.display = `none`
    localStorage.clear();
    showLogin();

}
function recover() {

    for (const index in user) {
        if (user[index].usuario == userInput.value && user[index].email == emailUser.value) {
            alert(`A senha é ${user[index].password}`)
            showLogin()
            return
        }

    }


    alert(`Usuário ou E-mail não cadastrado`)
}
function register() {
    for (const index in user) {
        if (user[index].usuario === userInput.value) {
            alert(`Usuário ${userInput.value} já existente`)
            return
        }
        if (user[index].email == emailUser.value) {
            alert(`E-mail ${emailUser.value} já cadastrado`)
            return
        }
    }


    if ((emailUser.value.indexOf(`@`) > -1) && ((fieldPassword.value === confirmPassword.value) && (fieldPassword.value != ""))
        && (userInput.value != "")) {
        alert(`Cadastro concluido!!\n Você receberá um e-mail de confirmação`)
        showLogin()
        user.push({ "usuario": userInput.value, "email": emailUser.value, "password": fieldPassword.value })
        alert(`E-mail confirmado`)
    } else if (userInput.value == "") {
        alert(`Campo usuário obrigatório`)
    }
    else if (emailUser.value.indexOf(`@`) == -1) {
        alert(`E-mail inválido`)
        return
    }
    else {
        alert(`As senhas não são iguais`)
        return
    }

}

open()