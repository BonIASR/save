<!DOCTYPE html>
<html>
<head>
  <base target="_top">
  <title>Empacadora Hamburgo - Sistema de Gestión</title>
  <style>
    /* Estilos generales */
body {
  font-family: 'Arial', sans-serif;
  background-image: url('https://lh3.googleusercontent.com/pw/AP1GczOBFt13J_oLGKmZSg3qkAFHkdCE3qKTY1Gqicz19f1xH1LQfeYk7i8_VIh3NEXqnZc5hlx4dwimvfCR4WP-oTXnBOTzei8tRUA965T9sQaVDvvVKe6991k9iQs1jnWU6vNoT0rwWmQXjHhL6CtONTSufw=w1920-h1080-s-no-gm?authuser=0');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  margin: 0;
  padding: 0;
  color: #333;
}

/* Encabezado */
header {
  display: flex;
  align-items: center;
  padding: 10px 20px; /* Aumenta el padding si es necesario */
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #bb6c59;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
  z-index: 1000;
  box-sizing: border-box; /* Asegura que el padding se incluya en el ancho */
}

/* Logo */
#logo {
  width: 100px;
  height: auto;
  border-radius: 8px;
  cursor: pointer;
}

/* Título */
header h1 {
  font-size: 40px;
  margin: 0 20px; /* Añade margen para separar del logo y los botones */
  font-family: 'Times New Roman', serif;
  color: white;
  text-align: center;
  flex: 1;
}

/* Modificación en el CSS */
#navButtons {
  display: flex; /* Cambiado de 'none' a 'flex' para mostrar los botones */
  align-items: center;
  gap: 10px; /* Espacio entre botones */
}

/* Contenedor principal */
#mainContainer {
  background-color: rgba(255, 255, 255, 0.1); /* Fondo blanco translúcido */
  padding: 20px 10px; /* Espaciado alrededor */
  border-radius: 15px; /* Bordes redondeados */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: none;
  margin: 100px auto 0 auto; /* Ajusta el margen superior para el header fijo */
  box-sizing: border-box;
}

/* Sección de Login */
#loginSection {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 5px;
}

/* Formulario de Login */
#loginFormContainer {
  background-color: rgba(255, 255, 255, 0.95);
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  width: 300px;
  min-width: 300px;
}

/* Botones generales por rol */
/* Ajustar posición de los botones principales */
#buttonContainer {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 40px 0 5px 0; /* 40px arriba, 5px abajo */
  gap: 10px; /* Espacio entre botones */
  width: 100%;
}

/* Sección de Generar Venta */
.section {
  display: none; /* Ocultar inicialmente */
  width: 75%;
  flex-direction: column;
  align-items: center;
  margin: 5px 0; /* Espacio vertical de 5px arriba y abajo */
  position: center;
  z-index: 1;
}

#generarVentaSection {
  display: none; /* Mostrar la sección de Generar Venta */
  width: 100%;
  flex-direction: column;
  align-items: stretch;
  margin: 5px 0; /* Espacio vertical de 5px arriba y abajo */
}

#generarVentaSection h2 {
  text-align: center;
  margin: 5px 0;
}

#generarVentaContent {
  display: flex;
  gap: 20px; /* Espacio horizontal entre formulario y nota */
  padding: 25px;
  flex-wrap: nowrap; 
  width: 100%;
}

/* Formulario de Venta */
#formVenta {
  background-color: rgba(255, 255, 255, 0.95);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  flex: 1 1 300px;
  max-width: 400px;
}

/* Nota de Remisión */
#notaRemisionContainer {
  background-color: rgba(255, 255, 255, 0.95);
  padding: 5px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  flex: 2 1 800px;
  max-width: 1200px;
  width: 100%;
  overflow-x: auto;
}

/* Estilos específicos para cada formulario */
#loginFormContainer form,
#formVenta form,
#notaRemisionContainer form {
  display: flex;
  flex-direction: column;
}

/* Títulos de secciones */
#loginFormContainer h2,
#formVenta h2,
#notaRemisionContainer h3 {
  margin-top: 0;
  text-align: center;
  color: #333;
}

#notaRemisionContainer h3 {
  text-align: left;
}

/* Formulario de Venta y otros formularios */
.form-group {
  margin-bottom: 20px; /* Espacio adicional entre los campos */
  position: relative;
}

.form-group label {
  display: flex;
  font-weight: bold;
  margin-bottom: 5px;
}

.form-group input,
.form-group select {
  width: 100%;
  padding: 10px; /* Espacio interno aumentado */
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 5px;
  transition: border-color 0.3s;
  font-size: 16px; /* Tamaño de fuente más grande */
}

.form-group input:focus,
.form-group select:focus {
  border-color: #bb6c59;
  outline: none;
}

/* Contenedor de la sección Registrar Entrada de Proveedor */
#entradaProveedoresSection {
  max-width: 75%; 
  min-width: 75%;
  margin: auto; 
  background-color: rgba(255, 255, 255, 0.95);
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  box-sizing: border-box;
}

/* Estilos específicos para tablas */
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  border-radius: 0;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  background-color: rgba(255, 255, 255, 0.95);
}

table th,
table td {
  padding: 12px;
  border: 1px solid #ddd;
  text-align: center;
}

table th {
  background-color: #bb6c59;
  color: white;
}

/* Botón de basura */
.trash-icon {
  width: 20px;
  height: 20px;
  cursor: pointer;
  transition: transform 0.2s;
}

.trash-icon:hover {
  transform: scale(1.2);
}

/* Estilos específicos para la Nota de Remisión */
.nota-remision {
  font-family: 'Open Sans', sans-serif;
  margin: 0;
  padding: 0;
}

@page {
  size: A4 landscape;
  margin: 0;
}

.page {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
}

.half-page.sls {
  width: 50%;
  padding: 20px;
  box-sizing: border-box;
  border-right: 1px dashed #000;
  position: relative;
}

.half-page.sls:last-child {
  border-right: none;
}

/* Encabezado */
.header-container.sls {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 5px;
}

.header-left.sls {
  flex: 1;
}

.header-center.sls {
  flex: 2;
  text-align: center;
}

.header-right.sls {
  flex: 1;
  text-align: right;
  border: 1px solid #000;
  padding: 2px;
  font-size: 12px;
  margin-top: 2px;
  box-sizing: border-box;
}

.logo.sls {
  width: 80px;
  border-radius: 5px;
}

/* Información del Negocio */
.business-info.sls {
  text-align: center;
  font-size: 12px;
  margin-bottom: 2px;
  line-height: 1;
}

/* Información del Cliente */
.client-info.sls {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 5px;
}

.client-info.sls td {
  border: 1px solid #000;
  padding: 3px;
  font-size: 12px;
}

.client-info.sls td.label {
  font-weight: bold;
  width: 20%;
}

/* Tabla de Productos */
table.products.sls {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 5px;
  font-size: 12px;
  table-layout: fixed;
}

table.products.sls thead {
  background-color: #bb6c59;
  color: #fff;
}

table.products.sls th,
table.products.sls td {
  border: 1px solid #000;
  padding: 3px;
  text-align: left;
  word-wrap: break-word;
}

/* Subtotal y Total */
.totals-section.sls {
  font-size: 12px;
  margin-bottom: 5px;
}

.totals-section.sls p {
  margin: 0;
}

/* Total en Letras */
.total-in-words.sls {
  font-size: 12px;
  margin-bottom: 5px;
}

/* Pagaré */
.promissory-note.sls {
  font-size: 10px;
  text-align: justify;
  margin-bottom: 10px;
}

/* Sección de Firma */
.signature-section.sls {
  text-align: center;
  font-size: 12px;
}

.signature-line.sls {
  width: 50%;
  border-top: 1px solid #000;
  margin: 0 auto;
  margin-top: 10px;
  padding-top: 5px;
}

/* Media Queries */
@media screen and (max-width: 1200px) {
  #formVenta {
    flex: 0 0 35%;
  }

  #notaRemisionContainer {
    flex: 0 0 80%;
    max-width: 1400px;
  }
}

@media screen and (max-width: 800px) {
  /* Encabezado */
  header h1 {
    font-size: 20px;
    text-align: center;
  }

  /* Botones de navegación */
  #navButtons {
    justify-content: flex-end;
  }

  /* Formulario de acceso */
  #loginFormContainer {
    width: 80%;
  }

  /* Botones del menú principal */
  .btn-menu {
    flex: 1 1 100%;
    max-width: 100%;
  }

  /* Layout de Generar Venta */
  #generarVentaContent > div {
    flex-direction: column;
    align-items: center;
  }

  #formVenta,
  #notaRemisionContainer {
    flex: 0 0 95%;
    margin: 0 auto;
  }
}

@media print {
  #notaRemisionContainer {
    max-width: 100%;
    padding: 10px;
  }

  .half-page.sls {
    width: 50%;
    padding: 10px;
  }

  /* Ajusta otros estilos específicos para impresión si es necesario */
}

/* Estilos para la sección de Producción */
#productionInput {
  display: none; /* Inicialmente oculto */
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.95);
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  max-width: 400px;
  margin: 20px auto; /* Centrar horizontalmente */
}

.production-fields {
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
}

#productionInput input[type="number"] {
  width: 50%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  transition: border-color 0.3s;
}

#productionInput input[type="number"]::placeholder {
  color: #888;
  font-style: italic;
}

#productionInput input[type="number"]:focus {
  border-color: #bb6c59;
  outline: none;
}

/* Estilos para la visualización de productos en Entrada de Mercancía */
.product-display {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  padding: 20px;
}

.product-card {
  cursor: pointer;
  border: 1px solid #bb6c59; /* Coincide con el color del header */
  border-radius: 8px;
  padding: 15px;
  text-align: center;
  background-color: rgba(187, 108, 89, 0.5); /* Color actualizado para que no sea blanco */
  transition: transform 0.2s, box-shadow 0.2s;
  color: white; /* Asegura que el texto sea legible */
  flex: 0 1 180px;
  box-sizing: border-box;
}

.product-card:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 12px rgba(0,0,0,0.3);
}

.product-card img {
  max-width: 100%;
  height: auto;
  border-radius: 5px;
  margin-bottom: 10px;
}

/* Estilos para la sección de Existencias (si aplica) */
#existenciasSection table {
  width: 100%;
  border-collapse: collapse;
}

#existenciasSection th,
#existenciasSection td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
}

#existenciasSection th {
  background-color: #bb6c59;
  color: white;
}

#formEntradaProveedores {
  width: 100%; /* El formulario ocupará todo el ancho del contenedor */
  display: flex;
  flex-direction: column; /* Organiza los elementos del formulario verticalmente */
  align-items: stretch; /* Asegura que los elementos se expandan para llenar el ancho */
  justify-content: center;
  box-sizing: border-box; /* Incluye el padding y el borde en el cálculo del ancho */
}

#formEntradaProveedores .form-group input,
#formEntradaProveedores .form-group select {
  width: 100%; /* Los inputs se expanden completamente */
  box-sizing: border-box;
}

#formEntradaProveedores {
  margin: 0; /* Elimina márgenes innecesarios */
  padding: 0; /* Ajusta el espaciado interno si es necesario */
}


/* Aumentar la altura de las filas de productos */
#tablaProductosEntrada tbody tr {
  height: 100%; /* Ajusta según necesidad */
}

/* Centrar verticalmente el contenido de las celdas */
#tablaProductosEntrada td {
  vertical-align: middle;
}

/* 4. Centrar todo el contenido de la sección */
.centered-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 900px; /* Ajusta según necesidad */
  margin: 0 auto; /* Centra horizontalmente */
  padding: 20px;
  box-sizing: border-box;
}

/* Estilizar el formulario */
.entrada-form {
  width: 100%;
  max-width: 800px; /* Ajusta según necesidad */
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Estilizar los grupos de formulario */
.proveedor-datos .form-group,
#tablaProductosEntrada th,
#tablaProductosEntrada td {
  width: 100%;
  margin-bottom: 15px;
} 

/* Estilizar las tablas */
#tablaProductosEntrada {
  table-layout: fixed;
  width: 100%;
  border-collapse: collapse;
}

#tablaProductosEntrada th,
#tablaProductosEntrada td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* Ajusta el ancho de cada columna usando clases */
#tablaProductosEntrada th.col-codigo,
#tablaProductosEntrada td.col-codigo {
  width: 20%;
}

#tablaProductosEntrada th.col-producto,
#tablaProductosEntrada td.col-producto {
  width: 25%;
}

#tablaProductosEntrada th.col-kilos,
#tablaProductosEntrada td.col-kilos {
  width: 15%;
}

#tablaProductosEntrada th.col-piezas,
#tablaProductosEntrada td.col-piezas {
  width: 15%;
}

#tablaProductosEntrada th.col-comentarios,
#tablaProductosEntrada td.col-comentarios {
  width: 20%;
}

#tablaProductosEntrada th.col-acciones,
#tablaProductosEntrada td.col-acciones {
  width: 5%;
}

#tablaProductosEntrada th {
  background-color: #4CAF50; /* Mismo color que el encabezado principal */
  color: white;
  padding: 15px;
  text-align: center;
}

/* Estilizar los inputs dentro de la tabla para mayor altura */
#tablaProductosEntrada input[type="text"],
#tablaProductosEntrada input[type="number"] {
  width: 90%;
  padding: 10px;
  box-sizing: border-box;
  height: 40px; /* Aumenta la altura de los inputs */
  font-size: 16px;
} 

/* Estilizar las sugerencias */
.sugerencias {
  position: absolute;
  background-color: white;
  border: 1px solid #ccc;
  max-height: 150px;
  overflow-y: auto;
  z-index: 1000;
  width: 100%; /* Se ajustará al tamaño del input */
  display: none; /* Ocultar por defecto */
}

.sugerencias div {
  padding: 8px;
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.sugerencias div:hover {
  background-color: #f1f1f1;
}

.agregar-btn {
  background-color: #2196F3;
  color: white;
}

.eliminar-btn {
  background-color: #f44336;
  color: white;
}  

.guardar-btn {
  background-color: #4CAF50;
  color: white;
}

/* Opcional: Añadir estilos para responsividad */
@media screen and (max-width: 600px) {
  #tablaProductosEntrada th,
  #tablaProductosEntrada td {
    padding: 10px;
  }

  #tablaProductosEntrada input[type="text"],
  #tablaProductosEntrada input[type="number"] {
    height: 35px;
    font-size: 14px;
  }

  /* Botones serán actualizados en la siguiente sección */
}

/* Estilos para el botón "Ver Entradas" */
.btn.ver-entradas-btn {
  display: inline-flex; /* Permite que el botón se ajuste al contenido */
  align-items: center;
  justify-content: center;
  background-color: #007bff; /* Azul */
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin-bottom: 10px;
  cursor: pointer;
  border-radius: 4px;
  font-size: 16px;
  white-space: nowrap; /* Evita que el texto se envuelva */
}

.btn.ver-entradas-btn:hover {
  background-color: #0056b3; /* Azul oscuro al pasar el cursor */
}

/* Opcional: Estilos para botones dentro de la tabla */
#tablaProductosEntrada .btn {
  display: inline-flex; /* Permite que el botón se ajuste al contenido */
  align-items: center;
  justify-content: center;
  padding: 5px 10px;
  font-size: 14px;
  width: auto; /* Permite que el ancho se ajuste al contenido */
}

/* Opcional: Ajustar el tamaño de las celdas para botones */
#tablaProductosEntrada td.col-acciones {
  text-align: center;
}

/* Transiciones suaves */
#tablaProductosContainer {
  transition: all 0.5s ease;
}
/* ======== Estilos Actualizados para Botones ======== */

