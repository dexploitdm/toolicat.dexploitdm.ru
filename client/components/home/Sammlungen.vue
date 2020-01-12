<template>
    <div class="sammlungen">
        <div class="sammlungen-schicht box">
            <div class="c-header-box">
                <h2 class="title-h2">Подборки</h2>
            </div>
        </div>
        <sammlungen-blatt
            title="Топ 50"
            icon="top"
            color="rgb(3, 83, 164)"
        />
        <sammlungen-blatt
            title="Бесплатные"
            icon="free"
            color="rgb(19, 167, 19)"
        />
        <sammlungen-blatt
            title="Сервисы для it-стартапов"
            icon="it"
            color="rgb(51, 54, 60)"
        />
    </div>
</template>

<script>
    import SammlungenBlatt from "~/components/home/SammlungenBlatt.vue";
    export default {
        name: "Sammlungen",
        components: {
            SammlungenBlatt
        }

    }
</script>

<style scoped>

</style>
