<template>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <div class="container">
        <div class="row content">
            <h3 class="message-display">{{ mensagem }}</h3>
            <!-- Botão adicionado apenas para acompanhar fluxo das páginas com mais facilidade-->
            <button class="btn btn-class" @click="$router.push('/')">Voltar para home</button>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

    export default {
        name: "Logout",
        data() {
            return {
                mensagem: ''
            }
        },
        async created() {
            try {
                const response = await axios.post("/logout", null, { withCredentials: true });
                this.mensagem = response.data;

                await this.$store.dispatch('setAuth', false);
                // this.$router.push('/'); // comando para caso não fossemos utilizar botão para voltar
            } catch (err) {
                await this.$store.dispatch('setAuth', true);
            }
        },
    }
</script>

<style scoped>
.message-display{
    font-weight: bold;
    text-align: center;
    width: 100%;
}
.content{
    color: #000000;
    max-width: 500px;
    margin: 60px auto 120px auto;
    padding: 2rem 1rem 2rem 1rem;
    box-shadow: 0px 0px 10px 10px rgba(0,0,0, .05);
    border-radius: 10px;
    background-color: #fff;
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