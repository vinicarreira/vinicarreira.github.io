// HEADER

const btnMobile = document.getElementById ('btn-mobile');

function toggleMenu(event) {
    if (event.type == 'touchstart') event.preventDefault();
    const nav = document.getElementById ('nav');
    nav.classList.toggle('active')       /*  toggle = adiciona caso nao tenha, remova caso tenha  */
    const active = nav.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded', active);
    if (active) {
        event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
    } else {
        event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
    }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);


// CONTATO

function alerta() {

    let nome = $('#txtNome').val()
    let email = $('#txtmail').val()
    let mensagem = $('#txtmsg').val()

    if (nome == '' || email == '' || mensagem == '') {

        window.alert("Por favor preencha todos os campos!")

    } else {
        
        window.alert("E-mail enviado com sucesso!")

        $('#txtNome').val('')
        $('#txtmail').val('')
        $('#txtmsg').val('')

    }

    
}