/* Botones Generales */
.btn,
.btn-secondary {
  display: inline-flex; /* Permite que el botón se ajuste al contenido */
  align-items: center;
  justify-content: center;
  background-color: #bb6c59;
  color: white;
  padding: 10px 20px; /* Ajusta según sea necesario */
  margin: 5px 2px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  cursor: pointer;
  border: 2px solid #bb6c59;
  border-radius: 8px;
  transition: transform 0.2s, background-color 0.3s, border-color 0.3s;
  width: auto; /* Permite que el ancho se ajuste al contenido */
  white-space: nowrap; /* Evita que el texto se envuelva */
}

.btn:hover,
.btn-secondary:hover {
  transform: scale(1.05);
  background-color: #a55b4e;
  border-color: #a55b4e;
}

/* Botones del Menú Principal */
.btn-menu {
  display: inline-flex; /* Permite que el botón se ajuste al contenido */
  align-items: center;
  justify-content: center;
  background-color: #bb6c59;
  color: white;
  padding: 10px 20px; /* Ajusta según sea necesario */
  margin: 10px;
  border: 2px solid #bb6c59;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.2s, background-color 0.3s, border-color 0.3s;
  font-size: 16px;
  white-space: nowrap; /* Evita que el texto se envuelva */
  flex: none; /* Evita que el botón se expanda automáticamente */
  width: auto; /* Permite que el ancho se ajuste al contenido */
}

.btn-menu:hover {
  transform: scale(1.05);
  background-color: #a55b4e;
  border-color: #a55b4e;
}

/* Botones Específicos */
#homeButton,
#logoutButton {
  display: inline-flex; /* Permite que el botón se ajuste al contenido */
  align-items: center;
  justify-content: center;
  background-color: #28a745; /* Verde para Home */
  color: white;
  border: none;
  cursor: pointer;
  padding: 8px 12px;
  border-radius: 5px;
  transition: transform 0.3s, background-color 0.3s;
  font-size: 16px;
  width: auto; /* Permite que el ancho se ajuste al contenido */
  white-space: nowrap; /* Evita que el texto se envuelva */
}

#homeButton {
  background-color: #28a745; /* Verde */
}

#homeButton:hover {
  transform: scale(1.1);
  background-color: #218838;
}

#logoutButton {
  background-color: #e74c3c; /* Rojo */
}

#logoutButton:hover {
  transform: scale(1.05);
  background-color: #c0392b;
}


/* Botón "Ver Entradas" */
.btn.ver-entradas-btn {
  display: inline-flex; /* Permite que el botón se ajuste al contenido */
  align-items: center;
  justify-content: center;
  background-color: #007bff; /* Azul */
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin-bottom: 10px;
  cursor: pointer;
  border-radius: 4px;
  font-size: 16px;
  white-space: nowrap; /* Evita que el texto se envuelva */
}

.btn.ver-entradas-btn:hover {
  background-color: #0056b3; /* Azul oscuro al pasar el cursor */
}

/* Botones dentro de la tabla */
#tablaProductosEntrada .btn {
  display: inline-flex; /* Permite que el botón se ajuste al contenido */
  align-items: center;
  justify-content: center;
  padding: 5px 10px;
  font-size: 14px;
  width: auto; /* Permite que el ancho se ajuste al contenido */
}

/* Botones de Registro */
.btn-registrar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: #28a745;
  color: white;
  border: none;
  padding: 12px 20px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;
}

.btn-registrar:hover {
  background-color: #218838;
  transform: scale(1.05);
}
  </style>  
