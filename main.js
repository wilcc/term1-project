
const reservationList = []
const resButton = document.querySelector('#resButton')

resButton.addEventListener('click',function(){
    const firstNameVal = document.querySelector('#resFirstName').value
    const lastNameVal = document.querySelector('#resLastName').value
    const emailVal = document.querySelector('#resEmail').value
    const dateVal = document.querySelector('#apptDate').value
    const monthVal = document.querySelector('#apptMonth').value
    const timeVal = document.querySelector('#apptTime').value
    const guestVal = document.querySelector('#resGuest').value
    const restVal = document.querySelector('#resRest').value
    const reservDate = monthVal+' '+dateVal
    const reservName = firstNameVal + ' ' + lastNameVal
    const reservation = {
        Name:`${firstNameVal} ${lastNameVal}`,
        Email: emailVal,
        ReservationDate: `${monthVal}${dateVal}`,
        Time: timeVal,
        GuestNumber: guestVal,
        Restaurant: restVal,
        // id: reservation.length,
    }
    reservationList.push(reservation)
    printReservation(restVal,reservDate,timeVal,emailVal,guestVal)
})

const printReservation = function(name,date,time,email,number){
    let newTr = document.createElement('tr')
    let newName = document.createElement('td')
    newName.innerText = name
    let newDate = document.createElement('td')
    newDate.innerText = date
    newDate.setAttribute('contenteditable',true)
    let newTime = document.createElement('td')
    newTime.innerText = time
    newTime.setAttribute('contenteditable',true)
    let newEmail = document.createElement('td')
    newEmail.innerText = email
    let newGuestNumber = document.createElement('td')
    newGuestNumber.innerText = number
    newGuestNumber.setAttribute('contenteditable',true)
    let newButton = document.createElement('td')
    let createButton = document.createElement('button')
    createButton.innerText= 'Cancel Reservation'
    createButton.classList= 'ui button canc'


    let tBody = document.querySelector('.tbody')
    newButton.appendChild(createButton)
    tBody.appendChild(newTr)
    newTr.appendChild(newTime)
    newTr.appendChild(newName)
    newTr.appendChild(newDate)
    newTr.appendChild(newEmail)
    newTr.appendChild(newGuestNumber)
    newTr.appendChild(newButton)


}


function myTest() {
    let x = document.getElementById("italy");
    if (x.style.display === "none") {
    x.style.display = "block";
    } else {
    x.style.display = "none";
    }
}
function myTest1() {
    let x = document.getElementById("china");
    if (x.style.display === "none") {
    x.style.display = "block";
    } else {
    x.style.display = "none";
    }
}
function myTest2() {
    let x = document.getElementById("USA");
    if (x.style.display === "none") {
    x.style.display = "block";
    } else {
    x.style.display = "none";
    }
}
function openForm() {
    document.getElementById("myForm").style.display = "block";
}
function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

const tbody = document.querySelector('.tbody')
function clear(){
    while(tbody.hasChildNodes()){
        tbody.firstChild.remove()
    }
}
function printAllRes(reservationList){
    for (const reservation of reservationList){
        printReservation(reservation)
    }
}
let restName = document.querySelector('#resRest')
const lupaFunc =function(){
    restName.value = 'Lupa'
}
const fornoFunc =function(){
    restName.value = 'Forno Russo'
}
const almarFunc =function(){
    restName.value = 'Almar'
}
const puliaFunc =function(){
    restName.value = 'Pulia Ristornte'
}
const singFunc =function(){
    restName.value = 'SingLong'
}
const hongkongFunc =function(){
    restName.value = 'HongKong Stop'
}
const jadeFunc =function(){
    restName.value = 'Jade'
}
const mamaFunc =function(){
    restName.value = "Mama Chen's Kitchen"
}
const smithFunc =function(){
    restName.value = 'The Smith'
}
const zanmiFunc =function(){
    restName.value = 'Zanmi'
}
const littleFunc =function(){
    restName.value = 'Little Ways'
}
const lastFunc =function(){
    restName.value = 'Last Stop'
}


const updateBtn = document.querySelector('#updateBtn')
updateBtn.addEventListener('click', function(tables){
    // for(const table of tables ){

    // }
    alert('Updated')
})