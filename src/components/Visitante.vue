<template>
    <div><h1>Olá {{ visitor }}</h1></div>
    <Footer/>
</template>

<script>
import Footer from '@/components/Footer.vue'

    export default {
        name: "Visitante",
        componentes: {
            Footer
        },
        data() {
            return {
                visitor: 'Visitante'
            }
        }
    }
</script>
