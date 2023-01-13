import { defineStore } from 'pinia'
import { collection, onSnapshot, setDoc, doc, addDoc, deleteDoc, updateDoc } from "firebase/firestore";
import { db } from '@/js/firebase.js'
import { query, orderBy, limit } from "firebase/firestore";
import { useStoreAuth } from '@/stores/StoreAuth.js'

let quotesCollectionRef
let quotesCollectionQuery

let getQuotesSnapshot = null

export const useStoreQuotes = defineStore('storeQuotes', {
    state: () => {
        return {
            quotes: [
            ]
        }
    },
    // TODO: Done to here
  actions: {
    init() {
        const storeAuth = useStoreAuth()
        quotesCollectionRef = collection(db, "users", storeAuth.user.id, "quotes")
        quotesCollectionQuery = query(quotesCollectionRef, orderBy("date", 'desc'));
        this.getQuotes()
    },
    async getQuotes() {

        if (getQuotesSnapshot) {
            getQuotesSnapshot() // Unsubscribe device from any active listeners (Other logged in users)
        }

        getQuotesSnapshot = onSnapshot(quotesCollectionQuery, (querySnapshot) => {
        let quotes = []
        querySnapshot.forEach((doc) => {
            let quote = {
                id: doc.id,
                name: doc.data().name,
                date: doc.data().date
            }
            quotes.push(quote)
        })
        this.quotes = quotes
    }, error => { console.log(error.message)
    })
    },
    clearQuotes() {
        this.quotes = {}
    },
    async addQuote(newQuote) {
        let date = new Date().getTime().toString()

        await addDoc(quotesCollectionRef, {
            name: newQuote,
            date: date
        });

    },
    async deleteQuote(id) {
        await deleteDoc(doc(quotesCollectionRef, id));
    },
    async updateQuote(id, name) {
        console.log('name',name.value)
        await updateDoc(doc(quotesCollectionRef, id), {
            name: name.value,
            edited: 'true'
          });
        //   if the field dont exist it wont be added
    },
  },
  getters: {
    getQuote: (state) => {
        return (id) => {
            return state.quotes.filter(quote => { return quote.id === id })[0].name
        }
    }
  }

})