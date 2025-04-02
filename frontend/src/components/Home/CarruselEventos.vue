<style>
  @import url('https://fonts.googleapis.com/css2?family=Freeman&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Inria+Sans:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&display=swap');
</style>
<template>
  <div class="container-fluid d-flex justify-content-center">
    <button class="btn btn-link carousel-control-prev-bottom" type="button" data-bs-target="#carrusel2" data-bs-slide="prev">
      <i class="bi bi-chevron-left fs-4"></i>
    </button>
    <div id="carrusel2" class="carousel">
      <div class="carousel-inner">

        <!-- card 1 -->
        <div class="carousel-item active">
          <div id="Ele2" class="card p-3">
            <div class="row">
              <div class="col-md-4">
                <img src="/src/assets/img/home/codigoLimpio.png" class="img-fluid rounded" alt="Código Limpio">
              </div>
              <div class="col-md-8">
                <h5 class="book-title">Código Limpio</h5>
                <p class="text-primary author">Robert Cecil Martín</p>
                <div class="row">
                  <p class="review-author">Joan Daniel Alvarez Ruiz</p>
                  <div class="rating">
                    <span class="star filled">★</span>
                    <span class="star filled">★</span>
                    <span class="star filled">★</span>
                    <span class="star filled">★</span>
                    <span class="star">★</span>
                  </div>
                </div>
                <p class="review">Buen libro para aprender/recordar conceptos de escritura y creación de software.</p>
              </div>
            </div>
          </div>
        </div>

        <!-- 2 -->
        <div class="carousel-item">
          <div id="Ele2" class="card w-60 p-3">
            <div class="row">
              <div class="col-md-4">
                <img src="/src/assets/img/home/videojuegoslibros.png" class="img-fluid rounded" alt="videojuegos libro x">
              </div>
              <div class="col-md-8">
                <h5 class="book-title">Desarrollo de Videojuegos Para web en Javascript</h5>
                <p class="text-primary author">Jordán Pascual Espada</p>
                <div class="row">
                  <p class="review-author">José Andrés Veliz Sierra</p>
                  <div class="rating">
                    <span class="star filled">★</span>
                    <span class="star filled">★</span>
                    <span class="star filled">★</span>
                    <span class="star filled">★</span>
                    <span class="star">★</span>
                  </div>
                </div>
                <p class="review">Muy buen libro. La verdad que te hace reflexionar mucho como desarrollador por como uno escribe el código.</p>
              </div>
            </div>
          </div>
        </div>

        <!-- 3 -->
        <div class="carousel-item">
          <div id="Ele2" class="card w-60 p-3">
            <div class="row">
              <div class="col-md-4">
                <img src="/src/assets/img/home/libro3.png" class="img-fluid rounded" alt="Noticia 1">
              </div>
              <div class="col-md-8">
                <h5 class="book-title">Fundamentos de Programación</h5>
                <p class="text-primary author">Luis Joyanes Aguilar</p>
                <div class="row">
                  <p class="review-author">Tomás Sucedo Navarrete</p>
                  <div class="rating">
                    <span class="star filled">★</span>
                    <span class="star filled">★</span>
                    <span class="star filled">★</span>
                    <span class="star filled">★</span>
                    <span class="star">★</span>
                  </div>
                </div>
                <p class="review">Una verdadera obra maestra del mundo de la programación, dedicada a profesionales y estudiantes.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carrusel2" data-bs-slide-to="0" class="active"></button>
        <button type="button" data-bs-target="#carrusel2" data-bs-slide-to="1"></button>
        <button type="button" data-bs-target="#carrusel2" data-bs-slide-to="2"></button>
      </div>
    </div>
    <button class="btn btn-link carousel-control-next-bottom" type="button" data-bs-target="#carrusel2" data-bs-slide="next">
      <i class="bi bi-chevron-right fs-4"></i>
    </button>
  </div>
</template>
<style>
  .review-author {
    font-size: 22px;
    position: absolute;
    height: 30px;
    width: 290px;
    top: 145px;
    left: 243px;
  }
  .review {
    text-align: justify;
    position: absolute;
    width: 386px;
    height: 50px;
    top: 182px;
    left: 253px;
    font-style: italic;
    font-size: 18px;
    color: #264653;
  }
  .rating {
    position: absolute;
    width: 111px;
    height: 20px;
    right: 80px;
    top: 145px;
  }
  .book-title {
    font-weight: 700;
    margin-top: 30px;
    text-align: center;
    justify-content: center;
    font-size: 30px;
    font-family: "Crimson text";
  }
  .text-primary{
    font-size: 20px;
    line-height: 100%;
    color: #0047FF;
    font-weight: 700;
    font-family: 'Nunito sans';
    text-align: right;
  }
  .star {
    color: #caed07;
    font-size: 1.2rem;
  }
  
  .book-title {
    text-align: center;
  }
  
  /* Estilo de las tarjetas */
  #Ele2 {
    width: 725.36px;
    height: 330px;
    border-radius: 30px;
    background-color: #ccc;
  }
  
  .carousel {
    position: relative;
    padding-bottom: 30px;
  }
  
  .carousel-item {
    margin: 0 auto;
    padding: 20px 10px;
  }
  
  .carousel-item .row {
    flex-wrap: nowrap;
    max-width: 1600px;
    justify-content: center;
    margin: 15 auto;
  }
  
  .card-text {
    font-family: "Inria Sans", sans-serif;
    font-weight: 400;
    font-size: 15px;
    color: #7e8382;
  }
  
  /* Botón de leer más */
  .btn-read-more {
    font-size: 14px;
    text-decoration: none;
    color: #007bff;
    font-weight: bold;
  }
  
  .btn-read-more:hover {
    text-decoration: underline;
  }
  
  /* Estilos de controles */
  .carousel-control-prev-bottom,
  .carousel-control-next-bottom {
    color: #007bff;
    transition: all 0.3s ease;
    padding: 5px;
  }
  
  .carousel-control-prev-bottom:hover,
  .carousel-control-next-bottom:hover {
    color: #0056b3;
    transform: scale(1.2);
  }
  
  /* Indicadores */
  .carousel-indicators {
    position: relative;
    display: flex;
    gap: 5px;
    margin: 0;
    bottom: auto;
  }
  
  .carousel-indicators button {
    width: 12px !important;
    height: 12px !important;
    border-radius: 50%;
    background-color: #fff;
    border: 1px solid #ccc;
    opacity: 0.5;
    transition: all 0.3s ease;
    margin: 0 5px;
  }
  
  .carousel-indicators button.active {
    background-color: #007bff;
    opacity: 1;
    transform: scale(1.2);
  }
  
  /* Ocultar controles laterales */
  .carousel-control-prev,
  .carousel-control-next {
    display: none;
  }
  </style>
