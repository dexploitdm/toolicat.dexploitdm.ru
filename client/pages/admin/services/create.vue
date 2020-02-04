<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                        <h4 class="card-title">Добавление сервиса</h4>
                    </div>
                    <div class="card-body">
                        <form @submit="formSubmit" enctype="multipart/form-data">
                        <el-row :gutter="20">
                            <el-col :span="12">
                                <div class="t-control t-box">
                                    <span class="t-box-title">Введите название сервиса</span>
                                    <el-input placeholder="Введите название сервиса"  v-model="title" />
                                </div>
                                <div class="t-control t-box">
                                    <span class="t-box-title">Краткое описание</span>
                                    <el-input
                                        type="textarea"
                                        :rows="2"
                                        placeholder="Краткое описание"
                                        v-model="desc">
                                    </el-input>
                                </div>
                            </el-col>
                            <el-col :span="12">
                                <div class="t-control t-box">
                                    <el-select v-model="category_id"
                                               multiple
                                               filterable
                                               allow-create
                                               default-first-option
                                               placeholder="Выберите категорию" @change="changeCat">
                                        <el-option
                                            v-for="item in categories"
                                            :key="item.id"
                                            :label="item.title"
                                            :value="item.id">
                                        </el-option>
                                    </el-select>
                                </div>
                                <div class="t-control t-box">
                                   <div>
                                       <span class="demonstration">Простота использования</span>
                                       <el-rate v-model="assessmentUse" />
                                   </div>
                                   <div>
                                       <span class="demonstration">Обслуживания клиентов</span>
                                       <el-rate v-model="assessmentSupport" />
                                   </div>
                                </div>
                                <div class="t-control t-box">

                                </div>
                            </el-col>
                        </el-row>

                        <div class="t-control t-box">
                            <TuiEditor
                                mode="wysiwyg"
                                preview-style="vertical"
                                height="300px"
                                v-model="content"
                            />
                        </div>

                        <el-row :gutter="20">
                            <el-col :span="12">
                                <div class="t-control t-box">
                                    <span class="t-box-title">Ссылка на сайт</span>
                                    <el-input placeholder="Ссылка на сайт"  v-model="linkSite" />
                                </div>
                                <div class="t-control t-box">
                                    <span class="t-box-title">Ссылка на кейсы</span>
                                    <el-input placeholder="Ссылка на кейсы"  v-model="linkCases" />
                                </div>
                                <div class="t-control t-box">
                                    <span class="t-box-title">Ссылка на инструкции</span>
                                    <el-input placeholder="Ссылка на инструкции"  v-model="linkInstructions" />
                                </div>
                            </el-col>
                            <el-col :span="12">
                                <div class="t-control t-box">
                                    <span class="t-box-title">Ссылка на видео</span>
                                    <el-input placeholder="Ссылка на видео"  v-model="linkVideo" />
                                </div>
                                <div class="t-control t-box">
                                    <span class="t-box-title">Ссылка на API</span>
                                    <el-input placeholder="Ссылка на API"  v-model="linkAPI" />
                                </div>
                                <div class="t-control t-box">
                                    <span class="t-box-title">Метод оплаты</span>
                                    <el-input placeholder="Метод оплаты"  v-model="methodsPay" />
                                </div>
                            </el-col>
                        </el-row>
                        <el-row :gutter="20">
                            <el-col :span="12">
                                <div class="t-control t-box">
                                    <span class="t-box-title">Платформы установки</span>
                                    <el-select
                                        v-model="systemInstall"
                                        multiple
                                        collapse-tags
                                        style="margin-left: 20px;"
                                        placeholder="Выбрать">
                                        <el-option
                                            v-for="item in systemInstallAll"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                </div>
                                <div class="t-control t-box">
                                    <span class="t-box-title">Для кого</span>
                                    <el-select
                                        v-model="professions"
                                        multiple
                                        filterable
                                        allow-create
                                        default-first-option
                                        placeholder="Для кого"
                                        class="full">
                                        <el-option
                                            v-for="item in professionsOptions"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                </div>
                            </el-col>
                            <el-col :span="12">
                                <div class="t-control t-box">
                                    <el-select
                                        v-model="socials"
                                        multiple
                                        filterable
                                        allow-create
                                        default-first-option
                                        placeholder="Введите ссылки на соц. сети"
                                        class="full">
                                        <el-option
                                            v-for="item in socialsOptions"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                </div>
                                <div class="t-control t-box t-box-image">
                                    <span class="t-box-title">Логотип</span>
                                    <div class="control-flex">
                                        <input type="file" v-on:change="onImageChange" class="form-control">
                                        <div class="t-box-image-cover">
                                            <img id="image" src="#" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </el-col>
                        </el-row>
                        <div class="t-control">
