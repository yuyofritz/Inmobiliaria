// js/script.js

// Función para renderizar propiedades dinámicamente
function renderPropiedades(lista, contenedorId, limite = lista.length) {
    const contenedor = document.getElementById(contenedorId);
    contenedor.innerHTML = "";

    for (let i = 0; i < limite && i < lista.length; i++) {
        const p = lista[i];

        // Condicionales para smoke y pets
        const smokeText = p.smoke ? "✅ Permitido fumar" : "🚭 No se permite fumar";
        const petsText = p.pets
            ? "🐶 Mascotas permitidas"
            : "🚫 No se permiten mascotas";

        contenedor.innerHTML += `
        <div class="card">
        <img src="${p.src}" alt="${p.nombre}">
        <h3>${p.nombre}</h3>
        <p>${p.descripcion}</p>
        <p><strong>Ubicación:</strong> ${p.ubicacion}</p>
        <p><strong>Habitaciones:</strong> ${p.habitaciones}</p>
        <p><strong>Precio:</strong> $${p.costo.toLocaleString("es-CL")}</p>
        <p>${smokeText}</p>
        <p>${petsText}</p>
        </div>
    `;
    }
}
