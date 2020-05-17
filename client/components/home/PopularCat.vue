<template>
    <div class="popular-cat">
        <div class="popular-cat-layout box">
            <list-service title="Популярные категории"/>
            <div class="cat-all">
                <button type="button" class="t-button t-all" @click="allCat">Смотреть все категори</button>
            </div>
        </div>
    </div>
</template>

<script>
    import ListService from "~/components/base/ListService.vue";
    export default {
        name: "PopularCat",
        components: {
            ListService
        },
        methods: {
            allCat() {
                this.$router.push({ path: 'catalogs' })
            }
        }
    }
</script>

<style scoped>

</style>
