<template>
    <div class="header-auth">
        <template v-if="authenticated">
            <b-nav-item-dropdown>
                <template slot="button-content">
                    {{user.name}}
                </template>
                <b-dropdown-item @click.prevent="signOut">Выход</b-dropdown-item>
            </b-nav-item-dropdown>
        </template>
        <template v-else class="header-auth-flex">
            <nuxt-link @click.native="closeAuthMenu" class="nav-enter" to="/auth/login">Войти</nuxt-link>
            <nuxt-link @click.native="closeAuthMenu" class="nav-reg" to="/auth/register">{{sighUpTitle}}</nuxt-link>
        </template>
    </div>
</template>

<script>
    export default {
        props: ['sighUpTitle'],
        name: "AuthMenu",
        methods: {
            signOut() {
                this.$auth.logout();
            },
            closeAuthMenu(){
                this.$store.commit('header/SET_AUTH_NAV');
            }
        }
    }
</script>

<style scoped>

</style>
