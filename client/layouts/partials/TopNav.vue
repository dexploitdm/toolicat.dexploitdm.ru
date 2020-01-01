<template>
    <header>
        <div class="header-box box">
            <div class="header-drawer">
                <div class="drawer-icon"
                     v-bind:class="{ active: isDrawer }"
                     @click="triggerMenu">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div class="header-logo">
                <nuxt-link to="/">Toolicat</nuxt-link>
            </div>

            <menu-list />

            <div class="header-lock">
                <div class="header-lock-icon" @click="triggerAuth"></div>
            </div>

            <auth-menu sighUpTitle="Регистрация"/>

        </div>
    </header>
</template>

<script>
    import MenuList from "~/components/base/header/MenuList.vue";
    import AuthMenu from "~/components/base/header/AuthMenu.vue";
    export default {
        components: {
            MenuList, AuthMenu
        },
        computed: {
            isDrawer(){
                return this.$store.state.header.drawer
            }
        },
        methods: {
            triggerAuth(){
                this.$store.commit('header/SET_AUTH_NAV');
            },
            triggerMenu(){
                this.$store.commit('header/SET_DRAWER');
            }
        }
    }
</script>
