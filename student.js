// Function to display all the data from local storage
function allData(){
    // Clear the table first
    table.innerHTML=``
    console.log(table)
    // Get the list of contacts from local storage
    contactList = JSON.parse(localStorage.getItem("listItem")) ?? [] 

    // Loop through each contact and add it to the table
    contactList.forEach(function(value,i){
        // Get the table element
        let table = document.getElementById("table")

        // Add the contact data to the table
        table.innerHTML +=`
        <tr>
        <td>${i+1}</td>
        <td>${value.name}</td>
        <td>${value.course}</td>
        <td>${value.phone}</td>
        <td>${value.age}</td>
        <td>
           <button class="btn btn-sm btn-success" onclick="find(${value.id})">
             <i class="fa fa-edit"></i>
             </button>
         </td>   
        <td>
           <button class="btn btn-sm btn-danger" onclick="removeData(${value.id})">
             <i class="fa fa-trash"></i>
             </button>
         </td>    
       </tr>
        `
    })
}

// Function to save the contact data to local storage
function save(){
    // Get the list of contacts from local storage
    contactList = JSON.parse(localStorage.getItem("listItem")) ?? []

    // Get the id for the new contact
    let id
    contactList.length != 0 ? contactList.findLast((item) => id = item.id) : id = 0

    // Check if all fields are filled in
    if(!document.querySelector('.namev').value || !document.querySelector('.agev').value|| !document.querySelector('.emailv').value || !document.querySelector('.phonev').value || !document.querySelector('.coursev').value){
        alert('Please fill in all fields')
        return
    }

    // If the id field is filled in, update the existing contact
    if(document.getElementById('id').value){
        contactList.forEach(value=>{
            if(document.getElementById('id').value == value.id){
                value.name = document.querySelector('.namev').value, 
                value.email = document.querySelector('.emailv').value, 
                value.course = document.querySelector('.coursev').value, 
                value.phone = document.querySelector('.phonev').value, 
                value.age = document.querySelector('.agev').value
            }
        });

        // Clear the id field
        document.getElementById('id').value = ''
    }else{
        // If the id field is not filled in, add a new contact
        var item = {
            id:id+1,

            name : document.querySelector('.namev').value, 
            email :  document.querySelector('.emailv').value, 
            course : document.querySelector('.coursev').value, 
            phone : document.querySelector('.phonev').value, 
            age : document.querySelector('.agev').value

        }

        // Add the new contact to the list
        contactList.push(item)
    }

    // Save the updated list to local storage
    localStorage.setItem('listItem',JSON.stringify(contactList))

    // Update the table with the new data
    allData()

    // Clear the form
    document.getElementById('form').reset()  
}

// This function finds a specific record in the localStorage array and populates the input fields with its values
function find(id){

    // Get the array from localStorage and parse it as JSON, or create an empty array if none exists
    contactList = JSON.parse(localStorage.getItem('listItem')) ?? []

    // Loop through the array and find the record with the matching ID
    contactList.forEach(function (value){
        if(value.id == id){
            // Populate the input fields with the record's values
            document.getElementById('id').value = value.id
            document.getElementById('name').value = value.name
            document.getElementById('stdClass').value = value.stdClass
            document.getElementById('rollNo').value = value.rollNo
            document.getElementById('tnum').value = value.tnum
            document.getElementById('age').value = value.age
        }
    })
}

// This function removes a specific record from the localStorage array and updates the table
function removeData(id){

    // Get the array from localStorage and parse it as JSON, or create an empty array if none exists
    contactList = JSON.parse(localStorage.getItem('listItem')) ?? []

    // Confirm with the user that they want to delete the record
    if(confirm("Are you sure you want to delete this record?")){
        // Remove the record with the matching ID from the array
        contactList = contactList.filter(function(value){
            return value.id !=id;
        });

        // Save the updated array back to localStorage
        localStorage.setItem('listItem',JSON.stringify(contactList))

        // Update the table to reflect the changes
        allData()
    }
}

// allData()

function clearData(){
    document.getElementById('form').reset()
    document.getElementById('id').value = ""
}

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
    courses.classList.add('hide');
    settings.classList.add('hide')
})
coursesBtn.addEventListener('click', function showCourse() {
    courses.classList.remove('hide');
    courses.classList.add('show');
    details.classList.add('hide');
    settings.classList.add('hide')
})

settingsBtn.addEventListener('click', function showSettings() {
    details.classList.add('hide');
    courses.classList.add('hide');
    settings.classList.remove('hide')
    settings.classList.add('show')
})


// Save to localStorage

window.onload = function() {
    contactList = JSON.parse(localStorage.getItem("listItem")) ?? []
    // check for localStorage
    if (localStorage) {
        // add an eventlistener for form submissions

        document.getElementById('student-form').addEventListener('submit', function(){
            const name = document.querySelector('#name').value;
            const course = document.querySelector('#course').value;
            const email = document.querySelector('#email').value;
            const phone = document.querySelector('#phone').value;

            const data = {
                name: name,
                course: course,
                email: email,
                phone: phone
            }
            contactList.push(data);
            
            localStorage.setItem('data', JSON.stringify(contactList))
        })
    }
}

console.log(window.localStorage.getItem('data'))


function getDataFromLocalStorage() {
    myData = JSON.parse(localStorage.getItem("data")) ?? [];

    table.innerHTML = ``;

    myData.forEach(function(value) {


    table.innerHTML += `
        <tr>
        <td>${value.name}</td>
        <td>${value.course}</td>
        <td>${value.email}</td>
        <td>${value.phone}</td>
        <td>
           <button class="btn btn-sm btn-success" onclick="find(${myData.id})">
             <i class="fa fa-edit"></i>
             </button>
         </td>   
        <td>
           <button class="btn btn-sm btn-danger" onclick="removeData(${myData.id})">
             <i class="fa fa-trash"></i>
             </button>
         </td>    
       </tr>
        `
    })
}
    
function allData(){
    // Clear the table first
    table.innerHTML=``
    console.log(table)
    // Get the list of contacts from local storage
    contactList = JSON.parse(localStorage.getItem("listItem")) ?? [] 

    // Loop through each contact and add it to the table
    contactList.forEach(function(value,i){
        // Get the table element
        let table = document.getElementById("table")

        // Add the contact data to the table
        table.innerHTML +=`
        <tr>
        <td>${i+1}</td>
        <td>${value.name}</td>
        <td>${value.course}</td>
        <td>${value.phone}</td>
        <td>${value.age}</td>
        <td>
           <button class="btn btn-sm btn-success" onclick="find(${value.id})">
             <i class="fa fa-edit"></i>
             </button>
         </td>   
        <td>
           <button class="btn btn-sm btn-danger" onclick="removeData(${value.id})">
             <i class="fa fa-trash"></i>
             </button>
         </td>    
       </tr>
        `
    })
}