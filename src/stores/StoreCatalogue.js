import { defineStore } from 'pinia'
import { collection, doc, setDoc, getDocs, query } from "firebase/firestore"
import { db } from '../js/firebase.js'


let catalogueCollectionRef
let catalogueCollectionQuery

// You can name the return value of `defineStore()` anything you want,
// but it's best to use the name of the store and surround it with `use`
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application
export const useStoreCatalogue = defineStore('storeCatalogue', {
  // other options...
    state: () => {
        return {
            items: []
        }
    },
    actions: {
        init() {
let x= "merchandising"
            catalogueCollectionRef = collection(db, `/catalogue`)

            catalogueCollectionQuery = query(catalogueCollectionRef);

            let items  = this.getCatalogue()
        },
        async getCatalogue() {
            this.items = []
            catalogueCollectionRef = collection(db, `/catalogue`)
            catalogueCollectionQuery = query(catalogueCollectionRef);
            const querySnapshot = await getDocs(catalogueCollectionRef);

            querySnapshot.forEach((doc) => {
              // doc.data() is never undefined for query doc snapshots
              console.log("doc", doc.data(), catalogueCollectionRef);
              let catalogueOption = {
                  id: doc.id,
                  data: doc.data()
                }
                this.items.push(catalogueOption)
            });


            console.log('items',this.items); // TODO: THIS IS IT!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            // console.log('items[0]',this.items[0].data); // TODO: THIS IS IT!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            //TODO WRITE A FUNCTION TO FIND [X] IN ITEMS WITH MERC / CARDMACH AS ID
        },
        getCatalogueOptions(option) {

            var index = this.items.map(function (opt) { return opt.id; }).indexOf(option);
            // console.log(`xxxxxxxxxxx options for ${option}`, this.items[index].data.description)
            console.log(`xxxxxxxxxxx options for ${option}`, this.items[index])
// TODO: NEARLY THERE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        }
    }



})