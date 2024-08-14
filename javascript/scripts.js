document.querySelector('#menu-toggle').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
    document.querySelector('#menu-toggle').classList.toggle('active');
});