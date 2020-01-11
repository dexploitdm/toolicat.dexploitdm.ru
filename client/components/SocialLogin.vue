<template>
    <div class="social-login">
        <button @click="socialLogin('facebook')" class="social-login-btn facebook">
          <i class="fab fa-facebook"></i>
        </button>
        <button @click="socialLogin('twitter')" class="social-login-btn twitter">
          <i class="fab fa-twitter"></i>
        </button>

        <button @click="socialLogin('google')" class="social-login-btn google">
            <i class="fab fa-google"></i>
        </button>
<!--        <button @click="socialLogin('github')" class="social-login-btn github">-->
<!--            <i class="fab fa-github"></i>-->
<!--        </button>-->
    </div>
</template>

<script>
export default {
    methods: {
        socialLogin(service) {
            window.location.href = `${process.env.baseUrl}auth/login/${service}`;
        }
    }
}
</script>

<style scoped>

</style>
