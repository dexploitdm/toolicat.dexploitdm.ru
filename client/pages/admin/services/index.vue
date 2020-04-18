<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header flex">
                        <h4 class="card-title">Сервисы</h4>
                        <div class="t-search">
                            <div class="t-search-box">
                                <div class="t-search-title">Поиск</div>
                                <div class="t-search-input">
                                    <input type="text" class="t-search-input-box" v-model="keywords">
                                </div>
                            </div>
                            <div class="t-search-result">
                                <div v-if="results.length > 0">
                                    <div v-for="item in results" :key="item.id" class="t-search-item">
                                        <div class="t-search-logo">
                                            <div v-if="item.logo">
                                                <img :src="urlImage + 'services/' + item.logo" />
                                            </div>
                                            <div v-else>
                                                <img src="/images/others/notimage.png">
                                            </div>
                                        </div>
                                        <div class="t-search-name">
                                            <nuxt-link :to="{ path: '/admin/services/' + item.id}">
                                                {{item.title}}
                                            </nuxt-link>
                                        </div>
                                    </div>
                                    <!--                                <div v-for="result in results" :key="result.id" v-text="result.title">{{result.id}}</div>-->
                                </div>
                            </div>

                        </div>
                    </div>


                    <div class="card-body">
                        <el-button type="primary"
                                   icon="el-icon-plus"
                                   circle
                                   @click="add"/>
                        <el-table
                            :data="servicesData"
                            v-loading="loading"
                            style="width: 100%">
                            <el-table-column
                                prop="id"
                                label="№" width="50px">
                            </el-table-column>
                            <el-table-column
                                label="Логотип" align="center" class-name="table-logo">
                                <template slot-scope="scope">
                                    <div v-if="scope.row.logo">
                                        <img :src="urlImage + 'services/' + scope.row.logo" />
                                    </div>
                                    <div v-else><img src="/images/others/notimage.png"></div>
                                </template>
                            </el-table-column>
                            <el-table-column
                                label="Название">
                                <template slot-scope="scope">
                                    {{ scope.row.title }}
                                </template>
                            </el-table-column>
                            <el-table-column
                                label="Краткое описание">
                                <template slot-scope="scope">
                                    {{ scope.row.desc }}
                                </template>
                            </el-table-column>
                            <el-table-column
                                label="Публикация" align="center">
                                <template slot-scope="scope">
                                    <div class="publish"
                                         v-bind:class="{ 'publish-on': scope.row.is_featured === 1 }"
                                         @click="changeFeatured(scope.row.id, scope.row.is_featured)">
                                        <span v-if="scope.row.is_featured === 1">Снять с публикации</span>
                                        <span v-else>Опубликовать</span>
                                    </div>
                                </template>
                            </el-table-column>
                            <el-table-column
                                label="Действия">
                                <template slot-scope="scope">
                                    <nuxt-link :to="{ path: '/admin/services/' + scope.row.id}">
                                        <el-button type="primary" icon="el-icon-edit" circle></el-button>
                                    </nuxt-link>
                                    <el-button type="danger"
                                               icon="el-icon-delete"
                                               @click="removeService(scope.row.id, scope.row.title)"
                                               circle></el-button>
                                </template>
                            </el-table-column>

                        </el-table>
                    </div>

                    <pagination :data="paginateData" @pagination-change-page="getResults"></pagination>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    const baseUrlUploads = process.env.baseUrlImage;
    import axios from "axios";

    export default {
        layout: 'admin',
        name: "ServicesIndex",
        data(){
            return {
                keywords: null,
                results: [],
                loading: true,

                urlImage: baseUrlUploads,
                servicesData: [],
                paginateData: {}
            }
        },
        watch: {
            keywords(after, before) {
                this.fetch();
            }
        },
        methods: {
            getResults(page = 1) {
                axios.get(process.env.baseUrl + 'allServicesPag?page=' + page)
                    .then(response => {
                        this.paginateData = response.data;
                        this.servicesData = this.paginateData.data;
                        this.loading = false;
                    });
            },
            fetch() {
                axios.get(process.env.baseUrl + 'searchServices', { params: { keywords: this.keywords } })
                    .then(response => this.results = response.data)
                    .catch(error => {});
            },
            add(){
                this.$router.push({path: '/admin/services/create'});
            },
            removeService(id, title){
                let uri = process.env.baseUrl + `services/${id}`;
                axios.delete(uri).then((response) => {
                    this.$notify({
                        title: 'Успех',
                        message: 'Сервис ' + title + ' удален',
                        type: 'success'
                    });
                    this.$store.dispatch('data/services/GET_SERVICES')
                });
            },
            //Опубликовать/Снять с публикации
            changeFeatured(id, state){
                state === 1 ? state = 0 : state = 1;
                for (let i = 0; i < this.servicesData.length; i++) {
                    if(this.servicesData[i].id === id){
                        this.servicesData[i].is_featured = state
                    }
                }


                const config = {
                    headers: { 'content-type': 'multipart/form-data' }
                }
                let formData = new FormData();
                formData.append('is_featured', state);

                let uri = process.env.baseUrl + `services/publish/${id}`;
                axios.post(uri,formData, config)
                    .then(function (response) {
                        console.log(id, ' смена публикации на ' + state )
                    })
                this.$notify({title: 'Публикация', dangerouslyUseHTMLString: true, message: 'Статус изменен'});
            }
        },
        mounted() {
            this.getResults()
        }
    }
</script>

<style scoped>

</style>
