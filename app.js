// almacenar variables y actualizar el interfaz (esto con el fin de utilizar menos codigo)
function actualizarInterfaz(texto, mensajeAlert, imageSrc) {
    const mensaje = document.querySelector('.encriptador__mensaje');
    const imagen = document.getElementById('resultadoImagen');

    mensaje.querySelector('.alert__mensaje').innerText = texto;
    mensaje.querySelector('.alert__mensaje__parrafo').innerText = mensajeAlert;
    imagen.src = imageSrc;
};

// Restriccion del mensaje que se introduce (no mayusculas ni acentos)
function validarTexto(input) {
    const textOriginal = input.value;
    const textoFiltrado = textOriginal.replace(/[^a-z\s]/g, '');

    if (textOriginal !== textoFiltrado) {
        alert('No se aceptan mayusculas, acentos ni numeros');
        input.value = textoFiltrado;
    }
};

// Btn Encriptador
function encriptador() {
    let inputText = document.getElementById('input__text__encriptar').value;
    let text = inputText.replace(/a/gi, 'alt')
        .replace(/e/gi, 'enter')
        .replace(/i/gi, 'insert')
        .replace(/o/gi, 'one')
        .replace(/u/gi, 'url');

    if (text !== "") {
        actualizarInterfaz(text, 'Encriptado', 'img/bloquear.png');

    } else {
        actualizarInterfaz('Ningún mensaje fue encontrado', 'Ingrese el texto que quiere encriptar o desencriptar', '/img/muñeco.png');
    };
};

// btn Desencriptar
function desencriptar() {
    let inputText = document.getElementById('input__text__encriptar').value;
    let text = inputText.replace(/alt/gi, 'a')
        .replace(/enter/gi, 'e')
        .replace(/insert/gi, 'i')
        .replace(/one/gi, 'o')
        .replace(/url/gi, 'u');

    if (text != "") {
        actualizarInterfaz(text, 'Desencriptado', 'img/candado-abierto.png');
    } else {
        actualizarInterfaz('Ningún mensaje fue encontrado', 'Ingrese el texto que quiere encriptar o desencriptar', '/img/muñeco.png');
    };
};

// Copiar texto encriptado o desencriptado 
function copiarTexto() {
    const mensaje = document.querySelector('.alert__mensaje').innerText;
    if (mensaje) {
        navigator.clipboard.writeText(mensaje)
            .then(() => {
                alert('El texto se ha copiado al portapapeles');
            })
            .catch(err => {
                alert('Error al copiar texto', err)
            });
    } else {
        alert('No hay texto para copiar');
    };
};