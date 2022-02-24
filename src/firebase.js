import firebase from 'firebase'
import { ref, onUnmounted } from 'vue'

const config = {
  apiKey: "AIzaSyCiK-Bf4lgw2On6GVs4mb1Ug2sjMCx2CdI",
    authDomain: "vueapp-dfb40.firebaseapp.com",
    projectId: "vueapp-dfb40",
    storageBucket: "vueapp-dfb40.appspot.com",
    messagingSenderId: "869897696313",
    appId: "1:869897696313:web:58b5b32223efb290e7c9e8"
  // Firebase config here
}

const firebaseApp = firebase.initializeApp(config)

const db = firebaseApp.firestore()
const usersCollection = db.collection('users')

export const createUser = user => {
  return usersCollection.add(user)
}

export const getUser = async id => {
  const user = await usersCollection.doc(id).get()
  return user.exists ? user.data() : null
}

export const updateUser = (id, user) => {
  return usersCollection.doc(id).update(user)
}

export const deleteUser = id => {
  return usersCollection.doc(id).delete()
}

export const useLoadUsers = () => {
  const users = ref([])
  const close = usersCollection.onSnapshot(snapshot => {
    users.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  })
  onUnmounted(close)
  return users
}
