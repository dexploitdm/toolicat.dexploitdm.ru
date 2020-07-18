<template>
    <div class="slider">
        <div class="slider-layout">
            <div class="slider-content">
                <div class="slider-text">
                   <span class="blue bold">Каталог сервисов и программ </span>
                    <p>Находи, сравнивай и выбирай</p>
                </div>
            </div>

            <search  place="Найти подходящие сервисы, категории"/>

            <div class="search-link">
                <nuxt-link to="/catalogs" class="t-button t-all tools-all">Смотреть все категории</nuxt-link>
            </div>
<!--            <div class="slider-cover">-->
<!--                <img src="/images/others/cover.png">-->
<!--            </div>-->
            <div class="slider-soc">
                <div class="slider-soc-line"></div>
                <div class="slider-icons">
                    <a href="#" class="slider-soc-icon facebook"><i class="fab fa-facebook-f"></i></a>
                    <a href="#" class="slider-soc-icon linkedin"><i class="fab fa-linkedin-in"></i></i></a>
                    <a href="#" class="slider-soc-icon instagram"><i class="fab fa-instagram"></i></a>
                </div>
                <div class="slider-soc-line"></div>
            </div>
            <div class="slider-scroll">
                <a class="t-scroll"></a>
            </div>
        </div>
    </div>
</template>

<script>
    import Search from "~/components/base/Search.vue";
    export default {
        name: "Slider",
        components: {
            Search
        }
    }
</script>

<style scoped>

</style>
