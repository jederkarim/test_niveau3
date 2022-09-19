
function addemployees() {

    var firstname = document.getElementById('firstname')
    var lastname = document.getElementById('lastname')
    var email = document.getElementById('email')
    var address = document.getElementById('address')
    var societe =document.getElementById('societe')





    var formError = false;

    if (firstname.value == "") {
        firstname.classList.add('is-invalid')
        firstname.classList.remove('is-valid')
        formError = true;
    }
    else {
        firstname.classList.add('is-valid')
        firstname.classList.remove('is-invalid');
    }

    if (lastname.value == "") {
        lastname.classList.add('is-invalid')
        lastname.classList.remove('is-valid')
        formError = true;
    }
    else {
        lastname.classList.add('is-valid')
        lastname.classList.remove('is-invalid');
    }

    if (email.value == "") {
        email.classList.add('is-invalid')
        email.classList.remove('is-valid')
        formError = true;
    }
    else {
        email.classList.add('is-valid')
        email.classList.remove('is-invalid');
    }

    if (address.value == "") {
        address.classList.add('is-invalid')
        address.classList.remove('is-valid')
        formError = true;
    }
    else {
        address.classList.add('is-valid')
        address.classList.remove('is-invalid');
    }

    if (societe.value == "") {
        societe.classList.add('is-invalid')
        societe.classList.remove('is-valid')
        formError = true;
    }
    else {
        societe.classList.add('is-valid')
        societe.classList.remove('is-invalid');
    }



    var data = {

        firstname: firstname.value,
        lastname: lastname.value,
        email: email.value,
        address: address.value,
        societe: societe.value
    }

    if (formError == false) {

        var employees = JSON.parse(localStorage.getItem('employees')) || []
        var emp = employees.find((empl) => empl.email == email.value )

        if (!emp) {
            employees.push(data);
            localStorage.setItem('employees', JSON.stringify(employees))
            alert.innerHTML = `<div class="alert alert-success" role="alert">
            Categorie enregistrer avec sccess
          </div>`
          window.location.href= '/listemployee.html'
        }
        else {
            alert('Employée deja enregistrer')
        }
    }
}

addemployeebtn = document.getElementById('Ajouter')
addemployeebtn.addEventListener('click', addemployees)

function loadSocietes() {
    var Societes = JSON.parse(localStorage.getItem('Societes')) || []
    var options = document.getElementById('societe')

    Societes.map((soc) => {
        options.innerHTML += `
        <option value="${soc.societe}">${soc.societe}</option>`
    })

}


