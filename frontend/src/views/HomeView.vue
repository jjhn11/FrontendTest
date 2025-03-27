<script setup>
import HeroVideo from '@/components/HeroVideo.vue';
import SearchBar from '@/components/SearchBar.vue';
import Carrusel from '@/components/Carrusel.vue';
import Title from '@/components/Title.vue';
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
    <Carrusel />
    <br><br><br>
</template>