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

 function allData() {
    // clear the table first 
    table.innerHTML = ``;

    // get the list of contacts from localStorage
    contactList = JSON.parse(localStorage.getItem("listItem")) ?? []

    // loop through each data and add it to the table 
    contactList.forEach(function(value,k) {
        // get the table elements 

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
//  function to save the contact data to local storage 

 function save() {
    
    // get list of contacts from localStorage
    contactList = JSON.parse(localStorage.getItem('listItem')) ?? []

    // get id for new contact 
    let id;
    contactList.length != 0 ? contactList.findLast((item) => id = item.id) : id = 0;

    // check to ensure that all fields are filled in 
    if(!document.querySelector('#name').value || !document.querySelector('#email').value || !document.querySelector('#phone').value || !document.querySelector('#course').value) {
        // alert('Please fill in all fields')
        

        return
    }

     // If the id field is filled in, update the existing contact
     if(document.getElementById('id').value){
        contactList.forEach(value=>{
            if(document.getElementById('id').value == value.id){
                value.name = document.querySelector('#name').value, 
                value.email = document.querySelector('#email').value, 
                value.course = document.querySelector('#course').value, 
                value.phone = document.querySelector('#phone').value
            }
        });

        // Clear the id field
        document.getElementById('id').value = ''
    } else {
        // If the id field is not filled in, add a new contact
        let item = {
            id:id+1,

            name : document.querySelector('#name').value, 
            email :  document.querySelector('#email').value, 
            course : document.querySelector('#course').value, 
            phone : document.querySelector('#phone').value
        }

        // Add the new contact to the list
        contactList.push(item)
    }

    // Save the updated list to local storage
    localStorage.setItem('listItem',JSON.stringify(contactList))

    // Update the table with the new data
    allData();

     // Clear the form
     document.getElementById('student-form').reset();    
 }

 function find(id) {
    contactList = JSON.parse(localStorage.getItem('listItem')) ?? [];

    contactList.forEach(function(value) {
        if (value.id === id) {
            // populate the input fields with record's values

            document.querySelector('#id').value = value.id
            document.querySelector('#name').value = value.name
            document.querySelector('#course').value = value.course
            document.querySelector('#email').value = value.email
            document.querySelector('#phone').value = value.phone
        }
    })
 }

//  remove a records from the localStorage array and updates the table 

function deleteData(id) {
      // Get the array from localStorage and parse it as JSON, or create an empty array if none exists
      contactList = JSON.parse(localStorage.getItem('listItem')) ?? []

      // Confirm with the user that they want to delete the record
    if(confirm("Are you sure you want to delete this record?")) {
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

// clear the data from the form inputs 
function clearData(){
    document.getElementById('form').reset()
    document.getElementById('id').value = ""
}
