<template>
  <div>
    <div class="container mt-4">
        <div class="row">
            <div class="col-md-7 col-sm-12 col-lg-7 col-xl-7 col-xxl-7 mx-auto">
                <div class="card shadow-lg">
                    <h2 class="text-center p-3">Iniciar sesión</h2>
                    <div class="card-body">
                        <form @submit.prevent="login">
                            <div class="row">
                                <div class="col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
                                    <div class="form-group">
                                        <label>Correo electrónico: </label>
                                        <input v-model="email" type="email" name="email" class="form-control" placeholder="Correo electrónico" required autocomplete="off">
                                    </div>
                                </div>
                            </div>

                            <div class="row mt-4">
                                <div class="col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
                                    <div class="form-group">
                                        <label>Contraseña: </label>
                                        <input v-model="password" type="password" name="password" class="form-control" placeholder="Contraseña" required>
                                    </div>
                                </div>
                            </div>

                            <div class="d-grid gap-2">
                                <input type="submit" value="Iniciar sesión" class="btn btn-primary mt-4">
                            </div>
                        </form>
                    </div>

                    <div class="card-footer">
                        <router-link class="d-flex justify-content-center btn btn-secondary" to="/register">Crear cuenta</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Login',

    data() {
        return {
            email: '',
            password: '',
            result: '',
        }
    },  

    methods: {
        login() {
            const formData = new FormData();
            formData.append('email', this.email);
            formData.append('password', this.password);

            axios.post('http://localhost/snippets-vue-cli/api/loginRegister/login.php', formData)
                .then(response => {
                    this.result = response.data;

                    if(response.data.res == 'success') {
                        this.$localStorage.set('token', JSON.stringify(response.data.token))
                        this.$router.push('/dashboard');
                    } else {
                        alert('No pudiste iniciar sesión, intentalo de nuevo');
                    }
                })
                .catch(error => {
                    console.error(error)
                })
        },
    }
}
</script>

<style scoped>

</style>