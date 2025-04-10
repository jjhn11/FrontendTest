<style>
  @import url('https://fonts.googleapis.com/css2?family=Freeman&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Inria+Sans:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&display=swap');
</style>
<template>
    <div class="book-card">
      <RouterLink to="/library/book" class="book-link">
        <div class="book-cover">
            <img :src="coverImage" :alt="title" class="book-image" />
        </div>
        <div class="book-info">
            <h3 class="book-title">{{ title }}</h3>
            <p class="book-description">{{ description }}</p>
        </div>
      </RouterLink>
    </div>
</template>

<style scoped>
.book-card{
    background-color: white;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    padding: 10px;
}
.book-cover{
    width: 322px;
    height: 492px;
}
.book-image{
    width: 100%;
    border-radius: 10px;
}
.book-title {
    font-weight: 400;
    font-size: 16px;
    width: 310px;
    height: 61px;
    font-family: "freeman";
    text-align: left;
}    
.book-description {
    font-weight: 300;
    font-size: 12px;
    width: 103px;
    height: 40px;
    font-family: "Nunito sans";
    text-align: left;
}
</style>

  <script>
  export default {
    name: 'BookCard',
    props: {
      coverImage: {
        type: String,
        required: true,
        default: 'https://t4.ftcdn.net/jpg/01/15/20/75/360_F_115207580_US2etunH78I7iMYHOoNVvxQTCIdoPdRj.jpg'
      },
      title: {
        type: String,
        required: true,
        default: 'Título desconocido'
      },
      description: {
        type: String,
        required: false,
        default: ''
      }
    }
  }
  </script>