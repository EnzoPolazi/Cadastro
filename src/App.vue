<template>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
  <h1>Olá {{ visitor }}</h1>
  <Login v-if="visible2"/>
  <Form v-if="visible"/>
</template>

<script>
import Login from './components/Login.vue'
import Form from './components/Form.vue'

export default {
  name: 'App',
  components: {
    Login,
    Form
  },
  data(){
    return{
      visitor: 'Visitante',
      visible: false,
      visible2: true
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');

#app {
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #ffffff;
  background-color: #261132;
}
h1{
  text-align: center;
  padding: 30px;
}
</style>