</head>
<body>
  <header>
    <img id="logo" src="https://lh3.googleusercontent.com/pw/AP1GczNzs5FyXSmXxzim0K70F7dzFEyuvu4AjOPmcQ1ehAV4k3339U5ElzS-gF1ldN7_Zy2zEHwoVJIewrOkXh8oUSsZ3FjCVHi1aRSg8bw6_4wRDuXJj2zGlGWsSWiAQ-WqHjj7BSs2YDrX_lzns45X4UY1gA=w913-h913-s-no-gm?authuser=0" alt="Logo" onclick="mostrarGenerarVenta()">
    <h1>Empacadora Hamburgo</h1>
    <div id="navButtons">
      <button id="homeButton" onclick="mostrarGenerarVenta()" title="Inicio">
        Home
      </button>
      <button id="logoutButton" onclick="cerrarSesion()" title="Cerrar Sesión">Cerrar Sesión</button>
    </div>
  </header>

  <!-- Contenedor principal -->
  <div id="mainContainer">

    <!-- Sección de Login -->
    <div id="loginSection">
      <div id="loginFormContainer">
        <h2>Acceso al Sistema</h2>
        <form id="loginForm" onsubmit="handleLogin(event)">
          <div class="form-group">
            <label>Usuario:</label>
            <input type="text" id="usuario" required>
          </div>
          <div class="form-group">
            <label>Contraseña:</label>
            <input type="password" id="contrasena" required>
          </div>
          <button type="submit" class="btn">Ingresar</button>
        </form>
      </div>
    </div>

    <!-- Botones generales por rol -->
    <div id="buttonContainer"></div>

    <!-- Sección de Generar Venta -->
    <div id="generarVentaSection" class="section">
      <h2>Generar Venta</h2>
      <div id="generarVentaContent">
        <!-- Formulario de Venta -->
        <div id="formVenta">
          <form id="ventaForm">
            <!-- Apartado de Datos de Cliente -->
            <h3>Datos del Cliente</h3>
            <div class="form-group">
              <label>Código Cliente:</label>
              <input type="text" id="codigoCliente" oninput="buscarClientePorCodigo()" autocomplete="off" required>
              <!-- Eliminado el div de sugerencias para Código Cliente -->
            </div>
            <div class="form-group">
              <label>Nombre Cliente:</label>
              <input type="text" id="nombreCliente" oninput="buscarClientePorNombre()" autocomplete="off" required>
              <div id="sugerenciasNombreClientes" class="sugerencias"></div>
            </div>
            <button type="button" class="btn" onclick="enviarClienteANota()">Enviar Datos del Cliente a Nota</button>

            <!-- Apartado Nombre del Vendedor -->
            <h3>Vendedor</h3>
            <div class="form-group">
              <label>Nombre del Vendedor:</label>
              <input type="text" id="nombreVendedor" value="" required>
            </div>

            <!-- Apartado de Producto -->
            <h3>Producto</h3>
            <div class="form-group">
              <label>Cantidad en Kilos:</label>
              <input type="number" id="cantidadProducto" min="1" step="1" required>
            </div>
            <div class="form-group">
              <label>Código Producto:</label>
              <input type="text" id="codigoProducto" oninput="buscarCodigoProducto()" autocomplete="off" required>
              <div id="sugerenciasCodigosProductos" class="sugerencias"></div>
            </div>
            <div class="form-group">
              <label>Nombre Producto:</label>
              <input type="text" id="nombreProducto" oninput="buscarProductoPorNombre()" autocomplete="off" required>
              <div id="sugerenciasNombreProductos" class="sugerencias"></div>
            </div>
            <div class="form-group">
              <label>Precio Unitario:</label>
              <input type="number" id="precioProducto" readonly required>
            </div>
            <div class="form-group">
              <label>Es una Promoción:</label>
              <input type="checkbox" id="esPromocion">
            </div>

            <!-- Botón Agregar Producto -->
            <button type="button" class="btn" onclick="agregarProducto()">Agregar Producto</button>
          </form>
        </div>

        <!-- Nota de Remisión -->
        <div id="notaRemisionContainer">
          <h3>Nota de Remisión</h3>
          <form id="notaRemisionForm">
            <div class="nota-remision">
              <div class="page">
                <!-- Original -->
                <div class="half-page sls">
                  <!-- Encabezado -->
                  <div class="header-container sls">
                    <!-- Columna 1: Logo -->
                    <div class="header-left sls">
                      <img class="logo sls" src="https://lh3.googleusercontent.com/pw/AP1GczNzs5FyXSmXxzim0K70F7dzFEyuvu4AjOPmcQ1ehAV4k3339U5ElzS-gF1ldN7_Zy2zEHwoVJIewrOkXh8oUSsZ3FjCVHi1aRSg8bw6_4wRDuXJj2zGlGWsSWiAQ-WqHjj7BSs2YDrX_lzns45X4UY1gA=w913-h913-s-no-gm?authuser=0" alt="Logo">
                    </div>
                    <!-- Columna 2: Información central -->
                    <div class="header-center sls">
                      <p style="font-size:16px; font-weight:bold; margin:0;">Nota de Remisión</p>
                      <p style="font-size:14px; font-weight:bold; margin:0; color: green;">ORIGINAL</p>
                      <h2 style="margin:5px 0 0 0; font-size:16px; font-weight:bold;">Sergio Fabián Macías Berumen</h2>
                      <div class="business-info sls">
                        <p>R.F.C. MABS911219 19S</p>
                        <p>Blvd Francisco Zarco #102</p>
                        <p>Col. Luis Echeverría C.P. 34250</p>
                        <p>Tels. 8189213 Durango, Dgo.</p>
                      </div>
                    </div>
                    <!-- Columna 3: Número de nota y fecha -->
                    <div class="header-right sls">
                      <p>N°: <span id="notaNumero">Pendiente</span></p>
                      <p>Fecha: <span id="notaFecha"></span></p>
                    </div>
                  </div>

                  <!-- Información del Cliente -->
                  <table class="client-info sls">
                    <tr>
                      <td class="label">Código Cliente:</td>
                      <td id="notaCodigoCliente">C000</td>
                    </tr>
                    <tr>
                      <td class="label">Nombre:</td>
                      <td id="notaClienteNombre">Cliente General</td>
                    </tr>
                    <tr>
                      <td class="label">Dirección:</td>
                      <td id="notaClienteDireccion">---</td>
                    </tr>
                    <tr>
                      <td class="label">RFC:</td>
                      <td id="notaClienteRFC">---</td>
                    </tr>
                  </table>

                  <!-- Tabla de Productos -->
                  <table class="products sls">
                    <thead>
                      <tr>
                        <th>Cant.</th>
                        <th>Descripción</th>
                        <th>P. Unitario</th>
                        <th>Importe</th>
                        <th>Promoción</th>
                        <th>Acciones</th>
                      </tr>
                    </thead>
                    <tbody id="notaProductos">
                      <!-- Productos agregados se mostrarán aquí -->
                    </tbody>
                  </table>

                  <!-- Campos Adicionales por Fila -->
                  <table class="products sls">
                    <thead>
                      <tr>
                        <th>Cantidad Num.</th>
                        <th>Cantidad Letras</th>
                        <th>Pagado</th>
                        <th>Tipo de Pago</th>
                        <th>Detalle de Pago</th>
                      </tr>
                    </thead>
                    <tbody id="notaCamposAdicionales">
                      <!-- Campos adicionales se agregarán aquí -->
                    </tbody>
                  </table>

                  <!-- Subtotal y Total -->
                  <div class="totals-section sls">
                    <p>Subtotal: $<span id="notaSubtotal">0.00</span></p>
                    <p>Total: $<span id="notaTotal">0.00</span></p>
                  </div>

                  <!-- Total en Letras -->
                  <div class="total-in-words sls">
                    <p>Total en letras: <span id="notaTotalLetras">Cero Pesos 00/100 M.N.</span></p>
                  </div>

                  <!-- Pagaré -->
                  <div class="promissory-note sls">
                    <p>
                      Por este pagaré me obligo a pagar incondicionalmente a la orden de <b>Sergio Fabián Macías Berumen</b>. En esta ciudad el día <span id="notaDia">01</span> de <span id="notaMes">Enero</span> del <span id="notaAnio">2024</span> la cantidad de <span id="notaTotalLetras">Cero Pesos 00/100 M.N.</span>.
                      Valor de las mercancías y/o servicios arriba descritas.
                      Este pagaré causará el ______% mensual sin que se dé por ampliado el pago de su vencimiento.
                    </p>
                  </div>

                  <!-- Sección de Firma -->
                  <div class="signature-section sls">
                    <div class="signature-line sls">
                      <p>Firma <span id="notaFirma">---</span></p>
                    </div>
                  </div>
                </div>

                <!-- Copia -->
                <div class="half-page sls">
                  <!-- Encabezado -->
                  <div class="header-container sls">
                    <!-- Columna 1: Logo -->
                    <div class="header-left sls">
                      <img class="logo sls" src="https://lh3.googleusercontent.com/pw/AP1GczNzs5FyXSmXxzim0K70F7dzFEyuvu4AjOPmcQ1ehAV4k3339U5ElzS-gF1ldN7_Zy2zEHwoVJIewrOkXh8oUSsZ3FjCVHi1aRSg8bw6_4wRDuXJj2zGlGWsSWiAQ-WqHjj7BSs2YDrX_lzns45X4UY1gA=w913-h913-s-no-gm?authuser=0" alt="Logo">
                    </div>
                    <!-- Columna 2: Información central -->
                    <div class="header-center sls">
                      <p style="font-size:16px; font-weight:bold; margin:0;">Nota de Remisión</p>
                      <p style="font-size:14px; font-weight:bold; margin:0; color: red;">COPIA CLIENTE</p>
                      <h2 style="margin:5px 0 0 0; font-size:16px; font-weight:bold;">Sergio Fabián Macías Berumen</h2>
                      <div class="business-info sls">
                        <p>R.F.C. MABS911219 19S</p>
                        <p>Blvd Francisco Zarco #102</p>
                        <p>Col. Luis Echeverría C.P. 34250</p>
                        <p>Tels. 8189213 Durango, Dgo.</p>
                      </div>
                    </div>
                    <!-- Columna 3: Número de nota y fecha -->
                    <div class="header-right sls">
                      <p>N°: <span id="notaNumeroCopia">Pendiente</span></p>
                      <p>Fecha: <span id="notaFechaCopia">Pendiente</span></p>
                    </div>
                  </div>

                  <!-- Información del Cliente Copia -->
                  <table class="client-info sls">
                    <tr>
                      <td class="label">Código Cliente:</td>
                      <td id="notaCodigoClienteCopia">C000</td>
                    </tr>
                    <tr>
                      <td class="label">Nombre:</td>
                      <td id="notaClienteNombreCopia">Cliente General</td>
                    </tr>
                    <tr>
                      <td class="label">Dirección:</td>
                      <td id="notaClienteDireccionCopia">---</td>
                    </tr>
                    <tr>
                      <td class="label">RFC:</td>
                      <td id="notaClienteRFCCopia">---</td>
                    </tr>
                  </table>

                  <!-- Tabla de Productos Copia -->
                  <table class="products sls">
                    <thead>
                      <tr>
                        <th>Cant.</th>
                        <th>Descripción</th>
                        <th>P. Unitario</th>
                        <th>Importe</th>
                        <th>Promoción</th>
                        <th>Acciones</th>
                      </tr>
                    </thead>
                    <tbody id="notaProductosCopia">
                      <!-- Productos agregados se mostrarán aquí -->
                    </tbody>
                  </table>

                  <!-- Campos Adicionales por Fila Copia -->
                  <table class="products sls">
                    <thead>
                      <tr>
                        <th>Cantidad Num.</th>
                        <th>Cantidad Letras</th>
                        <th>Pagado</th>
                        <th>Tipo de Pago</th>
                        <th>Detalle de Pago</th>
                      </tr>
                    </thead>
                    <tbody id="notaCamposAdicionalesCopia">
                      <!-- Campos adicionales se agregarán aquí -->
                    </tbody>
                  </table>

                  <!-- Subtotal y Total Copia -->
                  <div class="totals-section sls">
                    <p>Subtotal: $<span id="notaSubtotalCopia">0.00</span></p>
                    <p>Total: $<span id="notaTotalCopia">0.00</span></p>
                  </div>

                  <!-- Total en Letras Copia -->
                  <div class="total-in-words sls">
                    <p>Total en letras: <span id="notaTotalLetrasCopia">Cero Pesos 00/100 M.N.</span></p>
                  </div>

                  <!-- Pagaré Copia -->
                  <div class="promissory-note sls">
                    <p>
                      Por este pagaré me obligo a pagar incondicionalmente a la orden de <b>Sergio Fabián Macías Berumen</b>. En esta ciudad el día <span id="notaDiaCopia">01</span> de <span id="notaMesCopia">Enero</span> del <span id="notaAnioCopia">2024</span> la cantidad de <span id="notaTotalLetrasCopia">Cero Pesos 00/100 M.N.</span>.
                      Valor de las mercancías y/o servicios arriba descritas.
                      Este pagaré causará el ______% mensual sin que se dé por ampliado el pago de su vencimiento.
                    </p>
                  </div>

                  <!-- Sección de Firma Copia -->
                  <div class="signature-section sls">
                    <div class="signature-line sls">
                      <p>Firma <span id="notaFirmaCopia">---</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Botón Enviar Venta -->
            <button onclick="procesarVenta(event)" class="btn">Enviar Venta</button>
          </form>
        </div>
      </div>

      <!-- Ventas de la Última Hora -->
      <div id="ventasUltimaHoraContainer">
        <h3 style="text-align: center;">Ventas Recientes</h3>
        <table id="ventasUltimaHora">
          <thead>
            <tr>
              <th>Fecha</th>
              <th>No. de Remisión</th>
              <th>Versión</th>
              <th>Código Cliente</th>
              <th>Nombre Cliente</th>
              <th>Dirección</th>
              <th>RFC</th>
              <th>Cantidad</th>
              <th>Descripción</th>
              <th>P. Unitario</th>
              <th>Importe</th>
              <th>Promoción</th>
              <th>Pagado</th>
              <th>Tipo de Pago</th>
              <th>Detalle de Pago</th>
              <th>Enlace PDF</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <!-- Ventas se cargarán aquí -->
          </tbody>
        </table>
      </div>
    </div>

    <!-- Sección de Pedidos -->
    <div id="pedidosSection" class="section">
      <h2>Pedidos</h2>
      <div id="pedidosFormContainer">
        <!-- Contenido de pedidos -->
        <table id="tablaPedidos">
          <thead>
            <tr>
              <th>Fecha</th>
              <th>No. de Remisión</th>
              <th>Código Cliente</th>
              <th>Nombre Cliente</th>
              <th>Vendedor</th>
              <th>Productos</th>
              <th>Cantidad</th>
              <th>P. Unitario</th>
              <th>Importe</th>
              <th>Promoción</th>
              <th>Ruta</th>
              <th>Semana</th>
              <th>Mes</th>
              <th>Enlace PDF</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <!-- Pedidos se cargarán aquí -->
          </tbody>
        </table>
        <!-- Filtros de Pedidos -->
        <div id="filtrosPedidos">
          <h4>Filtros</h4>
          <div class="form-group">
            <label>Código Cliente:</label>
            <input type="text" id="filtroCodigoCliente" placeholder="Buscar por Código">
          </div>
          <div class="form-group">
            <label>Fecha:</label>
            <input type="date" id="filtroFecha">
          </div>
          <div class="form-group">
            <label>Semana:</label>
            <input type="number" id="filtroSemana" min="1" max="53" placeholder="Buscar por Semana">
          </div>
          <button type="button" class="btn" onclick="filtrarPedidos()">Filtrar Pedidos</button>
        </div>
      </div>
    </div>

    <!-- Sección de Entrada de Mercancía -->
    <div id="entradaMercanciaSection" class="section" style="display: none;">
      <h2>Entrada de Mercancía</h2>
  
      <!-- Botones para seleccionar sub-secciones -->
      <div class="additional-buttons" style="width: 100%; justify-content: flex-start; margin-bottom: 20px;">
        <button type="button" class="btn-secondary" onclick="mostrarProductosEntrada()">Productos</button>
        <button type="button" class="btn-secondary" onclick="mostrarProductosProveedoresEntrada()">Productos de Proveedores</button>
        <button type="button" class="btn-secondary" onclick="mostrarMateriaPrimaEntrada()">Materia Prima</button>
      </div>

      <!-- Sección de Productos -->
      <div id="productosEntradaSection" style="width: 100%; display: none;">
        <h3>Registrar Producción</h3>
        <!-- Contenedor para las tarjetas de productos -->
        <div id="productosProduccion" class="product-display">
          <!-- Aquí se cargarán las tarjetas de productos -->
        </div>

        <!-- Sección para capturar kilos y piezas producidos -->
        <div class="input-container" id="productionInput" style="display: none;">
          <h2 id="codigo">Código: </h2>
          <h3 id="productName">Producto: </h3>
          <div class="production-fields">
            <input type="number" id="kilos" placeholder="Kilos producidos" min="0" inputmode="numeric" required>
            <input type="number" id="piezas" placeholder="Piezas producidas" min="0" inputmode="numeric" required>
            <button onclick="registrarProduccion()" class="btn-registrar">Registrar Producción</button>
          </div>
        </div>
      </div>

      <!-- Sección de Entrada de Proveedores --> 
      <div id="entradaProveedoresSection" class="section centered-section" style="display: none;">
        <h3>Registrar Entrada de Proveedor</h3>
        <form id="formEntradaProveedores" onsubmit="registrarEntradaProveedor(event)" class="entrada-form">
          <!-- Contenedor de Datos de Proveedor -->
          <div id="proveedorDatos" class="proveedor-datos">
            <div class="form-group">
              <label for="codigoProveedorEntrada">Código Proveedor:</label>
              <input type="text" id="codigoProveedorEntrada" oninput="buscarProveedorPorCodigoEntrada(this)" autocomplete="off" required>
              <div class="sugerencias sugerenciasProveedoresEntrada"></div>
            </div> 
            <div class="form-group">
              <label for="nombreProveedorEntrada">Nombre Proveedor:</label>
              <input type="text" id="nombreProveedorEntrada" oninput="buscarProveedorPorNombreEntrada(this)" autocomplete="off" required>
              <div class="sugerencias sugerenciasNombreProveedoresEntrada"></div>
            </div>
            <div class="form-group">
              <label for="numeroFacturaEntrada">Número de Factura:</label>
              <input type="text" id="numeroFacturaEntrada" required>
            </div>      
            <div class="form-group">
              <label for="montoEntrada">Monto:</label>
              <input type="number" id="montoEntrada" min="0" step="0.01" required>
            </div>
            <div class="form-group">
              <label for="pagadaEntrada">Pagada:</label>
              <input type="checkbox" id="pagadaEntrada">
            </div>
          </div>

          <!-- Tabla de Productos -->
          <h4>Productos</h4>
          <table id="tablaProductosEntrada">
            <thead>
              <tr>
                <th>Código</th>
                <th>Producto</th>
                <th>Kilos</th>
                <th>Piezas Opcional</th>
                <th>Comentarios</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input type="text" name="codigoProducto" oninput="buscarProductoPorCodigoEntrada(this)" autocomplete="off" required>
                  <div class="sugerencias sugerenciasProductosEntrada"></div>
                </td>
                <td>
                  <input type="text" name="nombreProducto" oninput="buscarProductoPorNombreEntrada(this)" autocomplete="off" required>
                  <div class="sugerencias sugerenciasNombreProductosEntrada"></div>
                </td>
                <td>
                  <input type="number" name="kilos" min="0" step="0.01" required>
                </td>
                <td>
                  <input type="number" name="piezas" min="0" step="1">
                </td>
                <td>
                  <input type="text" name="comentarios">
                </td>
                <td>
                  <button type="button" onclick="eliminarFilaProducto(this)" class="btn eliminar-btn">Eliminar</button>
                </td>
              </tr>
            </tbody>
          </table>
          <button type="button" onclick="agregarFilaProducto()" class="btn agregar-btn">Agregar Producto</button>

          <button type="submit" class="btn guardar-btn">Guardar</button> 
        </form> 
      </div>



      <!-- Sección de Materia Prima -->
      <div id="materiaPrimaSection" style="width: 100%; margin-top: 20px; display: none;">
        <h3>Registrar Materia Prima</h3>
        <form id="formMateriaPrima" onsubmit="registrarMateriaPrimaEntrada(event)">
          <div class="form-group" style="position: relative;">
            <label>Código Producto:</label>
            <input type="text" id="codigoProductoEntrada" oninput="buscarProductoPorCodigoEntrada()" autocomplete="off" required>
            <div id="sugerenciasProductosEntrada" class="sugerencias"></div>
          </div>
          <div class="form-group" style="position: relative;">
            <label>Nombre Producto:</label>
            <input type="text" id="nombreProductoEntrada" oninput="buscarProductoPorNombreEntrada()" autocomplete="off" required>
            <div id="sugerenciasNombreProductosEntrada" class="sugerencias"></div>
          </div>
          <div class="form-group">
            <label>Kilos Recibidos:</label>
            <input type="number" id="kilosRecibidos" min="0" step="0.01" required>
          </div>
          <div class="form-group">
            <label>Piezas Recibidas:</label>
            <input type="number" id="piezasRecibidas" min="0" required>
          </div>
          <button type="submit" class="btn">Guardar</button>
        </form>
      </div>

      <!-- Botón para Ver Entradas -->
      <button type="button" onclick="toggleTablaEntradas()" class="btn ver-entradas-btn">Ver Entradas</button>

      <table id="tablaEntradas">
       <thead>
         <tr>
           <th>Fecha</th>
           <th>Proveedor/Producción</th>
           <th>Código Producto</th>
           <th>Nombre Producto</th>
           <th>Kilos</th>
           <th>Piezas</th>
           <th>Monto</th>
           <th>Acciones</th>
         </tr>
       </thead>
       <tbody>
        <!-- Las entradas se cargarán aquí dinámicamente -->
       </tbody>
     </table>
    </div>

    <!-- Sección de Existencias -->
    <div id="existenciasSection" class="section">
      <h2>Existencias</h2>
      <div id="existenciasFormContainer">
        <div id="existenciasContent">
          <table>
            <thead>
              <tr>
                <th>Código</th>
                <th>Producto</th>
                <th>Tipo</th>
                <th>Kilos</th>
                <th>Piezas</th>
              </tr>
            </thead>
            <tbody>
              <!-- Existencias se cargarán aquí -->
            </tbody>
          </table>
        </div>
      </div>
    </div>
  

    <!-- Sección de Créditos -->
    <div id="creditosSection" class="section">
      <h2>Créditos</h2>
      <div id="creditosFormContainer">
        <!-- Aquí puedes añadir contenido relacionado con créditos -->
        <p>Funcionalidad de créditos en desarrollo.</p>
      </div>
    </div>

    <!-- Sección de Registrar Cliente -->
    <div id="registrarClienteSection" class="section">
      <h2>Registrar Cliente</h2>
      <div id="registrarClienteFormContainer">
        <form id="registrarClienteForm" onsubmit="registrarCliente(event)">
          <div class="form-group">
            <label>Nombre del Cliente:</label>
            <input type="text" id="nombreClienteRegistro" required>
          </div>
          <div class="form-group">
            <label>Dirección:</label>
            <input type="text" id="direccionClienteRegistro" required>
          </div>
          <div class="form-group">
            <label>RFC:</label>
            <input type="text" id="rfcClienteRegistro">
          </div>
          <div class="form-group">
            <label>Teléfono:</label>
            <input type="text" id="telefonoClienteRegistro">
          </div>
          <div class="form-group">
            <label>Correo Electrónico:</label>
            <input type="email" id="correoClienteRegistro">
          </div>
          <button type="submit" class="btn">Registrar Cliente</button>
        </form>
      </div>
    </div>

    <!-- Sección de Registrar Producto -->
    <div id="registrarProductoSection" class="section">
      <h2>Registrar Producto</h2>
      <div id="registrarProductoFormContainer">
        <form id="registrarProductoForm" onsubmit="registrarProducto(event)">
          <!-- Campos del producto -->
          <div class="form-group">
            <label>Nombre del Producto:</label>
            <input type="text" id="nombreProductoRegistro" required>
          </div>
          <div class="form-group">
            <label>Tipo:</label>
            <input type="text" id="tipoProductoRegistro" required>
          </div>
          <div class="form-group">
            <label>Precio Fabricación:</label>
            <input type="number" id="precioFabricacionRegistro" min="0" step="0.01" required>
          </div>
          <div class="form-group">
            <label>Precio Proveedor:</label>
            <input type="number" id="precioProveedorRegistro" min="0" step="0.01">
          </div>
          <div class="form-group">
            <label>Precio Venta:</label>
            <input type="number" id="precioVentaRegistro" min="0" step="0.01" required>
          </div>
          <div class="form-group">
            <label>Imagen (URL):</label>
            <input type="text" id="imagenProductoRegistro">
          </div>
          <div class="form-group">
            <label>Proveedor:</label>
            <input type="text" id="proveedorProductoRegistro">
          </div>
          <div class="form-group">
            <label>Medida:</label>
            <input type="text" id="medidaProductoRegistro">
          </div>
          <div class="form-group">
            <label>Kilos:</label>
            <input type="number" id="kilosProductoRegistro" min="0" step="0.01">
          </div>
          <div class="form-group">
            <label>Gramos:</label>
            <input type="number" id="gramosProductoRegistro" min="0" step="0.01">
          </div>
          <div class="form-group">
            <label>Peso Total:</label>
            <input type="number" id="pesoTotalProductoRegistro" min="0" step="0.01">
          </div>
          <button type="submit" class="btn">Registrar Producto</button>
        </form>
      </div>
    </div>

    <!-- Sección de Registrar Proveedor -->
    <div id="registrarProveedorSection" class="section">
      <h2>Registrar Proveedor</h2>
      <div id="registrarProveedorFormContainer">
        <form id="registrarProveedorForm" onsubmit="registrarProveedor(event)">
          <!-- Campos del proveedor -->
          <div class="form-group">
            <label>Nombre del Proveedor:</label>
            <input type="text" id="nombreProveedorRegistro" required>
          </div>
          <div class="form-group">
            <label>Dirección:</label>
            <input type="text" id="direccionProveedorRegistro">
          </div>
          <div class="form-group">
            <label>RFC:</label>
            <input type="text" id="rfcProveedorRegistro">
          </div>
          <div class="form-group">
            <label>Teléfono:</label>
            <input type="text" id="telefonoProveedorRegistro">
          </div>
          <div class="form-group">
            <label>Correo Electrónico:</label>
            <input type="email" id="correoProveedorRegistro">
          </div>
          <button type="submit" class="btn">Registrar Proveedor</button>
        </form>
      </div>
    </div>

    <!-- Sección de Consola de Administración -->
    <div id="adminConsoleSection" class="section">
      <h2>Consola de Administración</h2>
      <div id="adminConsoleFormContainer">
        <!-- Botones de consola alineados a la derecha -->
        <div class="additional-buttons" style="width: 100%; justify-content: flex-end;">
          <button type="button" class="btn-secondary" onclick="mostrarAgregarUsuario()">Agregar Usuario</button>
          <button type="button" class="btn-secondary" onclick="mostrarDesbloquearUsuario()">Desbloquear Usuario</button>
          <button type="button" class="btn-secondary" onclick="mostrarEliminarUsuario()">Eliminar Usuario</button>
          <button type="button" class="btn-secondary" onclick="mostrarHistorialAccesos()">Ver Historial de Accesos</button>
        </div>

        <!-- Sección Agregar Usuario -->
        <div id="agregarUsuarioSection" style="display: flex; margin-top: 20px;">
          <h3>Agregar Usuario</h3>
          <form id="agregarUsuarioForm" onsubmit="agregarUsuario(event)">
            <div class="form-group">
              <label>Usuario:</label>
              <input type="text" id="nuevoUsuario" required>
            </div>
            <div class="form-group">
              <label>Nombre:</label>
              <input type="text" id="nuevoNombre" required>
            </div>
            <div class="form-group">
              <label>Contraseña:</label>
              <input type="password" id="nuevaContrasena" required>
            </div>
            <div class="form-group">
              <label>Rol:</label>
              <select id="nuevoRol" required>
                <option value="">--Seleccione Rol--</option>
                <option value="Administrador Premium">Administrador Premium</option>
                <option value="Administrador Regular">Administrador Regular</option>
                <option value="Usuario Regular">Usuario Regular</option>
              </select>
            </div>
            <button type="submit" class="btn">Agregar Usuario</button>
          </form>
        </div>

        <!-- Sección Desbloquear Usuario -->
        <div id="desbloquearUsuarioSection" style="display: flex; margin-top: 20px;">
          <h3>Desbloquear Usuario</h3>
          <form id="desbloquearUsuarioForm" onsubmit="desbloquearUsuario(event)">
            <div class="form-group">
              <label>Usuario:</label>
              <input type="text" id="usuarioDesbloquear" required>
            </div>
            <button type="submit" class="btn">Desbloquear Usuario</button>
          </form>
        </div>

        <!-- Sección Eliminar Usuario -->
        <div id="eliminarUsuarioSection" style="display: flex; margin-top: 20px;">
          <h3>Eliminar Usuario</h3>
          <form id="eliminarUsuarioForm" onsubmit="eliminarUsuario(event)">
            <div class="form-group">
              <label>Usuario:</label>
              <input type="text" id="usuarioEliminar" required>
            </div>
            <button type="submit" class="btn">Eliminar Usuario</button>
          </form>
        </div>

        <!-- Sección Historial de Accesos -->
        <div id="historialAccesosSection" style="display: flex; margin-top: 20px;">
          <h3>Historial de Accesos</h3>
          <table id="tablaHistorialAccesos">
            <thead>
              <tr>
                <th>Usuario</th>
                <th>Nombre</th>
                <th>Fecha de Acceso</th>
                <th>Hora de Acceso</th>
                <th>Acción</th>
              </tr>
            </thead>
            <tbody>
              <!-- Historial se cargarán aquí -->
            </tbody>
          </table>
        </div>
      </div>
    </div>
    

    <!-- Sección de Altas para Administradores -->
    <div id="altasSection" class="section" style="display: none;">
      <h2>Altas</h2>
      <div id="altasFormContainer">
        <!-- Botones para seleccionar qué registrar -->
        <div class="additional-buttons" style="width: 100%; justify-content: flex-start; margin-bottom: 20px;">
          <button type="button" class="btn-secondary" onclick="mostrarRegistrarProveedor()">Registrar Proveedor</button>
          <button type="button" class="btn-secondary" onclick="mostrarRegistrarCliente()">Registrar Cliente</button>
          <button type="button" class="btn-secondary" onclick="mostrarRegistrarProducto()">Registrar Producto</button>
        </div>

        <!-- Sección Registrar Proveedor -->
        <div id="registrarProveedorAltaSection" style="width: 100%; display: none;">
          <h3>Registrar Proveedor</h3>
          <form id="formRegistrarProveedorAlta" onsubmit="registrarProveedorAlta(event)">
            <div class="form-group">
              <label>Nombre del Proveedor:</label>
              <input type="text" id="nombreProveedorAlta" required>
            </div>
            <div class="form-group">
              <label>Dirección:</label>
              <input type="text" id="direccionProveedorAlta" >
            </div>
            <div class="form-group">
              <label>RFC:</label>
              <input type="text" id="rfcProveedorAlta">
            </div>
            <div class="form-group">
              <label>Teléfono:</label>
              <input type="text" id="telefonoProveedorAlta">
            </div>
            <div class="form-group">
              <label>Correo Electrónico:</label>
              <input type="text" id="correoProveedorAlta">
            </div>
            <button type="submit" class="btn">Registrar Proveedor</button>
          </form>
        </div>

        <!-- Sección Registrar Cliente -->
        <div id="registrarClienteAltaSection" style="width: 100%; display: none;">
          <h3>Registrar Cliente</h3>
          <form id="formRegistrarClienteAlta" onsubmit="registrarClienteAlta(event)">
            <div class="form-group">
              <label>Nombre del Cliente:</label>
              <input type="text" id="nombreClienteAlta" required>
            </div>
            <div class="form-group">
              <label>Dirección:</label>
              <input type="text" id="direccionClienteAlta" >
            </div>
            <div class="form-group">
              <label>RFC:</label>
              <input type="text" id="rfcClienteAlta">
            </div>
            <div class="form-group">
              <label>Teléfono:</label>
              <input type="text" id="telefonoClienteAlta">
            </div>
            <div class="form-group">
              <label>Correo Electrónico:</label>
              <input type="email" id="correoClienteAlta">
            </div>
            <button type="submit" class="btn">Registrar Cliente</button>
          </form>
        </div>

        <!-- Sección Registrar Producto -->
        <div id="registrarProductoAltaSection" style="width: 100%; display: none;">
          <h3>Registrar Producto</h3>
          <form id="formRegistrarProductoAlta" onsubmit="registrarProductoAlta(event)">
            <div class="form-group">
              <label>Nombre del Producto:</label>
              <input type="text" id="nombreProductoAlta" required>
            </div>
            <div class="form-group">
              <label>Tipo:</label>
              <input type="text" id="tipoProductoAlta" >
            </div>
            <div class="form-group">
              <label>Precio Fabricación:</label>
              <input type="number" id="precioFabricacionAlta" min="0" step="0.01" >
            </div>
            <div class="form-group">
              <label>Precio Proveedor:</label>
              <input type="number" id="precioProveedorAlta" min="0" step="0.01">
            </div>
            <div class="form-group">
              <label>Precio Venta:</label>
              <input type="number" id="precioVentaAlta" min="0" step="0.01">
            </div>
            <div class="form-group">
              <label>Imagen (URL):</label>
              <input type="text" id="imagenProductoAlta">
            </div>
            <div class="form-group">
              <label>Proveedor:</label>
              <input type="text" id="proveedorProductoAlta">
            </div>
            <div class="form-group">
              <label>Medida:</label>
              <input type="text" id="medidaProductoAlta">
            </div>
            <div class="form-group">
              <label>Kilos:</label>
              <input type="number" id="kilosProductoAlta" min="0" step="0.01">
            </div>
            <div class="form-group">
              <label>Gramos:</label>
              <input type="number" id="gramosProductoAlta" min="0" step="0.01">
            </div>
            <div class="form-group">
              <label>Peso Total:</label>
              <input type="number" id="pesoTotalProductoAlta" min="0" step="0.01">
            </div>
            <button type="submit" class="btn">Registrar Producto</button>
          </form>
        </div>
      </div>
    </div>
