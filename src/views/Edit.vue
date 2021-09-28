<template>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <div class="container">
        <div class="row content">
            <div class="col">
                <h3 class="signup-text mb-3">Editar dados</h3>
                <form @submit.prevent="editCadastro()">
                    <div class="form-group">
                        <label for="user">Nome</label>
                        <input type="user" v-model="user.nome" name="nome" class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" v-model="user.email" name="email" class="form-control">
                    </div>
                    <h5>Endereço:</h5>
                    <div class="row content-address">
                        <div class="col">
                            <div class="form-group">
                                <label for="pais">País</label>
                                <input type="text" v-model="user.pais" name="pais" class="form-control">
                            </div>
                            <div class="form-group">
                                <label for="municipio">Município</label>
                                <input type="text" v-model="user.municipio" name="municipio" class="form-control">
                            </div>
                        </div>
                        <div class="col">
                            <div class="form-group">
                                <label for="estado">Estado</label>
                                <input type="text" v-model="user.estado" name="estado" class="form-control">
                            </div>
                            <div class="form-group">
                                <label for="cep">CEP</label>
                                <input type="text" v-model="user.cep" name="cep" class="form-control">
                            </div>
                        </div>
                        <div class="col-md-9 form-group">
                            <label for="rua">Rua</label>
                            <input type="text" v-model="user.rua" name="rua" class="form-control">
                        </div>
                        <div class="col-md-3 form-group">
                            <label for="numero">Número</label>
                            <input type="text" v-model="user.numero" name="numero" class="form-control">
                        </div>
                        <div class="col form-group">
                            <label for="complemento">Complemento</label>
                            <input type="text" v-model="user.complemento" name="complemento" class="form-control">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="cpf">CPF</label>
                        <input type="text" v-model="user.cpf" name="cpf" class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="pis">PIS</label>
                        <input type="text" v-model="user.pis" name="pis" class="form-control">
                    </div>
                    <button class="btn btn-class">Editar</button>
                </form>
                <p id="rmvUser"><router-link to="/remove">Remover usuário</router-link></p>
            </div>
        </div>
    </div>
    <Footer />
</template>

<script>
import Footer from "@/components/Footer.vue";
import axios from 'axios';
    export default {
        name: "Edit",
        components: {
            Footer
        },
        data(){
            return {
                user: {
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
            }
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
        methods: {
        async editCadastro() {
            await axios.post('/edit', {
                nome: this.user.nome,
                email: this.user.email,
                pais: this.user.pais,
                estado: this.user.estado,
                municipio: this.user.municipio,
                cep: this.user.cep,
                rua: this.user.rua,
                numero: this.user.numero,
                complemento: this.user.complemento,
                cpf: this.user.cpf,
                pis: this.user.pis,
                senha: this.user.senha,
                _id: this.user._id
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
#rmvUser{
    text-align: left;
    font-size: 90%;
    margin: 14px auto auto auto;
}
</style>