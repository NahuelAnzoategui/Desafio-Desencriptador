function encriptarTexto(texto) {
    return texto
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
}

function desencriptarTexto(texto) {
    return texto
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
}

// Función para copiar el texto al portapapeles
function copiarTexto(texto) {
    navigator.clipboard.writeText(texto).then(() => {
        alert('Texto copiado al portapapeles!');
    }).catch(err => {
        console.error('Error al copiar el texto: ', err);
    });
}

// Obtener referencias a los elementos del DOM
const textarea = document.querySelector('.izquierda__textarea');
const btnEncriptar = document.querySelector('.btn-encriptar');
const btnDesencriptar = document.querySelector('.btn-desencriptar');
const btnCopiar = document.querySelector('.btn-copiar');
const textoNoEncontrado = document.querySelector('.texto-noencontrado');
const textoDesencriptar = document.querySelector('.texto-desencriptar');

// Añadir eventos a los botones
btnEncriptar.addEventListener('click', () => {
    const texto = textarea.value.toLowerCase();
    
    // Verificar que el texto solo contenga letras minúsculas y espacios
    if (/^[a-z\s]*$/.test(texto)) {
        const textoEncriptado = encriptarTexto(texto);
        textoNoEncontrado.textContent = '';
        textoDesencriptar.textContent = textoEncriptado;
        textarea.value = '';
    } else {
        alert('El texto debe contener solo letras minúsculas y espacios.');
    }
});

btnDesencriptar.addEventListener('click', () => {
    const texto = textarea.value.toLowerCase();
    
    // Verificar que el texto solo contenga letras minúsculas y espacios
    if (/^[a-z\s]*$/.test(texto)) {
        const textoDesencriptado = desencriptarTexto(texto);
        textoNoEncontrado.textContent = '';
        textoDesencriptar.textContent = textoDesencriptado;
        textarea.value = '';
    } else {
        alert('El texto debe contener solo letras minúsculas y espacios.');
    }
});

btnCopiar.addEventListener('click', () => {
    const texto = textoDesencriptar.textContent;
    if (texto) {
        copiarTexto(texto);
    } else {
        alert('No hay texto para copiar.');
    }
});