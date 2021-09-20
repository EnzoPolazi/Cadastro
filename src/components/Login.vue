<template>
    <div class="container">
        <div class="row content">
            <div class="col">
                <h3 class="signin-text">Log-in</h3>
                <form>
                    <div class="form-group">
                        <label for="user">Usuário</label>
                        <input type="user" name="user" placeholder="Email, CPF ou PIS" class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="senha">Senha</label>
                        <input type="password" name="senha" placeholder="Senha" class="form-control">
                    </div>
                </form>
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

</style>