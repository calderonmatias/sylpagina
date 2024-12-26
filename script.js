// Selección de elementos
document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu");

    menuToggle.addEventListener("click", () => {
        menu.classList.toggle("show");
    });
});




// Animación de elementos en scroll
const elementsToShow = document.querySelectorAll('.productos-grid, .sobre-nosotros, .contacto');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        } else {
            entry.target.style.opacity = 0;
            entry.target.style.transform = 'translateY(20px)';
        }
    });
}, { threshold: 0.1 });

elementsToShow.forEach(element => {
    element.style.opacity = 0;
    element.style.transform = 'translateY(20px)';
    observer.observe(element);
});
document.addEventListener("DOMContentLoaded", () => {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active'); // Activa la animación
            }
        });
    }, {
        threshold: 0.2 // Elemento visible al 20% de su altura
    });

    animatedElements.forEach(element => observer.observe(element));
});
const productos = [
    {
        nombre: "Tolva Semilla Fertilizante 25M3",
        descripcion: "Capacidad y resistencia para cada necesidad agrícola.",
        especificaciones: ["Capacidad: 5000 kg", "Material: Acero reforzado", "Colores disponibles: Rojo, Verde"],
        imagen: "imagenes/tolva-producto.png",
        url: "productos/tolva.html"
        
    },
    {
        nombre: "Acoplado Playo",
        descripcion: "Durabilidad y versatilidad en el transporte.",
        especificaciones: ["Capacidad: 7000 kg", "Ejes dobles", "Diseño aerodinámico"],
        imagen: "imagenes/playo-producto.png",
        url: "productos/acoplado-playo.html"
    },
    {
        nombre: "Carro Taller",
        descripcion: "Herramientas esenciales para el trabajo en el campo.",
        especificaciones: ["Material: Acero inoxidable", "Compatibilidad universal", "Mantenimiento sencillo"],
        imagen: "imagenes/taller-producto.png",
        url: "productos/taller.html"
    }
];
document.addEventListener("DOMContentLoaded", () => {
    const productosContainer = document.getElementById("productos-grid");

    productos.forEach(producto => {
        const productoHTML = `
            <div class="producto">
                <img src="${producto.imagen}" alt="${producto.nombre}">
                <h4>${producto.nombre}</h4>
                <p>${producto.descripcion}</p>
                <a href="${producto.url}" class="btn">Ver Más</a>
            </div>
            
        `;
        productosContainer.innerHTML += productoHTML;
    });
});

// Función para mostrar detalles
function verDetalles(nombre) {
    const producto = productos.find(p => p.nombre === nombre);
    if (producto) {
        // Generar contenido dinámico o redirigir a una página de detalles
        alert(`Detalles de ${producto.nombre}: ${producto.descripcion}`);
    }
}
