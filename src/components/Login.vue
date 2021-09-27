<template>
    <div class="container">
        <div class="row content">
            <div class="col">
                <h3 class="signin-text mb-3">Log-in</h3>
                <form @submit.prevent="autenticacaoLogin">
                    <div class="form-group">
                        <label for="user">Usuário</label>
                        <input type="user" name="user" placeholder="Email, CPF ou PIS" class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="senha">Senha</label>
                        <input type="password" name="senha" placeholder="Senha" class="form-control">
                    </div>
                    <button class="btn btn-class">Logar</button>
                </form>
                <p id="redCad">Não possui uma conta? <router-link to="/cadastro">Cadastre-se</router-link></p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Login"
    }
</script>

<style scoped>
.content{
    color: #000000;
    max-width: 380px;
    margin: 0 auto;
    padding: 2rem 1rem 2rem 1rem;
    box-shadow: 0px 0px 60px 60px rgba(0, 0, 0, 0.05);
    border-radius: 10px;
    background-color: #fff;
}
.signin-text{
    font-weight: bold;
    text-align: center;
}
.btn-class{
    font-weight: bold;
    display: flex;
    margin: 14px auto auto auto;
    border-color: #261132;
    color: #261132;
}
.btn-class:hover{
    background-color: #261132;
    color: #fff;
}
#redCad{
    text-align: center;
    font-size: 90%;
    margin: 14px auto auto auto;
}
</style>