var btnadd = document.getElementById('btnadd');
var firstname = document.getElementById('formfirstname');
var lastname = document.getElementById('formlastname');
var email = document.getElementById('formemail');
var cont = document.getElementById('rows');





function todolist() {
    var addtr = document.createElement('tr');
    var addtd = document.createElement('td');
    addtr.appendChild(addtd)
    addtd.innerText = firstname.value;
    cont.appendChild(addtr);
    firstname.value = '';
    var addtdtwo = document.createElement('td');
    addtr.appendChild(addtdtwo)
    addtdtwo.innerText = lastname.value;
    lastname.value = '';
    var addtdthree = document.createElement('td');
    addtr.appendChild(addtdthree)
    addtdthree.innerText = email.value;
    email.value = '';
    var remove = document.createElement('td');
    addtr.appendChild(remove);
    remove.classList.add('removecolor')
    remove.innerText = 'remove';
    remove.addEventListener('click', function () {
        addtr.remove();
    })
}