<!--                            <el-button type="success" plain @click="saveService">Сохранить</el-button>-->
                            <button class="btn btn-success">Submit</button>
                        </div>
                        </form>
                        {{output}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from "axios";
    export default {
        layout: 'admin',
        name: "create",
        data() {
            return {
                title: '',
                category_id: '',
                desc: '',
                logo: '',
                assessmentUse: 0,
                assessmentSupport: 0,
                content: "<h1>Введите описание</h1>",
                linkSite: '',
                linkVideo: '',
                linkCases: '',
                linkAPI: '',
                linkInstructions: '',
                methodsPay: 'Карта/Эл. кошельки',
                systemInstall: [],
                socials: [],
                socialsOptions: [],
                professions: [],
                professionsOptions: [{value: 'маркетолог', label: 'маркетолог'}],

                output: ''

            }
        },
        methods: {
            formSubmit(e) {
                e.preventDefault();
                let currentObj = this;
                const config = {
                    headers: { 'content-type': 'multipart/form-data' }
                }
                let formData = new FormData();
                formData.append('logo', this.logo);
                formData.append('title', this.title);
                formData.append('desc', this.desc);
                formData.append('content', this.content);
                formData.append('category_id', this.category_id);
                formData.append('assessmentUse', this.assessmentUse);
                formData.append('assessmentSupport', this.assessmentSupport);
                formData.append('linkSite', this.linkSite);
                formData.append('linkCases', this.linkCases);
                formData.append('linkInstructions', this.linkInstructions);
                formData.append('linkVideo', this.linkVideo);
                formData.append('linkAPI', this.linkAPI);
                formData.append('methodsPay', this.methodsPay);
                formData.append('systemInstall', this.systemInstall);
                formData.append('professions', this.professions);
                formData.append('socials', this.socials);

                let uri = process.env.baseUrl + `services/create`;
                axios.post(uri,formData, config)
                    .then(function (response) {
                        currentObj.output = response.data;
                        document.location.href = '/admin/services'
                    })
                    .catch(function (error) {
                        currentObj.output = error;
                    });
            },
            saveService(){
                let uri = process.env.baseUrl + `services/create`;
                axios.post(uri, {
                    title: this.title,
                    desc: this.desc,
                    content: this.content,
                    category_id: this.category_id,
                    assessmentUse: this.assessmentUse,
                    assessmentSupport: this.assessmentSupport,
                    linkSite: this.linkSite,
                }).then((response) => {
                    this.$store.dispatch('data/services/GET_SERVICES')
                    this.$router.push({path: '/admin/services'});
                });
            },
            onImageChange(e){
                this.logo = e.target.files[0];
                this.readUrlImage(e.target)
            },
            changeCat(e){
              console.log(e)
            },
            readUrlImage(input){
                if (input.files && input.files[0]) {
                    var reader = new FileReader();
                    reader.onload = function (e) {
                        document.getElementById('image').setAttribute('src', e.target.result);
                    };
                    reader.readAsDataURL(input.files[0]);
                }
            },
        },
        computed: {
            categories() {
                return this.$store.state.data.category.categories;
            },
            systemInstallAll() {
                return this.$store.state.data.others.systemInstall;
            }
        }
    }
</script>

<style scoped>

</style>
