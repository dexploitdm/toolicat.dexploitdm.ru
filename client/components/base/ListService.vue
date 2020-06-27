<template>
    <div class="list-service">
        <h2 class="title-h2">{{title}}</h2>
        <div class="cat-list grid g-two">
            <div class="column-one">
                <div v-for="(item, index) in formatCatOne" :key="`item-${index}`"
                     class="cat-list-item">
                    <div class="cat-title"
                         v-b-toggle="`collapse-t${index}`"
                         variant="primary"
                    >{{item.label}} </div>
                    <b-collapse
                        :id="`collapse-t${index}`"
                        class="mt-2">
                        <div class="cat-content">
                            <list-service-items :childrenCats="item.categoryAll"/>
                        </div>
                    </b-collapse>
                </div>

            </div>
            <div class="column-two">
                <div v-for="(item, index) in formatCatTwo" :key="`item-${index}`"
                     class="cat-list-item">
                    <div class="cat-title"
                         v-b-toggle="`collapse-k${index}`"
                         variant="primary"
                    >{{item.label}} </div>
                    <b-collapse
                        :id="`collapse-k${index}`"
                        class="mt-2">
                        <div class="cat-content">
                            <list-service-items :childrenCats="item.categoryAll"/>
                        </div>
                    </b-collapse>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    import ListServiceItems from "~/components/base/ListServiceItems.vue";
    export default {
        props: ['title'],
        name: "ListService",
        components: {
            ListServiceItems
        },
        data() {
            return {
                formatCatOne: [],
                formatCatTwo: [],
            }
        },
        mounted() {
            let data = this.$store.state.data.category_data.categoryAll;
            if(this.title === 'Популярные категории'){
                //TODO: Реализовать вывод саммых популярных категорий
                data =  data.slice(0, 6);
            }
            let countCatColumn = data.length/2;
            this.formatCatOne = data.slice(0, countCatColumn);
            this.formatCatTwo = data.slice(countCatColumn);
        },
        watch: {
            categoryAll(){
                let data = this.categoryAll;
                if(this.title === 'Популярные категории'){
                    data =  data.slice(0, 6);
                }
                let countCatColumn = data.length/2;
                this.formatCatOne = data.slice(0, countCatColumn);
                this.formatCatTwo = data.slice(countCatColumn);
            }

        },
        computed: {
            categoryAll() {
                return this.$store.state.data.category_data.categoryAll;
            },
        }
    }
</script>

<style scoped>

</style>
