import { defineStore } from 'pinia'
import { collection, onSnapshot, setDoc, doc, addDoc, deleteDoc, updateDoc, FieldPath } from "firebase/firestore";
import { db } from '@/js/firebase.js'
import { query, orderBy, limit } from "firebase/firestore";
import { useStoreAuth } from '@/stores/StoreAuth.js'

let itemOptionsCollectionRef
let itemOptionsCollectionQuery

let getItemOptionsSnapshot = null


export const useStoreItemOptions = defineStore('storeItemOptions', {
  state: () => {
    return {
        itemOptions: [
        ]
    }
  },
  actions: {
    init() {
        const storeAuth = useStoreAuth()
        itemOptionsCollectionRef = collection(db, "itemOptions")
        itemOptionsCollectionQuery = query(itemOptionsCollectionRef);
        this.getItemOptions()
    },
    async getItemOptions() {

        if (getItemOptionsSnapshot) {
            getItemOptionsSnapshot() // Unsubscribe device from any active listeners (Other logged in users)
        }

        getItemOptionsSnapshot = onSnapshot(itemOptionsCollectionQuery, (querySnapshot) => {
        let itemOptions = []
        console.log('itemoption snapshot')
        querySnapshot.forEach((doc) => {
            let itemOption = {
                id: doc.id,
                parent: doc.data().parent,
                child: doc.data().child,
                item: doc.data().item,
                option: doc.data().option,
                rrp: doc.data().rrp,
                wsp: doc.data().wsp,
                longDescription: doc.data().longDescription,
                date: doc.data().date
            }
            itemOptions.push(itemOption)
            console.log('itemoption push', itemOption)

        })
        this.itemOptions = itemOptions
    }, error => { console.log(error.message)
    })
    },
    clearItemOptions() {
        this.itemOptions = {}
    },
    async addItemOption(newItemOption) {
        let date = new Date().getTime().toString()
console.log('trying to add new itemOption', newItemOption)
        await addDoc(itemOptionsCollectionRef, {
            parent: newItemOption.parent,
            child: newItemOption.child,
            item: newItemOption.item,
            option: newItemOption.option,
            rrp: newItemOption.rrp,
            wsp: newItemOption.wsp,
            longDescription: newItemOption.longDescription,
            date: date
        });

    },
    async deleteItemOption(id) {
        // this.itemOptions = this.itemOptions.filter(itemOption => { return itemOption.id !== id })
        await deleteDoc(doc(itemOptionsCollectionRef, id));
    },
    async updateItemOption(id, itemOption) {
        // let index = this.itemOptions.findIndex(itemOption => {return itemOption.id === id})
        // this.itemOptions[index].name = name
        console.log('itemOption to update',itemOption)
        await updateDoc(doc(itemOptionsCollectionRef, id), {
            parent: itemOption.parent,
            child: itemOption.child,
            item: itemOption.item,
            option: itemOption.option,
            rrp: itemOption.rrp,
            wsp: itemOption.wsp,
            longDescription: itemOption.longDescription,
            edited: 'true'
          });
        //   if the field dont exist it wont be added
    },
  },
  getters: {
    getItemOption: (state) => {
        return (id) => {
            return state.itemOptions.filter(itemOption => { return itemOption.id === id })[0]
        }
    },
    getItemOptionsByItem: (state) => {
        return (item) => {
            console.log('looking for item ',item)
            let options = []
            let list = state.itemOptions.filter(itemOption => { return itemOption.item === item })
            for (item in list) {
                // console.log('loop ', item, list[item])
                options.push(list[item]['option'])
            }
            return options
        }
    },
    getItemOptionsByParentAndItem: (state) => {
        return (parent, item) => {
            console.log('looking for item ' + parent +' '+ item)
            let options = []
            let list = state.itemOptions.filter(itemOption => { return itemOption.parent === parent && itemOption.item === item })
            for (item in list) {
                // console.log('loop ', item, list[item])
                options.push(list[item]['option'])
            }
            return options
        }
    },
    getItemOptionsByChildAndItem: (state) => {
        return (child, item) => {
            // console.log('looking for item ' + child +' '+ item)
            let options = []
            let list = state.itemOptions.filter(itemOption => { return itemOption.child === child && itemOption.item === item })
            for (item in list) {
                // console.log('loop ', item, list[item])
                options.push(list[item]['option'])
            }
            return options
        }
    },
    getItemFieldByItemAndOption: (state) => {
        return (field, item, option) => {
            // console.log('looking for field, item, option ', field, item, option)


            let value = state.itemOptions.filter(itemOption => { return itemOption.item === item && itemOption.option === option })
                // for (option in list) {
                //     console.log('loop ', item, list[item])
                //     options.push(list[item]['option'])
                // }
                // console.log(' xxxxxxxxxxxxxxxxxxxxxxxxx value, field', value[0], field)
                // console.log(' xxxxxxxxxxxxxxxxxxxxxxxxx value', value[0][field])
            return value[0][field]
        }
    },
    getItemFieldByParentItemAndOption: (state) => {
        return (field, parent, item, option) => {
            // console.log('looking for field, item, option ', field, item, option)


            let value = state.itemOptions.filter(itemOption => { return itemOption.parent === parent && itemOption.item === item && itemOption.option === option })
                // for (option in list) {
                //     console.log('loop ', item, list[item])
                //     options.push(list[item]['option'])
                // }
                // console.log(' xxxxxxxxxxxxxxxxxxxxxxxxx value', value[0][field])
            return value[0][field]
        }
    },
    getItemFieldByChildItemAndOption: (state) => {
        return (field, child, item, option) => {
            // console.log('looking for field, item, option ', field, item, option)


            let value = state.itemOptions.filter(itemOption => { return itemOption.child === child && itemOption.item === item && itemOption.option === option })
                // for (option in list) {
                //     console.log('loop ', item, list[item])
                //     options.push(list[item]['option'])
                // }
                // console.log(' xxxxxxxxxxxxxxxxxxxxxxxxx value', value[0][field])
            return value[0][field]
        }
    }
  }

})