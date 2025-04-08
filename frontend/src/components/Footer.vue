<template>
    <img src="@/assets/img/footer/tec-map.png" alt="Mapa del TecNM" class="img-fluid">
    <footer class="footer">
        <div class="row">
            <div class="col-4 d-flex justify-content-center">
                <div class="d-flex flex-column ms-5">
                    <h1 class="footer-title">
                        ENLACES UTILES
                    </h1>
                    <RouterLink to="/" class="footer-text text-link">INICIO</RouterLink>
                    <RouterLink to="/biblioteca" class="footer-text text-link">BIBLIOTECA</RouterLink>
                    <RouterLink to="/eventos" class="footer-text text-link">EVENTOS</RouterLink>
                    <RouterLink to="/comunidad" class="footer-text text-link">COMUNIDAD</RouterLink>
                </div>
            </div>
            <div class="col-3">
                <div class="d-flex flex-column">
                    <h1 class="footer-title">
                        SOBRE AURORA
                    </h1>
                    <p class="footer-text text-justify">
                        Se brida un servicio de apoyo al área de conocimiento, para facilitar el acceso a la información
                        y el conocimiento, por medio de bibliograficas actualizadas y servicios de información.
                    </p>
                </div>
            </div>
            <div class="col-5">
                <div class="d-flex flex-column align-items-center">
                    <h1 class="footer-title">
                        CONTACTOS
                    </h1>
                    <div class="d-flex justify-content-center ">
                        <i class="bi bi-envelope-fill"></i>
                        <p class="footer-text ms-2">
                            cinformacion@itmexicali.edu.mx
                        </p>
                    </div>
                    <div class="d-flex justify-content-center ">
                        <i class="bi bi-telephone-fill"></i>
                        <p class="footer-text ms-2">
                            686 - 580 -4920 Ext. 4920
                        </p>
                    </div>
                    <div class="d-flex align-items-center">
                        <div class="col-3">
                            <img src="@/assets/img/footer/fb.png" class="img fb" alt="">
                        </div>
                        <div class="col-3">
                            <img src="@/assets/img/footer/insta.png" class="img ig" alt="">
                        </div>
                        <div class="col-3">
                            <img src="@/assets/img/footer/youtube.png" class="img yt" alt="">
                        </div>
                        <div class="col-3">
                            <img src="@/assets/img/footer/school-sharp.png" class="img schoolar" alt="">
                        </div>
                    
                    </div>

                </div>
            </div>
        </div>
    </footer>
</template>

<style scoped>
.text-justify {
    text-align: justify;
}

.text-link {
    width: min-content;
    text-decoration: none;
}

.text-link:hover {
    color: #FBE326;
}

.img {
    margin: 0 8px 0 8px;
}
.fb {
    width: 27px;
    height: 27px;
}
.ig {
    width: 26.25px;
    height: 26.25px;
}
.yt {
    width: 30px;
    height: 22.5px;
}
.schoolar {
    width: 34.5px;
    height: 27px;
}
</style>