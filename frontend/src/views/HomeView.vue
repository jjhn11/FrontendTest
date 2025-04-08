<script setup>
import HeroVideo from '@/components/Home/HeroVideo.vue';
import SearchBar from '@/components/SearchBar.vue';
import Carrusel from '@/components/Home/Carrusel.vue';
import Title from '@/components/Home/Title.vue';
import CarruselEventos from '@/components/Home/CarruselEventos.vue';
</script>

<template>
    <HeroVideo />
    <br><br>
    <SearchBar />
    <br><br>
    <Title title="EVENTOS"/>
    <Carrusel />
    <br><br><br>
    <Title title="RESEÑAS DESTACADAS" :border="true" />
    <br><br>
    <CarruselEventos />
    <br><br><br>
</template>