<script setup>
import { reactive, computed } from 'vue'
import { useRouter } from 'vue-router'
import useVuelidate from '@vuelidate/core'
import { required, email, minLength, helpers } from '@vuelidate/validators'

const state = reactive({
  email: '',
  password: '',
})

const rules = computed(() => ({
  email: {
    required: helpers.withMessage(
      'Please enter a valid email address with @ symbol',
      required,
    ),
    email,
  },
  password: {
    required: helpers.withMessage('Please enter a valid password', required),
    minLength: helpers.withMessage(
      'Password must be at least 6 characters',
      minLength(6),
    ),
  },
}))

const v$ = useVuelidate(rules, state)

const loginWithGoogle = () => {
  console.log('Google login')
}

const loginWithGitHub = () => {
  console.log('GitHub login')
}

const router = useRouter()

const handleSubmit = async e => {
  e.preventDefault()
  const isValid = await v$.value.$validate()
  if (!isValid) {
    console.log('form is not properly filled')
    return
  }
  router.push('/loading')
}
</script>

<template>
  <div class="container-wrapper">
    <div class="container">
      <div class="logo">
        <img
          src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
      </div>

      <h2 class="signIn"><span>Sign in</span> to your account</h2>

      <form @submit="handleSubmit">
        <div class="email">
          <label for="email" class="mail">Email address</label>
          <input
            id="email"
            v-model="state.email"
            name="email"
            type="email"
            autocomplete="email"
            required
          />
          <div
            v-for="error in v$.email.$errors"
            :key="error.$uid"
            class="error-msg"
          >
            {{ error.$message }}
          </div>
        </div>

        <div class="password">
          <label for="password" class="pass">Password</label>
          <input
            id="password"
            v-model="state.password"
            name="password"
            type="password"
            autocomplete="current-password"
            required
          />
          <div
            v-for="error in v$.password.$errors"
            :key="error.$uid"
            class="error-msg"
          >
            {{ error.$message }}
          </div>
        </div>

        <button type="submit">Sign in</button>
      </form>

      <p class="sign-up">
        Not a member? <a href="#">Start a 14-day free trial</a>
      </p>

      <div class="social-login">
        <button @click="loginWithGoogle">
          <img
            src="https://img.icons8.com/color/48/000000/google-logo.png"
            alt="Google"
          />
          Google
        </button>
        <button @click="loginWithGitHub">
          <img
            src="https://img.icons8.com/ios-glyphs/30/000000/github.png"
            alt="GitHub"
          />
          GitHub
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container-wrapper {
  background-color: hsl(180, 52%, 96%);
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.container {
  width: 100%;
  max-width: 450px;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}

.logo {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.logo img {
  height: 40px;
}

h2 {
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  color: #111827;
  margin-bottom: 1.5rem;
}

.signIn span {
  border-bottom: 3px solid #111827;
}
form {
  display: flex;
  flex-direction: column;
}

label {
  font-size: 1rem;
  font-weight: 500;
  color: #111827;
}

input {
  padding: 10px;
  flex: 1;
  font-size: 0.875rem;
  color: #111827;
  border: 1px solid #d1d5db;
  border-radius: 4px;
  margin-bottom: 1rem;
  outline: none;
  display: block;
}

input:focus {
  border-color: #5ba4a4;
  box-shadow: 0 0 0 2px #5ba4a4;
}

.email,
.password {
  display: flex;
  flex-direction: column;
}

button {
  width: 100%;
  padding: 10px;
  font-size: 0.875rem;
  font-weight: 600;
  color: #fff;
  background-color: #5ba4a4;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #5ba4a4;
}

.sign-up {
  text-align: center;
  margin-top: 1.5rem;
}

.sign-up a {
  color: #5ba4a4;
  text-decoration: none;
}

.sign-up a:hover {
  color: #5ba4a4;
}

.social-login {
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.social-login button {
  width: 48%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f3f4f6;
  color: #111827;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #d1d5db;
  font-size: 0.875rem;
}

.social-login button:hover {
  background-color: #5ba4a4;
}

.social-login button img {
  width: 20px;
  margin-right: 8px;
}

.error-msg {
  color: red;
  font-size: 0.875rem;
  margin-bottom: 1rem;
}

@media (max-width: 767px) {
  .container-wrapper {
    width: 100vw;
  }

  .container {
    width: 85%;
    margin: 0 auto;
  }
}
</style>
