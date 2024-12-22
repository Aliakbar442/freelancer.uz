document.addEventListener('DOMContentLoaded', () => {
const modal = document.getElementById("modal")
const list_menu = document.getElementById("list_menu")
const sections = document.querySelectorAll('section');
const changeMod = document.querySelector('.change_mod');
const icon = document.querySelector('i');
const nav = document.querySelector("nav")
const footer = document.querySelector("footer")
const reg_info = document.querySelector(".reg_info")
const links = modal.querySelectorAll("a");



list_menu.addEventListener("click", () => {
    modal.style.display = "block"
})


links.forEach(link => {
    link.addEventListener("click", () => {
        modal.style.display = "none";
    });
});


changeMod.addEventListener('click', () => {

    if (icon.classList.contains('fa-sun')) {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        nav.style.backgroundColor = "purple"
        footer.style.backgroundColor = "purple"

    } else {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        nav.style.backgroundColor = ""
        footer.style.backgroundColor = ""


    }
    sections.forEach(section => {
        if (section.style.backgroundColor === 'black') {
            section.style.backgroundColor = '';
            section.style.color = '';
        } else {
            section.style.backgroundColor = 'black';
            section.style.color = 'white';
        }
    });
});

if (reg_info) {
    reg_info.addEventListener("click", () => {
        console.log("salom");
    });
}

});
