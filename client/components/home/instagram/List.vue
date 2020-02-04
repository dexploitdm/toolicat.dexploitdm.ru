<template>
    <div class="instagram-list">
        <div class="instagram-logo">
            <img :src="'/images/others/' + logo">
        </div>
        <div class="instagram-desc">
            <div class="instagram-desc-title">
                {{title}}
            </div>
            <div class="instagram-desc-content">
                {{content}}
            </div>
        </div>
        <div class="instagram-action">
            <button type="button" class="t-button">Описание</button>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['logo', 'title', 'content', 'link', 'description'],
        name: "ListInstagram"
    }
</script>

<style scoped>

</style>
