<template>
    <footer id="footer">
        <router-link to="/sobre">Sobre o autor</router-link>
    </footer>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped>
#footer{
    height: 55px;
    background-color: #190624;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    width: 100%;
    bottom: 0;
    position: fixed;
}
#footer a{
    text-decoration: none;
    color: #ffffff;
    transition: 0.3s;
    margin: auto 2% auto auto;
}
#footer a:hover{
    text-decoration: none;
    color: #51216b;
}
</style>