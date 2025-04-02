<script setup>
// Import all images directly
import noticia1 from '@/assets/img/home/noticia 1.png';
import noticia2 from '@/assets/img/home/noticia 2.png';
import noticia5 from '@/assets/img/home/noticia 5.png';
import noticia4 from '@/assets/img/home/noticiaa 4.png';
import noticia3 from '@/assets/img/home/noticia 3.png';
import noti6 from '@/assets/img/home/noti6.jpg';
import noti7 from '@/assets/img/home/noti7.jpg';
import noti8 from '@/assets/img/home/noti8.jpg';
import noti9 from '@/assets/img/home/noti9.jpg';
</script>

<template>
    <div class="contenedor-carrusel container-fluid d-flex justify-content-center">
        <div id="carrusel1" class="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <div class="row justify-content-center">
                        <div class="col-md-4">
                            <div id="Ele1" class="card">
                                <img :src="noticia1" class="card-img-top" alt="Noticia 1">
                                <div class="card-body">
                                    <h5 class="card-title">ENTREGAN ESTÍMULO A PERSONAL ADMINISTRATIVO</h5>
                                    <p class="card-text">El director, Dr. Manuel de Jesús López Pérez, entregó el Estímulo de 10 días en virtud del desempeño de los Servidores Públicos de nivel operativo 2024. En un sencillo acto celebrado en la sala de juntas de la dirección...</p>
                                </div>
                                <div class="card-footer">
                                    <a href="#" class="btn-read-more">Leer más...</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div id="Ele1" class="card">
                                <img :src="noticia2" class="card-img-top" alt="Noticia 2">
                                <div class="card-body">
                                    <h5 class="card-title">LA ESCOLTA Y BANDA DE GUERRA RECIBE APOYO PARA ENCUENTRO NACIONAL</h5>
                                    <p class="card-text">La Escolta y Banda de Guerra recibió cornetas y un portabandera para su participación en el Encuentro Nacional de Escoltas y Bandas de Guerra del TecNM. El subdirector de Planeación</p>
                                </div>
                                <div class="card-footer">
                                    <a href="#" class="btn-read-more">Leer más...</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div id="Ele1" class="card">
                                <img :src="noticia5" class="card-img-top" alt="Noticia 5">
                                <div class="card-body">
                                    <h5 class="card-title">CELEBRAN HONORES A LA BANDERA NACIONAL</h5>
                                    <p class="card-text">Estudiantes, personal docente y cuerpo directivo, encabezado por el subdirector, Gabriel Ernesto Pando Martínez, en representación del director, Dr. Manuel de Jesús López Pérez, rindieron honores a la Bandera Nacional...</p>
                                </div>    
                                <div class="card-footer">
                                    <a href="#" class="btn-read-more">Leer más...</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="row justify-content-center">
                        <div class="col-md-4">
                            <div id="Ele1" class="card">
                                <img :src="noticia4" class="card-img-top" alt="Noticia 4">
                                <div class="card-body">
                                    <h5 class="card-title">DOCENTES SE GRADUAN EN PROGRAMA DE FORMACIÓN DE SEMICONDUCTORES</h5>
                                    <p class="card-text">Los docentes Iván Yeniseysk Alba Corpus, Margarita Ayala Figueroa y Rafael Iván Ayala Figueroa, se graduaron en el programa de Formación de Semiconductores. En el cierre del segundo Foro de Semiconductores recibieron el certificado...</p>
                                </div>
                                <div class="card-footer">
                                    <a href="#" class="btn-read-more">Leer más...</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div id="Ele1" class="card">
                                <img :src="noticia3" class="card-img-top" alt="Noticia 3">
                                <div class="card-body">
                                    <h5 class="card-title">NOMBRA DIRECTOR GENERAL DEL TECNM A NUEVOS SUBDIRECTORES Y JEFES DE DEPARTAMENTO DEL ITM.</h5>
                                    <p class="card-text">En una reunión celebrada en el audiovisual del edificio "D", el director del Instituto Tecnológico de Mexicali, Manuel de Jesús López Pérez, dio la bienvenida y entregó...</p>
                                </div>
                                <div class="card-footer">
                                    <a href="#" class="btn-read-more">Leer más...</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div id="Ele1" class="card">
                                <img :src="noti6" class="card-img-top" alt="Noticia 6">
                                <div class="card-body">
                                    <h5 class="card-title">El Tecnológico Nacional de México (TecNM) conmemoró su 75 aniversario</h5>
                                    <p class="card-text">El Dr. Manuel de Jesús López Pérez, director del Instituto Tecnológico de Mexicali, asistió al citado evento, y se sumó al llamado del Profesor Ramón Jiménez López./ Director General de TecNM para refrendar el compromiso del...</p>
                                </div>    
                                <div class="card-footer">
                                    <a href="#" class="btn-read-more">Leer más...</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="row justify-content-center">
                        <div class="col-md-4">
                            <div id="Ele1" class="card">
                                <img :src="noti7" class="card-img-top" alt="Noticia 7">
                                <div class="card-body">
                                    <h5 class="card-title">COLEGIO VISITA LABORATORIOS DE QUÍMICA</h5>
                                    <p class="card-text">Un grupo de niños y niñas visitaron las instalaciones y laboratorios de química para jugar y aprender con activaciones educativas. Nuestros docentes participaron en los divertidos ejercicios que efectuaron los visitantes...</p>
                                </div>    
                                <div class="card-footer">
                                    <a href="#" class="btn-read-more">Leer más...</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div id="Ele1" class="card">
                                <img :src="noti8" class="card-img-top" alt="Noticia 8">
                                <div class="card-body">
                                    <h5 class="card-title">TITULACIÓN COLECTIVA DE INGENIERÍA QUÍMICA-BIOQUÍMICA</h5>
                                    <p class="card-text">Hoy es un día especial para nuestra comunidad, pues celebramos la titulación colectiva de Ingeniería Química-Bioquímica en la sala audiovisual del edificio "D". Este logro es el reflejo del esfuerzo, la dedicación y el compromiso...</p>
                                </div> 
                                <div class="card-footer">
                                    <a href="#" class="btn-read-more">Leer más...</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div id="Ele1" class="card">
                                <img :src="noti9" class="card-img-top" alt="Noticia 9">
                                <div class="card-body">
                                    <h5 class="card-title">EXITOSO PANEL DEL DÍA INTERNACIONAL DE LA MUJER</h5>
                                    <p class="card-text">Las mujeres han logrado su crecimiento profesional y personal gracias a su esfuerzo y talento, coincidieron las ponentes en el panel ¨Desafíos y oportunidades para las mujeres en la academia¨. El panel celebrado ayer en...</p>
                                </div>    
                                <div class="card-footer">
                                    <a href="#" class="btn-read-more">Leer más...</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="carousel-controls-bottom">
                <button class="btn btn-link carousel-control-prev-bottom" type="button" data-bs-target="#carrusel1" data-bs-slide="prev">
                    <i class="bi bi-chevron-left fs-4"></i>
                </button>
                
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carrusel1" data-bs-slide-to="0" class="active"></button>
                    <button type="button" data-bs-target="#carrusel1" data-bs-slide-to="1"></button>
                    <button type="button" data-bs-target="#carrusel1" data-bs-slide-to="2"></button>
                </div>
                
                <button class="btn btn-link carousel-control-next-bottom" type="button" data-bs-target="#carrusel1" data-bs-slide="next">
                    <i class="bi bi-chevron-right fs-4"></i>
                </button>
            </div>
        </div>
    </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Freeman&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inria+Sans:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap');

