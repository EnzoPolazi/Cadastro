<template>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
  <h1>Olá {{ user.name }}</h1>
  <router-link to="/login">Fazer Login</router-link>
  <router-link to="/cadastro">Cadastre-se</router-link>
  <Footer />
</template>

<script>
import Footer from '@/components/Footer.vue'
import axios from 'axios'

export default {
  name: 'App',
  components: {
    Footer
  },
  data(){
    return{
      user: {
        name: 'Visitante'
      }
    }
  },
  async created() {
    const response = await axios.get('user');
    this.user = response.data;
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');

#app {
  font-family: 'Poppins', sans-serif;
  color: #ffffff;
  background-color: #261132;
}
html{
  background-color: #261132;
}
h1{
  text-align: center;
  padding: 30px;
}
</style>