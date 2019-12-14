<template>
    <div class="search">
        <div class="search-box">
            <div class="search-input">
                <div class="t-control">
                    <span class="search-icon"></span>
                    <input type="text" class="t-input" :placeholder="place"  name="tools" v-model="search">
                </div>
            </div>
            <div class="search-start">
                <button type="button" class="t-button search-btn">Поиск</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['place'],
        name: "Search",
        data(){
            return {
                search: ''
            }
        }
    }
</script>

<style scoped>

</style>
