<template>
    <div class="sammlungen-blatt box">
        <div class="sammlungen-box" :style="'background-color:' + color ">
            <div class="sammlungen-block">
                <div :class="'sammlungen-icon ' + icon"></div>
                <div class="sammlungen-title">
                    {{title}}
                </div>
            </div>
        </div>
        <div class="sammlungen-werkzeuge">
            <div class="sammlungen-werkzeuge-icons">
                <a href="#"><img src="/images/services/logo/599d6d2090c61.png"></a>
                <a href="#"><img src="/images/services/logo/599f31496ce4b.png"></a>
                <a href="#"><img src="/images/services/logo/599f2ae1e3f3c.png"></a>
                <a href="#"><img src="/images/services/logo/59a550e015e0f.png"></a>
            </div>
            <div class="sammlungen-werkzeuge-text">
                + еще 46 сервисов
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['title', 'icon', 'color'],
        name: "SammlungenBlatt"
    }
</script>

<style scoped>

</style>
