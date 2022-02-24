<template>


  <div class="card card-body mt-4">
    <form @submit.prevent="onSubmit">
      <div class="form-group">
        <label>Name</label>
        <input v-model="form.name" class="form-control" required />
      </div>

      <div class="form-group mt-3">
        <label>Email</label>
        <input
          v-model="form.email"
          class="form-control"
          type="email"
          required
        />
      </div>
      
      
      <div class="form-group mt-3">
        <label>Date</label>
        <input
          v-model="form.date"
          class="form-control"
          type="text"
          required
        />
      </div>
      <div class="form-group mt-3">
        <label>Contact</label>
        <input
          v-model="form.contact"
          class="form-control"
          type="text"
          required
        />
      </div>

      <button type="submit" class="btn btn-success mt-3">
        Create User
      </button>
    </form>
    
  </div>
</template>

<script>



import { createUser } from '@/firebase'
import { reactive } from 'vue'
import  '../views/design.css'


 

export default {
  
  setup() {
    const form = reactive({ name: '', email: '', contact: '', date: '' })

    const onSubmit = async () => {
      await createUser({ ...form })
      form.name = ''
      form.email = ''
      form.contact = ''
      form.date = ''
    }



    return { form, onSubmit }
  }
}
</script>
