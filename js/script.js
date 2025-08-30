function renderPropiedades(lista, contenedorId, limite = lista.length) {
        const contenedor = document.getElementById(contenedorId);
        if (!contenedor) return;
        contenedor.innerHTML = "";

        for (let i = 0; i < limite && i < lista.length; i++) {
            const p = lista[i];

            const smokeText = p.smoke ? "✅ Permitido fumar" : "🚭 No se permite fumar";
            const petsText = p.pets ? "🐶 Mascotas permitidas" : "🚫 No se permiten mascotas";

            contenedor.innerHTML += `
                <div class="col-lg-3 col-md-4 col-sm-6 mb-2">
                    <div class="card h-100 shadow-sm">
                        <img src="${p.src}" class="card-img-top img-fluid" style="height:150px; object-fit:cover;" alt="${p.nombre}">
                        <div class="card-body p-2">
                            <h5 class="card-title">${p.nombre}</h5>
                            <p>${p.descripcion}</p>
                            <p><strong>Ubicación:</strong> ${p.ubicacion}</p>
                            <p><strong>Habitaciones:</strong> ${p.habitaciones}</p>
                            <p><strong>Precio:</strong> $${p.costo.toLocaleString("es-CL")}</p>
                            <p>${smokeText}</p>
                            <p>${petsText}</p>
                        </div>
                    </div>
                </div>
            `;
        }
    }

    // Renderizar las propiedades
    renderPropiedades(propiedades_alquiler, "alquilerPage");