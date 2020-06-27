<template>
    <div class="children-cat page">
        <div class="title-box">
            <h1 class="title-h1">{{currentCat}}</h1>
        </div>
        {{currentCat}}
    </div>
</template>

<script>
    export default {
        name: "children_cat_index",
        data(){
            return {

            }
        },
        watch: {
            currentCat(){
                console.log(this.currentCat.length)
                if(!this.currentCat){
                    console.log('not')
                }
            }
        },
        computed: {
            currentCat() {
                return this.$store.state.data.search.activeCat;
            },
        }
    }
</script>

<style scoped>

</style>
