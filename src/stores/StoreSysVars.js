import { defineStore } from 'pinia'
import { collection, onSnapshot, setDoc, doc, addDoc, deleteDoc, updateDoc } from "firebase/firestore";
import { db } from '@/js/firebase.js'
import { query, orderBy, limit } from "firebase/firestore";
import { useStoreAuth } from '@/stores/StoreAuth.js'

let sysVarsCollectionRef
let sysVarsCollectionQuery

let getSysVarsSnapshot = null


export const useStoreSysVars = defineStore('storeSysVars', {
  state: () => {
    return {
        sysVars: [
        ]
    }
  },
  actions: {
    init() {
        const storeAuth = useStoreAuth()
        sysVarsCollectionRef = collection(db, "sysVars")
        sysVarsCollectionQuery = query(sysVarsCollectionRef);
        this.getSysVars()
    },
    async getSysVars() {

        if (getSysVarsSnapshot) {
            getSysVarsSnapshot() // Unsubscribe device from any active listeners (Other logged in users)
        }

        getSysVarsSnapshot = onSnapshot(sysVarsCollectionQuery, (querySnapshot) => {
        let sysVars = []
        console.log('sysvar snapshot')
        querySnapshot.forEach((doc) => {
            let sysVar = {
                id: doc.id,
                var: doc.data().var,
                val: doc.data().val,
                date: doc.data().date
            }
            sysVars.push(sysVar)
            console.log('sysvar push', sysVar)

        })
        this.sysVars = sysVars
    }, error => { console.log(error.message)
    })
    },
    clearSysVars() {
        this.sysVars = {}
    },
    async addSysVar(newSysVar) {
        let date = new Date().getTime().toString()
console.log('trying to add new sysVar', newSysVar)
        await addDoc(sysVarsCollectionRef, {
            var: newSysVar.var,
            val: newSysVar.val,
            date: date
        });

    },
    async deleteSysVar(id) {
        // this.sysVars = this.sysVars.filter(sysVar => { return sysVar.id !== id })
        await deleteDoc(doc(sysVarsCollectionRef, id));
    },
    async updateSysVar(id, sysVar) {
        // let index = this.sysVars.findIndex(sysVar => {return sysVar.id === id})
        // this.sysVars[index].name = name
        console.log('sysVar to update',sysVar)
        await updateDoc(doc(sysVarsCollectionRef, id), {
            var: sysVar.var,
            val: sysVar.val,
            edited: 'true'
          });
        //   if the field dont exist it wont be added
    },
  },
  getters: {
    getSysVar: (state) => {
        return (id) => {
            return state.sysVars.filter(sysVar => { return sysVar.id === id })[0]
        }
    },
    getSysVarByName: (state) => {
        return (varName) => {
            console.log('looking for ',varName)
            return state.sysVars.filter(sysVar => { return sysVar.var === varName })[0]
        }
    }
  }

})