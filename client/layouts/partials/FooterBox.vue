<template>
    <footer>
        <div class="footer-layout">
            <div class="footer-box box">
                <div class="footer-logo">
                    Toolicat
                </div>
                <div class="footer-menu">
                    <nuxt-link to="/" class="footer-link">Для сервисов</nuxt-link>
                    <nuxt-link to="/" class="footer-link">О нас</nuxt-link>
                    <nuxt-link to="/" class="footer-link">Контакты</nuxt-link>
                </div>
                <div class="footer-soc">
                    <a href="#" class="soc-link" target="_blank"><i class="fab fa-facebook-f"></i></a>
                    <a href="#" class="soc-link" target="_blank"><i class="fab fa-linkedin-in"></i></a>
                    <a href="#" class="soc-link" target="_blank"><i class="fab fa-instagram"></i></a>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <div class="footer-b-box box">
                <div class="footer-corp">
                    © {{year}} Toolicat. Все права защищены.
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
    export default {
        name: "FooterBox",
        data(){
            return {
                year: ''
            }
        },
        mounted() {
            const yearCurrent = (new Date()).getFullYear();
            this.year = yearCurrent
        }
    }
</script>

<style scoped>

</style>
