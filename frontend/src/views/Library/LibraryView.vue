<script setup>
import CarruselBiblioteca from '@/components/Library/CarruselBiblioteca.vue';
import HeroBiVideo from '@/components/Library/HeroBiVideo.vue';
import SearchBar from '@/components/SearchBar.vue';
</script>

<template>
    <HeroBiVideo />

    <br><br><br><br>

    <SearchBar />

    <br><br><br><br>

    <div class="container">
        <h1 class="title">DESTACADO</h1>
        <h2 class="subtitle">Conozca el contenido más popular</h2>
        <CarruselBiblioteca />
    </div>

    <br><br><br><br><br><br><br><br><br><br>

    <div class="container">
        <h1 class="title">NOVEDADES</h1>
        <h2 class="subtitle">Lo nuevo en Aurora</h2>
    </div>

    <br><br><br><br><br><br><br><br><br><br>

    <div class="container">
        <h1 class="title">CATEGORÍAS</h1>
        <div class="categories row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-6 g-4 d-flex align-items-center justify-content-center">
            <div class="col text-center">
                <div class="category-item">
                    <h2 class="category">Ciencias</h2>
                </div>
            </div>
            <div class="col text-center">
                <div class="category-item">
                    <h2 class="category">Geografía</h2>
                </div>
            </div>
            <div class="col text-center">
                <div class="category-item">
                    <h2 class="category">Tecnología</h2>
                </div>
            </div>
            <div class="col text-center">
                <div class="category-item">
                    <h2 class="category">Consulta</h2>
                </div>
            </div>
            <div class="col text-center">
                <div class="category-item">
                    <h2 class="category">Folklore</h2>
                </div>
            </div>
            <div class="col text-center">
                <div class="category-item">
                    <h2 class="category">Derecho</h2>
                </div>
            </div>
            <div class="col text-center">
                <div class="category-item">
                    <h2 class="category">Ciencias Políticas</h2>
                </div>
            </div>
            <div class="col text-center">
                <div class="category-item">
                    <h2 class="category">Filosofía</h2>
                </div>
            </div>
            <div class="col text-center">
                <div class="category-item">
                    <h2 class="category">Historia</h2>
                </div>
            </div>
            <div class="col text-center">
                <div class="category-item">
                    <h2 class="category">Religión</h2>
                </div>
            </div>
            <div class="col text-center">
                <div class="category-item">
                    <h2 class="category">Ciencias Sociales</h2>
                </div>
            </div>
        </div>
    </div>

    <br><br><br>

    <div class="container text-center">
        <img src="@/assets/img/library/bufalito.png" class="img-bufalito" alt="Bufalo chiquito">
        <div class="text mt-3 mb-5">
            <p >
                ¿Sigues buscando algo que ver? 
            </p>
            <p>
                Revisa todo nuestro catálogo
            </p>
        </div>
        
        <RouterLink to="/library/book" class="btn-access">
            ACCEDER
        </RouterLink>
    </div>

    <br><br><br><br><br><br><br>
    <br><br>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Crimson+Text:wght@400;600;700&family=Josefin+Sans:wght@400;600&display=swap');

.title {
    font-family: Crimson Text;
    color: #021E68;
    font-weight: 700;
    font-size: 37.5px;
    line-height: 100%;

}

.subtitle {
    font-family: Josefin Sans;
    color: #000E32;
    font-weight: 600;
    font-size: 25.5px;
    line-height: 100%;
    margin: 15px 0 0 20px;
}

.categories {
    margin: auto;
}
.category {
    font-family: Josefin Sans;
    color: #000E32;
    font-weight: 700;
    font-size: 21px;
    line-height: 100%;
    text-align: center;

}
.category:hover {
    color: #FBE326;
    cursor: pointer;
}

.img-bufalito{
    width: 273px;
    height: 182px;
}
.text {
    font-family: Nunito Sans;
    font-weight: 600;
    font-size: 37.5px;
    line-height: 100%;
    text-align: center;
}
.btn-access {
    font-family: Josefin Sans;
    font-weight: 700;
    font-size: 25px;
    background-color: #000E32;
    color: white;
    padding: 17px 22px 12px 22px;
    border-radius: 5px;
    text-decoration: none;
    transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
}
.btn-access:hover {
    background-color: #FBE326;
    color: #000E32;
}
</style>