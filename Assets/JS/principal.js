// Barra lateral
const body = document.querySelector('body'),
      sidebar = body.querySelector('nav'),
      toggle = body.querySelector(".toggle"),
      frame = document.getElementById('content-frame');

// Toggle sidebar
toggle.addEventListener("click", () => { 
    sidebar.classList.toggle("close");
});

// Cambiar páginas en el iframe
document.querySelectorAll('.menu-links a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const sectionKey = e.currentTarget.getAttribute('data-section');
        frame.src = `${sectionKey}.html`;
    });
});