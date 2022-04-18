function verificar(){
	let email = document.getElementById('em').value;
	let name = document.getElementById('nm').value;
	let pw = document.getElementById('pw').value;
	let pw2 = document.getElementById('pw2').value;

	/* if(email == "" || name == "" || pw == "" || pw2 == ""){
		alert('Preencha todos os campos')
		return
	} */

	verifyEmail(email);
	
	verifyPassword(pw, pw2);

}

function verifyEmail(email){
	var re = /\S+@\S+\.\S+/;
	if (re.test(email) == false){
		alert('insira um email valido')
	}
}

function verifyPassword(pw, pw2){
	let aux = document.getElementById('incorrect');
	if(pw != pw2){
		aux.innerHTML = 'As senhas nao correspondem';
	}else{
		aux.innerHTML = '';
	}
}