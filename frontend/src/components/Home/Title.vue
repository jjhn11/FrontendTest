<script setup>
    defineProps({
            title: String,
            border: {
                type: Boolean,
                default: false
            }
    });
</script>

<template>
    <div class="container-fluid mt-5 text-center">
                <div v-if="border" class="d-flex justify-content-center">
                    <h1 class="title borders">{{ title }}</h1>
                </div>
                <div v-else class="d-flex justify-content-center">
                    <h1 class="title">{{ title }}</h1>
                </div>
    </div>
</template>

<style scoped>
.title {
    font-family: Crimson Text;
    font-weight: 600;
    font-size: 67.5px;
    line-height: 100%;
    letter-spacing: 0%;
    width: 70%;
}
.borders {
    border-top: 3.75px solid #0047FF;
    border-bottom: 3.75px solid #0047FF;
    padding: 25px 0 10px 0;
}
</style>