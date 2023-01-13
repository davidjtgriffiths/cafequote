<template>
    <div class="card auth-form">
        <header class="card-header">
            <p class="card-header-title is-centered">
                Login
            </p>
            <button class="card-header-icon" aria-label="more options">
                <span class="icon">
                    <i class="fas fa-angle-down" aria-hidden="true"></i>
                </span>
            </button>
        </header>

        <div class="card-content">
            <div class="content">
                <form
                    @submit.prevent="onSubmit()">
                    <div class="field">
                        <label class="label">Email</label>
                        <div class="control">
                            <input
                                class="input"
                                type="email"
                                v-model="credentials.email"
                            >
                        </div>
                    </div>

                    <div class="field">
                        <label class="label">Password</label>
                        <div class="control">
                            <input
                                class="input"
                                type="password"
                                v-model="credentials.password"
                            >
                        </div>
                    </div>

                    <div class="control field is-grouped is-grouped-right">
                        <button class="button is-primary">Login</button>
                    </div>
                </form>
            </div>
        </div>
    </div>

</template>

<script setup>

    import { reactive } from 'vue'
    import { useStoreAuth } from '@/stores/StoreAuth'

    const StoreAuth =useStoreAuth()

    const credentials = reactive({
        email: '',
        password: ''
    })

    const onSubmit = () => {
        if (!credentials.email || !credentials.password) {
            alert('Please fill in both fields to login')
        }
        else {
            StoreAuth.loginUser(credentials)
        }
    }


</script>

<style>
    .auth-form {
        max-width: 400px;
        margin: 0 auto;
    }
</style>