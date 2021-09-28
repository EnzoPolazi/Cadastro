<template>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <div class="container">
        <div class="row content">
            <div class="col">
                <h3 class="signup-text mb-3">Cadastre-se</h3>
                <form @submit.prevent="addCadastro()">
                    <div class="form-group">
                        <label for="user">Nome:</label>
                        <input type="user" v-model="nome" placeholder="Nome" name="nome" class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="email">Email:</label>
                        <input type="email" v-model="email" placeholder="exemplo@email.com" name="email" class="form-control">
                    </div>
                    <h5>Endereço:</h5>
                    <div class="row content-address">
                        <div class="col">
                            <div class="form-group">
                                <label for="pais">País:</label>
                                <input type="text" v-model="pais" placeholder="País" name="pais" class="form-control">
                            </div>
                            <div class="form-group">
                                <label for="municipio">Município:</label>
                                <input type="text" v-model="municipio" placeholder="Município" name="municipio" class="form-control">
                            </div>
                        </div>
                        <div class="col">
                            <div class="form-group">
                                <label for="estado">Estado:</label>
                                <input type="text" v-model="estado" placeholder="Exemplo: MG" name="estado" class="form-control">
                            </div>
                            <div class="form-group">
                                <label for="cep">CEP:</label>
                                <input type="text" v-model="cep" placeholder="00000-000" name="cep" class="form-control">
                            </div>
                        </div>
                        <div class="col-md-9 form-group">
                            <label for="rua">Rua:</label>
                            <input type="text" v-model="rua" placeholder="Rua dos bobos" name="rua" class="form-control">
                        </div>
                        <div class="col-md-3 form-group">
                            <label for="numero">Número:</label>
                            <input type="text" v-model="numero" placeholder="0" name="numero" class="form-control">
                        </div>
                        <div class="col form-group">
                            <label for="complemento">Complemento:</label>
                            <input type="text" v-model="complemento" placeholder="Exemplo: bl A apto 000" name="complemento" class="form-control">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="cpf">CPF:</label>
                        <input type="text" v-model="cpf" placeholder="000.000.000-00" name="cpf" class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="pis">PIS:</label>
                        <input type="text" v-model="pis" placeholder="000.0000.00-00" name="pis" class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="senha">Senha:</label>
                        <input type="password" v-model="senha" placeholder="Senha" name="senha" class="form-control">
                    </div>
                    <button class="btn btn-class">Cadastrar-se</button>
                </form>
                <p v-if="!this.$store.getters.authenticatedGet" id="redLogin">Já possui uma conta? <router-link to="/login">Fazer Login</router-link></p>
            </div>
        </div>
    </div>
    <Footer />
</template>

<script>
import Footer from '@/components/Footer.vue';
import axios from 'axios';

export default {
    name: "Cadastro",
    components: {
        Footer
    },
    data() {
        return {
            nome: '',
            email: '',
            pais: '',
            estado: '',
            municipio: '',
            cep: '',
            rua: '',
            numero: '',
            complemento: '',
            cpf: '',
            pis: '',
            senha: ''
        }
    },
    methods: {
        async addCadastro() {
            await axios.post('/register', {
                nome: this.nome,
                email: this.email,
                pais: this.pais,
                estado: this.estado,
                municipio: this.municipio,
                cep: this.cep,
                rua: this.rua,
                numero: this.numero,
                complemento: this.complemento,
                cpf: this.cpf,
                pis: this.pis,
                senha: this.senha
            });

            if(this.$store.getters.authenticatedGet){
                try {
                    await axios.post("/logout", null, { withCredentials: true });

                    await this.$store.dispatch('setAuth', false);
                } catch (err) {
                    await this.$store.dispatch('setAuth', true);
                }
            }

            await axios.post('/login', {
                login: this.email,
                senha: this.senha
            }, {withCredentials: true});

            this.$router.push('/');
        }
    }
}
</script>

<style scoped>
.content{
    color: #000000;
    max-width: 500px;
    margin: 60px auto 120px auto;
    padding: 2rem 1rem 2rem 1rem;
    box-shadow: 0px 0px 10px 10px rgba(0,0,0, .05);
    border-radius: 10px;
    background-color: #fff;
}
.content-address{
    margin: 10px;
    border-radius: 5px;
}
.signup-text{
    font-weight: bold;
    text-align: center;
}
.form-control{
    display: flex;
    width: 100%;
    font-size: 1rem;
    font-weight: bold;
    line-height: 1.5;
    border-color: #261132;
    border-style: solid;
    padding: 3px;
    color: #495057;
    height: auto;
    border-radius: 7px;
    background-color: #fff;
    background-clip: padding-box;
    text-indent: 12px;
    margin: 0;
}
.form-control:focus{
    color: #132435;
    background-color: #fff;
    outline: 0;
    box-shadow: none;
}
.btn-class{
    font-weight: bold;
    display: flex;
    margin: 30px auto auto auto;
    border-color: #261132;
    color: #261132;
}
.btn-class:hover{
    background-color: #261132;
    color: #fff;
}
#redLogin{
    text-align: center;
    font-size: 90%;
    margin: 14px auto auto auto;
}
</style>