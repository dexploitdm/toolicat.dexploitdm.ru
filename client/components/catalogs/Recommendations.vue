<template>
    <div class="recommendations">
        <div class="recommendations-layout box">
            <h2 class="title-h2">Рекомендации</h2>

            <no-ssr> <!-- important to add no-ssr-->

                <carousel
                    :nav="false"
                    :dots="false"
                    items="5"
                    :responsive="{0:{items:1},768:{items:3},900:{items:4},1200:{items:5}}"
                    class="rem-car">
                    <template slot="prev" class="t-prev"><span class="prev"><span></span></span></template>

                    <template slot="next"><span class="next"><span></span></span></template>

                    <div class="rem-item" v-for="rem in dataRecommendations">
                        <div class="rem-item-box">
                            <div class="rem-item-layout">
                                <div class="rem-item-block">
                                    <div class="rem-item-logo">
                                        <img :src="'/images/rec/' + rem.logo">
                                    </div>
                                    <div class="rem-item-assessment">
                                        <el-rate
                                            v-model="rem.assessment"
                                            :colors="colors">
                                        </el-rate>
                                    </div>
                                    <div class="rem-item-reviews">({{rem.reviews}} отзыв)</div>
                                </div>
                                <div class="rem-item-block-hover">
                                    <div class="rem-item-block-content">
                                        {{rem.desc}}

                                    </div>
                                    <div class="rem-item-block-link">
                                        <a :href="rem.link" class="t-button site-link" target="_blank"><span class="link-icon"></span>Сайт</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </carousel>

            </no-ssr>

        </div>
    </div>
</template>

<script>
    import VueStars from "~/components/base/VueStars.vue";
    export default {
        name: "Recommendations",
        components: { VueStars },
        data() {
            return {
                colors: ['#99A9BF', '#F7BA2A', '#FF9900'],
                dataRecommendations: [
                    {
                        logo: '1.png',
                        assessment: 3,
                        reviews: 169,
                        desc: 'Теперь можно отправлять и просматривать файлы и ссылки Dropbox прямо в окне своего Gmail.',
                        link: '#'
                    },{
                        logo: '3.png',
                        assessment: 4,
                        reviews: 169,
                        desc: 'Теперь можно отправлять и просматривать файлы и ссылки Dropbox прямо в окне своего Gmail.',
                        link: '#'
                    },{
                        logo: '3.png',
                        assessment: 3,
                        reviews: 170,
                        desc: 'Теперь можно отправлять и просматривать файлы и ссылки Dropbox прямо в окне своего Gmail.',
                        link: '#'
                    },{
                        logo: '4.png',
                        assessment: 5,
                        reviews: 169,
                        desc: 'Теперь можно отправлять и просматривать файлы и ссылки Dropbox прямо в окне своего Gmail.',
                        link: '#'
                    },{
                        logo: '5.png',
                        assessment: 4,
                        reviews: 50,
                        desc: 'Теперь можно отправлять и просматривать файлы и ссылки Dropbox прямо в окне своего Gmail.',
                        link: '#'
                    },{
                        logo: '6.png',
                        assessment: 1,
                        reviews: 19,
                        desc: 'Теперь можно отправлять и просматривать файлы и ссылки Dropbox прямо в окне своего Gmail.',
                        link: '#'
                    },{
                        logo: '5.png',
                        assessment: 3,
                        reviews: 190,
                        desc: 'Теперь можно отправлять и просматривать файлы и ссылки Dropbox прямо в окне своего Gmail.',
                        link: '#'
                    },
                ]
            }
        },
        mounted() {

        },
    }
</script>

<style scoped>

</style>
