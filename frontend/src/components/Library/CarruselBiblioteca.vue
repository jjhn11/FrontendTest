<script>
    import BookCard from './BookCard.vue';
    export default {
    components: { BookCard },
    data() {
        return {
        activeSlide: 0,
        totalSlides: 3 // <-- cambia este número si tienes más slides
        };
    },
    mounted() {
        const carousel = document.querySelector('#carrusel2');
        carousel.addEventListener('slid.bs.carousel', (e) => {
        this.activeSlide = e.to;
        });
    }
    }
</script>
<template>
    <div class="contenedor-carrusel container-fluid d-flex justify-content-center">
        <button class="btn btn-link carousel-control-prev-bottom" type="button" data-bs-target="#carrusel2" data-bs-slide="prev">
            <i class="bi bi-chevron-left fs-4"></i>
        </button>
        <div id="carrusel2" class="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <div class="row justify-content-center">
                        <div class="col-12 col-sm-6 col-md-4">
                            <BookCard
                               cover-image="src\assets\img\library\LibroBigData.png"
                               title="Big data: La Revolución de los Datos Masivos"
                               description="Computación"/>
                        </div>
                        <div class="col-12 col-sm-6 col-md-4">
                                <BookCard
                                cover-image="src\assets\img\library\LibroFisicoquimica.png"
                                title="Fisicoquimica"
                                description="Fisicoquimica"/>
                        </div>
                        <div class="col-12 col-sm-6 col-md-4">
                            <BookCard
                                cover-image="src\assets\img\library\LibroMarxismo.jpg"
                                title="Ciencias Sociales y Marxismo"
                                description="Ciencias sociales"/>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="row justify-content-center">
                        <div class="col-12 col-sm-6 col-md-4">
                            <BookCard
                               cover-image="src\assets\img\library\LibroPsicologia.jpg"
                               title="Psicología social"
                               description="Psicología"/>
                        </div>
                        <div class="col-12 col-sm-6 col-md-4">
                            <BookCard
                               cover-image="src\assets\img\library\LibroBigData.png"
                               title="Big data: La Revolución de los Datos Masivos"
                               description="Computación"/>
                        </div>
                        <div class="col-12 col-sm-6 col-md-4">
                            <BookCard
                               cover-image="src\assets\img\library\LibroBigData.png"
                               title="Big data: La Revolución de los Datos Masivos"
                               description="Computación"/>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="row justify-content-center">
                        <div class="col-12 col-sm-6 col-md-4">
                            <BookCard
                               cover-image="src\assets\img\library\LibroBigData.png"
                               title="Big data: La Revolución de los Datos Masivos"
                               description="Computación"/>
                        </div>
                        <div class="col-12 col-sm-6 col-md-4">
                            <BookCard
                               cover-image="src\assets\img\library\LibroBigData.png"
                               title="Big data: La Revolución de los Datos Masivos"
                               description="Computación"/>
                        </div>
                        <div class="col-12 col-sm-6 col-md-4">
                            <BookCard
                               cover-image="src\assets\img\library\LibroBigData.png"
                               title="Big data: La Revolución de los Datos Masivos"
                               description="Computación"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <button class="btn btn-link carousel-control-next-bottom" type="button" data-bs-target="#carrusel2" data-bs-slide="next">
            <i class="bi bi-chevron-right fs-4"></i>
        </button>
    </div>
    <div class="custom-slider-bar">
        <div class="custom-slider-thumb" :style="{ left: `${(activeSlide / (totalSlides - 1)) * 100}%` }"></div>
    </div>



</template>

<style scoped>
.custom-slider-bar {
  position: relative;
  height: 6px;
  width: 60%;
  margin: 10px auto 0 auto;
  background-color: #d0d0d0;
  border-radius: 5px;
  overflow: hidden;
  margin-bottom: 20px;
}

.custom-slider-thumb {
  position: absolute;
  top: -7px;
  width: 33%;
  height: 18px;
  background-color: #007bff;
  border-radius: 50%;
  transition: left 0.3s ease;
  transform: translateX(-50%);
}

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

.carousel-control-prev,
.carousel-control-next {
    display: none;
}

</style>
