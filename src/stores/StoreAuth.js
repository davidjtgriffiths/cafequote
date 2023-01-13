import { defineStore } from 'pinia'
import { auth } from '@/js/firebase'
import { getAuth, signOut, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { useStoreLeads } from '@/stores/StoreLeads.js'




export const useStoreAuth = defineStore('storeAuth', {
  state: () => {
    return {
        user: {

        }
    }
  },
  actions: {
    init() {
        const storeLeads = useStoreLeads()

        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/firebase.User
              const uid = user.uid;
              console.log(user)
              this.user.id = user.uid
              this.user.email = user.email
              this.router.push('/')
              storeLeads.init()
              // ...
            } else {
              // User is signed out
              // ...
              this.user = {}
              this.router.replace('/auth')
              storeLeads.clearLeads()
            }
          });
    },
    loginUser(credentials) {
        signInWithEmailAndPassword(auth, credentials.email, credentials.password)
    .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user)
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    });
    },
    logoutUser(credentials) {
        signOut(auth).then(() => {
            // Sign-out successful.
            console.log('out')
          }).catch((error) => {
            // An error happened.
          });
    },
  },


})