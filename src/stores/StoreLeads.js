import { defineStore } from 'pinia'
import { collection, onSnapshot, setDoc, doc, addDoc, deleteDoc, updateDoc } from "firebase/firestore";
import { db } from '@/js/firebase.js'
import { query, orderBy, limit } from "firebase/firestore";

const leadsCollectionRef = collection(db, "leads")
const leadsCollectionQuery = query(leadsCollectionRef, orderBy("date", 'desc'));


export const useStoreLeads = defineStore('storeLeads', {
  state: () => {
    return {
        leads: [
        ]
    }
  },
  actions: {
    async getLeads() {
    onSnapshot(leadsCollectionQuery, (querySnapshot) => {
        let leads = []
        querySnapshot.forEach((doc) => {
            let lead = {
                id: doc.id,
                name: doc.data().name,
                date: doc.data().date
            }
            leads.push(lead)
        })
        this.leads = leads
    })

    },
    async addLead(newLead) {
        let date = new Date().getTime().toString()

        await addDoc(leadsCollectionRef, {
            name: newLead,
            date: date
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
        //   if the field dont exist it wont be added
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