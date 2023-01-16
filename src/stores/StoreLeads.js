import { defineStore } from 'pinia'
import { collection, onSnapshot, setDoc, doc, addDoc, deleteDoc, updateDoc } from "firebase/firestore";
import { db } from '@/js/firebase.js'
import { query, orderBy, limit } from "firebase/firestore";
import { useStoreAuth } from '@/stores/StoreAuth.js'

let leadsCollectionRef
let leadsCollectionQuery

let getLeadsSnapshot = null


export const useStoreLeads = defineStore('storeLeads', {
  state: () => {
    return {
        leads: [
        ]
    }
  },
  actions: {
    init() {
        const storeAuth = useStoreAuth()
        leadsCollectionRef = collection(db, "users", storeAuth.user.id, "leads")
        leadsCollectionQuery = query(leadsCollectionRef, orderBy("date", 'desc'));
        this.getLeads()
    },
    async getLeads() {

        if (getLeadsSnapshot) {
            getLeadsSnapshot() // Unsubscribe device from any active listeners (Other logged in users)
        }

        getLeadsSnapshot = onSnapshot(leadsCollectionQuery, (querySnapshot) => {
        let leads = []
        querySnapshot.forEach((doc) => {
            let lead = {
                id: doc.id,
                firstName: doc.data().firstName,
                lastName: doc.data().lastName,
                date: doc.data().date
            }
            leads.push(lead)
        })
        this.leads = leads
    }, error => { console.log(error.message)
    })
    },
    clearLeads() {
        this.leads = {}
    },
    async addLead(newLead) {
        let date = new Date().getTime().toString()
console.log('trying to add new lead',newLead)
        await addDoc(leadsCollectionRef, {
            firstName: newLead.firstName,
            lastName: newLead.lastName,
            date: date
        });

    },
    async deleteLead(id) {
        // this.leads = this.leads.filter(lead => { return lead.id !== id })
        await deleteDoc(doc(leadsCollectionRef, id));
    },
    async updateLead(id, lead) {
        // let index = this.leads.findIndex(lead => {return lead.id === id})
        // this.leads[index].name = name
        console.log('lead to update',lead)
        await updateDoc(doc(leadsCollectionRef, id), {
            firstName: lead.firstName,
            lastName: lead.lastName,
            edited: 'true'
          });
        //   if the field dont exist it wont be added
    },
  },
  getters: {
    getLead: (state) => {
        return (id) => {
            return state.leads.filter(lead => { return lead.id === id })[0]
        }
    }
  }

})