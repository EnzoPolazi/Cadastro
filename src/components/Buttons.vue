<template>
    <div v-if="this.$store.getters.authenticatedGet">
        <div class="row">
        <button class="btn btn-class" @click="$router.push('/edit')">Editar dados</button>
        </div>
        <div class="row">
            <button class="btn btn-class" @click="$router.push('/logout')">logout</button>
        </div>
        <div class="row">
            <button class="btn btn-class" @click="$router.push('/cadastro')">Cadastrar novo usuário</button>
        </div>
    </div>
    <div v-if="!this.$store.getters.authenticatedGet">
        <div class="row">
            <button class="btn btn-class" @click="$router.push('/login')">login</button>
        </div>
        <div class="row">
            <button class="btn btn-class" @click="$router.push('/cadastro')">Cadastrar novo usuário</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Buttons'
    }
</script>

<style scoped>
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