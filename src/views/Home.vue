<template>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
  <h1>Olá {{ visitor }}</h1>
  <Login />
  <Footer />
</template>

<script>
import Login from '@/components/Login.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'App',
  components: {
    Login,
    Footer
  },
  data(){
    return{
      visitor: 'Visitante'
    }
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