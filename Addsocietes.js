
async function addsociete() {

    societe = document.getElementById('societe')
    address = document.getElementById('address')
    email = document.getElementById('email')

    var formError = false;

    if (societe.value == "") {
        societe.classList.add('is-invalid')
        societe.classList.remove('is-valid')
        formError = true;
    }
    else {
        societe.classList.add('is-valid')
        societe.classList.remove('is-invalid');
    }

    if (address == "") {
        address.classList.add('is-invalid')
        address.classList.remove('is-valid')
        formError = true;
    }
    else {
        address.classList.add('is-valid')
        address.classList.remove('is-invalid');
    }
    if (email == "") {
        email.classList.add('is-invalid')
        email.classList.remove('is-valid')
        formError = true;
    }
    else {
        email.classList.add('is-valid')
        email.classList.remove('is-invalid');
    }


    var data = {
        societe: societe.value,
        address: address.value,
        email : email.value,
        employees : []
    }

    if (formError == false) {

        var Societes = JSON.parse(localStorage.getItem('Societes')) || []
        var soc = Societes.find((soct) => soct.societe == societe.value)
       
        if (!soc) {
            Societes.push(data);
            localStorage.setItem('Societes', JSON.stringify(Societes))
            alert.innerHTML = `<div class="alert alert-success" role="alert">
            Societes enregistrer avec sccess

          </div>`
          window.location.href= '/listsocietes.html'

        }
        else{
            
        }
    } 
}
addsocietebtn = document.getElementById('Ajouter')
addsocietebtn.addEventListener('click', addsociete)