.contenedor-carrusel {
    width: 83%;
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
/* cards */
.freeman-regular {
  font-family: "Freeman", sans-serif;
  font-weight: 400;
  font-style: normal;
}

#Ele1 {
    background-color: #F3F4F5;
    /* width: 436px; */
    /* height: 420px; */
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease-out;
    flex: 0 0 auto;
    margin: 0 auto;
    padding: 0;
}

.card:hover {
    transform: translateY(-5px);
}

.card-img-top {
    height: 191px;
    /* width: 436px; */
    object-position: center top;
    object-fit: cover;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
}
.card-title {
    font-family:'Freeman';
    font-weight:400;
    line-height: 100%;
    text-transform: uppercase;
    font-size: 23px;
    color: #1a1a1a;
}

.card-footer{
    background-color: #D9D9D9;
    text-align: right;
    padding: 14px;
}

.card-text {
    font-family: 'Inria sans';
    font-weight: 400;
    font-size: 15px;
    color: #7e8382;
}

.btn-read-more {
    font-size: 14px;
    text-decoration: none;
    color: #007bff;
    font-weight: bold;
}

.btn-read-more:hover {
    text-decoration: underline;
}

/* controles inferiores */
.carousel-controls-bottom {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-top: 20px;
}

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

/* circulos */
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
    border: 1px solid #6f00ff !important;
    opacity: 0.5;
    transition: all 0.3s ease;
    margin: 0 5px;
}

.carousel-indicators button.active {
    background-color: #007bff;
    opacity: 1;
    transform: scale(1.2);
}
.carousel-control-prev,
.carousel-control-next {
    display: none;
}
</style>