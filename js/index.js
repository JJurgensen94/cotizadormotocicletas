const impuestos = {
    "honda": 0.1,
    "yamaha": 0.15,
    "suzuki": 0.2,
    "kawasaki": 0.3,
};

function calcularPrecio() {
    // Pedir valores mediante prompt
    const cilindrada = parseInt(prompt("Ingresa la cilindrada de la motocicleta"));
    let marca = prompt("Ingresa la marca de la motocicleta (honda, yamaha, suzuki o kawasaki)").toLowerCase();

    // Validar marca
    while (!(marca in impuestos)) {
        marca = prompt("Marca no válida. Ingresa la marca de la motocicleta (honda, yamaha o suzuki)").toLowerCase();
    }

    // Declarar variables
    let precioBase, impuesto, precioFinal;


    // Calcular precio base    
    switch (true) {
        case (cilindrada <= 125):
            precioBase = 1000;
            break;
        case (cilindrada <= 250):
            precioBase = 2000;
            break;
        case (cilindrada <= 500):
            precioBase = 4000;
            break;
        default:
            precioBase = 1000;
            break;
    }

    // Calcular impuesto
    impuesto = precioBase * impuestos[marca];

    // Calcular precio final
    precioFinal = precioBase + impuesto;

    // Mostrar resultado
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `
     <p>El precio base de la motocicleta es: <span>$${precioBase.toFixed(2)}</span></p>
     <p>El impuesto a pagar es: <span>$${impuesto.toFixed(2)}</span></p>
     <p>El precio final de la motocicleta es: <span>$${precioFinal.toFixed(2)}</span></p>
   `;
    resultado.classList.remove('oculto');


// Mensaje de despedida con alert
alert("Gracias por utilizar nuestro servicio de cotización. En breve aparecera tu resultado... ¡Que tengas un buen día!");

}
