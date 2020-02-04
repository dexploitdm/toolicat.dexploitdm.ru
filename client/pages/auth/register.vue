<template>
    <div class="page content">
        <div class="title-box">
            <h1 class="title-h1">Регистрация</h1>
        </div>

        <div class="page-box">
            <div class="page-box-layout">
                <h2 class="title-h2">Зарегистрироваться с помощью</h2>

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
                        Зарегистрироваться с помощью электронной почты
                    </div>
                </div>
                <form @submit.prevent="register" class="form-auth">
                    <div class="t-control box-control">
                        <span class="t-label">Ваше имя</span>
                        <input type="text" class="t-input" v-model="form.name" :class="{ 'is-invalid': errors.name }"/>
                        <div class="invalid-feedback" v-if="errors.name">
                            {{errors.name[0]}}
                        </div>
                    </div>
                    <div class="t-control box-control">
                        <span class="t-label">Email адрес</span>
                        <input type="email" class="t-input" v-model="form.email" :class="{ 'is-invalid': errors.email }"/>
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
                        <div class="form-auth-link">
                            У вас уже есть аккаунт?
                            <nuxt-link to="/auth/login" class="link-auth">
                                Войти
                            </nuxt-link>
                        </div>
                        <input type="submit" value="Зарегистрация" class="t-button blue">
                    </div>
                </form>

            </div>
        </div>
    </div>
</template>

<script>
import SocialLogin from '@/components/SocialLogin';

export default {
    middleware: 'guest',
    components: {
        SocialLogin
    },
    data() {
        return {
            form: {
                name: '',
                email: '',
                password: ''
            },
            error: this.$route.query.error
        }
    },
    methods: {
        async register() {
            try {
                await this.$axios.post('/auth/register', this.form);
            } catch(e) {
                return;
            }
            this.$auth.login({data: this.form});

            this.$router.push({name: 'index'});
        }
    }
}
</script>
