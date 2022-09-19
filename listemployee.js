function listemployee() {
    const tbody = document.getElementById('tbody');
    var employees = JSON.parse(localStorage.getItem('employees')) || []
    employees.map((emp, index) => {
        tbody.innerHTML += ` <tr>
  
    <td> ${index + 1}</td> 
    <td>${emp.lastname}</td>
    <td>${emp.firstname}</td>
    <td>${emp.email}</td>
    <td>${emp.address}</td>
    <td>${emp.societe}</td>


    <td> <button type="button" class="btn btn-info" onclick="saveindex(${index})">Modif</button> 
    <button type="button" class="btn btn-danger"onclick='Supprimer(${index})'>Supp</button></td>
    </tr>`
    })
}

function saveindex(index) {
    localStorage.setItem('indexemp',index)
    window.location.href= 'Upemployee.html'
}
function Supprimer(index){
    var employees = JSON.parse(localStorage.getItem('employees')) || []
    employees.splice(index,1)
    localStorage.setItem('employees', JSON.stringify(employees))
    location.reload()
    }

