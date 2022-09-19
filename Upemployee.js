function value() {
    var employees = JSON.parse(localStorage.getItem('employees')) || []
    var Societes = JSON.parse(localStorage.getItem('Societes')) || []

    var ind = localStorage.getItem('indexemp') || ''
 
    var firstname = document.getElementById('firstname')
    var lastname = document.getElementById('lastname')
    var email = document.getElementById('email')
    var address = document.getElementById('address')
    var societe =document.getElementById('societe')

    firstname.value = employees[ind].firstname
    lastname.value = employees[ind].lastname
    email.value = employees[ind].email 
    address.value = employees[ind].address 
    societe.value = Societes[ind].societe
    
}
 
async function updateemployee() {

    var employees = JSON.parse(localStorage.getItem('employees')) || []
    var Societes = JSON.parse(localStorage.getItem('Societes')) || []

    var index = localStorage.getItem('index') || ''

    var firstname = document.getElementById('firstname')
    var lastname = document.getElementById('lastname')
    var email = document.getElementById('email')
    var address = document.getElementById('address')
    var societe = document.getElementById('societe')


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

    if (lastname == "") {
        lastname.classList.add('is-invalid')
        lastname.classList.remove('is-valid')
        formError = true;
    }
    else {
        lastname.classList.add('is-valid')
        lastname.classList.remove('is-invalid');
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

    if (address == "") {
        address.classList.add('is-invalid')
        address.classList.remove('is-valid')
        formError = true;
    }
    else {
        address.classList.add('is-valid')
        address.classList.remove('is-invalid');
    }



    var data = {

        firstname: firstname.value,
        lastname: lastname.value,
        email: email.value,
        address: address.value,
        societe: societe.value

        
                // employees: employees[index].employees==undefined ? [] : employees[index].employees
    }
    // console.log(employees[index].employees);
    if (formError == false) {
        employees.splice(index, 1, data)
        localStorage.setItem('employees', JSON.stringify(employees))
        window.location.href="listemployee.html"
        
    }

}
var Updatebtn = document.getElementById('modifier')
Updatebtn.addEventListener('click', updateemployee);

function loadSocietes() {
    var Societes = JSON.parse(localStorage.getItem('Societes')) || []
    var options = document.getElementById('societe')

    Societes.map((soc) => {
        options.innerHTML += `
        <option value="${soc.societe}">${soc.societe}</option>`
    })

}