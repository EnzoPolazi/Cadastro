<template>
  <div class="container">
      <div class="row content">
          <div class="col">
            <h3 class="user-display mb-3">Olá {{ user.nome }}</h3>
            <div class="row">
                <button class="btn btn-class" @click="$router.push('/edit')">Editar dados</button>
            </div>
            <div class="row">
                <button class="btn btn-class" @click="$router.push('/cadastro')">Cadastrar novo usuário</button>
            </div>
            <div class="row">
              <button class="btn btn-class" @click="$router.push('/logout')">logout</button>
            </div>
          </div>
      </div>
  </div>
  <Footer />
</template>

<script>
import Footer from "@/components/Footer.vue";
import axios from "axios";

export default {
  name: "App",
  components: {
    Footer,
  },
  data() {
    return {
      user: {
        nome: "Visitante",
      },
    };
  },
  async created() {
    const response = await axios.get("user", { withCredentials: true });
    this.user = response.data;
  },
};
</script>

<style scoped>
.content{
    color: #000000;
    max-width: 380px;
    margin: 60px auto 120px auto;
    padding: 2rem 1rem 2rem 1rem;
    box-shadow: 0px 0px 60px 60px rgba(0, 0, 0, 0.05);
    border-radius: 10px;
    background-color: #fff;
}
.user-display{
    font-weight: bold;
    text-align: center;
}
.btn-class{
    font-weight: bold;
    display: flex;
    margin: 15px auto auto auto;
    border-color: #261132;
    color: #261132;
}
.btn-class:hover{
    background-color: #261132;
    color: #fff;
}
</style>