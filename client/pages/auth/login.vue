<template>
    <div class="page content">
        <div class="title-box">
            <h1 class="title-h1">Вход</h1>
        </div>
        <div class="page-box">
            <div class="page-box-layout">
                <h2 class="title-h2">Войти с помощью</h2>

                <div class="social-box">
                    <div v-if="error" class="alert alert-danger mb-2" role="alert">
                        Ваш токен оказался недействительным. Попробуйте снова.
                    </div>

                    <social-login />

                    <div class="social-box-cube">
                        <div class="social-box-line"></div>
                        <div class="social-box-text">или</div>
                        <div class="social-box-line"></div>
                    </div>

                    <div class="social-box-other">
                        Войти с помощью электронной почты
                    </div>
                </div>
                <form @submit.prevent="login" class="form-auth">
                    <div class="t-control box-control">
                        <span class="t-label">Email адрес</span>
                        <input type="email" class="t-input" v-model="form.email"
                               :class="{ 'is-invalid': errors.email }"/>
                        <div class="invalid-feedback" v-if="errors.email">
                            {{errors.email[0]}}
                        </div>
                    </div>
                    <div class="t-control box-control">
                        <span class="t-label">Пароль</span>
                        <input type="password" class="t-input" v-model="form.password" :class="{ 'is-invalid': errors.password }"/>
                        <div class="invalid-feedback" v-if="errors.password">
                            {{errors.password[0]}}
                        </div>
                    </div>
                    <div class="t-control control-flex  box-control">
                        <div class="remember">
                            <el-checkbox v-model="remember"
                                         @change="rememberChange"
                            >Запомнить меня</el-checkbox>
                        </div>
                        <div class="form-auth-link">
                            У вас нет аккаунта?
                            <nuxt-link to="/auth/register" class="link-auth">
                                Зарегистрироваться
                            </nuxt-link>
                        </div>
                        <input type="submit" value="Вход" v-loading.fullscreen.lock="loading" class="t-button blue">
                    </div>
                </form>

            </div>
        </div>

    </div>
</template>

<script>
import SocialLogin from '@/components/SocialLogin';
import nuxtStorage from 'nuxt-storage';

export default {
    middleware: 'guest',
    components: {
        SocialLogin
    },
    data() {
        return {
            form: {
                email: '',
                password: '',
            },
            remember: '',
            loading: false,
            error: this.$route.query.error
        }
    },
    mounted() {
        this.rememberMe();
    },
    methods: {
        async login() {
            this.loading = true;
            try {
                await this.$auth.login({ data: this.form });
            } catch(e) {
                return;
            }
            this.loading = false;
            this.$router.push(this.$route.query.redirect ? this.$route.query.redirect : '/');
        },
        rememberChange(){
            if(this.remember === true){
                if(this.form.email && this.form.password){
                    nuxtStorage.localStorage.setData('loginEmail', this.form.email);
                    nuxtStorage.localStorage.setData('loginPassword', this.form.password);
                    nuxtStorage.localStorage.setData('isRemember', this.remember);
                }
            }
        },
        rememberMe(){
            if(nuxtStorage.localStorage.getData('loginEmail')){
                this.form.email = nuxtStorage.localStorage.getData('loginEmail')
            }
            if(nuxtStorage.localStorage.getData('loginPassword')){
                this.form.password = nuxtStorage.localStorage.getData('loginPassword')
            }
            if(nuxtStorage.localStorage.getData('isRemember')){
                this.remember = nuxtStorage.localStorage.getData('isRemember')
            }
        }
    }
}
</script>
