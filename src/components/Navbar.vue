<template>
  <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
          <div class="container">
            <router-link class="navbar-brand" to="/">Snippets App</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <ul class="navbar-nav">
                    <li class="navbar-item">
                        <router-link class="nav-link" to="/">
                            <i class="bi bi-house-door-fill text-white"></i>
                        </router-link>
                    </li>

                    <li class="navbar-item">
                        <a href="" class="nav-link">
                            <i class="bi bi-plus-circle-fill text-white"></i>
                        </a>
                    </li>

                    <li class="navbar-item">
                        <a href="" @click.prevent="logout" class="nav-link active">Cerrar sesión</a>
                    </li>
                </ul>
            </div>
          </div>
      </nav>
  </div>
</template>

<script>
import axios from 'axios'
import session from '../mixins/session'

export default {
    name: 'Navbar',
    mixins: [session],

    methods: {
        logout() {
            const token = JSON.parse(this.$localStorage.get('token'));

            axios.get('http://localhost/snippets-vue-cli/api/loginRegister/logout.php?token=' + token)
                .then(response => {
                    if(response.data === 'success') {
                        this.$localStorage.remove('token');

                        this.$router.push('/');
                    }
                })
                .catch(error => {
                    console.error(error)
                })
        }
    }
}
</script>

<style scoped>

</style>