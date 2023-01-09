import { defineStore } from 'pinia'

export const useStoreLeads = defineStore('storeLeads', {
  state: () => {
    return {
        leads: [
            {
                id: 'id1',
                name: 'Bob'
            },
            {
                id: 'id2',
                name: 'Jon'
            },
            {
                id: 'id3',
                name: 'Rik'
            }
        ]
    }
  },
  actions: {
    addLead(newLead) {
        let id = new Date().getTime().toString()
        let lead = {
            id: id,
            name: newLead
        }

        this.leads.unshift(lead)
    },
    deleteLead(id) {
        this.leads = this.leads.filter(lead => { return lead.id !== id })
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