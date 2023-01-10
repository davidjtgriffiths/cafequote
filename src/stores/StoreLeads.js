import { defineStore } from 'pinia'
import { collection, onSnapshot, setDoc, doc, deleteDoc, updateDoc } from "firebase/firestore";
import { db } from '@/js/firebase.js'

const leadsCollectionRef = collection(db, "leads")

export const useStoreLeads = defineStore('storeLeads', {
  state: () => {
    return {
        leads: [
        ]
    }
  },
  actions: {
    async getLeads() {
    onSnapshot(leadsCollectionRef, (querySnapshot) => {
        let leads = []
        querySnapshot.forEach((doc) => {
            let lead = {
                id: doc.id,
                name: doc.data().name
            }
            leads.push(lead)
        })
        this.leads = leads
    })

    },
    async addLead(newLead) {
        let id = new Date().getTime().toString()
        await setDoc(doc(leadsCollectionRef, id), {
            name: newLead
          });

    },
    async deleteLead(id) {
        // this.leads = this.leads.filter(lead => { return lead.id !== id })
        await deleteDoc(doc(leadsCollectionRef, id));
    },
    async updateLead(id, name) {
        // let index = this.leads.findIndex(lead => {return lead.id === id})
        // this.leads[index].name = name
        console.log('name',name.value)
        await updateDoc(doc(leadsCollectionRef, id), {
            name: name.value,
            edited: 'true'
          });
    },
  },
  getters: {
    getLead: (state) => {
        return (id) => {
            return state.leads.filter(lead => { return lead.id === id })[0].name
        }
    }
  }

})