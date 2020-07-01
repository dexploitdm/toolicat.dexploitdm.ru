<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                        <h4 class="card-title">Отзывы</h4>
                    </div>
                    <div class="card-body">
                        <el-table
                            :data="reviewsData"
                            v-loading="loading"
                            style="width: 100%">
                            <el-table-column
                                prop="id"
                                label="№" width="50px">
                            </el-table-column>
                            <el-table-column
                                label="Пользователь">
                                <template slot-scope="scope">
                                    {{ scope.row.name }}
                                </template>
                            </el-table-column>
                            <el-table-column
                                label="Основной отзыв">
                                <template slot-scope="scope">
                                    {{ scope.row.comment_all }}
                                </template>
                            </el-table-column>
                            <el-table-column
                                label="Ссылка на профиль человека">
                                <template slot-scope="scope">
                                    <span v-if="scope.row.link_social">
                                        {{ scope.row.link_social }}
                                    </span>
                                    <span v-else>Нет</span>
                                </template>
                            </el-table-column>
                            <el-table-column
                                label="ID сервиса">
                                <template slot-scope="scope">
                                    {{ scope.row.service_id }}
                                </template>
                            </el-table-column>
                            <el-table-column
                                label="Публикация" align="center">
                                <template slot-scope="scope">
                                    <div class="publish"
                                         v-bind:class="{ 'publish-on': scope.row.is_publish === 1 }"
                                         @click="changeFeatured(scope.row.id, scope.row.is_publish)">
                                        <span v-if="scope.row.is_publish === 1">Снять с публикации</span>
                                        <span v-else>Опубликовать</span>
                                    </div>
                                </template>
                            </el-table-column>
                            <el-table-column
                                label="Действия">
                                <template slot-scope="scope">
                                    <el-button type="danger"
                                               icon="el-icon-delete"
                                               @click="removeService(scope.row.id, scope.row.name)"
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
    import axios from "axios";

    export default {
        layout: 'admin',
        name: "index_reviews",
        data() {
            return {
                loading: true,
                reviewsData: [],
                paginateData: {}
            }
        },
        methods: {
            getResults(page = 1) {
                axios.get(process.env.baseUrl + 'allReviewsPag?page=' + page)
                    .then(response => {
                        this.paginateData = response.data;
                        this.reviewsData = this.paginateData.data;
                        this.loading = false;
                    });
            },
            removeService(id, name){
                let uri = process.env.baseUrl + `reviews/delete/${id}`;
                axios.delete(uri).then((response) => {
                    this.$notify({
                        title: 'Успех',
                        message: 'Отзыв ' + name + ' удален',
                        type: 'success'
                    });
                    //this.$store.dispatch('data/services/GET_SERVICES')
                    this.getResults();
                });
            },
            //Опубликовать/Снять с публикации
            changeFeatured(id, state){
                state === 1 ? state = 0 : state = 1;
                for (let i = 0; i < this.reviewsData.length; i++) {
                    if(this.reviewsData[i].id === id){
                        this.reviewsData[i].is_publish = state
                    }
                }


                const config = {
                    headers: { 'content-type': 'multipart/form-data' }
                }
                let formData = new FormData();
                formData.append('is_publish', state);

                let uri = process.env.baseUrl + `reviews/${id}`;
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
