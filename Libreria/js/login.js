document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault(); 

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Validación simple
        if (email === '' || password === '') {
            alert('Por favor, ingresa tu correo y contraseña.');
            return;
        }

        if (!isValidEmail(email)) {
            alert('Por favor, ingresa un correo electrónico válido.');
            return;
        }

        // Si es exitoso, navegamos al Catálogo de productos (tarea del Desarrollador 2)
        alert('Inicio de sesión exitoso (simulado)! Redirigiendo a productos...');
        window.location.href = 'products.html'; 
    });

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});