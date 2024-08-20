document.querySelector('form').addEventListener('submit', async function (e) {
    e.preventDefault();
  
    const userName = document.querySelector('input[name="userName"]').value;
    const userEmail = document.querySelector('input[name="userEmail"]').value;
    const userPassword = document.querySelector('input[name="userPassword"]').value;
  
    const response = await fetch('/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userName,
        userEmail,
        userPassword,
      }),
    });
  
    const result = await response.text();
    alert(result);
    
  });

  
  document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('.form-login');
    const alertaError = document.querySelector('.alerta-errorI');
    const alertaExito = document.querySelector('.alerta-exitoI');

    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Previene el envío por defecto del formulario

            const formData = new FormData(loginForm);
            const data = Object.fromEntries(formData.entries());

            fetch('/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
            .then(response => response.json())
            .then(result => {
                if (result.isAuthenticated) {
                    // Guardar el estado de autenticación en localStorage
                    localStorage.setItem('isAuthenticated', true);

                    // Mostrar mensaje de éxito y redirigir
                    alertaExito.style.display = 'block';
                    alertaError.style.display = 'none';
                    window.location.href = './index.html';
                } else {
                    alertaExito.style.display = 'none';
                    alertaError.style.display = 'block';
                    alertaError.textContent = result.message || 'Correo o contraseña incorrectos';
                }
            })
            .catch(error => {
                console.error('Error en la solicitud:', error);
                alertaError.textContent = 'Error en la solicitud';
                alertaError.style.display = 'block';
                alertaExito.style.display = 'none';
            });
        });
    }
});
