<template>
    <div class="share" v-if="titleService">
        <div class="share-link" @click="triggerModal">Поделиться</div>
        <div v-if="stateModalShare"
             v-bind:class="{'modal-ember': emberView}"
            class="modal-share">
            <div class="modal-share-layout">
                <div @click="triggerModal"
                    class="modal-share-close"></div>
                <div class="share-box">
                    <carousel
                        :nav="false"
                        :dots="false"
                        :autoWidth="false"
                        :mouseDrag="true"
                        :items="5"
                        >
                        <div class="share-box-item" @click="emberCode">
                            <div class="share-icon share-embed"></div>
                            <div class="share-title">Встроить</div>
                        </div>
                        <div class="share-box-item">
                            <ShareNetwork
                                network="facebook"
                                :url="url"
                                :title="titleService"
                                :description="desc"
                                :hashtags="hashtags"
                            >
                                <div class="share-icon share-fb"></div>
                                <div class="share-title">Facebook</div>
                            </ShareNetwork>
                        </div>
                        <div class="share-box-item">
                            <ShareNetwork
                                network="twitter"
                                :url="url"
                                :title="titleService"
                                :description="desc"
                                :hashtags="hashtags"
                            >
                                <div class="share-icon share-tw"></div>
                                <div class="share-title">Twitter</div>
                            </ShareNetwork>
                        </div>
                        <div class="share-box-item">
                            <ShareNetwork
                                network="vk"
                                :url="url"
                                :title="titleService"
                                :description="desc"
                                :hashtags="hashtags"
                            >
                                <div class="share-icon share-vk"></div>
                                <div class="share-title">ВКонтакте</div>
                            </ShareNetwork>
                        </div>
                        <div class="share-box-item">
                            <ShareNetwork
                                network="telegram"
                                :url="url"
                                :title="titleService"
                                :description="desc"
                                :hashtags="hashtags"
                            >
                                <div class="share-icon share-telegram"></div>
                                <div class="share-title">Telegram</div>
                            </ShareNetwork>
                        </div>
                        <div class="share-box-item">
                            <ShareNetwork
                                network="odnoklassniki"
                                :url="url"
                                :title="titleService"
                                :description="desc"
                                :hashtags="hashtags"
                            >
                                <div class="share-icon share-odnoklassniki"></div>
                                <div class="share-title">Однокласс</div>
                            </ShareNetwork>
                        </div>
                        <div class="share-box-item">
                            <ShareNetwork
                                network="whatsapp"
                                :url="url"
                                :title="titleService"
                                :description="desc"
                                :hashtags="hashtags"
                            >
                                <div class="share-icon share-whatsapp"></div>
                                <div class="share-title">WhatsApp</div>
                            </ShareNetwork>
                        </div>
                        <div class="share-box-item">
                            <ShareNetwork
                                network="viber"
                                :url="url"
                                :title="titleService"
                                :description="desc"
                                :hashtags="hashtags"
                            >
                                <div class="share-icon share-viber"></div>
                                <div class="share-title">Viber</div>
                            </ShareNetwork>
                        </div>
                        <div class="share-box-item">
                            <ShareNetwork
                                network="email"
                                :url="url"
                                :title="titleService"
                                :description="desc"
                                :hashtags="hashtags"
                            >
                                <div class="share-icon share-email"></div>
                                <div class="share-title">Email</div>
                            </ShareNetwork>
                        </div>
                        <template slot="prev"><span class="prev"></span></template>
                        <template slot="next"><span class="next"></span></template>
                    </carousel>
                </div>
                <div class="share-copy">
                    <input type="text" class="share-copy-input" :value="url">
                    <div v-clipboard="url" class="share-copy-link"></div>
                </div>
                <div class="share-ember" v-if="emberView">

                    <pre>
 {{code}}


                    </pre>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            titleService: String,
            desc: String,
            hashtags: String,
        },
        name: "share",
        data() {
            return {
                url: '',
                emberView: false,
                code: ''
            }
        },
        mounted() {
            this.url = window.location.href;
            if(this.url){
                this.code = '<iframe width="560" height="315" src="'+this.url+'"></iframe>'
            }
        },
        methods: {
            triggerModal(){
                this.$store.dispatch('others/modals/SET_MODAL_SHARE');
            },
            emberCode(){
                this.emberView = !this.emberView;
            }
        },
        computed: {
            stateModalShare() {
                return this.$store.state.others.modals.modalShare;
            },
        }
    }
</script>

<style scoped>

</style>
