function value() {
    var Societes = JSON.parse(localStorage.getItem('Societes')) || []
    var ind = localStorage.getItem('indexcat') || ''

    var societe = document.getElementById('societe')
    var address = document.getElementById('address')
    email = document.getElementById('email')

    societe.value = Societes[ind].societe
    address.value = Societes[ind].address 
    email.value = Societes[ind].email 
 

}
 
async function updatesociete() {

    var Societes = JSON.parse(localStorage.getItem('Societes')) || []
    var index = localStorage.getItem('index') || ''


    var societe = document.getElementById('societe')
    var address = document.getElementById('address')
    var email = document.getElementById('email')


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
        email: email.value,
        employees: Societes[index].employees==undefined ? [] : Societes[index].employees
    }
    console.log(Societes[index].employees);
    if (formError == false) {
        Societes.splice(index, 1, data)
        localStorage.setItem('Societes', JSON.stringify(Societes))
        // window.location.href="listsocietes.html"
        
    }

}
var Updatebtn = document.getElementById('modifier')
Updatebtn.addEventListener('click', updatesociete);