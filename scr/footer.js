const  footer = `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
  <link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.10.5/font/bootstrap-icons.min.css" rel="stylesheet">
  <style>
    footer {
      background-color: #1d1d1d;
      color: #fff;
    }
    footer .social-icons i {
      font-size: 2.0rem;
      color: #fff;   
      transition: transform 0.3s ease, color 0.3s ease;
    }
    footer .social-icons a:hover i {
      transform: scale(1.2); /* Agranda el ícono */
      color: #f06d06; /* Cambia el color del ícono */
    }
    footer .divider {
      border-top: 2px solid #fff;
      margin: 1rem 0;
    }
    .text-center h5, .text-center li {
      color: white;
    }
  </style>
  <title>Footer</title>
</head>
<body>
  <footer class="text-white pt-4">
    <div class="container">
      <div class="social-icons text-center pb-3">
        <a href="#" class="text-decoration-none mx-3"><i class="bi bi-youtube"></i></a>
        <a href="#" class="text-decoration-none mx-3"><i class="bi bi-twitter"></i></a>
        <a href="#" class="text-decoration-none mx-3"><i class="bi bi-facebook"></i></a>
        <a href="#" class="text-decoration-none mx-3"><i class="bi bi-instagram"></i></a>
      </div>
      <div class="divider"></div>
      <div class="row text-center">
        <div class="col-md-4 mb-3">
          <h5>Nosotros</h5>
          <ul class="list-unstyled">
            En YØURSTYL3, nos especializamos en ropa deportiva diseñada para los
            amantes de los deportes al aire libre. Nuestras prendas combinan resistencia y 
            estilo para acompañarte en todas tus aventuras, desde el senderismo hasta el ciclismo.
                   ¡Explora la naturaleza con la confianza de llevar lo mejor en equipamiento deportivo!
          </ul>
        </div>
        <div class="col-md-4 mb-3">
          <h5>Sucursales</h5>
          <ul class="list-unstyled">
            <li>Av.Mitre 650 Avellaneda</li>
            <li>Av.Corrientes 1345</li>
            <li>Tucuman 567 CABA</li>
          </ul>
        </div>
        <div class="col-md-4 mb-3">
          <h5>Contacto</h5>

          <ul class="list-unstyled">
            <li>Lunes a Viernes: 9:00 a 18:00 <br>
            Sábados: 10:00 a 14:00</li>
            <li>Atención al Cliente: (+54) 11 1234-5678</li>
            <li>soporte@tumarca.com</li>

          </ul>
          
        </div>
        
      </div>
    </div>
  </footer>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>

`
export {footer}