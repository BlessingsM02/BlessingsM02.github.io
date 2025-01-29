document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.querySelector('.navbar');
    const header = document.querySelector('.header');

    // Toggle mobile menu
    menuIcon.addEventListener('click', (e) => {
        e.stopPropagation();
        navbar.classList.toggle('active');
        menuIcon.classList.toggle('bx-x');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navbar.contains(e.target) && !menuIcon.contains(e.target)) {
            navbar.classList.remove('active');
            menuIcon.classList.remove('bx-x');
        }
    });

    // Close menu on scroll
    window.addEventListener('scroll', () => {
        if (window.innerWidth <= 768) {
            navbar.classList.remove('active');
            menuIcon.classList.remove('bx-x');
        }
    });

    // Handle window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            navbar.classList.remove('active');
            menuIcon.classList.remove('bx-x');
        }
    });
});