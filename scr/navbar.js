const navbar = `

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sports Shop</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css" rel="stylesheet">
    <style>

        .top-bar {
            background-color: #F8F9FA;
            font-size: 1.2rem;
          
        }
        .image-1 {
            background-image: url(./assets/correr.jpg);
            height: 565px;
            width: 100%;
            background-size: cover; /* O utiliza contain dependiendo de lo que necesites */
            background-position: center; /* Centra la imagen */
            background-repeat: no-repeat; /* Evita que la imagen se repita */
        }
        .container-txt{
            background-color: black;
            height: 100px;
            padding-top: 10px; 
        }
        .tende{
            margin: 20px;
        }
        .top-bar .nav-link {
            color: black;
        }

        .top-bar .nav-link:hover {
            color: #f06d06;
        }

        .navbar {
            background-color: black;
        }

        .navbarr{
            font-weight: bold;
            color: white;
            text-decoration:none;
            font-size:25px;
        }

        .navbarr:hover{
            color: #f06d06;
        }

        .navbar-nav .nav-link{
            color: white;
        }

        .navbar-nav .nav-link:hover{
            color: #f06d06;
        }

        .dropdown-menu {
            background-color: black;
            border: none;
        }

        .dropdown-menu .dropdown-item {
            color: black    ;
            background-color: white ;

        }
   

        .dropdown-menu .dropdown-item:hover {
            background-color: #f06d06;
            color: black;
        }
        
        .btn-cart {
            color: black;
        }

        .btn-cart:hover {
            color: #f06d06;
        }


        .dropdown-toggle {
      
            color: black; 
            text-decoration: none; 
        }

        .dropdown-toggle:hover {
            color: #f06d06; 
            text-decoration: none; 
        }
    </style>
</head>
<body>




    <div class="top-bar py-2">
        <div class="container-fluid d-flex justify-content-between">
        
            <a href="#" id="ingresarBtn" class="nav-link d-inline ">Ingresar</a> 

            <div id="newButtonsContainer" class="top-bar py-2 ms-2" style="display: none;">
                <div class="btn-group">
                
                    <a href="carrito.html" class="nav-link d-inline"> <i class="bi bi-cart"></i> </a>

          
                    <a class="dropdown-toggle text-decoration-none" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                        Usuario
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <li><a class="dropdown-item" href="usuario.html">Cuenta</a></li>
                        <li><a class="dropdown-item" href="envio.html">Ver Pedidos</a></li>
                    </ul>
                </div>
                <a href="#" id="salirBtn" class="nav-link d-inline">salir</a>
            </div>
        </div>
    </div>





    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-dark">
        <div class="container-fluid">
            <a class="navbarr" href="index.html">YØURSTYL3 </a>
            
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="index.html">Home</a>
                    </li>
                    <li class="nav-item ">
                         <a class="nav-link" href="mujer.html">Mujer</a>

                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="hombre.html">Hombre</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="metodospago.html">Pagos / Contacto</a>
                    </li>
                </ul>
               
            </div>
            
        </div>
     
    </nav>

 
    <!-- Bootstrap JS -->
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js"></script>
</body>
</html>


`
export { navbar }