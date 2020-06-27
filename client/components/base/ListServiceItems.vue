<template>
    <ul>
        <li v-for="list in childrenCats">
            <span @click="searchInCat(list.value)"
                  class="card-footer-item">
                 {{list.label}}
            </span>
        </li>
    </ul>
</template>

<script>
    export default {
        props: ['childrenCats'],
        name: "ListServiceItems",
        data() {
            return {

            }
        },
        methods: {
            searchInCat(cat){
                this.$store.dispatch('data/search/GET_ACTIVE_CAT', cat)
                this.$router.push('search/children-cat')
            }
        }
    }
</script>

<style scoped>

</style>
