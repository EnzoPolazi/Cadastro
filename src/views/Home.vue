<template>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
  <Visitante />
  <Footer />
</template>

<script>
import Footer from '@/components/Footer.vue'
import Visitante from '@/components/Visitante.vue'
import axios from 'axios'

export default {
  name: 'App',
  components: {
    Footer,
    Visitante
  },
  data(){
    return{
      visitor: 'Visitante'
    }
  },
  async created() {
    const response = await axios.get('user');
    console.log(response);
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