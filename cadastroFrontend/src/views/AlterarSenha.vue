<template>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <div class="container">
        <div class="row content">
            <div class="col">
                <h3 class="change-pass mb-3">Alterar senha</h3>
                <form @submit.prevent="alterarSenha()">
                    <div class="form-group">
                        <label for="senha">Nova senha</label>
                        <input type="password" v-model="senhaNova" name="senha2" class="form-control">
                    </div>
                    <button class="btn btn-class">Alterar</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

    export default {
        name: "AlterarSenha",
        data() {
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
                },
                senhaNova: ''
            }
        },
        async created() {
            try {
                const response = await axios.get("user", { withCredentials: true });
                this.user = response.data;

                await this.$store.dispatch('setAuth', true);
            } catch (err) {
                await this.$store.dispatch('setAuth', false);
            }
        },
        methods: {
            async alterarSenha() {
                await axios.post('/edit-senha', {
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
                    senha: this.senhaNova,
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
.change-pass{
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
</style>