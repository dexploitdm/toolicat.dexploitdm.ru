<template>
    <div class="c-service">
        <div class="c-service box">
            <div class="c-header-box">
                <h2 class="title-h2">{{title}}</h2>
                <div class="service-all">
                    <nuxt-link to="/catalogs" class="t-button t-all">Все</nuxt-link>
                </div>
            </div>
            <div class="card-lists grid g-four">

                <div class="c-list" v-for="service in dataService">
                    <div class="c-card-bookmark"></div>
                    <div class="c-list-layout">
                        <div class="c-list-cover">
                            <img :src="'/images/services/' + service.logo">
                        </div>
                        <div class="c-list-title">{{service.title}}</div>
                        <div class="c-list-desk">
                            {{service.desc}}
                        </div>
                        <div class="c-list-action">
                            <div class="c-list-assessment">{{service.assessment}}</div>
                            <div class="c-list-reviews">{{service.reviews}} отзывов</div>
                        </div>
                        <div class="c-list-info">
                            {{service.info}}
                        </div>
                    </div>
                </div>

            </div>

            <nuxt-link to="/catalogs" class="t-button t-all mobile">Все</nuxt-link>

        </div>
    </div>
</template>

<script>
    export default {
        props: ['title'],
        name: "CardService",
        data(){
            return {
                dataService: [
                    {
                        id: 1,
                        title: 'Worksection',
                        logo: 'worksection.png',
                        desc: 'Worksection — инструмент управления проектами для бизнеса. Планирование проектов, контроль сроков, коммуникация, канбан-доска,',
                        info: 'Системы совместной работы',
                        assessment: '5.0',
                        reviews: 36
                    },
                    {
                        id: 2,
                        title: 'Простой бизнес',
                        logo: 'bisness.png',
                        desc: 'CRM-система для управления всей компанией.',
                        info: 'Взаимоотношения с клиентами (CRM)',
                        assessment: '5.0',
                        reviews: 36
                    },
                    {
                        id: 3,
                        title: 'Carrot Quest',
                        logo: 'carot.png',
                        desc: 'Carrot quest — сервис для ускорения роста вашего маркетинга, продукта, поддержки, продаж',
                        info: 'Проверка контрагентов',
                        assessment: '5.0',
                        reviews: 36
                    },
                    {
                        id: 4,
                        title: 'МойСклад',
                        logo: 'mainsklad.png',
                        desc: 'Облачный сервис управления торговлей для малого и среднего бизнеса. С его помощью можно: управлять продажами и закупками,',
                        info: 'Email-маркетинг',
                        assessment: '5.0',
                        reviews: 36
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>
