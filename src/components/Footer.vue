<template>
    <footer id="footer">
        <router-link id="home" to="/">Home</router-link>
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
#home{
    margin: auto auto auto 2%;
}
#footer a{
    text-decoration: none;
    color: #ffffff;
    transition: 0.3s;
}
#footer a:hover{
    text-decoration: none;
    color: #51216b;
}
</style>