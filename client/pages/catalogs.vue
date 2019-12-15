<template>
    <div class="content">
        <div class="page">
            <div class="title-box">
                <h1 class="title-h1">Найди подходящий инструмент</h1>
            </div>
            <div class="catalogs box">

                <search place="Найти подходящие сервисы, категории"/>

                <list-service title="Все категории"/>
            </div>
        </div>

        <recommendations />

    </div>
</template>

<script>
    import Search from "~/components/base/Search.vue";
    import ListService from "~/components/base/ListService.vue";
    import Recommendations from "~/components/catalogs/Recommendations.vue";
    export default {
        name: "catalogs",
        components: {
            Search, ListService, Recommendations
        }
    }
</script>

<style scoped>

</style>
