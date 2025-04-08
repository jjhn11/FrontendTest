<template>
    <section class="book-actions-section">
      <div class="share-container">
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/1a6aa4f2fbb51c866a58a3dfe493a0c3472a88e6?placeholderIfAbsent=true&apiKey=e4bc752606e34419a710b790ae8468cc" class="share-icon" alt="Share" />
        <span class="share-text">Compartir</span>
      </div>
      <div class="action-buttons">
        <button class="action-button">DESCARGAR</button>
        <button class="action-button">RESERVAR</button>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: "BookActions",
  };
  </script>
  
  <style scoped>
  .book-actions-section {
    display: flex;
    margin-top: 25px;
    margin-left: 14px;
    width: 100%;
    max-width: 1274px;
    align-items: start;
    gap: 20px;
    font-weight: 600;
    text-align: center;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  
  @media (max-width: 991px) {
    .book-actions-section {
      max-width: 100%;
    }
  }
  
  .share-container {
    display: flex;
    margin-top: 19px;
    align-items: center;
    gap: 24px;
    font-family:
      Nunito Sans,
      -apple-system,
      Roboto,
      Helvetica,
      sans-serif;
    font-size: 24px;
    color: rgba(0, 14, 50, 1);
    white-space: nowrap;
    cursor: pointer;
  }
  
  @media (max-width: 991px) {
    .share-container {
      white-space: initial;
    }
  }
  
  .share-icon {
    aspect-ratio: 1;
    object-fit: contain;
    object-position: center;
    width: 50px;
    flex-shrink: 0;
  }
  
  .share-text {
    margin-top: auto;
    margin-bottom: auto;
    flex-basis: auto;
  }
  
  .action-buttons {
    display: flex;
    align-items: stretch;
    gap: 40px 100px;
    font-family:
      Josefin Sans,
      -apple-system,
      Roboto,
      Helvetica,
      sans-serif;
    font-size: 25px;
    color: rgba(255, 255, 255, 1);
    flex-wrap: wrap;
  }
  
  @media (max-width: 991px) {
    .action-buttons {
      max-width: 100%;
    }
  }
  
  .action-button {
    align-self: stretch;
    border-radius: 20px;
    background-color: rgba(0, 71, 255, 1);
    border-color: rgba(0, 14, 50, 1);
    border-style: solid;
    border-width: 1px;
    padding: 10px 20px 10px 20px;
    gap: 10px;
    color: rgba(255, 255, 255, 1);
    font-family:
      Josefin Sans,
      -apple-system,
      Roboto,
      Helvetica,
      sans-serif;
    font-size: 25px;
    font-weight: 600;
    cursor: pointer;
  }
  </style>
  