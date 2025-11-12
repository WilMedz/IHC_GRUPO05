document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('registerForm');

    registerForm.addEventListener('submit', (event) => {
        event.preventDefault(); 

        const password = document.getElementById('passwordRegister').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        // Validación de coincidencia (clave para el JS)
        if (password !== confirmPassword) {
            alert('Las contraseñas no coinciden. Por favor, revísalas.');
            return;
        }
        
        // ... (otras validaciones) ...

        alert('Registro exitoso (simulado)! Redirigiendo a Iniciar Sesión...');
        window.location.href = 'login.html'; 
    });
});