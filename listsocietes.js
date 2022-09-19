function listsocietes() {
    const tbody = document.getElementById('tbody');
    var Societes = JSON.parse(localStorage.getItem('Societes')) || []
    Societes.map((soc, index) => {
        tbody.innerHTML += ` <tr>

    <td> ${index + 1}</td> 
    <td>${soc.societe}</td>
    <td>${soc.address}</td>
    <td>${soc.email}</td>

    <td> <button type="button" class="btn btn-info" onclick="saveindex(${index})">Modif</button> 
    <button type="button" class="btn btn-danger"onclick='Supprimer(${index})'>Supp</button></td>
    </tr>`
    })
}

function saveindex(index) {
    localStorage.setItem('indexsoc',index)
    window.location.href= 'Updatesocietes.html'
}
function Supprimer(index){
    var Societes = JSON.parse(localStorage.getItem('Societes')) || []
    Societes.splice(index,1)
    localStorage.setItem('Societes', JSON.stringify(Societes))
    location.reload()
    }

