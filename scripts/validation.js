function verificarSignup() {
  let email = document.getElementById("em").value;
  let name = document.getElementById("nm").value;
  let pw = document.getElementById("pw").value;
  let pw2 = document.getElementById("pw2").value;

  if (email == "" || name == "" || pw == "" || pw2 == "") {
    alert("Preencha todos os campos");
    return;
  }

  if (!verify(email, /\S+@\S+\.\S+/)) {
    alert("E-mail Inválido");
    return;
  }

  if (!verify(name, /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/)) {
    alert("Nome inválido");
    return;
  }

  if (!samePassword(pw, pw2)) {
    return;
  }

  /* if (!verify(pw, /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8,})$/)) {
    alert("Senha Inválida");
    return;
  } */

  alert("Cadastrado");
  location.reload(true);
}

function verificarLogin() {
  alert("Logando");
}

function samePassword(pw, pw2) {
  let aux = document.getElementById("incorrect");
  if (pw != pw2) {
    aux.innerHTML = "As senhas nao correspondem";
    return false;
  } else {
    aux.innerHTML = "";
    return true;
  }
}

function verify(str, regex) {
  if (regex.test(str) == false) {
    return false;
  }
  return true;
}

/* 
/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8,})$/
um número;
uma letra minúscula;
uma letra maiúscula;
pelo menos 8 caracteres entre os digitados 
*/
