<template>
  <div class="container">
      <div class="row content">
          <div class="col">
              <h3 class="user-display mb-3">Olá {{ user.nome }} {{ this.$store.getters.authenticatedGet }} </h3>
              <Buttons />
          </div>
      </div>
  </div>
  <Footer />
</template>

<script>
import Footer from "@/components/Footer.vue";
import Buttons from "@/components/Buttons.vue";
import axios from "axios";

export default {
  name: "App",
  components: {
    Footer,
    Buttons
  },
  data() {
    return {
      user: {
        nome: "Visitante",
      }
    };
  },
  async created() {
    try {
      const response = await axios.get("user", { withCredentials: true });
      this.user = response.data;

      await this.$store.dispatch('setAuth', true)
    } catch (err) {
      await this.$store.dispatch('setAuth', false)
    }
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
</style>