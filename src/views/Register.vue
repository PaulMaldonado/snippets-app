<template>
  <div>
      <div class="container mt-4">
          <div class="row">
              <div class="col-md-7 col-sm-12 col-lg-7 col-xl-7 col-xxl-7 mx-auto">
                  <div class="card shadow-lg">
                      <h2 class="text-center p-3">Crear cuenta</h2>
                      <div class="card-body">
                          <form @submit.prevent="register" id="form">
                              <div class="row">
                                <div class="col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
                                  <div class="form-group">
                                      <label>Nombre de usuario: </label>
                                      <input type="text" placeholder="Nombre de usuario" class="form-control" autocomplete="off" name="username" required>
                                  </div>
                                </div>
                              </div>

                              <div class="row mt-4">
                                <div class="col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
                                  <div class="form-group">
                                      <label>Correo electrónico: </label>
                                      <input v-model="email" type="email" placeholder="Correo electrónico" class="form-control" name="email" required>
                                  </div>
                                </div> 
                              </div> 
                              
                              <div class="row mt-4">
                                <div class="col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
                                  <div class="form-group">
                                      <label>Contraseña: </label>
                                      <input v-model="password" type="password" placeholder="Contraseña" class="form-control" name="password" required>
                                  </div>
                                </div> 
                              </div>

                              
                              <div class="row mt-4">
                                <div class="col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
                                  <div class="form-group">
                                      <label>Confirmar contraseña: </label>
                                      <input v-model="confirmPassword" type="password" placeholder="Confirmar contraseña" class="form-control" name="confirm_password" required>
                                  </div>
                                </div> 
                              </div>

                              <div class="row mt-4">
                                  <div class="col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
                                    <div class="input-group">
                                        <input type="file" class="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload" required name="image">
                                        <button class="btn btn-outline-secondary" type="button" id="inputGroupFileAddon04">Subir archivo</button>
                                    </div>
                                  </div>
                              </div>

                              <div class="d-grid gap-2">
                                  <input type="submit" value="Registrate" class="btn btn-primary mt-4">
                              </div>
                          </form>
                      </div>

                      <div class="card-footer">
                          <router-link class="d-flex justify-content-center btn btn-secondary" to="/">Iniciar sesión</router-link>
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
    name: 'Register',

    data() {
        return {
            email: '',
            password: '',
            confirmPassword: '',
            button: 'btn btn-primary disabled',
            result: '',
        }
    },

    methods: {
        register() {
            if(this.password === this.confirmPassword) {
                const form = document.getElementById('form');

                axios.post('http://localhost/snippets-vue-cli/api/loginRegister/register.php', new FormData(form))
                    .then(response => {
                        this.result = response.data;

                        this.result = response.data;
                        this.$router.push('/');
                    })
            }
        },

        validateEmail() {
            if(this.validEmail(this.email)) {
                const formData = new formData();
                formData.append('email', this.email);

                axios.post('http://localhost/snippets-vue-cli/api/loginRegister/validate-email.php', formData)
                    .then(response => {
                        this.result = response.data;

                        if(response.data === 'success') {
                            this.button = 'btn btn-primary';
                        } else {
                            alert('El correo electrónico ya existe')
                        }
                    })
            } else {
                alert('Escribe el correo electrónico de forma correcta')
            }
        },

        validEmail(email) {
            /* eslint-disable no-useless-escape */
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        }
    }
}
</script>

<style scoped>

</style>