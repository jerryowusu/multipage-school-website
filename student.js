// Display each tab 

// elements to display

const generate = document.querySelector('#generate');
const details = document.querySelector('#details');
const courses = document.querySelector('#courses');
const settings = document.querySelector('#settings');

// tabs to click 

const generateBtn = document.querySelector('.generate-button');
const detailsBtn = document.querySelector('.student-details-button');
const coursesBtn = document.querySelector('.select-course-button');
const settingsBtn = document.querySelector('.settings-button');

// show/hide selected elements on click of tabs 


detailsBtn.addEventListener('click', function toggle() {
    details.classList.remove('hide');
    details.classList.add('show'); 
    detailsBtn.classList.add('active'); 

    settings.classList.add('hide');
    settingsBtn.classList.remove('active')
    
    courses.classList.add('hide');
    coursesBtn.classList.remove('active');

})
coursesBtn.addEventListener('click', function showCourse() {
    courses.classList.remove('hide');
    courses.classList.add('show');
    coursesBtn.classList.add('active'); 

    settings.classList.add('hide')
    settingsBtn.classList.remove('active')
    
    details.classList.add('hide');
    detailsBtn.classList.remove('active');

})

settingsBtn.addEventListener('click', function showSettings() {
    settings.classList.remove('hide')
    settings.classList.add('show')
    settingsBtn.classList.add('active'); 

    details.classList.add('hide');
    detailsBtn.classList.remove('active');
    
    courses.classList.add('hide');
    coursesBtn.classList.remove('active');

})



 function allData() {
    table.innerHTML = ``;

    contactList = JSON.parse(localStorage.getItem("listItem")) ?? []

    contactList.forEach(function(value,k) {

        const table = document.getElementById('table');
        console.log(table)
        table.innerHTML += `
        <tr>
        <td>${k+1}</td>
        <td>${value.name}</td>
        <td>${value.course}</td>
        <td>${value.email}</td>
        <td>${value.phone}</td>
        <td>
           <button class="table-button btn btn-primary" onclick="deleteData(${value.id})">
             <i class="uil uil-trash-alt"></i>
             </button>
         </td>    
       </tr>
        `
    })
 }

 allData()

 function save() {
    
    contactList = JSON.parse(localStorage.getItem('listItem')) ?? []

    let id;
    contactList.length != 0 ? contactList.findLast((item) => id = item.id) : id = 0;

    if(!document.querySelector('#name').value || !document.querySelector('#email').value || !document.querySelector('#phone').value || !document.querySelector('#course').value) {
        

        return
    }

     if(document.getElementById('id').value){
        contactList.forEach(value=>{
            if(document.getElementById('id').value == value.id){
                value.name = document.querySelector('#name').value, 
                value.email = document.querySelector('#email').value, 
                value.course = document.querySelector('#course').value, 
                value.phone = document.querySelector('#phone').value
            }
        });

        document.getElementById('id').value = ''
    } else {
        let item = {
            id:id+1,

            name : document.querySelector('#name').value, 
            email :  document.querySelector('#email').value, 
            course : document.querySelector('#course').value, 
            phone : document.querySelector('#phone').value
        }

        contactList.push(item)
    }

    localStorage.setItem('listItem',JSON.stringify(contactList))

    allData();

     document.getElementById('student-form').reset();    
 }

 function find(id) {
    contactList = JSON.parse(localStorage.getItem('listItem')) ?? [];

    contactList.forEach(function(value) {
        if (value.id === id) {

            document.querySelector('#id').value = value.id
            document.querySelector('#name').value = value.name
            document.querySelector('#course').value = value.course
            document.querySelector('#email').value = value.email
            document.querySelector('#phone').value = value.phone
        }
    })
 }


function deleteData(id) {
      contactList = JSON.parse(localStorage.getItem('listItem')) ?? []

    if(confirm("Are you sure you want to delete this record?")) {
        contactList = contactList.filter(function(value){
            return value.id !=id;
        });

     localStorage.setItem('listItem',JSON.stringify(contactList))

     allData() 
    }
}

function clearData(){
    document.getElementById('form').reset()
    document.getElementById('id').value = ""
}
