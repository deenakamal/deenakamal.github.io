document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            scrollToSection(targetSection);
        });
    });
});

function scrollToSection(section) {
    const yOffset = -60;
    const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({top: y, behavior: 'smooth'});
}
document.getElementById('browseButton').addEventListener('click', function() {
    window.location.href = 'https://github.com/deenakamal/RecipeSearchProject'; // Replace with your GitHub project URL
});
