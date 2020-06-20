<template>
    <div>
        <carousel
            v-if="isLoad"
            :dots="false"
            :autoWidth="false"
            :mouseDrag="true"
            :items="3"
        >
            <div v-if="item0">
                <div class="services-gallery-bg" @click="openImage(item0)">
                    <div class="services-gallery-cover"
                         :style="'background-image: url('+urlImage + 'services/items/' + item0+')'">
                        <!--                                            urlImage-->
                    </div>
                </div>
            </div>
            <div v-if="item1">
                <div class="services-gallery-bg" @click="openImage(item1)">
                    <div class="services-gallery-cover"
                         :style="'background-image: url('+urlImage + 'services/items/' + item1+')'">
                        <!--                                            urlImage-->
                    </div>
                </div>
            </div>
            <div v-if="item2">
                <div class="services-gallery-bg" @click="openImage(item2)">
                    <div class="services-gallery-cover"
                         :style="'background-image: url('+urlImage + 'services/items/' + item2+')'">
                        <!--                                            urlImage-->
                    </div>
                </div>
            </div>
            <div v-if="item3">
                <div class="services-gallery-bg" @click="openImage(item3)">
                    <div class="services-gallery-cover"
                         :style="'background-image: url('+urlImage + 'services/items/' + item3+')'">
                        <!--                                            urlImage-->
                    </div>
                </div>
            </div>
            <div v-if="item4">
                <div class="services-gallery-bg" @click="openImage(item4)">
                    <div class="services-gallery-cover"
                         :style="'background-image: url('+urlImage + 'services/items/' + item4+')'">
                        <!--                                            urlImage-->
                    </div>
                </div>
            </div>
            <div v-if="item5">
                <div class="services-gallery-bg" @click="openImage(item5)">
                    <div class="services-gallery-cover"
                         :style="'background-image: url('+urlImage + 'services/items/' + item5+')'">
                        <!--                                            urlImage-->
                    </div>
                </div>
            </div>
            <div v-if="item6">
                <div class="services-gallery-bg" @click="openImage(item6)">
                    <div class="services-gallery-cover"
                         :style="'background-image: url('+urlImage + 'services/items/' + item6+')'">
                        <!--                                            urlImage-->
                    </div>
                </div>
            </div>
            <div v-if="item7">
                <div class="services-gallery-bg" @click="openImage(item7)">
                    <div class="services-gallery-cover"
                         :style="'background-image: url('+urlImage + 'services/items/' + item7+')'">
                        <!--                                            urlImage-->
                    </div>
                </div>
            </div>
            <div v-if="item8">
                <div class="services-gallery-bg" @click="openImage(item8)">
                    <div class="services-gallery-cover"
                         :style="'background-image: url('+urlImage + 'services/items/' + item8+')'">
                        <!--                                            urlImage-->
                    </div>
                </div>
            </div>
            <div v-if="item9">
                <div class="services-gallery-bg" @click="openImage(item9)">
                    <div class="services-gallery-cover"
                         :style="'background-image: url('+urlImage + 'services/items/' + item9+')'">
                        <!--                                            urlImage-->
                    </div>
                </div>
            </div>
        </carousel>

        <div v-if="stateModalImage"
             class="modal-block modal-image">
            <div class="modal-block-layout">
                <div @click="triggerModalImage"
                     class="modal-block-close"></div>
                <div class="modal-block-image">
                    <img :src="urlImage + 'services/items/' + activeModalImage" />
                </div>

            </div>
        </div>


    </div>
</template>

<script>
    const baseUrl = process.env.baseUrlImage;
    export default {
        props: {
            item0: String,
            item1: String,
            item2: String,
            item3: String,
            item4: String,
            item5: String,
            item6: String,
            item7: String,
            item8: String,
            item9: String,
        },
        name: "GalleryItems",
        data() {
            return {
                urlImage: baseUrl,
                isLoad: false,
                activeModalImage: ''
            }
        },
        methods: {
            openImage(name) {
                this.$store.dispatch('others/modals/SET_MODAL_IMAIGE');
                this.activeModalImage = name;
            },
            triggerModalImage() {
                this.$store.dispatch('others/modals/SET_MODAL_IMAIGE');
            }
        },
        watch: {
            item0(){
                this.isLoad = true
            }
        },
        computed: {
            stateModalImage() {
                return this.$store.state.others.modals.modalImage;
            },
        }
    }
</script>

<style scoped>

</style>
