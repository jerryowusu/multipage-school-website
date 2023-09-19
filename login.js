const forms = document.querySelector(".enroll-forms");
const links = document.querySelectorAll(".enroll-links");


links.forEach(link => {
link.addEventListener("click", e => {
 e.preventDefault(); 
 forms.classList.toggle("show-signup");
})
})