</div>

  <!-- Aquí va el script con todas las funciones JavaScript -->
  <script>
    let usuarioActual = '';
    let rolUsuario = '';
    let nombreUsuario = '';
    let productosAgregados = [];
    let clienteGuardado = false;
    let proveedorGuardado = false;
    let productoSeleccionado = null;
    let codigoEnviadoANota = false;
    let nombreEnviadoANota = false;

    window.onload = function() {
      // **Agregar estas líneas para verificar localStorage**
      const usuario = localStorage.getItem('usuarioActual');
      const rol = localStorage.getItem('rolUsuario');
      const nombre = localStorage.getItem('nombreUsuario');

      if (usuario && rol && nombre) {
        // Restaurar datos del usuario
        usuarioActual = usuario;
        rolUsuario = rol;
        nombreUsuario = nombre;

        // Ocultar sección de login y mostrar la aplicación
        document.getElementById('loginSection').style.display = 'none';
        document.getElementById('navButtons').style.display = 'flex';
        mostrarBotonesPorRol();

        document.getElementById('nombreVendedor').value = nombreUsuario;
        mostrarGenerarVenta();

        // Inicializar otras funcionalidades
        cargarCodigosProductos();
        document.getElementById('notaFecha').innerText = new Date().toLocaleDateString('es-ES');
        document.getElementById('notaFechaCopia').innerText = new Date().toLocaleDateString('es-ES');
        cargarVentasUltimaHora();
        actualizarNotaRemision({codigo: 'C000', nombre: 'Cliente General', direccion: '---', rfc: '---'});
        actualizarTablaProductos();
        sincronizarCopiaCliente();
      } else {
        // Mostrar sección de login si no hay datos en localStorage
        document.getElementById('loginSection').style.display = 'flex';
        document.getElementById('navButtons').style.display = 'none';
        document.getElementById('buttonContainer').style.display = 'none';
      }
    };




    // Manejo de Login
    function handleLogin(event) {
      event.preventDefault();
      const usuarioInput = document.getElementById('usuario').value.trim();
      const contrasenaInput = document.getElementById('contrasena').value.trim();

      google.script.run.withSuccessHandler(function(response) {
        if (response.success) {
          usuarioActual = usuarioInput;
          rolUsuario = response.rol;
          nombreUsuario = response.nombre;

          // **Agregar estas líneas para almacenar en localStorage**
          localStorage.setItem('usuarioActual', usuarioActual);
          localStorage.setItem('rolUsuario', rolUsuario);
          localStorage.setItem('nombreUsuario', nombreUsuario);

          document.getElementById('loginSection').style.display = 'none';
          document.getElementById('navButtons').style.display = 'flex'; // Mostrar botones
          mostrarBotonesPorRol();

          document.getElementById('nombreVendedor').value = nombreUsuario;
          mostrarGenerarVenta();
          alert(response.message);
        } else {
          alert('Credenciales incorrectas.');
        }
      }).withFailureHandler(function(error) {
        alert('Error al verificar credenciales: ' + error.message);
      }).verificarCredenciales(usuarioInput, contrasenaInput);
    }



    // Mostrar botones según el rol del usuario
    function mostrarBotonesPorRol() {
      const buttonContainer = document.getElementById('buttonContainer');
      buttonContainer.innerHTML = '';
      buttonContainer.style.display = 'block';

      if (rolUsuario === 'Administrador Premium') {
        buttonContainer.innerHTML += `
          <button class="btn-menu" onclick="mostrarGenerarVenta()">Generar Venta</button>
          <button class="btn-menu" onclick="mostrarPedidos()">Pedidos</button>
          <button class="btn-menu" onclick="mostrarEntradaMercancia()">Entrada de Mercancía</button>
          <button class="btn-menu" onclick="mostrarExistencias()">Existencias</button>
          <button class="btn-menu" onclick="mostrarCreditos()">Créditos</button>
          <button class="btn-menu" onclick="mostrarAdminConsole()">Consola de Administración</button>
          <button class="btn-menu" onclick="mostrarAltas()">Altas</button> <!-- Botón de Altas -->

        `;
      } else if (rolUsuario === 'Administrador Regular') {
        buttonContainer.innerHTML += `
          <button class="btn-menu" onclick="mostrarGenerarVenta()">Generar Venta</button>
          <button class="btn-menu" onclick="mostrarPedidos()">Pedidos</button>
          <button class="btn-menu" onclick="mostrarEntradaMercancia()">Entrada de Mercancía</button>
          <button class="btn-menu" onclick="mostrarExistencias()">Existencias</button>
          <button class="btn-menu" onclick="mostrarCreditos()">Créditos</button>
          <button class="btn-menu" onclick="mostrarAltas()">Altas</button> <!-- Botón de Altas -->

          `;
      } else if (rolUsuario === 'Usuario Regular') {
        buttonContainer.innerHTML += `
          <button class="btn-menu" onclick="mostrarGenerarVenta()">Generar Venta</button>
          <button class="btn-menu" onclick="mostrarEntradaMercancia()">Entrada de Mercancía</button>
          <button class="btn-menu" onclick="mostrarExistencias()">Existencias</button>
        `;
      }
    }

    // Mostrar Registrar Proveedor en Altas
    function mostrarRegistrarProveedor() {
      ocultarSubSeccionesAltas();
      document.getElementById('registrarProveedorAltaSection').style.display = 'block';
    }

    // Mostrar Registrar Cliente en Altas
    function mostrarRegistrarCliente() {
      ocultarSubSeccionesAltas();
      document.getElementById('registrarClienteAltaSection').style.display = 'block';
    }

    // Mostrar Registrar Producto en Altas
    function mostrarRegistrarProducto() {
      ocultarSubSeccionesAltas();
      document.getElementById('registrarProductoAltaSection').style.display = 'block';
    }

    // Ocultar todas las sub-secciones de Altas
    function ocultarSubSeccionesAltas() {
      document.getElementById('registrarProveedorAltaSection').style.display = 'none';
      document.getElementById('registrarClienteAltaSection').style.display = 'none';
      document.getElementById('registrarProductoAltaSection').style.display = 'none';
    }


    // Mostrar sección de Generar Venta
    function mostrarGenerarVenta() {
      ocultarSecciones();
      document.getElementById('generarVentaSection').style.display = 'block';
      cargarVentasUltimaHora();
      actualizarNotaRemision({codigo: 'C000', nombre: 'Cliente General', direccion: '---', rfc: '---'});
      actualizarTablaProductos();
      sincronizarCopiaCliente();
    }



    // Mostrar sección de Pedidos
    function mostrarPedidos() {
      ocultarSecciones();
      document.getElementById('pedidosSection').style.display = 'block';
      cargarPedidos();
    }

    // Mostrar sección de Entrada de Mercancía
    function mostrarEntradaMercancia() {
      ocultarSecciones();    
      document.getElementById('entradaMercanciaSection').style.display = 'block';
      ocultarSubSeccionesEntradaMercancia(); // Asegurarse de que las sub-secciones estén ocultas al mostrar Entrada de Mercancía
    }


    // Mostrar sección de Existencias
    function mostrarExistencias() {
      ocultarSecciones();
      const existenciasSection = document.getElementById('existenciasSection');
      if (existenciasSection) {
        existenciasSection.style.display = 'block'; 
        cargarExistencias();
      } else {
        console.error('No se encontró el contenedor #existenciasSection');
      }
    }

    function cargarExistencias() {
      google.script.run.withSuccessHandler(function(existencias) {
        console.log('Existencias obtenidas:', existencias); // Añade este log para depuración
        const tbody = document.querySelector('#existenciasContent table tbody');
        tbody.innerHTML = '';

        existencias.forEach(existencia => {
          const tr = document.createElement('tr');
          tr.innerHTML = `
            <td>${existencia.codigo}</td>
            <td>${existencia.producto}</td>
            <td>${existencia.tipo}</td>
            <td>${existencia.kilos}</td>
            <td>${existencia.piezas}</td>
          `;
          tbody.appendChild(tr);
        });

        if (existencias.length === 0) {
          const tr = document.createElement('tr');
          tr.innerHTML = `<td colspan="5">No hay existencias disponibles.</td>`;
          tbody.appendChild(tr);
        }
      }).withFailureHandler(function(error) {
        alert('Error al cargar existencias: ' + error.message);
      }).obtenerExistencias();
    }

    // Mostrar sección de Créditos
    function mostrarCreditos() {
      ocultarSecciones();
      document.getElementById('creditosSection').style.display = 'block';
    }
 
    // Mostrar Consola de Administración
    function mostrarAdminConsole() {
      ocultarSecciones();
      document.getElementById('adminConsoleSection').style.display = 'block';
    }

    function ocultarSecciones() {
      const sections = document.querySelectorAll('.section');
        sections.forEach(section => section.style.display = 'none');

        // Ocultar formularios específicos solo si existen
        const productosProduccion = document.getElementById('productosProduccion');
        if (productosProduccion) productosProduccion.style.display = 'block';

        const agregarUsuarioSection = document.getElementById('agregarUsuarioSection');
        if (agregarUsuarioSection) agregarUsuarioSection.style.display = 'none';

        const desbloquearUsuarioSection = document.getElementById('desbloquearUsuarioSection');
        if (desbloquearUsuarioSection) desbloquearUsuarioSection.style.display = 'none';

        const eliminarUsuarioSection = document.getElementById('eliminarUsuarioSection');
        if (eliminarUsuarioSection) eliminarUsuarioSection.style.display = 'none';

        const historialAccesosSection = document.getElementById('historialAccesosSection');
        if (historialAccesosSection) historialAccesosSection.style.display = 'none';
    }

    // Cerrar Sesión
    function cerrarSesion() {
      if (confirm('¿Estás seguro de cerrar sesión?')) {
        // **Agregar estas líneas para limpiar localStorage**
        localStorage.removeItem('usuarioActual');
        localStorage.removeItem('rolUsuario');
        localStorage.removeItem('nombreUsuario');

        location.reload();
      }
    }

    // Toggle Mostrar/Ocultar Campos de Cliente
    function toggleClienteFields() {
      const seleccionarCliente = document.getElementById('seleccionarCliente').value;
      const clienteFields = document.getElementById('clienteFields');
      if (seleccionarCliente === 'si') {
        clienteFields.style.display = 'block';
      } else {
        clienteFields.style.display = 'none';
        limpiarCliente();
      }
    }

    // Cargar los códigos de productos en el autocomplete
    function cargarCodigosProductos() {
      google.script.run.withSuccessHandler(function(codigos) {
        // No es necesario llenar un select, ya que usamos input con sugerencias
        // Aquí puedes almacenar los códigos si es necesario
      }).withFailureHandler(function(error) {
        alert('Error al cargar códigos de productos: ' + error.message);
      }).obtenerTodosLosCodigosProductos();
    }

    // Buscar Código Producto con Sugerencias
    function buscarCodigoProducto() {
      const codigo = document.getElementById('codigoProducto').value.trim();
      if (codigo === '') {
        document.getElementById('sugerenciasCodigosProductos').innerHTML = '';
        limpiarProducto();
        return;
      }
      google.script.run.withSuccessHandler(function(sugerencias) {
        const sugerenciasDiv = document.getElementById('sugerenciasCodigosProductos');
        sugerenciasDiv.innerHTML = '';
        if (Array.isArray(sugerencias)) {
          sugerencias.forEach(codigoItem => {
            const div = document.createElement('div');
            div.innerText = codigoItem;
            div.onclick = function() {
              document.getElementById('codigoProducto').value = codigoItem;
              sugerenciasDiv.innerHTML = '';
              seleccionarProductoDesdeInput(codigoItem);
            };
            sugerenciasDiv.appendChild(div);
          });
        }
      }).withFailureHandler(function(error) {
        alert('Error al obtener sugerencias de códigos de productos: ' + error.message);
      }).obtenerSugerenciasCodigosProductos(codigo);
    }

    // Buscar Cliente por Código
    function buscarClientePorCodigo() {
      const codigo = document.getElementById('codigoCliente').value.trim();
      if (codigo === '') {
        limpiarCamposCliente();
        return;
      }

      google.script.run.withSuccessHandler(function(cliente) {
        if (cliente) {
          document.getElementById('nombreCliente').value = cliente.nombre || '';
        } else {
          document.getElementById('nombreCliente').value = '';
        }
      }).withFailureHandler(function(error) {
        alert('Error al obtener cliente: ' + error.message);
      }).obtenerClientePorCodigo(codigo);
    }

    // Buscar Cliente por Nombre con Sugerencias
    function buscarClientePorNombre() {
      const nombre = document.getElementById('nombreCliente').value.trim();
      if (nombre === '') {
        limpiarCamposCliente();
        return;
      }

      google.script.run.withSuccessHandler(function(sugerencias) {
        const sugerenciasDiv = document.getElementById('sugerenciasNombreClientes');
        sugerenciasDiv.innerHTML = '';
        if (Array.isArray(sugerencias)) {
          sugerencias.forEach(cliente => {
            const div = document.createElement('div');
            div.innerText = cliente.nombre || '';
            div.onclick = function() {
              document.getElementById('nombreCliente').value = cliente.nombre || '';
              document.getElementById('codigoCliente').value = cliente.codigo || '';
              sugerenciasDiv.innerHTML = '';
            };
            sugerenciasDiv.appendChild(div);
          });
        }
      }).withFailureHandler(function(error) {
        alert('Error al obtener sugerencias de clientes: ' + error.message);
      }).obtenerSugerenciasClientes(nombre);
    }

    // Enviar Cliente a la Nota
    function enviarClienteANota() {
      const codigo = document.getElementById('codigoCliente').value.trim();
      const nombre = document.getElementById('nombreCliente').value.trim();

      if (codigo === '' || nombre === '') {
        alert('Por favor, completa tanto el Código como el Nombre del cliente.');
        return;
      }

      google.script.run.withSuccessHandler(function(cliente) {
        if (cliente) {
          actualizarNotaRemision(cliente);
          alert('Datos del cliente enviados a la nota de remisión.');
          // Deshabilitar los campos para evitar modificaciones
          document.getElementById('codigoCliente').readOnly = true;
          document.getElementById('nombreCliente').readOnly = true;
        } else {
          alert('Cliente no encontrado.');
        }
      }).withFailureHandler(function(error) {
        alert('Error al enviar cliente a la nota: ' + error.message);
      }).obtenerClientePorCodigoNombre(codigo, nombre);
    }

    // Actualizar Nota de Remisión
    function actualizarNotaRemision(cliente) {
      document.getElementById('notaCodigoCliente').innerText = cliente.codigo || 'C000';
      document.getElementById('notaClienteNombre').innerText = cliente.nombre || 'Cliente General';
      document.getElementById('notaClienteDireccion').innerText = cliente.direccion || '---';
      document.getElementById('notaClienteRFC').innerText = cliente.rfc || '---';

      document.getElementById('notaCodigoClienteCopia').innerText = cliente.codigo || 'C000';
      document.getElementById('notaClienteNombreCopia').innerText = cliente.nombre || 'Cliente General';
      document.getElementById('notaClienteDireccionCopia').innerText = cliente.direccion || '---';
      document.getElementById('notaClienteRFCCopia').innerText = cliente.rfc || '---';
    }

    // Limpiar Campos de Cliente
    function limpiarCamposCliente() {
      document.getElementById('codigoCliente').value = '';
      document.getElementById('nombreCliente').value = '';
    }

    // Buscar Producto por Nombre con Sugerencias
    function buscarProductoPorNombre() {
      const nombre = document.getElementById('nombreProducto').value.trim();
      if (nombre === '') {
        limpiarProducto();
        return;
      }
      google.script.run.withSuccessHandler(function(sugerencias) {
        const sugerenciasDiv = document.getElementById('sugerenciasNombreProductos');
        sugerenciasDiv.innerHTML = '';
        if (Array.isArray(sugerencias)) {
          sugerencias.forEach(producto => {
            const div = document.createElement('div');
            div.innerText = producto.nombre || '';
            div.onclick = function() {
              document.getElementById('nombreProducto').value = producto.nombre || '';
              document.getElementById('codigoProducto').value = producto.codigo || '';
              document.getElementById('precioProducto').value = producto.precioVenta || '';
              sugerenciasDiv.innerHTML = '';
              productoSeleccionado = producto;
            };
            sugerenciasDiv.appendChild(div);
          });
        }
      }).withFailureHandler(function(error) {
        alert('Error al obtener sugerencias de productos: ' + error.message);
      }).obtenerSugerenciasProductos(nombre);
    }

    // Limpiar Campos de Producto
    function limpiarProducto() {
      document.getElementById('nombreProducto').value = '';
      document.getElementById('precioProducto').value = '';
      document.getElementById('codigoProducto').value = '';
      document.getElementById('cantidadProducto').value = '';
      document.getElementById('esPromocion').checked = false;
      productoSeleccionado = null;
    }

    // Agregar Producto a la Nota de Remisión
    function agregarProducto() {
      const cantidad = parseInt(document.getElementById('cantidadProducto').value);
      const codigo = document.getElementById('codigoProducto').value.trim();
      const nombre = document.getElementById('nombreProducto').value.trim();
      const precio = parseFloat(document.getElementById('precioProducto').value);
      const promocion = document.getElementById('esPromocion').checked;

      if (isNaN(cantidad) || cantidad <= 0 || !codigo || !nombre || isNaN(precio)) {
        alert('Por favor, complete todos los campos del producto correctamente.');
        return;
      }

      // Verificar stock antes de agregar
      google.script.run.withSuccessHandler(function(stockDisponible) {
        if (stockDisponible >= cantidad) {
          // Verificar si el producto ya está en la lista
          const index = productosAgregados.findIndex(p => p.codigo === codigo);
          if (index !== -1) {
            // Sumar la cantidad y actualizar el importe
            productosAgregados[index].cantidad += cantidad;
            productosAgregados[index].importe = productosAgregados[index].cantidad * productosAgregados[index].precio;
          } else {
            const importe = cantidad * precio;

            const producto = {
              cantidad: cantidad,
              codigo: codigo,
              nombre: nombre,
              precio: precio,
              importe: importe,
              promocion: promocion
            };

            productosAgregados.push(producto);
          }

          actualizarTablaProductos();
          limpiarProducto();
          actualizarStock(codigo, cantidad, 'restar');
          sincronizarNotaRemision();
          sincronizarCopiaCliente();
        } else {
          alert('Stock insuficiente para el producto seleccionado.');
        }
      }).withFailureHandler(function(error) {
        alert('Error al verificar stock: ' + error.message);
      }).verificarStock(codigo, cantidad);
    }

    // Actualizar Tabla de Productos en la Nota de Remisión
    function actualizarTablaProductos() {
      const tbodyOriginal = document.querySelector('#notaProductos');
      const tbodyCopia = document.querySelector('#notaProductosCopia');
      const tbodyCamposAdicionalesOriginal = document.querySelector('#notaCamposAdicionales');
      const tbodyCamposAdicionalesCopia = document.querySelector('#notaCamposAdicionalesCopia');
      tbodyOriginal.innerHTML = '';
      tbodyCopia.innerHTML = '';
      tbodyCamposAdicionalesOriginal.innerHTML = '';
      tbodyCamposAdicionalesCopia.innerHTML = '';

      let subtotal = 0;

      productosAgregados.forEach((producto, index) => {
        const trOriginal = document.createElement('tr');
        const trCopia = document.createElement('tr');
        const trCamposOriginal = document.createElement('tr');
        const trCamposCopia = document.createElement('tr');

        trOriginal.innerHTML = `
          <td>${producto.cantidad}</td>
          <td>${producto.nombre}</td>
          <td>$${producto.precio.toFixed(2)}</td>
          <td>$${producto.importe.toFixed(2)}</td>
          <td>${producto.promocion ? 'Sí' : 'No'}</td>
          <td><img src="https://img.icons8.com/ios-glyphs/30/000000/trash.png" class="trash-icon" onclick="eliminarProducto(${index})" title="Eliminar Producto"></td>
        `;

        trCopia.innerHTML = `
          <td>${producto.cantidad}</td>
          <td>${producto.nombre}</td>
          <td>$${producto.precio.toFixed(2)}</td>
          <td>$${producto.importe.toFixed(2)}</td>
          <td>${producto.promocion ? 'Sí' : 'No'}</td>
          <td><img src="https://img.icons8.com/ios-glyphs/30/000000/trash.png" class="trash-icon" onclick="eliminarProducto(${index})" title="Eliminar Producto"></td>
        `;

        // Campos adicionales por fila en la nota
        trCamposOriginal.innerHTML = `
          <td>${producto.cantidad}</td>
          <td>${numeroALetras(producto.cantidad)}</td>
          <td><input type="checkbox" id="pagado_${index}" onchange="toggleTipoPagoFila(${index})"></td>
          <td>
            <select id="tipoPago_${index}" style="display:none;" onchange="toggleDetallePagoFila(${index})">
              <option value="">--Seleccione Tipo de Pago--</option>
              <option value="Efectivo">Efectivo</option>
              <option value="Transferencia Bancaria">Transferencia Bancaria</option>
              <option value="Cheque">Cheque</option>
            </select>
          </td>
          <td>
            <input type="text" id="detallePago_${index}" style="display:none;">
          </td>
        `;

        trCamposCopia.innerHTML = `
          <td>${producto.cantidad}</td>
          <td>${numeroALetras(producto.cantidad)}</td>
          <td><input type="checkbox" id="pagadoCopia_${index}" onchange="toggleTipoPagoFilaCopia(${index})"></td>
          <td>
            <select id="tipoPagoCopia_${index}" style="display:none;" onchange="toggleDetallePagoFilaCopia(${index})">
              <option value="">--Seleccione Tipo de Pago--</option>
              <option value="Efectivo">Efectivo</option>
              <option value="Transferencia Bancaria">Transferencia Bancaria</option>
              <option value="Cheque">Cheque</option>
            </select>
          </td>
          <td>
            <input type="text" id="detallePagoCopia_${index}" style="display:none;">
          </td>
        `;

        tbodyOriginal.appendChild(trOriginal);
        tbodyCopia.appendChild(trCopia);
        tbodyCamposAdicionalesOriginal.appendChild(trCamposOriginal);
        tbodyCamposAdicionalesCopia.appendChild(trCamposCopia);

        subtotal += producto.importe;
      });

      document.getElementById('notaSubtotal').innerText = subtotal.toFixed(2);
      document.getElementById('notaTotal').innerText = subtotal.toFixed(2);
      document.getElementById('notaTotalLetras').innerText = numeroALetras(subtotal);

      document.getElementById('notaSubtotalCopia').innerText = subtotal.toFixed(2);
      document.getElementById('notaTotalCopia').innerText = subtotal.toFixed(2);
      document.getElementById('notaTotalLetrasCopia').innerText = numeroALetras(subtotal);
    }

    // Eliminar Producto de la Nota de Remisión
    function eliminarProducto(index) {
      if (confirm('¿Estás seguro de eliminar este producto?')) {
        const producto = productosAgregados[index];
        actualizarStock(producto.codigo, producto.cantidad, 'sumar');
        productosAgregados.splice(index, 1);
        actualizarTablaProductos();
        sincronizarNotaRemision();
        sincronizarCopiaCliente();
      }
    }

    // Toggle Mostrar/Ocultar Tipo de Pago por Fila
    function toggleTipoPagoFila(index) {
      const pagado = document.getElementById(`pagado_${index}`).checked;
      const tipoPago = document.getElementById(`tipoPago_${index}`);
      const detallePago = document.getElementById(`detallePago_${index}`);
      if (pagado) {
        tipoPago.style.display = 'block';
      } else {
        tipoPago.style.display = 'none';
        tipoPago.value = '';
        detallePago.style.display = 'none';
        detallePago.value = '';
      }
    }

    // Toggle Mostrar/Ocultar Detalle de Pago por Fila
    function toggleDetallePagoFila(index) {
      const tipoPago = document.getElementById(`tipoPago_${index}`).value;
      const detallePago = document.getElementById(`detallePago_${index}`);
      if (tipoPago === 'Transferencia Bancaria') {
        detallePago.style.display = 'block';
      } else {
        detallePago.style.display = 'none';
        detallePago.value = '';
      }
    }

    // Toggle Mostrar/Ocultar Tipo de Pago Copia
    function toggleTipoPagoFilaCopia(index) {
      const pagado = document.getElementById(`pagadoCopia_${index}`).checked;
      const tipoPago = document.getElementById(`tipoPagoCopia_${index}`);
      const detallePago = document.getElementById(`detallePagoCopia_${index}`);
      if (pagado) {
        tipoPago.style.display = 'block';
      } else {
        tipoPago.style.display = 'none';
        tipoPago.value = '';
        detallePago.style.display = 'none';
        detallePago.value = '';
      }
    }

    // Toggle Mostrar/Ocultar Detalle de Pago Copia
    function toggleDetallePagoFilaCopia(index) {
      const tipoPago = document.getElementById(`tipoPagoCopia_${index}`).value;
      const detallePago = document.getElementById(`detallePagoCopia_${index}`);
      if (tipoPago === 'Transferencia Bancaria') {
        detallePago.style.display = 'block';
      } else {
        detallePago.style.display = 'none';
        detallePago.value = '';
      }
    }

    // Cargar Ventas de la Última Hora
    function cargarVentasUltimaHora() {
      google.script.run.withSuccessHandler(function(ventas) {
        const tbody = document.querySelector('#ventasUltimaHora tbody');
        tbody.innerHTML = '';

        ventas.forEach(venta => {
          const tr = document.createElement('tr');

          tr.innerHTML = `
            <td>${venta.fecha}</td>
            <td>${venta.numeroRemision}</td>
            <td>${venta.version}</td>
            <td>${venta.codigoCliente}</td>
            <td>${venta.cliente}</td>
            <td>${venta.direccionCliente}</td>
            <td>${venta.rfcCliente}</td>
            <td>${venta.productos.map(p => p.cantidad).join(', ')}</td>
            <td>${venta.productos.map(p => p.nombre).join(', ')}</td>
            <td>$${venta.productos.map(p => p.precio.toFixed(2)).join(', ')}</td>
            <td>$${venta.productos.map(p => p.importe.toFixed(2)).join(', ')}</td>
            <td>${venta.productos.map(p => p.promocion ? 'Sí' : 'No').join(', ')}</td>
            <td>${venta.camposAdicionales.map(c => c.pagado ? 'Sí' : 'No').join(', ')}</td>
            <td>${venta.camposAdicionales.map(c => c.tipoPago || 'N/A').join(', ')}</td>
            <td>${venta.camposAdicionales.map(c => c.detallePago || 'N/A').join(', ')}</td>
            <td>${venta.enlacePDF ? `<a href="${venta.enlacePDF}" target="_blank">Ver Nota</a>` : 'N/A'}</td>
            <td><button class="btn" onclick="modificarVenta('${venta.numeroRemision}')">Modificar</button></td>
          `;

          tbody.appendChild(tr);
        });
      }).withFailureHandler(function(error) {
        alert('Error al cargar ventas recientes: ' + error.message);
      }).obtenerVentasRecientes();
    }

    // Modificar Venta (Función Placeholder)
    function modificarVenta(numeroRemision) {
      alert('Función para modificar la venta con número de remisión: ' + numeroRemision);
      // Implementar lógica de modificación si es necesario
    }

    // Cargar Pedidos
    function cargarPedidos() {
      google.script.run.withSuccessHandler(function(pedidos) {
        const tbody = document.querySelector('#tablaPedidos tbody');
        tbody.innerHTML = '';

        pedidos.forEach(pedido => {
          const tr = document.createElement('tr');

          tr.innerHTML = `
            <td>${pedido.fecha}</td>
            <td>${pedido.numeroRemision}</td>
            <td>${pedido.codigoCliente}</td>
            <td>${pedido.cliente}</td>
            <td>${pedido.vendedor}</td>
            <td>${pedido.productos.map(p => p.nombre).join(', ')}</td>
            <td>${pedido.productos.map(p => p.cantidad).join(', ')}</td>
            <td>$${pedido.productos.map(p => p.precio.toFixed(2)).join(', ')}</td>
            <td>$${pedido.productos.map(p => p.importe.toFixed(2)).join(', ')}</td>
            <td>${pedido.productos.map(p => p.promocion ? 'Sí' : 'No').join(', ')}</td>
            <td>${pedido.ruta}</td>
            <td>${pedido.semana}</td>
            <td>${pedido.mes}</td>
            <td>${pedido.enlacePDF ? `<a href="${pedido.enlacePDF}" target="_blank">Ver Nota</a>` : 'N/A'}</td>
            <td><button class="btn" onclick="modificarPedido('${pedido.numeroRemision}')">Modificar</button></td>
          `;

          tbody.appendChild(tr);
        });

        llenarFiltrosPedidos(pedidos);
      }).withFailureHandler(function(error) {
        alert('Error al cargar pedidos: ' + error.message);
      }).obtenerTodosLosPedidos();
    }

    // Llenar Filtros de Pedidos
    function llenarFiltrosPedidos(pedidos) {
      const fechas = [...new Set(pedidos.map(p => p.fecha.split(' ')[0]))];
      const semanas = [...new Set(pedidos.map(p => p.semana))];

      const filtroFecha = document.getElementById('filtroFecha');
      filtroFecha.innerHTML = '<option value="">--Seleccione Fecha--</option>';
      fechas.forEach(fecha => {
        const option = document.createElement('option');
        option.value = fecha;
        option.text = fecha;
        filtroFecha.appendChild(option);
      });

      const filtroSemana = document.getElementById('filtroSemana');
      filtroSemana.innerHTML = '<option value="">--Seleccione Semana--</option>';
      semanas.forEach(semana => {
        const option = document.createElement('option');
        option.value = semana;
        option.text = semana;
        filtroSemana.appendChild(option);
      });
    }

    // Filtrar Pedidos
    function filtrarPedidos() {
      const codigoCliente = document.getElementById('filtroCodigoCliente').value.trim().toLowerCase();
      const fecha = document.getElementById('filtroFecha').value;
      const semana = document.getElementById('filtroSemana').value;

      google.script.run.withSuccessHandler(function(pedidos) {
        const tbody = document.querySelector('#tablaPedidos tbody');
        tbody.innerHTML = '';

        pedidos.forEach(pedido => {
          if ((codigoCliente === '' || (pedido.cliente && pedido.codigoCliente && pedido.codigoCliente.toLowerCase().includes(codigoCliente))) &&
              (fecha === '' || pedido.fecha.includes(fecha)) &&
              (semana === '' || pedido.semana.toString() === semana)) {

            const tr = document.createElement('tr');

            tr.innerHTML = `
              <td>${pedido.fecha}</td>
              <td>${pedido.numeroRemision}</td>
              <td>${pedido.codigoCliente}</td>
              <td>${pedido.cliente}</td>
              <td>${pedido.vendedor}</td>
              <td>${pedido.productos.map(p => p.nombre).join(', ')}</td>
              <td>${pedido.productos.map(p => p.cantidad).join(', ')}</td>
              <td>$${pedido.productos.map(p => p.precio.toFixed(2)).join(', ')}</td>
              <td>$${pedido.productos.map(p => p.importe.toFixed(2)).join(', ')}</td>
              <td>${pedido.productos.map(p => p.promocion ? 'Sí' : 'No').join(', ')}</td>
              <td>${pedido.ruta}</td>
              <td>${pedido.semana}</td>
              <td>${pedido.mes}</td>
              <td>${pedido.enlacePDF ? `<a href="${pedido.enlacePDF}" target="_blank">Ver Nota</a>` : 'N/A'}</td>
              <td><button class="btn" onclick="modificarPedido('${pedido.numeroRemision}')">Modificar</button></td>
            `;

            tbody.appendChild(tr);
          }
        });
      }).withFailureHandler(function(error) {
        alert('Error al filtrar pedidos: ' + error.message);
      }).obtenerTodosLosPedidos();
    }

    // Modificar Pedido (Función Placeholder)
    function modificarPedido(numeroRemision) {
      alert('Función para modificar el pedido con número de remisión: ' + numeroRemision);
      // Implementar lógica de modificación si es necesario
    }

    // Cargar Productos para Producción
    function cargarProductosProduccion() {
      google.script.run.withSuccessHandler(function(productos) {
        const container = document.getElementById('productosProduccion');
        container.innerHTML = '';

        productos.forEach(producto => {
          const div = document.createElement('div');
          div.classList.add('product-card');
          div.innerHTML = `
            <img src="${producto.imagen || 'ruta_por_defecto.jpg'}" alt="${producto.nombre}" />
            <p>${producto.nombre}</p>
            <p>${producto.codigo}</p>
          `;
          div.onclick = function() {
            seleccionarProducto(producto.codigo);
          };
          container.appendChild(div);
        });

        window.productosDisponibles = productos; // Variable global para mantener los productos disponibles
      }).withFailureHandler(function(error) {
        alert('Error al cargar productos para producción: ' + error.message);
      }).obtenerProductos();
    }

    // Seleccionar Producto
    function seleccionarProducto(codigo) {
        if (!window.productosDisponibles || window.productosDisponibles.length === 0) {
            alert('La lista de productos no está cargada.');
            return;
        }

        // Buscar el producto por código
        const producto = window.productosDisponibles.find(p => p.codigo === codigo.trim());
        if (!producto) {
            alert(`El producto con código "${codigo}" no se encuentra.`);
            return;
        }

        // Asignar valores al formulario
        document.getElementById('codigo').innerText = `Código: ${producto.codigo}`;
        document.getElementById('productName').innerText = `Producto: ${producto.nombre}`;

        // Mostrar el formulario de producción
        document.getElementById('productosProduccion').style.display = 'none';
        document.getElementById('productionInput').style.display = 'flex';
    }



    // Registrar Proveedor Entrada
    function registrarProveedorEntrada(event) {
      event.preventDefault();
      const codigoProveedor = document.getElementById('codigoProveedorEntrada').value.trim();
      const nombreProveedor = document.getElementById('nombreProveedorEntrada').value.trim();
      const numeroFactura = document.getElementById('numeroFacturaEntrada').value.trim();
      const monto = parseFloat(document.getElementById('montoEntrada').value);
      const pagada = document.getElementById('pagadaEntrada').checked;

      if (!codigoProveedor || !nombreProveedor) {
        alert('Por favor, completa todos los campos obligatorios.');
        return;
      }

      const entradaData = {
        numeroFactura: numeroFactura,
        codigoProveedor: codigoProveedor,
        nombreProveedor: nombreProveedor,
        monto: monto,
        pagada: pagada,
        materiales: [] // Se rellenará en la sección de Material recibido
      };

      google.script.run.withSuccessHandler(function() {
        alert('Entrada de mercancía registrada exitosamente.');
        document.getElementById('formProveedores').reset();
        document.getElementById('proveedoresSection').style.display = 'none';
        cargarExistencias();
      }).withFailureHandler(function(error) {
        alert('Error al registrar entrada de mercancía: ' + error.message);
      }).registrarEntradaMercancia(entradaData);
    }

    // Registrar Materia Prima Entrada
    function registrarMateriaPrimaEntrada(event) {
      event.preventDefault();
      const codigoProducto = document.getElementById('codigoProductoEntrada').value.trim();
      const nombreProducto = document.getElementById('nombreProductoEntrada').value.trim();
      const kilosRecibidos = parseFloat(document.getElementById('kilosRecibidos').value);
      const piezasRecibidas = parseInt(document.getElementById('piezasRecibidas').value);

      if (!codigoProducto || !nombreProducto || isNaN(kilosRecibidos) || isNaN(piezasRecibidas)) {
        alert('Por favor, completa todos los campos obligatorios.');
        return;
      }

      const materiaPrimaData = {
        codigoProducto: codigoProducto,
        nombreProducto: nombreProducto,
        kilosRecibidos: kilosRecibidos,
        piezasRecibidas: piezasRecibidas
      };

      google.script.run.withSuccessHandler(function() {
        alert('Materia Prima registrada exitosamente.');
        document.getElementById('formMateriaPrima').reset();
        document.getElementById('materiaPrimaSection').style.display = 'none';
        cargarExistencias();
      }).withFailureHandler(function(error) {
        alert('Error al registrar materia prima: ' + error.message);
      }).registrarMateriaPrimaEntrada(materiaPrimaData);
    }

    // Registrar Cliente
    function registrarCliente(event) {
      event.preventDefault();
      const clienteData = {
        nombre: document.getElementById('nombreClienteRegistro').value.trim(),
        direccion: document.getElementById('direccionClienteRegistro').value.trim(),
        rfc: document.getElementById('rfcClienteRegistro').value.trim(),
        telefono: document.getElementById('telefonoClienteRegistro').value.trim(),
        correo: document.getElementById('correoClienteRegistro').value.trim()
      };


      google.script.run.withSuccessHandler(function() {
        alert('Cliente registrado exitosamente.');
        document.getElementById('registrarClienteForm').reset();
      }).withFailureHandler(function(error) {
        alert('Error al registrar cliente: ' + error.message);
      }).registrarCliente(clienteData);
    }

    // Registrar Producto
    function registrarProducto(event) {
      event.preventDefault();
      const productoData = {
        nombre: document.getElementById('nombreProductoRegistro').value.trim(),
        tipo: document.getElementById('tipoProductoRegistro').value.trim(),
        precioFabricacion: parseFloat(document.getElementById('precioFabricacionRegistro').value),
        precioProveedor: parseFloat(document.getElementById('precioProveedorRegistro').value) || 0,
        precioVenta: parseFloat(document.getElementById('precioVentaRegistro').value),
        imagen: document.getElementById('imagenProductoRegistro').value.trim(),
        proveedor: document.getElementById('proveedorProductoRegistro').value.trim(),
        medida: document.getElementById('medidaProductoRegistro').value.trim(),
        kilos: parseFloat(document.getElementById('kilosProductoRegistro').value) || 0,
        gramos: parseFloat(document.getElementById('gramosProductoRegistro').value) || 0,
        pesoTotal: parseFloat(document.getElementById('pesoTotalProductoRegistro').value) || 0
      };

      // Validaciones básicas
      if (!productoData.nombre || !productoData.tipo || isNaN(productoData.precioFabricacion) || isNaN(productoData.precioVenta)) {
        alert('Por favor, complete todos los campos obligatorios.');
        return;
      }

      google.script.run.withSuccessHandler(function() {
        alert('Producto registrado exitosamente.');
        document.getElementById('registrarProductoForm').reset();
        cargarCodigosProductos(); // Actualizar la lista de códigos de productos
      }).withFailureHandler(function(error) {
        alert('Error al registrar producto: ' + error.message);
      }).registrarProducto(productoData);
    }

    // Registrar Proveedor
    function registrarProveedor(event) {
      event.preventDefault();
      const proveedorData = {
        nombre: document.getElementById('nombreProveedorRegistro').value.trim(),
        direccion: document.getElementById('direccionProveedorRegistro').value.trim(),
        rfc: document.getElementById('rfcProveedorRegistro').value.trim(),
        telefono: document.getElementById('telefonoProveedorRegistro').value.trim(),
        correo: document.getElementById('correoProveedorRegistro').value.trim()
      };
      
      google.script.run.withSuccessHandler(function() {
        alert('Proveedor registrado exitosamente.');
        document.getElementById('registrarProveedorForm').reset();
      }).withFailureHandler(function(error) {
        alert('Error al registrar proveedor: ' + error.message);
      }).registrarProveedor(proveedorData);
    }

    // Agregar Usuario (Consola de Administración)
    function agregarUsuario(event) {
      event.preventDefault();
      const usuarioData = {
        usuario: document.getElementById('nuevoUsuario').value.trim(),
        nombre: document.getElementById('nuevoNombre').value.trim(),
        contrasena: document.getElementById('nuevaContrasena').value.trim(),
        rol: document.getElementById('nuevoRol').value
      };

      // Validaciones básicas
      if (!usuarioData.usuario || !usuarioData.nombre || !usuarioData.contrasena || !usuarioData.rol) {
        alert('Por favor, complete todos los campos obligatorios.');
        return;
      }

      google.script.run.withSuccessHandler(function() {
        alert('Usuario agregado exitosamente.');
        document.getElementById('agregarUsuarioForm').reset();
        document.getElementById('agregarUsuarioSection').style.display = 'none';
      }).withFailureHandler(function(error) {
        alert('Error al agregar usuario: ' + error.message);
      }).registrarUsuario(usuarioData);
    }

    // Desbloquear Usuario (Consola de Administración)
    function desbloquearUsuario(event) {
      event.preventDefault();
      const usuario = document.getElementById('usuarioDesbloquear').value.trim();

      if (usuario === '') {
        alert('Por favor, ingrese el nombre de usuario a desbloquear.');
        return;
      }

      if (confirm('¿Estás seguro de desbloquear este usuario?')) {
        google.script.run.withSuccessHandler(function() {
          alert('Usuario desbloqueado exitosamente.');
          document.getElementById('desbloquearUsuarioForm').reset();
          document.getElementById('desbloquearUsuarioSection').style.display = 'none';
        }).withFailureHandler(function(error) {
          alert('Error al desbloquear usuario: ' + error.message);
        }).desbloquearUsuario(usuario);
      }
    }

    // Eliminar Usuario (Consola de Administración)
    function eliminarUsuario(event) {
      event.preventDefault();
      const usuario = document.getElementById('usuarioEliminar').value.trim();

      if (usuario === '') {
        alert('Por favor, ingrese el nombre de usuario a eliminar.');
        return;
      }

      if (confirm('¿Estás seguro de eliminar este usuario?')) {
        google.script.run.withSuccessHandler(function() {
          alert('Usuario eliminado exitosamente.');
          document.getElementById('eliminarUsuarioForm').reset();
          document.getElementById('eliminarUsuarioSection').style.display = 'none';
        }).withFailureHandler(function(error) {
          alert('Error al eliminar usuario: ' + error.message);
        }).eliminarUsuario(usuario);
      }
    }

    // Ver Historial de Accesos (Consola de Administración)
    function mostrarHistorialAccesos() {
      google.script.run.withSuccessHandler(function(historial) {
        const tbody = document.querySelector('#tablaHistorialAccesos tbody');
        tbody.innerHTML = '';

        historial.forEach(entry => {
          const tr = document.createElement('tr');

          tr.innerHTML = `
            <td>${entry.usuario}</td>
            <td>${entry.nombre}</td>
            <td>${entry.fechaAcceso}</td>
            <td>${entry.horaAcceso}</td>
            <td>${entry.accion}</td>
          `;

          tbody.appendChild(tr);
        });

        document.getElementById('historialAccesosSection').style.display = 'block';
      }).withFailureHandler(function(error) {
        alert('Error al obtener historial de accesos: ' + error.message);
      }).obtenerHistorialAccesos();
    }

    // Actualizar Stock en el Backend
    function actualizarStock(codigo, cantidad, accion) {
      const cantidadFinal = accion === 'restar' ? -cantidad : cantidad;
      google.script.run.withFailureHandler(function(error) {
        alert('Error al actualizar stock: ' + error.message);
      }).actualizarStock(codigo, cantidadFinal);
    }

    // Reestablecer Venta
    function reestablecerVenta() {
      if (confirm('¿Estás seguro de reestablecer el formulario de venta?')) {
        document.getElementById('ventaForm').reset();
        productosAgregados = [];
        actualizarTablaProductos();
        // Resetear campos de la Nota de Remisión
        document.getElementById('notaNumero').innerText = 'Pendiente';
        document.getElementById('notaFecha').innerText = new Date().toLocaleDateString('es-ES');
        document.getElementById('notaCodigoCliente').innerText = 'C000';
        document.getElementById('notaClienteNombre').innerText = 'Cliente General';
        document.getElementById('notaClienteDireccion').innerText = '---';
        document.getElementById('notaClienteRFC').innerText = '---';
        document.getElementById('notaProductos').innerHTML = '';
        document.getElementById('notaCamposAdicionales').innerHTML = '';
        document.getElementById('notaSubtotal').innerText = '0.00';
        document.getElementById('notaTotal').innerText = '0.00';
        document.getElementById('notaTotalLetras').innerText = 'Cero Pesos 00/100 M.N.';
        document.getElementById('notaDia').innerText = new Date().getDate();
        document.getElementById('notaMes').innerText = new Intl.DateTimeFormat('es-ES', { month: 'long' }).format(new Date());
        document.getElementById('notaAnio').innerText = new Date().getFullYear();
        document.getElementById('notaFirma').innerText = '---';

        // Resetear campos de la Copia Cliente
        document.getElementById('notaNumeroCopia').innerText = 'Pendiente';
        document.getElementById('notaFechaCopia').innerText = new Date().toLocaleDateString('es-ES');
        document.getElementById('notaCodigoClienteCopia').innerText = 'C000';
        document.getElementById('notaClienteNombreCopia').innerText = 'Cliente General';
        document.getElementById('notaClienteDireccionCopia').innerText = '---';
        document.getElementById('notaClienteRFCCopia').innerText = '---';
        document.getElementById('notaProductosCopia').innerHTML = '';
        document.getElementById('notaCamposAdicionalesCopia').innerHTML = '';
        document.getElementById('notaSubtotalCopia').innerText = '0.00';
        document.getElementById('notaTotalCopia').innerText = '0.00';
        document.getElementById('notaTotalLetrasCopia').innerText = 'Cero Pesos 00/100 M.N.';
        document.getElementById('notaDiaCopia').innerText = new Date().getDate();
        document.getElementById('notaMesCopia').innerText = new Intl.DateTimeFormat('es-ES', { month: 'long' }).format(new Date());
        document.getElementById('notaAnioCopia').innerText = new Date().getFullYear();
        document.getElementById('notaFirmaCopia').innerText = '---';

        // Rehabilitar los campos de cliente
        document.getElementById('codigoCliente').readOnly = false;
        document.getElementById('nombreCliente').readOnly = false;
      }
    }

    // Sincronizar Nota de Remisión y Copia Cliente después de agregar/eliminar productos
    function sincronizarNotaRemision() {
      const numeroRemision = document.getElementById('notaNumero').innerText;
      const fecha = document.getElementById('notaFecha').innerText;
      const dia = document.getElementById('notaDia').innerText;
      const mes = document.getElementById('notaMes').innerText;
      const anio = document.getElementById('notaAnio').innerText;

      document.getElementById('notaNumero').innerText = numeroRemision;
      document.getElementById('notaFecha').innerText = fecha;
      document.getElementById('notaDia').innerText = dia;
      document.getElementById('notaMes').innerText = mes;
      document.getElementById('notaAnio').innerText = anio;
      document.getElementById('notaFirma').innerText = '---';

      // Sincronizar con la copia
      document.getElementById('notaNumeroCopia').innerText = numeroRemision;
      document.getElementById('notaFechaCopia').innerText = fecha;
      document.getElementById('notaDiaCopia').innerText = dia;
      document.getElementById('notaMesCopia').innerText = mes;
      document.getElementById('notaAnioCopia').innerText = anio;
      document.getElementById('notaFirmaCopia').innerText = '---';
    }

    // Sincronizar Copia Cliente después de agregar/eliminar productos
    function sincronizarCopiaCliente() {
      const productos = productosAgregados;
      const subtotal = productos.reduce((acc, p) => acc + p.importe, 0);
      const totalLetras = numeroALetras(subtotal);

      document.getElementById('notaTotalLetrasCopia').innerText = totalLetras;
    }

    // Número a Letras
    function numeroALetras(num) {
      const unidades = ['Cero', 'Uno', 'Dos', 'Tres', 'Cuatro', 'Cinco', 'Seis', 'Siete', 'Ocho', 'Nueve'];
      const especiales = ['Diez', 'Once', 'Doce', 'Trece', 'Catorce', 'Quince', 'Dieciséis', 'Diecisiete', 'Dieciocho', 'Diecinueve'];
      const decenas = ['', '', 'Veinte', 'Treinta', 'Cuarenta', 'Cincuenta', 'Sesenta', 'Setenta', 'Ochenta', 'Noventa'];
      const centenas = ['', 'Cien', 'Doscientos', 'Trescientos', 'Cuatrocientos', 'Quinientos', 'Seiscientos', 'Setecientos', 'Ochocientos', 'Novecientos'];

      if (num === 0) return 'Cero Pesos 00/100 M.N.';

      let letras = '';

      if (num >= 100) {
        letras += centenas[Math.floor(num / 100)];
        num = num % 100;
        if (num > 0) letras += ' ';
      }

      if (num >= 20) {
        letras += decenas[Math.floor(num / 10)];
        num = num % 10;
        if (num > 0) letras += ' y ' + unidades[num];
      } else if (num >= 10) {
        letras += especiales[num - 10];
      } else if (num > 0) {
        letras += unidades[num];
      }

      letras += ' Pesos 00/100 M.N.';

      return letras;
    }


    // Obtener Número de Semana
    function obtenerNumeroSemana(fecha) {
      const primerDiaAno = new Date(fecha.getFullYear(), 0, 1);
      const diasTranscurridos = Math.floor((fecha - primerDiaAno) / (24 * 60 * 60 * 1000));
      return Math.ceil((diasTranscurridos + primerDiaAno.getDay() + 1) / 7);
    }

    


    // Procesar Venta
    function procesarVenta(event) {
      event.preventDefault();

      if (productosAgregados.length === 0) {
        alert('Debe agregar al menos un producto a la nota de remisión.');
        return;
      }

      // Obtener datos del cliente
      let cliente = { codigo: 'C000', nombre: 'Cliente General', direccion: '---', rfc: '---' };
      const codigoCliente = document.getElementById('notaCodigoCliente').innerText.trim();
      const nombreCliente = document.getElementById('notaClienteNombre').innerText.trim();
      const direccionCliente = document.getElementById('notaClienteDireccion').innerText.trim();
      const rfcCliente = document.getElementById('notaClienteRFC').innerText.trim();

      if (codigoCliente !== 'C000') {
        cliente = { codigo: codigoCliente, nombre: nombreCliente, direccion: direccionCliente, rfc: rfcCliente };
      }

      const vendedor = document.getElementById('nombreVendedor').value.trim();
      const fechaActual = new Date();
      const fecha = fechaActual.toLocaleDateString('es-ES') + ' ' + fechaActual.toLocaleTimeString('es-ES');
      const semana = obtenerNumeroSemana(fechaActual);
      const mes = fechaActual.getMonth() + 1;
      const anio = fechaActual.getFullYear();

      // Recolectar información de cada producto para los campos adicionales
      const camposAdicionales = productosAgregados.map((producto, index) => {
        const pagado = document.getElementById(`pagado_${index}`).checked;
        const tipoPago = pagado ? document.getElementById(`tipoPago_${index}`).value : '';
        const detallePago = (pagado && tipoPago === 'Transferencia Bancaria') ? document.getElementById(`detallePago_${index}`).value.trim() : '';

        return {
          cantidadNumero: producto.cantidad,
          cantidadLetras: numeroALetras(producto.cantidad),
          pagado: pagado,
          tipoPago: tipoPago,
          detallePago: detallePago
        };
      });

      const ventaData = {
        fecha: fecha,
        numeroRemision: '', // Será generado en el backend
        version: 1, // Puedes manejar versiones si es necesario
        cliente: cliente,
        vendedor: vendedor,
        ruta: '---', // Puedes agregar un campo para la ruta si es necesario
        semana: semana,
        mes: mes,
        anio: anio,
        productos: productosAgregados,
        camposAdicionales: camposAdicionales
      };

      // Registrar la venta
      google.script.run.withSuccessHandler(function(respuesta) {
        if (respuesta.success) {
          alert('Venta registrada exitosamente. Número de Remisión: ' + respuesta.numeroRemision);
          productosAgregados = [];
          actualizarTablaProductos();
          reestablecerVenta();
          cargarVentasUltimaHora();
        } else {
          alert('Error: ' + respuesta.message);
        }
      }).withFailureHandler(function(error) {
        alert('Error al registrar la venta: ' + error.message);
      }).registrarVenta(ventaData);
    }

    document.addEventListener("DOMContentLoaded", function() {
      google.script.run.withSuccessHandler(renderProductos).obtenerProductos();
    });

    function renderProductos(productos) {
        const container = document.getElementById('productosProduccion');
        container.innerHTML = ''; // Limpia el contenedor antes de renderizar los productos

        productos.forEach(producto => {
            // Crear tarjeta del producto
            const card = document.createElement('div');
            card.className = 'product-card';
            card.innerHTML = `
                <img src="${producto.imagen || ''}" alt="${producto.nombre}" />
                <p>${producto.nombre}</p>
                <p>${producto.codigo}</p>
            `;

            // Agregar evento de selección
            card.onclick = () => seleccionarProducto(producto.codigo);

            container.appendChild(card);
        });

        // Guardar los productos cargados para referencia
        window.productosDisponibles = productos; // Variable global para mantener los productos disponibles
    }


    function registrarProduccion() {
        const codigo = document.getElementById('codigo').innerText.replace('Código: ', '').trim();
        const nombre = document.getElementById('productName').innerText.replace('Producto: ', '').trim();
        const kilos = parseInt(document.getElementById('kilos').value) || 0;
        const piezas = parseInt(document.getElementById('piezas').value) || 0;

        if (!codigo || !nombre) {
            alert('Código y nombre del producto son obligatorios.');
            return;
        }

        google.script.run
            .withSuccessHandler(function(message) {
                alert(message); // Mostrar mensaje de éxito
                resetForm();
                cargarProductosProduccion(); // Recargar los productos disponibles
            })
            .withFailureHandler(function(error) {
                alert('Error al registrar la producción: ' + error.message);
            })
            .registrarProduccion(codigo, nombre, kilos, piezas);
    }




    function resetForm() {
      document.getElementById('kilos').value = '';
      document.getElementById('piezas').value = '';
      document.getElementById('codigo').innerText = 'Código: ';
      document.getElementById('productName').innerText = 'Producto: ';

      // Mostrar nuevamente el contenedor de productos
      document.getElementById('productionInput').style.display = 'none';
      document.getElementById('productosProduccion').style.display = 'block';
 
    }


    let focusedInput = null;

    // Funciones para manejar las sub-secciones de Entrada de Mercancía
    function mostrarProductosEntrada() {
      ocultarSubSeccionesEntradaMercancia();
      document.getElementById('productosEntradaSection').style.display = 'block';
      cargarProductosProduccion(); // Asegúrate de que esta función carga los productos correctamente
    }

    function mostrarProductosProveedoresEntrada() {
      ocultarSubSeccionesEntradaMercancia();
      document.getElementById('entradaProveedoresSection').style.display = 'block';
    }

    function mostrarMateriaPrimaEntrada() {
      ocultarSubSeccionesEntradaMercancia();
      document.getElementById('materiaPrimaSection').style.display = 'block';
    }

    function ocultarSubSeccionesEntradaMercancia() {
      document.getElementById('productosEntradaSection').style.display = 'none';
      document.getElementById('entradaProveedoresSection').style.display = 'none';
      document.getElementById('materiaPrimaSection').style.display = 'none';
    }

    function mostrarAltas() {
      ocultarSecciones();
      document.getElementById('altasSection').style.display = 'block';
    }

    // Registrar Proveedor desde Altas
    function registrarProveedorAlta(event) {
      event.preventDefault();
  
      const proveedorData = {
        nombre: document.getElementById('nombreProveedorAlta').value.trim(),
        direccion: document.getElementById('direccionProveedorAlta').value.trim(),
        rfc: document.getElementById('rfcProveedorAlta').value.trim(),
        telefono: document.getElementById('telefonoProveedorAlta').value.trim(),
        correo: document.getElementById('correoProveedorAlta').value.trim()
      };


      google.script.run.withSuccessHandler(function(response) {
        if (response.success) {
          alert('Proveedor registrado exitosamente.');
          document.getElementById('formRegistrarProveedorAlta').reset();
          document.getElementById('registrarProveedorAltaSection').style.display = 'none';
        } else {
          alert('Error: ' + response.message);
        }
      }).withFailureHandler(function(error) {
        alert('Error al registrar proveedor: ' + error.message);
      }).registrarProveedor(proveedorData);
    }

    // Registrar Cliente desde Altas
    function registrarClienteAlta(event) {
      event.preventDefault();
  
      const clienteData = {
        nombre: document.getElementById('nombreClienteAlta').value.trim(),
        direccion: document.getElementById('direccionClienteAlta').value.trim(),
        rfc: document.getElementById('rfcClienteAlta').value.trim(),
        telefono: document.getElementById('telefonoClienteAlta').value.trim(),
        correo: document.getElementById('correoClienteAlta').value.trim()
      };

      google.script.run.withSuccessHandler(function(response) {
        if (response.success) {
          alert('Cliente registrado exitosamente.');
          document.getElementById('formRegistrarClienteAlta').reset();
          document.getElementById('registrarClienteAltaSection').style.display = 'none';
        } else {
          alert('Error: ' + response.message);
        }
      }).withFailureHandler(function(error) {
        alert('Error al registrar cliente: ' + error.message);
      }).registrarCliente(clienteData);
    }

    // Registrar Producto desde Altas
    function registrarProductoAlta(event) {
      event.preventDefault();
      
      const productoData = {
        nombre: document.getElementById('nombreProductoAlta').value.trim(),
        tipo: document.getElementById('tipoProductoAlta').value.trim(),
        precioFabricacion: parseFloat(document.getElementById('precioFabricacionAlta').value),
        precioProveedor: parseFloat(document.getElementById('precioProveedorAlta').value) || 0,
        precioVenta: parseFloat(document.getElementById('precioVentaAlta').value),
        imagen: document.getElementById('imagenProductoAlta').value.trim(),
        proveedor: document.getElementById('proveedorProductoAlta').value.trim(),
        medida: document.getElementById('medidaProductoAlta').value.trim(),
        kilos: parseFloat(document.getElementById('kilosProductoAlta').value) || 0,
        gramos: parseFloat(document.getElementById('gramosProductoAlta').value) || 0,
        pesoTotal: parseFloat(document.getElementById('pesoTotalProductoAlta').value) || 0
      };

      google.script.run.withSuccessHandler(function(response) {
        if (response.success) {
          alert('Producto registrado exitosamente.');
          document.getElementById('formRegistrarProductoAlta').reset();
          document.getElementById('registrarProductoAltaSection').style.display = 'none';
          cargarCodigosProductos(); // Actualizar la lista de códigos de productos
        } else {
          alert('Error: ' + response.message);
        }
      }).withFailureHandler(function(error) {
        alert('Error al registrar producto: ' + error.message);
      }).registrarProducto(productoData);
    }

    // Función para seleccionar producto desde input de código (modificada para manejar múltiples sugerencias)
    function seleccionarProductoDesdeInput(codigo, inputElement) {
      if (codigo === '') {
        limpiarProductoEntrada(inputElement);
        return;
      }
      google.script.run.withSuccessHandler(function(producto) {
        if (producto) {
          // Encontrar el input de nombreProducto en la misma fila
          const tr = inputElement.closest('tr');
          const nombreProductoInput = tr.querySelector('input[name="nombreProducto"]');
          nombreProductoInput.value = producto.nombre || '';
          // Si tienes un campo de precio, descomenta las siguientes líneas y actualiza el HTML en consecuencia
          // const precioProductoInput = tr.querySelector('input[name="precioProducto"]');
          // precioProductoInput.value = producto.precioVenta || '';
        } else {
          const tr = inputElement.closest('tr');
          const nombreProductoInput = tr.querySelector('input[name="nombreProducto"]');
          nombreProductoInput.value = '';
          // const precioProductoInput = tr.querySelector('input[name="precioProducto"]');
          // precioProductoInput.value = '';
        }
      }).withFailureHandler(function(error) {
        alert('Error al obtener producto: ' + error.message);
      }).obtenerProductoPorCodigo(codigo);
    }

    // Función para agregar una nueva fila de producto
    function agregarFilaProducto() {
      const tbody = document.querySelector('#tablaProductosEntrada tbody');
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>
          <input type="text" name="codigoProducto" oninput="buscarProductoPorCodigoEntrada(this)" autocomplete="off" required>
          <div class="sugerencias sugerenciasProductosEntrada"></div>
        </td>
        <td>
          <input type="text" name="nombreProducto" oninput="buscarProductoPorNombreEntrada(this)" autocomplete="off" required>
          <div class="sugerencias sugerenciasNombreProductosEntrada"></div>
        </td>
        <td>
          <input type="number" name="kilos" min="0" step="0.01" required>
        </td>
        <td>
          <input type="number" name="piezas" min="0" step="1">
        </td>
        <td>
          <input type="text" name="comentarios">
        </td>
        <td>
          <button type="button" onclick="eliminarFilaProducto(this)" class="btn eliminar-btn">Eliminar</button>
        </td>
      `;
      tbody.appendChild(tr);
    }

    // Función para eliminar una fila de producto
    function eliminarFilaProducto(button) {
      const tr = button.closest('tr');
      tr.remove();
    }

    // Función para buscar proveedores por código
    function buscarProveedorPorCodigoEntrada(inputElement) {
      const codigo = inputElement.value.trim();
      const sugerenciasDiv = inputElement.nextElementSibling;

      if (codigo === '') {
        sugerenciasDiv.innerHTML = '';
        limpiarProveedorEntrada(inputElement, 'codigo');
        return;
      }

      google.script.run.withSuccessHandler(function(sugerencias) {
        sugerenciasDiv.innerHTML = '';
        if (Array.isArray(sugerencias)) {
          sugerencias.forEach(proveedor => {
            const div = document.createElement('div');
            div.innerText = proveedor.codigo;
            div.onclick = function() {
              inputElement.value = proveedor.codigo;
              // Asignar el nombre del proveedor si está disponible
              const tr = inputElement.closest('form').querySelector('#nombreProveedorEntrada');
              tr.value = proveedor.nombre || '';
              sugerenciasDiv.innerHTML = '';
            };
            sugerenciasDiv.appendChild(div);
          });
        }
      }).withFailureHandler(function(error) {
        alert('Error al obtener sugerencias de proveedores: ' + error.message);
      }).obtenerSugerenciasProveedoresEntradaCodigo(codigo);
    }

    // Función para buscar proveedores por nombre
    function buscarProveedorPorNombreEntrada(inputElement) {
      const nombre = inputElement.value.trim();
      const sugerenciasDiv = inputElement.nextElementSibling;
    
      if (nombre === '') {
        sugerenciasDiv.innerHTML = '';
        limpiarProveedorEntrada(inputElement, 'nombre');
        return;
      }

      google.script.run.withSuccessHandler(function(sugerencias) {
        sugerenciasDiv.innerHTML = '';
        if (Array.isArray(sugerencias)) {
          sugerencias.forEach(proveedor => {
            const div = document.createElement('div');
            div.innerText = proveedor.nombre;
            div.onclick = function() {
              inputElement.value = proveedor.nombre;
              // Asignar el código del proveedor si está disponible
              const tr = inputElement.closest('form').querySelector('#codigoProveedorEntrada');
              tr.value = proveedor.codigo || '';
              sugerenciasDiv.innerHTML = '';
            };
            sugerenciasDiv.appendChild(div);
          });
        }
      }).withFailureHandler(function(error) {
        alert('Error al obtener sugerencias de proveedores: ' + error.message);
      }).obtenerSugerenciasProveedoresEntradaNombre(nombre);
    }

    // Función para buscar productos por código
    function buscarProductoPorCodigoEntrada(inputElement) {
      const codigo = inputElement.value.trim();
      const sugerenciasDiv = inputElement.nextElementSibling;

      if (codigo === '') {
        sugerenciasDiv.innerHTML = '';
        limpiarProductoEntrada(inputElement, 'codigo');
        return;
      }

      google.script.run.withSuccessHandler(function(producto) {
        sugerenciasDiv.innerHTML = '';
        if (producto) {
          // Asignar el nombre del producto en el campo correspondiente
          const tr = inputElement.closest('tr');
          const nombreProductoInput = tr.querySelector('input[name="nombreProducto"]');
          nombreProductoInput.value = producto.nombre || '';
        }
      }).withFailureHandler(function(error) {
        alert('Error al obtener producto: ' + error.message);
      }).obtenerProductoPorCodigo(codigo);
    }


    // Función para buscar productos por nombre
    function buscarProductoPorNombreEntrada(inputElement) {
      const nombre = inputElement.value.trim();
      const sugerenciasDiv = inputElement.nextElementSibling;

      if (nombre === '') {
        sugerenciasDiv.innerHTML = '';
        limpiarProductoEntrada(inputElement, 'nombre');
        return;
      }

      google.script.run.withSuccessHandler(function(sugerencias) {
        sugerenciasDiv.innerHTML = '';
        if (Array.isArray(sugerencias)) {
          sugerencias.forEach(producto => {
            const div = document.createElement('div');
            div.innerText = producto.nombre;
            div.onclick = function() {
              inputElement.value = producto.nombre;
              // Asignar el código del producto si está disponible
              const tr = inputElement.closest('tr');
              const codigoProductoInput = tr.querySelector('input[name="codigoProducto"]');
              codigoProductoInput.value = producto.codigo || '';
              sugerenciasDiv.innerHTML = '';
            };
            sugerenciasDiv.appendChild(div);
          });
        }
      }).withFailureHandler(function(error) {
        alert('Error al obtener sugerencias de productos: ' + error.message);
      }).obtenerSugerenciasProductosEntradaNombre(nombre);
    }

    // Función para limpiar campos de proveedor
    function limpiarProveedorEntrada(inputElement, tipo) {
      if (tipo === 'codigo') {
        const nombreProveedorInput = document.getElementById('nombreProveedorEntrada');
        nombreProveedorInput.value = '';
      } else if (tipo === 'nombre') {
        const codigoProveedorInput = document.getElementById('codigoProveedorEntrada');
        codigoProveedorInput.value = '';
      }
    }

    // Función para limpiar campos de producto
    function limpiarProductoEntrada(inputElement, tipo) {
      const tr = inputElement.closest('tr');
      if (tipo === 'codigo') {
        const nombreProductoInput = tr.querySelector('input[name="nombreProducto"]');
        nombreProductoInput.value = '';
      } else if (tipo === 'nombre') {
        const codigoProductoInput = tr.querySelector('input[name="codigoProducto"]');
        codigoProductoInput.value = '';
      }
    }

    // Función para registrar entrada de proveedor con múltiples productos
    function registrarEntradaProveedor(event) {
      event.preventDefault();

      // Obtener datos de proveedor
      const codigoProveedor = document.getElementById('codigoProveedorEntrada').value.trim();
      const nombreProveedor = document.getElementById('nombreProveedorEntrada').value.trim();
      const numeroFactura = document.getElementById('numeroFacturaEntrada').value.trim();
      const monto = parseFloat(document.getElementById('montoEntrada').value);
      const pagada = document.getElementById('pagadaEntrada').checked;

      // Validaciones básicas
      if (!codigoProveedor || !nombreProveedor) {
        alert('Por favor, completa todos los campos obligatorios de proveedor.');
        return;
      }

      // Obtener datos de productos
      const tabla = document.getElementById('tablaProductosEntrada');
      const filas = tabla.querySelectorAll('tbody tr');
      const productos = [];
    
      for (let fila of filas) {
        const codigoProducto = fila.querySelector('input[name="codigoProducto"]').value.trim();
        const nombreProducto = fila.querySelector('input[name="nombreProducto"]').value.trim();
        const kilos = parseFloat(fila.querySelector('input[name="kilos"]').value);
        const piezas = parseInt(fila.querySelector('input[name="piezas"]').value) || 0;
        const comentarios = fila.querySelector('input[name="comentarios"]').value.trim();

        if (!codigoProducto || !nombreProducto || isNaN(kilos)) {
          alert('Por favor, completa todos los campos obligatorios en cada producto.');
          return;
        }

        productos.push({
          codigoProducto: codigoProducto,
          nombreProducto: nombreProducto,
          cantidadKilos: kilos,
          cantidadPiezas: piezas,
          comentarios: comentarios
        });
      }

      if (productos.length === 0) {
        alert('Debe agregar al menos un producto.');
        return;
      }

      const entradaData = {
        codigoProveedor: codigoProveedor,
        nombreProveedor: nombreProveedor,
        numeroFactura: numeroFactura,
        monto: monto,
        pagada: pagada,
        productos: productos
      };

      // Registrar la entrada de proveedor en el backend
      google.script.run.withSuccessHandler(function(response) {
        if (response.success) {
          alert('Entrada de proveedor registrada exitosamente.');
          document.getElementById('formEntradaProveedores').reset();

          // Limpiar la tabla de productos y dejar una fila vacía
          const tbody = document.querySelector('#tablaProductosEntrada tbody');
          tbody.innerHTML = `
            <tr>
              <td>
                <input type="text" name="codigoProducto" oninput="buscarProductoPorCodigoEntrada(this)" autocomplete="off" required>
                <div class="sugerencias sugerenciasProductosEntrada"></div>
              </td>
              <td>
                <input type="text" name="nombreProducto" oninput="buscarProductoPorNombreEntrada(this)" autocomplete="off" required>
                <div class="sugerencias sugerenciasNombreProductosEntrada"></div>
              </td>
              <td>
                <input type="number" name="kilos" min="0" step="0.01" required>
              </td>
              <td>
                <input type="number" name="piezas" min="0" step="1">
              </td>
              <td>
                <input type="text" name="comentarios">
              </td>
              <td>
                <button type="button" onclick="eliminarFilaProducto(this)" class="btn eliminar-btn">Eliminar</button>
              </td>
            </tr>
          `;
          cargarExistencias(); // Actualizar el inventario en la interfaz si es necesario
        } else {
          alert('Error: ' + response.message);
        }
      }).withFailureHandler(function(error) {
        alert('Error al registrar entrada de proveedor: ' + error.message);
      }).registrarEntradaProveedor(entradaData);
    }

    // Función para cargar entradas de mercancía
    function cargarEntradasMercancia() {
      google.script.run.withSuccessHandler(function(entradas) {
        const tbody = document.querySelector('#tablaEntradas tbody');
        tbody.innerHTML = ''; // Limpiar tabla
    
        entradas.forEach(entrada => {
          const tr = document.createElement('tr');
          tr.innerHTML = `
            <td>${entrada.id}</td>
            <td>${entrada.fecha}</td>
            <td>${entrada.tipo}</td>
            <td>${entrada.codigoProducto}</td>
            <td>${entrada.nombreProducto}</td>
            <td>${entrada.kilos}</td>
            <td>${entrada.piezas}</td>
            <td>$${entrada.monto.toFixed(2)}</td>
            <td>
              ${rolUsuario === 'Administrador Premium' ? `<button class="btn eliminar-btn" onclick="eliminarEntrada('${entrada.id}')">Eliminar</button>` : ''}
            </td>
          `;
          tbody.appendChild(tr);
        });
      }).withFailureHandler(function(error) {
        alert('Error al cargar entradas de mercancía: ' + error.message);
      }).obtenerEntradasMercancia();
    }

    // Función para eliminar una entrada de mercancía
    function eliminarEntrada(idEntrada) {
      if (confirm('¿Estás seguro de eliminar esta entrada de mercancía? Esta acción no se puede deshacer.')) {
        google.script.run.withSuccessHandler(function(response) {
          if (response.success) {
            alert('Entrada eliminada exitosamente.');
            cargarEntradasMercancia(); // Recargar la tabla de entradas
          } else {
            alert('Error: ' + response.message);
          }
        }).withFailureHandler(function(error) {
           alert('Error al eliminar la entrada: ' + error.message);
         }).eliminarEntradaMercancia(idEntrada);
      }
    }

    // Función para mostrar u ocultar la tabla de Entradas con transiciones
    function toggleTablaEntradas() {
      const tablaEntradas = document.getElementById('tablaEntradas');
      const botonVerEntradas = document.querySelector('.ver-entradas-btn');

      if (!tablaEntradas.classList.contains('visible')) {
        tablaEntradas.classList.add('visible');
        botonVerEntradas.innerText = 'Ocultar Entradas';
      } else {
        tablaEntradas.classList.remove('visible');
        botonVerEntradas.innerText = 'Ver Entradas';
      }
    }
    </script>
</body>
</html>
