<template>
    <div class="profile-container">
      <h1 class="profile-title">INFORMACIÓN DE PERFIL</h1>
      <div class="profile-content">
        <div class="profile-details">
            <div class="row d-flex align-items-center mb-4">
                <div class="col-4 profile-image">
                    <img src="@/assets/img/user/zeny.jpg" alt="Profile Picture" />
                </div>
                <div class="col-8 ">
                    <h2 class="profile-name">ZOTELO JIMENEZ ZENY GABRIELA</h2>
                    <div class="d-flex flex-column">
                        <span class="profile-status">ESTATUS</span>
                        <span class="status-active">ACTIVO</span>
                    </div>
                    
                </div>
            </div>
        
            <div class="row">
                <div class="col-4"></div>
                <div class="col-8">
                    <div class="d-flex flex-column separator">
                    <span class="profile-item">CELULAR.</span>
                    <span class="profile-value">(XXX) XXX-XX-XX</span>
                    </div>

                    <div class="d-flex flex-column separator">
                    <span class="profile-item">CORREO INSTITUCIONAL.</span>
                    <a href="mailto:a22490409@itmexicali.edu.mx" class="profile-link">a22490409@itmexicali.edu.mx</a>
                    </div>

                    <div class="d-flex flex-column separator">
                    <span class="profile-item">GÉNERO.</span>
                    <span class="profile-value">FEMENINO</span>
                    </div>

                    <div class="d-flex flex-column separator">
                    <span class="profile-item">PAÍS.</span>
                    <span class="profile-value">MEXICO</span>
                    </div>

                    <div class="d-flex flex-column separator">
                    <span class="profile-item">CREACIÓN DE CUENTA.</span>
                    <span class="profile-value">XX/XX/XXXX</span>
                    </div>

                    <div class="d-flex flex-column separator">
                    <span class="profile-item">NOTIFICACIONES.</span>
                    <span class="profile-value">ACTIVADAS</span>
                    </div>
                </div>
            </div>
            
          
        </div>
      </div>
    </div>
  </template>
  
  <style scoped>
  .profile-container {
    font-family: 'Inria Sans', sans-serif;
    background: #FFFAE9;
    padding: 8rem 0 8rem 0;
    text-align: center;
  }
  
  .profile-title {
    /* font-size: 2rem;
    font-weight: bold;
    margin-bottom: 2rem;
    text-transform: uppercase; */
    color: #000;
    font-family: Merriweather;
    font-size: 60px;
    font-weight: 400;
    letter-spacing: 1.6px;
    text-decoration-line: underline;
    margin-bottom: 10%;
  }
  
  
  .profile-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
  }
  
  .profile-image img {
    width: 190px;
    height: 200px;
    /* border-radius: 50%; */
    object-fit: cover;
  }
  
  .profile-details {
    text-align: left;
    /* max-width: 400px; */
  }
  
  .profile-name {
    font-family: "Inria Sans";
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 1rem;
  }
  
  .profile-status {
    font-size: 20px;
    font-weight: 400;
  }
  
  .status-active {
    color: #4caf50;
    font-size: 20px;
    font-weight: 400;
  }
  
  .profile-item {
    font-size: 20px;
  }
  
  .profile-value {
    font-size: 20px;
    color: #13308F;
    font-weight: bold;
  }
  
  .profile-link {
    color: #13308F;
    font-size: 20px;
    text-decoration: none;
  }
  
  .profile-link:hover {
    text-decoration: underline;
  }

  .separator {
    margin: 1rem 0 1rem 0;
  }
  </style>