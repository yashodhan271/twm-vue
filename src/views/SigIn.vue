<template>
<router-link to="/sign-in"> Login </router-link>
    <div>
<h1>Login to Your Account</h1>
  <p><input type="text" placeholder="Email" v-model="email" /></p>
  <p><input type="password" placeholder="Password" v-model="password" /></p>
  <p><button @click="signIn">Submit</button></p>
    </div>
</template>

<script>
import firebase from "firebase";
import{ref } from 'vue';
import { useRouter } from 'vue-router'
    export default {

        name: 'SignInView',
        setup () {
            const email =ref("")
            const password =ref("")
            const router = useRouter()

            const signIn = () => { // we also renamed this method
    firebase
      .auth()
      .signInWithEmailAndPassword(email.value, password.value) // THIS LINE CHANGED
      .then(user => {
                    console.log(user);
                    router.push('/')

                })
      .catch(error => {
        console.log(error.code)
        alert(error.message);
      });
      


        }

        return {
          signIn,
          email,
          password
      }
    }
    }
</script>

<style lang="scss" scoped>

</style>