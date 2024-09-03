const menuIcon = document.getElementById('menu-icon');
const sidebar = document.getElementById('sidebar');
const closeBtn = document.getElementById('close-btn');
const servicesLink = document.getElementById('services-link');
const dropdown = document.querySelector('.dropdown');


menuIcon.addEventListener('click', () => {
    sidebar.classList.add('open');
});

closeBtn.addEventListener('click', () => {
    sidebar.classList.remove('open');
});

servicesLink.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent the default anchor behavior
    dropdown.classList.toggle('open');
});
const contactLinkSidebar = document.getElementById('contact-link-sidebar');
const contactDropdownSidebar = document.querySelector('#contact-dropdown-sidebar').parentElement;

contactLinkSidebar.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent the default anchor behavior
    contactDropdownSidebar.classList.toggle('open');
});
