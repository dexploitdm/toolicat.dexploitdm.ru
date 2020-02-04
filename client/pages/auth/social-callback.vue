<template>
    <div class="container auth-con">
        <div class="loader"></div>
        <p>Please wait while we're logging you in...</p>
    </div>
</template>

<script>
export default {
    middleware: ['guest'],
    data() {
        return {
            token: this.$route.query.token ? this.$route.query.token : null
        }
    },
    mounted() {
        this.$auth.setToken('local', 'Bearer ' + this.token);
        this.$auth.setStrategy('local');

        this.$auth.fetchUser().then( () => {
            return this.$router.push('/');
        }).catch( (e) => {
            this.$auth.logout();
            return this.$router.push(`/auth/${this.$route.query.origin ? this.$route.query.origin : 'register'}?error=1`);
        });
    }
}
</script>

<style scoped>

</style>
